// 'use server';

import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { SendEmail, TwoFactorAuthenticationMailTemplate, WelcomeMailTemplate } from "@/types/mail";
import { mailWelcomeTemplate } from "@/templates/mail-welcome";
import { mail2FATemplate } from "@/templates/mail-2fa";
import { mailResetPasswordTemplate } from "@/templates/mail-reset-password";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const compileWelcomeTemplate = ({ name, link }: WelcomeMailTemplate) => {
    const template = handlebars.compile(mailWelcomeTemplate);
    const htmlBody = template({ name, link });
    return htmlBody;
};

export const compileResetPasswordTemplate = ({ name, link }: WelcomeMailTemplate) => {
    const template = handlebars.compile(mailResetPasswordTemplate);
    const htmlBody = template({ name, link });
    return htmlBody;
};

export const compile2FATemplate = ({ name, email, code }: TwoFactorAuthenticationMailTemplate) => {
    const template = handlebars.compile(mail2FATemplate);
    const htmlBody = template({ name, email, code });
    return htmlBody;
};

export const sendPasswordResetEmail = async ({ name, email, token }: SendEmail) => {
    const resetLink = `${domain}/reset-password?token=${token}`;

    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        throw new Error("Faltando credenciais de e-mail SMTP");
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });

    try {
        const testResult = await transport.verify();
        console.log("Email service is ready to take our messages", testResult);
    } catch (error) {
        console.error("Error verifying email service", error);
        return;
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to: email,
            subject: 'Recuperação de senha - NoiseFy',
            html: compileResetPasswordTemplate({ name, link: resetLink }),
        });

        console.log("Email sent successfully", sendResult);
    } catch (error) {
        console.error("Error sending email", error);
    };
};

export const sendVerificationEmail = async ({ name, email, token }: SendEmail) => {
    const confirmLink = `${domain}/verify-email?token=${token}`;

    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        throw new Error("Faltando credenciais de e-mail SMTP");
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });

    try {
        const testResult = await transport.verify();
        console.log("Email service is ready to take our messages", testResult);
    } catch (error) {
        console.error("Error verifying email service", error);
        return;
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to: email,
            subject: 'Verificação de conta - NoiseFy',
            html: compileWelcomeTemplate({ name, link: confirmLink }),
        });

        console.log("Email sent successfully", sendResult);
    } catch (error) {
        console.error("Error sending email", error);
    };
};

export const sendTwoFactorEmail = async ({ name, email, token }: SendEmail) => {
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        throw new Error("Faltando credenciais de e-mail SMTP");
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });

    try {
        const testResult = await transport.verify();
        console.log("Email service is ready to take our messages", testResult);
    } catch (error) {
        console.error("Error verifying email service", error);
        return;
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to: email,
            subject: 'Autenticação 2FA - NoiseFy',
            html: compile2FATemplate({ name, email, code: token }),
        });

        console.log("Email sent successfully", sendResult);
    } catch (error) {
        console.error("Error sending email", error);
    };
};