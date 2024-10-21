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
        SMTP_EMAIL: string;
        SMTP_PASSOWORD: string;
        NODE_ENV: string;
    }
}