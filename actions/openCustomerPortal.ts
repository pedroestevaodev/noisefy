'use server';

import { currentUser } from "@/lib/session";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { responseAction } from "@/types/nextjs";
import { redirect } from "next/navigation";

const billingPage = absoluteUrl("/dashboard/billing");

export const openCustomerPortal = async (userStripeId: string): Promise<responseAction> => {
    let redirectUrl: string = "";

    try {
        const user = await currentUser();

        if (!user || !user.name) {
            throw new Error("Unauthorized!");
        }

        if (userStripeId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userStripeId,
                return_url: billingPage,
            });

            redirectUrl = stripeSession.url as string;
        }
    } catch (error) {
        throw new Error("Failed to generate user stripe session");
    }

    redirect(redirectUrl)
};