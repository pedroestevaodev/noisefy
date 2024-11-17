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
        
        <div>
        <div className=" container text-noisefy-800 font-bold mb-16 mx-36 text-3xl">
            | FAQ
        </div>
        <div className="container grid grid-cols-2 gap-4 w-50 h-80 justify-center items-center content-center">
            <Box titulo1={titulos[0] } titulo2 = {titulos[1]} conteudo1= {conteudos[0]} conteudo2={conteudos[1]}/>
            <Box titulo1={titulos[2] } titulo2 = {titulos[3]} conteudo1= {conteudos[2]} conteudo2={conteudos[3]}/>

        </div>
        <div className="container grid grid-cols-1 mb-40">
        <h3  className="text-noisefy-800 font-bold text-2xl ml-9">Não encontrou sua dúvida?</h3>
                <img className ="ml-9" src="/imgs/traco-inferior.svg" alt="" />
                <p className="ml-9">Sem problemas! Você pode acessar qualquer uma das nossas redes sociais ou entrar no "fale conosco".
</p>
        </div>
        </div>
    );
};

export default FAQ;