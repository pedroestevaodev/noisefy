import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRAPI_API_KEY, {
    apiVersion: "2024-09-30.acacia",
    typescript: true,
});