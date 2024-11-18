"use client";

import React, { useRef, useState } from "react";

function ImgBeforeAfter() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50); // Posição inicial do slider
    const [isDragging, setIsDragging] = useState(false); // Verifica se o usuário está arrastando
    const [currentBeforeImage, setCurrentBeforeImage] = useState("/imgs/img-teste3.jpg"); // Imagem principal "before"
    const [currentAfterImage, setCurrentAfterImage] = useState("/imgs/img-teste3-after.jpg"); // Imagem "after"

    const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
        if (!isDragging) return;

        const container = containerRef.current;
        if (container) {
            const rect = container.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            // Limita o slider entre 5% e 95%
            const position = Math.min(Math.max(2, (offsetX / rect.width) * 100), 98);
            setSliderPosition(position);
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches && e.touches[0] && isDragging) {
            handleMouseMove(e.touches[0]);
        }
    };

    const startDragging = () => setIsDragging(true);
    const stopDragging = () => setIsDragging(false);

    // Função para mudar a imagem principal (before e after)
    const changeMainImage = (beforeImageUrl: string, afterImageUrl: string) => {
        setCurrentBeforeImage(beforeImageUrl);
        setCurrentAfterImage(afterImageUrl);
    };

    return (
        <div
            className="flex flex-col items-center w-full max-w-4xl mb-6 mx-auto p-4 sm:p-6"
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchEnd={stopDragging}
            style={{ userSelect: "none" }} // Evita a seleção na área geral
        >
            <div
                className="relative w-full h-96 bg-gray-200 overflow-hidden rounded-lg"
                ref={containerRef}
                onTouchMove={handleTouchMove}
                style={{ userSelect: "none" }} // Evita seleção na área das imagens
            >
                {/* Imagem de baixo (AFTER) */}
                <img
                    src={currentAfterImage} // Imagem "after" (de baixo)
                    alt="Imagem de baixo"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false} // Evita arrastar a imagem
                    style={{ userSelect: "none", pointerEvents: "none" }} // Evita seleção e interações
                />
                {/* Máscara que controla a imagem de cima (BEFORE) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                        userSelect: "none", // Evita seleção
                    }}
                >
                    <img
                        src={currentBeforeImage} // Usando a imagem "before"
                        alt="Imagem de cima"
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false} // Evita arrastar a imagem
                        style={{ userSelect: "none", pointerEvents: "none" }} // Evita seleção e interações
                    />
                </div>
                {/* Barra de divisão com ícone */}
                <div
                    className="absolute top-0 bottom-0 z-10 h-full w-2 bg-gray-400 cursor-pointer flex items-center justify-center"
                    style={{
                        left: `${sliderPosition}%`,
                        userSelect: "none", // Evita seleção do slider
                    }}
                    onMouseDown={startDragging}
                    onTouchStart={startDragging}
                >
                    <div
                        className="flex items-center justify-center w-12 h-12 bg-white border border-gray-600 rounded-full"
                        style={{
                            userSelect: "none", // Evita seleção do ícone
                        }}
                    >
                        <span className="text-gray-600 text-lg font-bold">{`<>`}</span>
                    </div>
                </div>
            </div>

            {/* Linha de imagens menores abaixo da imagem principal */}
            <div className="flex mt-6 space-x-6">
                <img
                    src="/imgs/img-teste3.jpg" // Imagem 1
                    alt="Miniatura 1"
                    className="w-24 h-24 rounded-sm object-cover cursor-pointer border-2 border-transparent hover:border-gray-400"
                    onClick={() => changeMainImage("/imgs/img-teste3.jpg", "/imgs/img-teste3-after.jpg")}
                />
                <img
                    src="/imgs/img-teste2.jpg" // Imagem 2
                    alt="Miniatura 2"
                    className="w-24 h-24 rounded-sm object-cover cursor-pointer border-2 border-transparent hover:border-gray-400"
                    onClick={() => changeMainImage("/imgs/img-teste2.jpg", "/imgs/img-teste2-after.png")}
                />
                <img
                    src="/imgs/img-teste1.jpg" // Imagem 3
                    alt="Miniatura 3"
                    className="w-24 h-24 rounded-sm object-cover cursor-pointer border-2 border-transparent hover:border-gray-400"
                    onClick={() => changeMainImage("/imgs/img-teste1.jpg", "/imgs/img-teste1-after.jpeg")}
                />
            </div>
        </div>
    );
}

export default ImgBeforeAfter;
