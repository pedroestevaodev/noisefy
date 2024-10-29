'use server';

import { signOut } from "@/services/auth";

export const logout = async (callbackUrl?: string) => {
    await signOut({
        redirect: true,
        redirectTo: callbackUrl,
    });
};