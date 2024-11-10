import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Box from "./box";
import perguntasData from '@/public/perguntas.json';
import React from "react"; 

interface Pergunta {
    titulo: string;
    conteudo: string;
}
let titulos: string[] = [];
let conteudos: string[] = [];

const { pergunta } = perguntasData;
const FAQ = ({ className }: HTMLAttributes<HTMLElement>) => {

    {pergunta.map((item: Pergunta, index: number) =>(
        titulos[index] = item.titulo,
        conteudos[index] = item.conteudo
    ))}
    return(
        
    
        <div className="container grid grid-cols-2 gap-4 w-50 h-97 justify-center items-center content-center">
            {/* <p>| FAQ</p> */}
            <Box titulo1={titulos[0] } titulo2 = {titulos[1]} conteudo1= {conteudos[0]} conteudo2={conteudos[1]}/>
            <Box titulo1={titulos[2] } titulo2 = {titulos[3]} conteudo1= {conteudos[2]} conteudo2={conteudos[3]}/>

        </div>
    
    );
};

export default FAQ;