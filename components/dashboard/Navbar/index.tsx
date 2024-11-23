'use client';

import { DiamondPercent } from "lucide-react";
import { MobileSheetSidebar } from "../MobileSheetSidebar";
import { ModeToggle } from "@/components/common/ModeToggle";
import { UserAccountNav } from "../UserAccountNav";
import { DashboardSidebarProps } from "@/types/components";
import { useApiData } from "@/hooks/useApiData";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const DashboardNavbar = ({ links }: DashboardSidebarProps) => {
    const { data } = useApiData('/api/remaining');

    return (
        <header className="sticky top-0 flex h-14 lg:h-[60px] px-4 xl:px-8 z-50">
            <div className="flex items-center gap-x-3 px-0 w-full">
                <MobileSheetSidebar links={links} />

                <div className="flex-1 w-full">
                    {data === undefined ? (
                        <Skeleton className="w-[50px] h-5" />
                    ) : (
                        <Tooltip>
                            <TooltipTrigger className="flex items-center gap-2">
                                <DiamondPercent size={20} />
                                <span className="font-medium">{data?.remainingGenerations ?? "-"}</span>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <span className='font-medium'>
                                    Reseta em {data.hours}h {data.minutes}min
                                </span>
                            </TooltipContent>
                        </Tooltip>
                    )}
                </div>

                <ModeToggle />
                <UserAccountNav />
            </div>
        </header>
    );
};

export { DashboardNavbar };