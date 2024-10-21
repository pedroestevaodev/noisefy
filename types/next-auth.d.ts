import { User } from "next-auth";
import { UserRole } from "@prisma/client";
import { JWT } from "next-auth/jwt";

export type ExtendedUser = User & {
    role: UserRole;
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
};

declare module "next-auth/jwt" {
    interface JWT {
        role: UserRole;
        isTwoFactorEnabled: boolean;
        isOAuth: boolean;
    };
};

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    };
};