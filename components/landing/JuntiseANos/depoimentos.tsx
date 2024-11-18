"use client";
import Ret from "./Ret";
import React, { useState, useEffect } from "react";

type Comentario = {
    nome: string;
    fotoPerfil: string;
    recomendacao: string;
  };
  
  type ComentariosGridProps = {
    comentarios: Comentario[];
  };
  
  const ComentariosGrid: React.FC<ComentariosGridProps> = ({ comentarios }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleSlides = 4;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleSlides) % comentarios.length);
      }, 20000);
      return () => clearInterval(interval);
    }, [comentarios.length]);
  
    // Calcular os comentários visíveis
    const displayedComentarios = comentarios.slice(
      currentIndex,
      currentIndex + visibleSlides
    );
  
    // Lógica para lidar com o loop do carrossel
    if (displayedComentarios.length < visibleSlides) {
      displayedComentarios.push(
        ...comentarios.slice(0, visibleSlides - displayedComentarios.length)
      );
    }
  
    return (
      <div className="w-full flex flex-col items-center justify-center">
        {/* Grade de Retângulos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6">
          {displayedComentarios.map((comentario, index) => (
            <Ret
              key={index}
              nome={comentario.nome}
              fotoPerfil={comentario.fotoPerfil}
              recomendacao={comentario.recomendacao}
            />
          ))}
        </div>
  
        {/* Ícone de Navegação */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          {Array(Math.ceil(comentarios.length / visibleSlides))
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex / visibleSlides === index
                    ? "bg-purple-950"
                    : "bg-gray-400"
                }`}
              />
            ))}
        </div>
      </div>
    );
  };
  
  export default ComentariosGrid;