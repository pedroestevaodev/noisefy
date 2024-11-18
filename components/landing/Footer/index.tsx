import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Itens from './itens';
import Image from "next/image";

const imagem = <Image src="/imgs/instagram.svg" alt="imagem do instagram"/>
const Footer = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <footer className={cn("border-t", className, "bg-noisefy-500", "h-96") }>
            <div className="container grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-3">
            <div className=" mx-28 sm:mx-24 md:mx-24 lg:-mx-8 w-96 sm:w-97  md:w-98 lg:w-100 h-64 flex justify-center items-baseline content-center">
                <ul className="">
                    <div className="text-white flex justify-normal my-8 text-sm lg:text-lg font-semibold cursor-default">
                    <li className="lg:mx-14">| Contato <Itens item={['emailsuporte@noisefy.com', '+55 16 99178-4589']} quant={2} link={['#', '#']} /></li>
                    <li className="mx-4 lg:mx-14">| Redes Sociais <Itens srcS={['/imgs/instagram.svg', '/imgs/facebook.svg', '/imgs/envelope.svg']} w={20} h={25} altS={"imagem de uma rede social"} item={['instagram', 'Facebook', 'NewsLetter']} quant={3} link={['#', '#', '#']} /></li>
                    <li className="mx-4 lg:mx-14">| Páginas <Itens item={['Home', 'Histogram', 'Img Color Convert', 'Thresholding', 'Pré-processing', 'Galeria']} quant={6} link={['#', '#', '#', '#', '#', '#']} /></li>
                    <li className="mx-4 lg:mx-14">| Localização <Itens item={['Rua José Curvelo', '14026-240 - n°110', 'Ribeirão Preto, São Paulo']} quant={3} link={['#', '#', '#']} /></li>
                    </div>
                </ul>

            </div>  

            <div className="text-white text-bold -mx-40  mt-64 h-20 content-end justify-center items-baseline w-80 text-center cursor-default sm:w-96 sm:-mx-44 md:w-97 md:-mx-56 lg:w-100 lg:-mx-96 " >
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