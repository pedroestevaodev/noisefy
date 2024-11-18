import * as React from "react";
import { ProvidersProps } from "@/types/providers";
import { SessionProvider } from "next-auth/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/services/auth";
import {NextUIProvider} from "@nextui-org/system";
import StudioProvider from "@/components/Providers/StudioProvider";

const Providers = async ({ children }: ProvidersProps) => {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <StudioProvider>
                    <NextUIProvider>
                        <TooltipProvider delayDuration={0}>
                            {children}
                            <Toaster richColors closeButton />
                        </TooltipProvider>
                    </NextUIProvider>
                </StudioProvider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export default Providers;