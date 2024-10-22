import { prisma } from "@/lib/prisma"

export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await prisma.verificationToken.findFirst({
            where: { token },
        });

        return verificationToken;
    } catch (error) {
        return null;
    } finally {
        await prisma.$disconnect();
    }
};

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await prisma.verificationToken.findFirst({
            where: { identifier: email },
        });

        return verificationToken;
    } catch (error) {
        return null;
    } finally {
        await prisma.$disconnect();
    }
};