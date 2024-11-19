import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import BoxH from './boxH';
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";


const HowAre = () => {
    return (
        <section className="space-y-6 py-12 sm:py-20" id="lp-how-we-are">
            <MaxWidthWrapper className="relative flex flex-col gap-14 max-w-[1440px] mx-auto">
                <h3 className="text-3xl font-bold text-left text-noisefy-800 border-l-8 border-noisefy-800 pl-4 ml-4 uppercase">
                    Quem somos nós
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-16 content-center container">
                    <BoxH srcS="imgs/caio.svg" name="Caio Caminitti" />
                    <BoxH srcS="imgs/sergio.svg" name="Sérgio Caminitti" />
                    <BoxH srcS="imgs/sara.svg" name="Sara Miranda" />
                    <BoxH srcS="imgs/pedro.svg" name="Pedro Estevão" />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export { HowAre };