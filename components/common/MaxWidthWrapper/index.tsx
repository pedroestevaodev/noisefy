import { cn } from "@/lib/utils";
import { MaxWidthWrapperProps } from "@/types/components";

const MaxWidthWrapper = ({
    children,
    className,
    large = false,
}: MaxWidthWrapperProps) => {
    return (
        <div
            className={cn(
                "container",
                large ? "max-w-screen-[1536px]" : "max-w-6xl",
                className
            )}
        >
            {children}
        </div>
    );
};

export { MaxWidthWrapper };