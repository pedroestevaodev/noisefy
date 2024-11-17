'use client';

import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import { Maximize2, RotateCcw, RotateCw, Scissors, WandSparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const StudioOptionsList = () => {
    const { isTablet } = useMediaQuery();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(!isTablet);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    useEffect(() => {
        setIsSidebarExpanded(!isTablet);
    }, [isTablet]);

    return (
        <div className="flex flex-col border-t min-h-[150px] -mx-4 xl:-mx-8 -mb-4">
            <div className="flex items-center justify-between gap-5 px-4 max-sm:px-[10px] pt-4 pb-[10px]">
                <ScrollArea className="grid whitespace-nowrap w-full">
                    <div className="flex flex-row items-center justify-start gap-[2px] w-max">
                        <Button
                            type="button"
                            className={cn(
                                "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                            )}
                        >
                            <Scissors className="text-muted-foreground" size={16} />
                            <span>Cortar</span>
                        </Button>
                        <Button
                            type="button"
                            className={cn(
                                "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                            )}
                        >
                            <RotateCcw className="text-muted-foreground" size={16} />
                            <span>Rotate Left</span>
                        </Button>
                        <Button
                            type="button"
                            className={cn(
                                "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                            )}
                        >
                            <RotateCw className="text-muted-foreground" size={16} />
                            <span>Rotate Right</span>
                        </Button>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                
                <div className="flex items-center gap-4">
                    <Button
                        type="button"
                        className="bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-500 hover:shadow-none transition-colors duration-200"
                    >
                        <WandSparkles size={16} />
                        <span>Transformar</span>
                    </Button>
                </div>
            </div>
            <ScrollArea className="grid flex-1 whitespace-nowrap w-full px-4 max-sm:px-[10px] pt-[10px] pb-4">
                <div className="flex flex-row items-center justify-start gap-4 h-full">
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expandinging</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-muted border-none shadow-none text-muted-foreground rounded-[10px] p-4 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Expand</span>
                    </Button>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};

export { StudioOptionsList };