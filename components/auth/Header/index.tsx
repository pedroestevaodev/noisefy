import { useState, useEffect } from "react";
import { fontMontserrat, poppins } from "@/config/fonts";
import { cn } from "@/lib/utils";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

interface HeaderProps {
    label: string;
};

const Header = ({ label }: HeaderProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col gap-y-4 items-center justify-center w-full">
            <h1 className={cn(
                "text-3xl font-extrabold text-shadow-sm",
                fontMontserrat.className,
            )}>
                Autenticação
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};

export { Header };