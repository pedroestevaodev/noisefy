import "@/lib/dayjsConfig";
import dayjs from "dayjs";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
    try {
        const user = await currentUser();
        const userId = user?.id;

        if (!userId) {
            return NextResponse.json({ error: "User is not authenticated.", status: 401 });
        }

        const userSubscription = await prisma.user.findUnique({
            where: { id: userId },
            select: { stripePriceId: true },
        });

        let dailyLimit = 10;
        const priceId = userSubscription?.stripePriceId;

        if (priceId === process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID || priceId === process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID) {
            dailyLimit = 500;
        } else if (priceId === process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID || priceId === process.env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID) {
            dailyLimit = 10000;
        }

        const now = dayjs();
        const resetHour = Number(process.env.REMAINING_RESET_HOUR) || 19;
        let resetAt = now.hour(resetHour).minute(0).second(0).millisecond(0);

        if (now.isAfter(resetAt)) {
            resetAt = resetAt.add(1, "day");
        }

        let userRateLimit = await prisma.rateLimit.findUnique({ where: { userId } });

        if (!userRateLimit) {
            userRateLimit = await prisma.rateLimit.create({
                data: {
                    userId,
                    count: 0,
                    resetAt: resetAt.toDate(),
                },
            });
        } else if (now.toDate() > userRateLimit.resetAt) {
            userRateLimit = await prisma.rateLimit.update({
                where: { userId },
                data: {
                    count: 0,
                    resetAt: resetAt.toDate(),
                },
            });
        }

        const remainingGenerations = Math.max(0, dailyLimit - userRateLimit.count);
        const diff = resetAt.diff(now, "minute");
        const hours = Math.floor(diff / 60);
        const minutes = diff % 60;

        return NextResponse.json(
            {
                remainingGenerations,
                resetDate: resetAt.toDate(),
                hours,
                minutes,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error while fetching remaining generations:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
};