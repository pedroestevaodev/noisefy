import { uploadCloudinary } from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const POST = async (req: NextRequest) => {
    try {
        const user = await currentUser();
        const userId = user?.id;

        if (!userId) {
            return NextResponse.json({ error: "User is not authenticated.", status: 401 });
        }

        const now = new Date();
        const userRateLimit = await prisma.rateLimit.findUnique({ where: { userId } });

        if (!userRateLimit) {
            await prisma.rateLimit.create({
                data: {
                    userId,
                    count: 1,
                    resetAt: new Date(now.getTime() + (Number(process.env.REMAINING_RESET_HOUR) ?? 19)),
                },
            });
        } else {
            if (now > userRateLimit.resetAt) {
                await prisma.rateLimit.update({
                    where: { userId },
                    data: {
                        count: 1,
                        resetAt: new Date(now.getTime() + (Number(process.env.REMAINING_RESET_HOUR) ?? 19)),
                    },
                });
            } else if (userRateLimit!.count >= (Number(process.env.REMAINING_RATE_LIMIT) ?? 2)) {
                const diff = userRateLimit.resetAt.getTime() - now.getTime();
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor(diff / (1000 * 60)) % 60;

                return NextResponse.json({ error: `Your generations will renew in ${hours} hours and ${minutes} minutes.`, status: 429 });
            } else {
                await prisma.rateLimit.update({
                    where: { userId },
                    data: {
                        count: userRateLimit.count + 1,
                    },
                });
            }
        }

        const { imageUrl } = await req.json();
        if (!imageUrl) {
            return NextResponse.json({ error: "Image URL is required.", status: 400 });
        }

        const startResponse = await fetch("https://api.replicate.com/v1/predictions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
            },
            body: JSON.stringify({
                version: "0fbacf7afc6c144e5be9767cff80f25aff23e52b0708f17e20f9879b2f21516c",
                input: {
                    img: imageUrl,
                },
            }),
        });

        if (!startResponse.ok) {
            return NextResponse.json({ error: "Failed to initiate image generation.", status: startResponse.status });
        }

        const startResponseData = await startResponse.json();
        const endpointUrl = startResponseData.urls.get;

        let restoredImage: string | null = null;
        while (!restoredImage) {
            console.log("Polling for result...");

            const finalResponse = await fetch(endpointUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token " + process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
                },
            });

            const jsonFinalResponse = await finalResponse.json();

            if (jsonFinalResponse.status === "succeeded") {
                restoredImage = jsonFinalResponse.output;
                if (restoredImage) {
                    uploadCloudinary(new File([await (await fetch(restoredImage)).blob()], "restored-image.png"), userId);
                } else {
                    throw new Error("Restored image URL is null.");
                }
            } else if (jsonFinalResponse.status === "failed") {
                return NextResponse.json({ error: "Image generation failed.", status: 500 });
            } else {
                await delay(1000);
            }
        }

        return NextResponse.json({ restoredImage, status: 200 });
    } catch (error) {
        console.error("Error in image generation:", error);
        return NextResponse.json({ error: "Internal server error.", status: 500 });
    }
};