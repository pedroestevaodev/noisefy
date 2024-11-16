import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Box from "./Ret";
import perguntasData from '@/public/perguntas.json';
import React from "react"; 
import Ret from "./Ret";

function FuncDoSoftware() {
    return (  
        <div className="pt-16 container">
            <h2 className="text-3xl font-semibold text-left text-noisefy-800 border-l-8 border-noisefy-800 pl-4 ml-4">
            Funções do Software
            </h2>
        
          {/* Contêiner Principal */}
          <div className="container grid grid-cols-2 gap-4 w-full h-full justify-center items-center content-center">
            
            {/* Coluna Esquerda com dois retângulos */}
            <div className="grid grid-rows-2 gap-y-10 gap-4">
              <Ret 
                titulo="Img color converter" 
                img="/imgs/img-color-converter-icon.png"
                conteudo="Nossa ferramenta converte imagens entre diferentes espaços de cor como RGB, CMYK e tons de cinza. 
                Ideal para otimização de imagens em campanhas de marketing ou design técnico."/>
              <Ret 
                titulo="Pre-Processing" 
                img="/imgs/pre-processing-icon.png"
                conteudo="Nossa ferramenta converte imagens entre diferentes espaços de cor como RGB, CMYK e tons de cinza.
                Ideal para otimização de imagens em campanhas de marketing ou design técnico." />
            </div>

            {/* Coluna Direita com imagem */}
            <div className="flex justify-center items-center">
              <img src="/imgs/editing-img-3d.png" alt="Edição de Imagens" className="w-full h-auto" />
            </div>

            {/* Coluna Esquerda com imagem */}
            <div className="flex justify-center items-center">
              <img src="/imgs/upload-img-3d.png" alt="Faça Upload de Imagens" className="w-full h-auto" />
            </div>

            {/* Segunda Linha na Coluna Esquerda com dois retângulos */}
            <div className="grid grid-rows-2 gap-y-10 gap-4">
              <Ret 
                titulo="Thresholding" 
                img="/imgs/thresholding-icon.png"
                conteudo="Facilite a segmentação das imagens isolando objetos e regiões específicas com técnicas
                de limiarização. Isso é crucial para identificar áreas de interesse em imagens complexas."/>
              <Ret 
                titulo="Histogram" 
                img="/imgs/histogram-icon.png"
                conteudo="Visualize a distribuição de intensidade dos pixels nas suas imagens, ajustando o contraste
                e a exposição de maneira eficiente. Essencial para ajustes de qualidade em fotografias e designs." />
            </div>
          </div>
        </div>
    );
}

export default FuncDoSoftware;
