'use server';

import { signIn } from "@/services/auth";
import { LoginCredentialsFormData } from "@/types/forms";

export const loginCredentials = async (data: LoginCredentialsFormData) => {
    try {
        const response = await signIn("credentials", data);
        return response;
    } catch {

    }
};