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
            {windowWidth >= 1024 ? (
                // Exibe o título "Login" para resoluções maiores
                <h1 className={cn(
                    "text-3xl font-extrabold text-shadow-sm",
                    fontMontserrat.className,
                )}>
                    Login
                </h1>
            ) : (
                // Exibe o ícone e o título "Noisefy" para resoluções menores
                <div className="flex items-center gap-2">
                    <img
                        src="/imgs/camera-noisefy-black.png"
                        alt="Noisefy Icon"
                        className="w-12 h-12"
                    />
                    <h1 className={cn(
                        "text-black text-3xl font-extrabold",
                        fontMontserrat.className,
                    )}>
                        Noisefy
                    </h1>
                </div>
            )}
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};

export { Header };