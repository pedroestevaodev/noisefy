import { Role } from "@prisma/client";
import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: DefaultUser & {
            role: Role;
            status: string;
        };
    }
    interface User extends DefaultUser {
        role: Role;
        status: string;
    }
}