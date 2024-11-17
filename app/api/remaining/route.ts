import { prisma } from "@/lib/prisma";
import { auth } from "@/services/auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const session = await auth();
    
        const userId = session?.user?.id;
        const now = new Date();
    
        const userRateLimit = await prisma.rateLimit.findUnique({
            where: { userId },
        });
    
        if (!userRateLimit) {
            if (userId) {
                await prisma.rateLimit.create({
                    data: {
                        userId,
                        count: 0,
                        resetAt: new Date(now.setHours(process.env.REMAINING_RESET_HOUR, 0, 0, 0)),
                    },
                });
            } else {
                return NextResponse.json({ error: "User ID is undefined", status: 400 });
            }
        }
    
        if (now > userRateLimit!.resetAt) {
            await prisma.rateLimit.update({
                where: { userId },
                data: {
                    count: 0,
                    resetAt: new Date(now.setHours(process.env.REMAINING_RESET_HOUR, 0, 0, 0)),
                },
            });
    
            userRateLimit!.count = 0;
        }
    
        const remainingGenerations = process.env.REMAINING_RATE_LIMIT - userRateLimit!.count;
    
        const resetDate = userRateLimit!.resetAt;
        const diff = resetDate.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
    
        return NextResponse.json({
            remainingGenerations,
            resetDate,
            hours,
            minutes,
        }, { status: 200 });
    } catch (error) {
        console.error("Error while fetching remaining generations", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};