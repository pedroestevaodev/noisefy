"use client";

import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";

const ImgBeforeAfter = () => {
    const [activeButton, setActiveButton] = useState<string>("button1");
    const [viewImage, setViewImage] = useState({ original: "/imgs/img-teste3.jpg", restored: "/imgs/img-teste3-after.jpg" });

    const handleButtonClick = (buttonId: string, viewImage: { original: string; restored: string }) => {
        setActiveButton(buttonId);
        setViewImage(viewImage);
    };

    return (
        <section className="space-y-6 py-12 sm:py-20 lg:py-20" id="lp-img-before-after">
            <MaxWidthWrapper className="flex flex-col gap-8">
                <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
                    <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={viewImage.original} alt="Imagem Original" />}
                            itemTwo={<ReactCompareSliderImage src={viewImage.restored} alt="Imagem Tratada" />}
                            className="flex size-full"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <Button
                        type="button"
                        className={cn(
                            "size-[50px] min-[376px]:size-[80px] sm:size-28 rounded-[15px] p-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-noisefy-400 focus-visible:ring-offset-2 hover:scale-[1.1] transition-all duration-150 overflow-hidden",
                            activeButton === "button1" && "ring-4 ring-noisefy-400 ring-offset-2",
                        )}
                        onClick={() => {
                            handleButtonClick("button1", {
                                original: "/imgs/img-teste3.jpg",
                                restored: "/imgs/img-teste3-after.jpg",
                            });
                        }}
                        aria-label="Ver exemplo da primeira imagem"
                    >
                        <Image
                            src={`/imgs/img-teste3.jpg`}
                            className="size-full object-cover"
                            width={112}
                            height={112}
                            alt="Imagem do botão de exemplo 1"
                            aria-hidden="true"
                        />
                    </Button>
                    <Button
                        type="button"
                        className={cn(
                            "size-[50px] min-[376px]:size-[80px] sm:size-28 rounded-[15px] p-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-noisefy-400 focus-visible:ring-offset-2 hover:scale-[1.1] transition-all duration-150 overflow-hidden",
                            activeButton === "button2" && "ring-4 ring-noisefy-400 ring-offset-2",
                        )}
                        onClick={() => {
                            handleButtonClick("button2", {
                                original: "/imgs/img-teste2.jpg",
                                restored: "/imgs/img-teste2-after.png",
                            });
                        }}
                        aria-label="Ver exemplo da primeira imagem"
                    >
                        <Image
                            src={`/imgs/img-teste2.jpg`}
                            className="size-full object-cover"
                            width={112}
                            height={112}
                            alt="Imagem do botão de exemplo 1"
                            aria-hidden="true"
                        />
                    </Button>
                    <Button
                        type="button"
                        className={cn(
                            "size-[50px] min-[376px]:size-[80px] sm:size-28 rounded-[15px] p-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-noisefy-400 focus-visible:ring-offset-2 hover:scale-[1.1] transition-all duration-150 overflow-hidden",
                            activeButton === "button3" && "ring-4 ring-noisefy-400 ring-offset-2",
                        )}
                        onClick={() => {
                            handleButtonClick("button3", {
                                original: "/imgs/img-teste1.jpg",
                                restored: "/imgs/img-teste1-after.jpeg",
                            });
                        }}
                        aria-label="Ver exemplo da primeira imagem"
                    >
                        <Image
                            src={`/imgs/img-teste1.jpg`}
                            className="size-full object-cover"
                            width={112}
                            height={112}
                            alt="Imagem do botão de exemplo 1"
                            aria-hidden="true"
                        />
                    </Button>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export { ImgBeforeAfter };
