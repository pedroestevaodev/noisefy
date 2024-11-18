import Icons from "@/components/common/Icons";
import { buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex justify-center flex-col items-center pt-12 mb-6">
            <h1 className="text-black text-center font-extrabold tracking-wide text-6xl pb-4">Noisefy</h1>
            <img src="/imgs/img-hero.png" alt="Imagen Noisefy" className="w-2/4 h-auto"/>
            <p className="leading-9 tracking-wide max-w-screen-md text-2xl text-center text-noisefy-900">
                <span className="text-noisefy-600">Noisefy</span> oferece soluções avançadas para tratamento e análise de imagens, como conversão de cores, pré-processamento, histogramas, limiarização, e galeria integrada. Tudo isso de forma rápida e eficaz, utilizando o poderoso pacote sharp.
            </p>
        </section>
    );
};

export default Hero;