import * as z from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Informe um email",
    }),
    password: z.string().min(1, {
        message: "Informe uma senha",
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Informe um email",
    }),
    password: z.string().min(6, {
        message: "Precisa ter no mínimo 6 caracteres",
    }),
    name: z.string().min(1, {
        message: "Informe um nome",
    })
});

export const ForgotPasswordSchema = z.object({
    email: z.string().email({
        message: "Informe um email",
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Precisa ter no mínimo 6 caracteres",
    }),
});

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    isTwoFactorEnabled: z.optional(z.boolean()),
}).refine((data) => {
    if (data.password && !data.newPassword) {
        return false;
    }

    return true;
}, {
    message: "Informe a nova senha",
    path: ["newPassword"],
}).refine((data) => {
    if (data.newPassword && !data.password) {
        return false;
    }

    return true;
}, {
    message: "Informe a senha",
    path: ["password"],
});

export const NewsletterSchema = z.object({
    email: z.string().email({
        message: "Informe um email válido",
    }),
});