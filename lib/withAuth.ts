import { auth } from "@/services/auth";
import { NextServerParams } from "@/types/nextjs";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function withAuth(handler: (req: NextRequest, params?: NextServerParams) => Promise<NextResponse>) {
    return async (req: NextRequest, { params }: { params?: NextServerParams }): Promise<NextResponse> => {
        const session = await auth();

        if (!session) {
            notFound();
        }

        return handler(req, params);
    };
};