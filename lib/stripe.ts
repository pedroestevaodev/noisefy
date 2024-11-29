import Stripe from "stripe";

export const stripeConfig = {
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.STRIPE_SECRET_KEY,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        proMonthlyPlanId: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
        proYearlyPlanId: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
        businessMonthlyPlanId: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
        businessYearlyPlanId: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
};

if (!stripeConfig.stripe.secretKey) {
    throw new Error("Stripe secret key is not defined");
}

export const stripe = new Stripe(stripeConfig.stripe.secretKey, {
    apiVersion: "2024-11-20.acacia",
    httpClient: Stripe.createFetchHttpClient(),
    typescript: true,
});