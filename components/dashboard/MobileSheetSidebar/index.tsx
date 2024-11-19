'use client';

import { Icons } from "@/components/common/Icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { DashboardSidebarProps } from "@/types/components";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { UpgradeCard } from "../UpgradeCard";
import { siteMetadata } from "@/config/site";

const MobileSheetSidebar = ({ links }: DashboardSidebarProps) => {
    const path = usePathname();
    const [open, setOpen] = useState<boolean>(false);
    const { isSm, isMobile } = useMediaQuery();

    if (isSm || isMobile) {
        return (
            <Sheet open={open} onOpenChange={setOpen} >
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-9 shrink-0 md:hidden"
                    >
                        <Menu className="size-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-0">
                    <ScrollArea className="h-full overflow-y-auto">
                        <div className="flex h-screen flex-col">
                            <nav className="flex flex-1 flex-col gap-y-8 p-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <img 
                                    src="/imgs/camera-noisefy-purple.png" 
                                    alt="Noisefy logo" 
                                    className="w-9 h-7 min-w-6"
                                    />
                                    <span className="font-urban text-xl font-bold text-noisefy-800">
                                        {siteMetadata.applicationName}
                                    </span>
                                </Link>

                                {links.map((section) => (
                                    <section
                                        key={section.title}
                                        className="flex flex-col gap-0.5"
                                    >
                                        <p className="text-xs text-muted-foreground">
                                            {section.title}
                                        </p>

                                        {section.items.map((item) => {
                                            const Icon = Icons[item.icon as keyof typeof Icons || "arrowRight"];
                                            return (
                                                item.href && (
                                                    <Fragment key={`link-fragment-${item.title}`}>
                                                        <Link
                                                            key={`link-${item.title}`}
                                                            onClick={() => {
                                                                if (!item.disabled) setOpen(false);
                                                            }}
                                                            href={item.disabled ? "#" : item.href}
                                                            className={cn(
                                                                "flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-noisefy-100",
                                                                path === item.href
                                                                    ? "bg-noisefy-200"
                                                                    : "text-muted-foreground hover:text-accent-foreground",
                                                                item.disabled &&
                                                                "cursor-not-allowed opacity-80 hover:bg-transparent hover:text-muted-foreground",
                                                            )}
                                                        >
                                                            <Icon className="size-5" />
                                                            {item.title}
                                                            {item.badge && (
                                                                <Badge className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full">
                                                                    {item.badge}
                                                                </Badge>
                                                            )}
                                                        </Link>
                                                    </Fragment>
                                                )
                                            );
                                        })}
                                    </section>
                                ))}

                                <div className="mt-auto">
                                    <UpgradeCard />
                                </div>
                            </nav>
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <div className="flex size-9 animate-pulse rounded-lg bg-noisefy-50 md:hidden" />
    );
};

export { MobileSheetSidebar };