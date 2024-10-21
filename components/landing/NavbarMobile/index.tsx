'use client';

import Icons from "@/components/common/Icons";
import ModeToggle from "@/components/common/ModeToggle";
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
                    "fixed right-2 top-2.5 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
                    open && "hover:bg-muted active:bg-muted",
                )}
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <X className="size-5 text-muted-foreground" />
                ) : (
                    <Menu className="size-5 text-muted-foreground" />
                )}
            </Button>

            <nav
                className={cn(
                    "fixed inset-0 z-20 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden",
                    open && "block",
                )}
            >
                <ul className="grid divide-y divide-muted">
                    {session ? (
                        <>
                            {session.user.role === "ADMIN" ? (
                                <li className="py-3">
                                    <Link
                                        href="/admin"
                                        onClick={() => setOpen(false)}
                                        className="flex w-full font-medium capitalize"
                                    >
                                        Admin
                                    </Link>
                                </li>
                            ) : null}

                            <li className="py-3">
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
                            <li className="py-3">
                                <Link
                                    href="/login"
                                    onClick={() => setOpen(false)}
                                    className="flex w-full font-medium capitalize"
                                >
                                    Login
                                </Link>
                            </li>

                            <li className="py-3">
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
                        <Icons.gitHub className="size-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <ModeToggle />
                </div>
            </nav>
        </>
    );
};

export default NavbarMobile;