namespace NodeJS {
    export interface ProcessEnv {
        DATABASE_URL: string;
        AUTH_SECRET: string;
        AUTH_RESEND_KEY: string;
        APPLICATION_URL: string;
        CLOUDINARY_CLOUD_NAME: string;
        CLOUDINARY_API_KEY: string;
        CLOUDINARY_API_SECRET: string;
        NODE_ENV: string;
    }
}