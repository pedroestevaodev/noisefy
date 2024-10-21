export type SendMail = {
    to: string;
    name: string;
    subject: string;
    body: string;
};

export type WelcomeMailTemplate = {
    name: string;
    link: string;
};

export type TwoFactorAuthenticationMailTemplate = {
    name: string;
    email: string;
    code: string;
};

export type SendEmail = {
    name: string;
    email: string;
    token: string;
};