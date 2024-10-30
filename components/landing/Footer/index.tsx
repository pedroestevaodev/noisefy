import Icons from "@/components/common/Icons";
import ModeToggle from "@/components/common/ModeToggle";
import { footerLinks, socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Footer = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <footer className={cn("border-t", className, "bg-noisefy-400") }>
            <div className="container grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-3">
                <div className="w-96 h-64 flex border-2 justify-center items-center border-black content-center space-x-14">
                {footerLinks.map((section) => (
                    <div key={section.title}>
                        
                        <span className="text-sm font-medium text-foreground justify-center content-center  ">
                            {section.title}
                        </span>
                        <div>
                            teste
                        </div>
                        
                    </div>
                ))}
                </div>
            </div>

            
        
        </footer>
    );
};

export default Footer;