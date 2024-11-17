import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import perguntasData from '@/public/perguntas.json';
import React from "react";

type RetProps = {
    nome: string;
    fotoPerfil: string;
    recomendacao: string;
  };
  
  const Ret: React.FC<RetProps> = ({ nome, fotoPerfil, recomendacao }) => {
    return (
      <div className="w-auto h-auto relative bg-purple-200 sm:p-6 shadow-lg flex flex-col items-start justify-start rounded-sm p-4">
        {/* Header com foto de perfil e nome */}
        <div className="flex items-center mb-4">
          <img
            src={fotoPerfil}
            alt={`Foto de perfil de ${nome}`}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4"
          />
          <h2 className="text-lg sm:text-xl font-bold">{nome}</h2>
        </div>
        {/* Texto de recomendação */}
        <p className="text-lg text-justify">
          <span className="text-5xl font-serif leading-none text-purple-600">“</span>
          {recomendacao}
        </p>
      </div>
    );
  };
  
  
  export default Ret;