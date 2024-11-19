import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function ProcessImgsRed() {
    return (
        <section className="space-y-6 py-12 sm:py-20 lg:py-20" id="lp-process-imgs-red">
            <MaxWidthWrapper className="px-6">
                <Card className="flex bg-purple-500 border-none max-w-[850px] mx-auto rounded-none [box-shadow:-10px_10px_0px_0px_#581c87]">
                    <CardContent className="flex flex-col gap-5 p-6">
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="text-lg text-white sm:atext-xl font-bold">
                                Processamento de Imagens Redefinido
                            </h2>
                            <Image
                                src="/imgs/icon-ProcessImgRed.png"
                                className="size-16 max-sm:hidden"
                                width={64}
                                height={64}
                                alt="Ícone de processamento de imagens"
                            />
                        </div>
                        <p className="text-lg text-white text-justify">
                            A plataforma Noisefy oferece um conjunto completo e poderoso de ferramentas para o processamento escalável de imagens. Desde ajustes precisos de cores até análises avançadas de histogramas, nossa solução garante uma experiência eficiente e intuitiva, atendendo às necessidades de designers, desenvolvedores e empresas.
                        </p>
                    </CardContent>
                </Card>
            </MaxWidthWrapper>
        </section>
    );
}

export { ProcessImgsRed };
