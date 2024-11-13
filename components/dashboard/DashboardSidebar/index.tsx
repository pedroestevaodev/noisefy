'use client';

import Icons from "@/components/common/Icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { DashboardSidebarProps } from "@/types/components";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import UpgradeCard from "../UpgradeCard";
import { siteConfig } from "@/config/site";
import { DefaultTemplateString } from "next/dist/lib/metadata/types/metadata-types";

const DashboardSidebar = ({ links }: DashboardSidebarProps) => {
    const path = usePathname();

    const { isTablet } = useMediaQuery();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(!isTablet);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    useEffect(() => {
        setIsSidebarExpanded(!isTablet);
    }, [isTablet]);

    return (
        <div className="sticky top-0 h-full">
            <ScrollArea className="h-full overflow-y-auto border-r bg-noisefy-50">
                <aside
                    className={cn(
                        isSidebarExpanded ? "w-[220px] xl:w-[260px]" : "w-[68px]",
                        "hidden h-screen md:block [transition:width_0.25s_ease-in-out]",
                    )}
                >
                    <div className="flex h-full max-h-screen flex-1 flex-col gap-2">
                        <div className="relative flex h-14 items-center justify-between p-4 lg:h-[60px]">
                            <Link
                            href="#"
                                className={`relative flex items-center gap-2 text-lg font-semibold z-1 ${isSidebarExpanded ? "opacity-100 w-full" : "opacity-0 w-0"} [transition:opacity_0.2s_ease-in-out,_width_0.2s_ease-in-out]`}
                            >
                                <img 
                                    src="/imgs/camera-noisefy-purple.png" 
                                    alt="Noisefy logo" 
                                    className="w-9 h-7 min-w-6"
                                />
                                <span className="font-urban text-xl font-bold text-noisefy-800">
                                    {(siteConfig.title as DefaultTemplateString).default}
                                </span>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`relative size-9 lg:size-8 z-2 ${isSidebarExpanded ? 'm-0' : 'mr-[3px]'}`}
                                onClick={toggleSidebar}
                            >
                                {isSidebarExpanded ? (
                                    <img src="/imgs/icon-menu-aberto.png" alt="Close" className="size-5" />
                                ) : (
                                    <img src="/imgs/icon-menu-fechado.png" alt="Close" className="size-5" />
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
                                    <p className={`text-xs text-muted-foreground ${isSidebarExpanded ? "opacity-100" : "opacity-0"} [transition:opacity_0.2s_ease-in-out]`}>
                                        {section.title}
                                    </p>
                                    {section.items.map((item) => {
                                        const Icon = Icons[item.icon || "arrowRight"];
                                        return (
                                            item.href && (
                                                <Fragment key={`link-fragment-${item.title}`}>
                                                    <Tooltip key={`tooltip-${item.title}`} {...isSidebarExpanded && { open: false }}>
                                                        <TooltipTrigger asChild>
                                                            <Link
                                                                key={`link-tooltip-${item.title}`}
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
                                                                <Icon className="size-5 min-w-5" />
                                                                <span className={`flex items-center justify-between gap-3 w-full min-w-[140px] xl:min-w-[180px] ${isSidebarExpanded ? `opacity-100` : `opacity-0`} [transition:opacity_0.2s_ease-in-out]`}>
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
                            {/* {isSidebarExpanded ? <UpgradeCard className={``} /> : null} */}
                            <UpgradeCard
                                className={`${isSidebarExpanded ? `opacity-100` : `opacity-0`} md:max-xl:w-[220px] xl:w-[228px] [transition:opacity_0.2s_ease-in-out]`}
                            />
                        </div>
                    </div>
                </aside>
            </ScrollArea>
        </div>
    );
};

export default DashboardSidebar;