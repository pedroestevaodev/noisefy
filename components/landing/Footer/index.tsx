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
            <div className="w-96 h-64 flex border-2 justify-center items-baseline  border-black content-center">
                <ul className="">
                    <div className=" text-white flex justify-normal my-8 font-">
                    <li className="mx-14">| Contato</li>
                    <li className="mx-14">| Redes Sociais</li>
                    <li className="mx-14">| Páginas</li>
                    <li className="mx-14">| Localização</li>
                    </div>
                   
                </ul>
                </div>
            </div>

            
        
        </footer>
    );
};

export default Footer;