function ProcessImgsRed() {
    return (
        <div className="flex-row w-full max-w-4xl mx-auto p-4 sm:p-6">
            {/* Retângulo traseiro */}
            <div className="w-[53rem] h-[14rem] z-0 bg-purple-900 text-white sm:p-6 shadow-lg flex items-center justify-between 
            absolute transform translate-x-[-10px] translate-y-[10px]">
            </div>
            {/* Retângulo principal com sombra */}
            <div className="w-auto h-[14rem] relative z-10 bg-purple-500 text-white sm:p-6 shadow-lg flex-row items-center justify-between">
                {/* Conteúdo do texto */}
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-lg sm:text-xl font-bold mb-2">
                        Processamento de Imagens Redefinido
                    </h2>
                    <img
                        src="/imgs/icon-ProcessImgRed.png"
                        alt="Ícone de processamento de imagens"
                        className="w-8 h-8 sm:w-20 sm:h-20 lg:w-16 lg:h-16"
                    />
                </div>
                    <p className="text-lg">
                        A plataforma Noisefy oferece um conjunto robusto de ferramentas para
                        processar imagens de forma escalável. Do ajuste de cores à análise avançada
                        de histogramas, nossa solução proporciona uma experiência fluida para
                        designers, desenvolvedores e empresas.
                    </p>
            </div>
        </div>
    );
}

export default ProcessImgsRed;
