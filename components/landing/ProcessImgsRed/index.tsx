function ProcessImgsRed(){
    return(
            <div className="relative w-full max-w-4xl mx-auto p-4 sm:p-6">
        {/* Sombra de fundo expandida */}
        <div className="absolute -bottom-3 -left-3 w-full max-w-4xl h-full bg-purple-800"></div>

        {/* Card principal sem bordas arredondadas */}
        <div className="relative bg-purple-500 text-white p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            {/* Título e descrição */}
            <div className="mb-4 sm:mb-0">
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                Processamento de Imagens Redefinido
                </h2>
                <p className="text-sm sm:text-base">
                A plataforma Noisefy oferece um conjunto robusto de ferramentas para
                processar imagens de forma escalável. Do ajuste de cores à análise avançada
                de histogramas, nossa solução proporciona uma experiência fluida para
                designers, desenvolvedores e empresas.
                </p>
            </div>

            {/* Ícone */}
            <div className="sm:ml-4 self-end sm:self-center">
                <img
                src="/imgs/icon-ProcessImgRed.png"
                alt="Ícone de processamento de imagens"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-52 lg:h-28"
                />
            </div>
            </div>
        </div>
        </div>
    )
}


export default ProcessImgsRed;