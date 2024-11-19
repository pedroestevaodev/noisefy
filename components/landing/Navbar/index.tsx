'use client';

import Link from "next/link";
import { Icons } from "@/components/common/Icons";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { LandingNavbarProps } from "@/types/components";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { siteMetadata } from "@/config/site";

const Navbar = ({ scroll = false, large = false }: LandingNavbarProps) => {
    const scrolled = useScroll(50);
    const { data: session, status } = useSession();

    return (
        <header
            className={cn(
                "sticky top-0 flex justify-center bg-noisefy-500 w-full transition-all duration-200 min-h-16 z-40",
                scroll ? (scrolled ? "bg-noisefy-500/90 backdrop-blur-xl" : "bg-noisefy-500 backdrop-blur-none") : "bg-noisefy-500/90 backdrop-blur-xl"
            )}
        >
            <MaxWidthWrapper className="flex items-center justify-between h-auto px-6 py-4">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src={`/imgs/camera-noisefy-white.png`}
                            className=""
                            width={35}
                            height={35}
                            alt="Logo Noisefy"
                        />
                        <span className="text-white text-xl font-bold">{siteMetadata.applicationName}</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-3">
                    {session ? (
                        <Link
                            href={"/dashboard"}
                            className="hidden md:block"
                        >
                            <Button
                                className="bg-white hover:bg-white text-noisefy-900 text-sm font-semibold hover:scale-105 gap-2 px-5 transition-all"
                                variant="default"
                                size="sm"
                                rounded="full"
                            >
                                <span>Dashboard</span>
                            </Button>
                        </Link>
                    ) : status === "unauthenticated" ? (
                        <Link
                            href={"/login"}
                            className="hidden md:block"
                        >
                            <Button
                                className="bg-white hover:bg-white text-noisefy-900 text-sm font-semibold hover:scale-105 gap-2 px-5 transition-all"
                                variant="default"
                                size="sm"
                                rounded="full"
                            >
                                <span>Logar</span>
                                <Icons.arrowRight className="size-4" />
                            </Button>
                        </Link>
                    ) : (
                        <Skeleton className="hidden bg-[#ffffff45] h-8 w-[120px] rounded-full lg:flex" />
                    )}
                </div>
            </MaxWidthWrapper>
        </header>
    );
};

export { Navbar };