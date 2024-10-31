import Icons from "@/components/common/Icons";
import ModeToggle from "@/components/common/ModeToggle";
import { footerLinks, socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Itens from './itens';

const Footer = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <footer className={cn("border-t", className, "bg-noisefy-500", "h-96") }>
            <div className="container grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-3">
            <div className="w-100 h-64 flex justify-center items-baseline content-center">
                <ul className="">
                    <div className="text-white flex justify-normal my-8 text-xl font-semibold">
                    <li className="mx-14 ">| Contato <Itens item={['emailsuporte@noisefy.com', '+55 16 99178-4589']} quant={2} link={['#', '#']} /></li>
                    <li className="mx-14">| Redes Sociais <Itens item={['Instagram', 'Facebook', 'NewsLetter']} quant={3} link={['#', '#', '#']} /></li>
                    <li className="mx-14">| Páginas <Itens item={['Home', 'Histogram', 'Img Color Convert', 'Thresholding', 'Pré-processing', 'Galeria']} quant={6} link={['#', '#', '#', '#', '#', '#']} /></li>
                    <li className="mx-14">| Localização <Itens item={['Rua José Curvelo', '14026-240 - n°110', 'Ribeirão Preto, São Paulo']} quant={3} link={['#', '#', '#']} /></li>
                    </div>
                </ul>

            </div>

            <div className="text-white text-bold -mx-96 my-2 mt-64 h-20 content-end justify-center items-baseline w-100 text-center">
            <p>
                Desenvolvido por Caio Caminitti | Sergio Caminitti | Pedro Estevão | Sara Miranda
            </p>
            <p>
                Noisefy 2024 @ Todos os direitos resevados
            </p>
            </div>
                
            </div>

            
        
        </footer>
    );
};

export default Footer;