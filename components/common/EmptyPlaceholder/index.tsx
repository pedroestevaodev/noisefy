import * as React from "react";
import { cn } from "@/lib/utils";
import { EmptyPlaceholderDescriptionProps, EmptyPlaceholderIconProps, EmptyPlaceholderProps, EmptyPlaceholderTitleProps } from "@/types/components";
import { Icons } from "@/components/common/Icons";

const EmptyPlaceholder = ({
    className,
    children,
    ...props
}: EmptyPlaceholderProps) => {
    return (
        <div
            className={cn(
                "flex flex-1 items-center justify-center rounded-lg border border-dashed p-8 text-center shadow-sm animate-in fade-in-50",
                className,
            )}
            {...props}
        >
            <div className="flex max-w-[420px] flex-col items-center text-center">
                {children}
            </div>
        </div>
    );
};

EmptyPlaceholder.Icon = ({
    name,
    className,
    ...props
}: EmptyPlaceholderIconProps) => {
    const Icon = Icons[name as keyof typeof Icons];

    if (!Icon) {
        return null;
    }

    return (
        <div className="flex size-20 items-center justify-center rounded-full bg-muted">
            <Icon className={cn("size-10", className)} {...props} />
        </div>
    );
};

EmptyPlaceholder.Title = ({
    className,
    ...props
}: EmptyPlaceholderTitleProps) => {
    return (
        <h3
            className={cn("mt-5 font-heading text-2xl font-bold", className)}
            {...props}
        />
    );
};


EmptyPlaceholder.Description = ({
    className,
    ...props
}: EmptyPlaceholderDescriptionProps) => {
    return (
        <p
            className={cn(
                "mb-5 mt-1.5 text-center text-sm font-normal leading-6 text-muted-foreground",
                className,
            )}
            {...props}
        />
    );
};

export { EmptyPlaceholder };