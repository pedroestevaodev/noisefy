import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="space-y-6 py-12 sm:py-20 lg:py-20" id="lp-hero">
            <div className="container flex max-w-5xl px-6 flex-col items-center gap-5 text-center">
                <h1 className="text-balance font-urban text-4xl max-[449px]:text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
                    Edição descomplicada, resultados{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[rgba(168,85,247,0.8)] font-extrabold">
                        Surpreendentes
                    </span>
                </h1>
                <div className="min-[450px]:-mt-5">
                    <MaxWidthWrapper className="max-[449px]:p-0">
                        <Image
                            className="size-full max-w-[750px] object-cover object-center"
                            src="/imgs/hero-computer.gif"
                            width={800}
                            height={800}
                            priority={true}
                            alt="preview landing"
                        />
                    </MaxWidthWrapper>
                </div>
                <p className="leading-6 sm:leading-9 tracking-wide max-w-screen-md text-lg sm:text-2xl text-center text-foreground-700">
                    <span className="text-noisefy-600 font-medium">Noisefy</span> oferece soluções avançadas para tratamento e análise de imagens, como conversão de cores, pré-processamento, histogramas, restauração, recuperação, limiarização, e galeria integrada. 
                </p>
                <p className="leading-6 sm:leading-9 tracking-wide max-w-screen-md text-lg sm:text-2xl text-center text-foreground-700">
                    Tudo isso de forma rápida e eficaz, utilizando as mais poderosas técnicas de processamento de imagens disponíveis atualmente no mercado.
                </p>
            </div>
        </section>
    );
};

export { Hero };