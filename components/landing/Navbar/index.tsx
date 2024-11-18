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
        <header className={`flex items-center justify-around py-3 top-0 gap-x-96 bg-noisefy-500`}>
            <a href="http://localhost:3000/"><img src="/imgs/logo-white.png" alt="Logo Noisefy" className="w-14 h-auto"/></a>
            <div>
                {session ? (
                <Link
                    href={"/dashboard"}
                    className="hidden md:block"
                >
                    <Button
                            className="bg-white w-40 h-10 rounded-3xl shadow-xl transition-transform transform hover:bg-white duration-300 hover:scale-105 active:scale-95"
                            variant="default"
                            // size="lg"
                            rounded="full"
                        >
                            <span className= "text-noisefy-900 font-medium text-base text-center">Dashboard</span>
                        </Button>
                    </Link>
                ) : status === "unauthenticated" ? (
                    <Link 
                        href={"/login"}
                        className="hidden md:block"
                    >
                        <Button
                            className="bg-white w-40 h-10 rounded-3xl shadow-xl transition-transform transform hover:bg-white duration-300 hover:scale-105 active:scale-95"
                            variant="default"
                            // size="sm"
                            rounded="full"
                        >
                            <span className= "text-noisefy-900 font-medium text-base text-center">Logar</span>
                            <Icons.arrowRight className="size-4 text-noisefy-900" />
                        </Button>
                    </Link>
                ) : (
                    <Skeleton className="hidden h-9 w-28 rounded-full lg:flex" />
                )}
            </div>
        </header>
    );
};

export default Navbar;