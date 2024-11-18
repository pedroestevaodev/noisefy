import { prisma } from "@/lib/prisma";
import { currentUser } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
    try {
        const user = await currentUser();
        const userId = user?.id;

        if (!userId) {
            return NextResponse.json({ error: "User is not authenticated.", status: 401 });
        }

        const now = new Date();
        const resetAt = new Date(now);
        resetAt.setHours(Number(process.env.REMAINING_RESET_HOUR), 0, 0, 0);

        let userRateLimit = await prisma.rateLimit.findUnique({ where: { userId } });

        if (!userRateLimit) {
            userRateLimit = await prisma.rateLimit.create({
                data: {
                    userId,
                    count: 0,
                    resetAt,
                },
            });
        } else if (now > userRateLimit.resetAt) {
            userRateLimit = await prisma.rateLimit.update({
                where: { userId },
                data: {
                    count: 0,
                    resetAt,
                },
            });
        }

        const remainingGenerations = Math.max(0, Number(process.env.REMAINING_RATE_LIMIT) - userRateLimit.count);
        const diff = userRateLimit.resetAt.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return NextResponse.json(
            {
                remainingGenerations,
                resetDate: userRateLimit.resetAt,
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