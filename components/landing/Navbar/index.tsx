'use client';

import Icons from "@/components/common/Icons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/useScroll";
import { LandingNavbarProps } from "@/types/components";
import { useSession } from "next-auth/react";
import { DefaultTemplateString } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";

const Navbar = ({ scroll = false, large = false }: LandingNavbarProps) => {
    const scrolled = useScroll(50);
    const { data: session, status } = useSession();

    return (
        <header
            className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all 
                ${scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
            }`}
        >
            <MaxWidthWrapper className="flex h-14 items-center justify-between py-4">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-1.5">
                        <Icons.logo />
                        <span className="font-urban text-xl font-bold">
                            {(siteConfig.title as DefaultTemplateString).default ?? ''}
                        </span>
                    </Link>
                </div>

                <div className="flex items-center space-x-3">
                    {session ? (
                        <Link
                            href={session.user.role === "ADMIN" ? "/admin" : "/dashboard"}
                            className="hidden md:block"
                        >
                            <Button
                                className="gap-2 px-5"
                                variant="default"
                                // size="lg"
                                rounded="full"
                            >
                                <span>Dashboard</span>
                            </Button>
                        </Link>
                    ) : status === "unauthenticated" ? (
                        <Link 
                            href={`/login`}
                            className="hidden md:block"
                        >
                            <Button
                                className="flex gap-2 px-5"
                                variant="default"
                                // size="sm"
                                rounded="full"
                            >
                                <span>Sign In</span>
                                <Icons.arrowRight className="size-4" />
                            </Button>
                        </Link>
                    ) : (
                        <Skeleton className="hidden h-9 w-28 rounded-full lg:flex" />
                    )}
                </div>
            </MaxWidthWrapper>
        </header>
    );
};

export default Navbar;