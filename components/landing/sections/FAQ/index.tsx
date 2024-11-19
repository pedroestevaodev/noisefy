import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
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

const FAQ = () => {

    {
        pergunta.map((item: Pergunta, index: number) => (
            titulos[index] = item.titulo,
            conteudos[index] = item.conteudo
        ))
    }

    return (
        <section className="space-y-6 py-12 sm:py-20" id="lp-faq">
            <MaxWidthWrapper className="relative flex flex-col gap-14 max-w-[1440px] mx-auto">
                <h3 className="text-3xl font-bold text-left text-noisefy-800 border-l-8 border-noisefy-800 pl-4 ml-4 uppercase">
                    FAQ
                </h3>
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start content-center">
                    <Box titulo1={titulos[0]} titulo2={titulos[1]} conteudo1={conteudos[0]} conteudo2={conteudos[1]} />
                    <Box titulo1={titulos[2]} titulo2={titulos[3]} conteudo1={conteudos[2]} conteudo2={conteudos[3]} />
                </div>
                <div className="container mt-6">
                    <div className="container">
                        <h3 className="text-noisefy-800 font-bold text-2xl">Não encontrou sua dúvida?</h3>
                        <img className="" src="/imgs/traco-inferior.svg" alt="" />
                        <p className="">Sem problemas! Você pode acessar qualquer uma das nossas redes sociais ou entrar no "fale conosco".
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export { FAQ };