'use client';

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Header } from "@/components/auth/Header";
import { Social } from "@/components/auth/Social";
import { BackButton } from "../BackButton";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

const CardWrapper = ({ 
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="dark:bg-noisefy-950 lg:rounded-l-none w-full lg:min-w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    );
};

export { CardWrapper };