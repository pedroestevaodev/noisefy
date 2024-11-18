'use client';

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { StudioSideSwitchProps } from "@/types/components";

const StudioSideSwitch = ({ sideBySide, setSideBySide, ...props }: StudioSideSwitchProps) => {
    return (
        <div className="flex items-center gap-3" {...props}>
            <span 
                className={cn(
                    "text-sm font-medium",
                    !sideBySide ? "text-gray-900" : "text-gray-500",
                )}
            >
                Side by Side
            </span>
            <Switch
                id="side-by-side-switch"
                checked={sideBySide}
                onCheckedChange={setSideBySide}
            />
            <Label htmlFor="side-by-side-switch">Compare</Label>
        </div>  
    );
};

export { StudioSideSwitch };