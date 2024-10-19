'use client';

import { ProvidersProps } from "@/types/providers";
import * as React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

const Providers = ({ children }: ProvidersProps) => {
    return (
        <TooltipProvider delayDuration={0}>
            {children}
        </TooltipProvider>
    );
};

export default Providers;