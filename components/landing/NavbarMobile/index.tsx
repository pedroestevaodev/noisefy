'use client';

import { Icons } from "@/components/common/Icons";
import { ModeToggle } from "@/components/common/ModeToggle";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarMobile = () => {
    const { data: session } = useSession();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return (
        <>
            <Button
                className={cn(
                    "fixed right-3 top-3 z-50 h-auto [&_svg]:size-6 bg-transparent hover:bg-transparent focus-visible:bg-transparent text-white rounded-full shadow-none p-2 transition-colors duration-200 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden",
                    open && "hover:bg-muted active:bg-muted",
                )}
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <X />
                ) : (
                    <Menu />
                )}
            </Button>

            <nav
                className={cn(
                    "fixed inset-0 z-20 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden",
                    open && "block",
                )}
            >
                <ul className="grid">
                    {session ? (
                        <>
                            <li className="py-3 border-b-1 border-b-muted">
                                <Link
                                    href="/dashboard"
                                    onClick={() => setOpen(false)}
                                    className="flex w-full font-medium capitalize"
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="py-3 border-b-1 border-b-muted">
                                <Link
                                    href="/login"
                                    onClick={() => setOpen(false)}
                                    className="flex w-full font-medium capitalize"
                                >
                                    Login
                                </Link>
                            </li>

                            <li className="py-3 border-b-1 border-b-muted">
                                <Link
                                    href="/register"
                                    onClick={() => setOpen(false)}
                                    className="flex w-full font-medium capitalize"
                                >
                                    Sign up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                <div className="mt-5 flex items-center justify-end space-x-4">
                    <Link href={socialLinks.github} target="_blank" rel="noreferrer">
                        <Icons.gitHub className="size-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <ModeToggle className="[&_svg]:size-5" />
                </div>
            </nav>
        </>
    );
};

export { NavbarMobile };