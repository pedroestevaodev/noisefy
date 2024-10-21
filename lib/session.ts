'use server';

import { auth } from "@/services/auth";
import { cache } from "react";

export const currentUser = cache(async () => {
    const session = await auth();

    if (!session) {
        return undefined;
    }

    return session.user;
});

export const currentRole = cache(async () => {
    const session = await auth();

    if (!session) {
        return undefined;
    }

    return session.user.role;
});