namespace NodeJS {
    export interface ProcessEnv {
        DATABASE_URL: string;
        DIRECT_DATABASE_URL: string;
        AUTH_SECRET: string;
        AUTH_URL: string;
        APPLICATION_URL: string;
        NEXT_PUBLIC_APP_URL: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        CLOUDINARY_CLOUD_NAME: string;
        CLOUDINARY_API_KEY: string;
        CLOUDINARY_API_SECRET: string;
        STRIPE_PUBLISHABLE_KEY: string;
        STRIPE_SECRET_KEY: string;
        STRIPE_WEBHOOK_SECRET: string;
        STRIPE_PRO_MONTHLY_PLAN_ID: string;
        STRIPE_PRO_YEARLY_PLAN_ID: string;
        STRIPE_BUSINESS_MONTHLY_PLAN_ID: string;
        STRIPE_BUSINESS_YEARLY_PLAN_ID: string;
        SMTP_EMAIL: string;
        SMTP_PASSOWORD: string;
        REPLICATE_API_TOKEN: string;
        REMAINING_RATE_LIMIT: number;
        REMAINING_RESET_HOUR: number;
        NODE_ENV: string;
    }
}