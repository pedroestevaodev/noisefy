'use client';

import { Icons } from "@/components/common/Icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { DashboardSidebarProps } from "@/types/components";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { UpgradeCard } from "../UpgradeCard";
import { siteMetadata } from "@/config/site";
import Image from "next/image";
import { useTheme } from "next-themes";

const DashboardSidebar = ({ links }: DashboardSidebarProps) => {
    const path = usePathname();
    const { theme } = useTheme();

    const { isTablet } = useMediaQuery();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(!isTablet);
    const [noisefyLogo, setNoisefyLogo] = useState<string>('/imgs/camera-noisefy-purple.png');

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    useEffect(() => {
        setIsSidebarExpanded(!isTablet);
    }, [isTablet]);

    useEffect(() => {
        theme === "dark" ? setNoisefyLogo('/imgs/camera-noisefy-white.png') : setNoisefyLogo('/imgs/camera-noisefy-purple.png');
    }, [theme]);

    return (
        <div className="sticky top-0 h-full">
            <ScrollArea className="h-full overflow-y-auto border-r bg-noisefy-50 dark:bg-noisefy-900">
                <aside
                    className={cn(
                        isSidebarExpanded ? "w-[220px] xl:w-[260px]" : "w-[68px]",
                        "hidden h-screen md:block transition-all duration-200",
                    )}
                >
                    <div className="flex h-full max-h-screen flex-1 flex-col gap-2">
                        <div className="relative flex h-14 items-center justify-between p-4 lg:h-[60px]">
                            <Link
                                href="/dashboard"
                                className={cn(
                                    "relative flex items-center gap-2 text-lg font-semibold z-1 transition-all duration-200",
                                    isSidebarExpanded ? "opacity-100 w-full" : "opacity-0 w-0",
                                )}
                            >
                                <Image
                                    src={noisefyLogo}
                                    width={36}
                                    height={30}
                                    alt="Noisefy logo"
                                    className="w-9 h-[30px] min-w-9 transition-all duration-200"
                                />
                                <span className="font-urban text-xl font-bold text-noisefy-800 dark:text-white transition-all duration-200">
                                    {siteMetadata.applicationName}
                                </span>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    "relative size-9 lg:size-8 z-2 dark:hover:bg-noisefy-800/70",
                                    isSidebarExpanded ? 'm-0' : 'mr-[3px]',
                                )}
                                onClick={toggleSidebar}
                            >
                                {isSidebarExpanded ? (
                                    <Image src="/imgs/icon-menu-aberto.png" width={20} height={20} alt="Close" className="size-5 dark:invert" />
                                ) : (
                                    <Image src="/imgs/icon-menu-fechado.png" width={20} height={20} alt="Close" className="size-5 dark:invert" />
                                )}
                                <span className="sr-only">Toggle Sidebar</span>
                            </Button>
                        </div>

                        <nav className="flex flex-1 flex-col gap-8 px-4 pt-4">
                            {links.map((section) => (
                                <section
                                    key={section.title}
                                    className="flex flex-col gap-0.5"
                                >
                                    <p
                                        className={cn(
                                            "text-xs text-muted-foreground transition-all duration-200",
                                            isSidebarExpanded ? "opacity-100" : "opacity-0",
                                        )}
                                    >
                                        {section.title}
                                    </p>
                                    {section.items.map((item) => {
                                        const Icon = Icons[item.icon as keyof typeof Icons || "arrowRight"];
                                        return (
                                            item.href && (
                                                <Fragment key={`link-fragment-${item.title}`}>
                                                    <Tooltip key={`tooltip-${item.title}`} {...isSidebarExpanded && { open: false }}>
                                                        <TooltipTrigger asChild>
                                                            <Link
                                                                key={`link-tooltip-${item.title}`}
                                                                href={item.disabled ? "#" : item.href}
                                                                className={cn(
                                                                    "flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-background dark:hover:bg-noisefy-800/50 group/item-sidebar transition-all duration-200",
                                                                    path === item.href
                                                                        ? "bg-background dark:bg-noisefy-800/70"
                                                                        : "text-muted-foreground hover:text-accent-foreground",
                                                                    item.disabled && "cursor-not-allowed opacity-80 hover:bg-transparent",
                                                                )}
                                                            >
                                                                <Icon className="size-5 min-w-5 group-hover/item-sidebar:text-accent-foreground transition-all duration-200" />
                                                                <span
                                                                    className={cn(
                                                                        "flex items-center justify-between gap-3 w-full min-w-[140px] xl:min-w-[180px] group-hover/item-sidebar:text-accent-foreground transition-all duration-200",
                                                                        isSidebarExpanded ? `opacity-100` : `opacity-0`,
                                                                    )}
                                                                >
                                                                    {item.title}
                                                                    {item.badge && (
                                                                        <Badge className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full">
                                                                            {item.badge}0
                                                                        </Badge>
                                                                    )}
                                                                </span>
                                                            </Link>
                                                        </TooltipTrigger>
                                                        <TooltipContent side="right">
                                                            {item.title}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </Fragment>
                                            )
                                        );
                                    })}
                                </section>
                            ))}
                        </nav>

                        <div className="mt-auto xl:p-4">
                            <UpgradeCard
                                className={cn(
                                    isSidebarExpanded ? `opacity-100` : `opacity-0`,
                                    "md:max-xl:w-[220px] xl:w-[228px] transition-all duration-200",
                                )}
                            />
                        </div>
                    </div>
                </aside>
            </ScrollArea>
        </div>
    );
};

export { DashboardSidebar };