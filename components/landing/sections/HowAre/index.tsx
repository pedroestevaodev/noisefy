import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import BoxH from './boxH';
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";


const HowAre = () => {
    return (
        <section className="space-y-6 py-12 sm:py-20" id="lp-how-we-are">
            <MaxWidthWrapper className="relative flex flex-col gap-14 max-w-[1440px] mx-auto">
                <h3 className="text-3xl font-bold text-left text-noisefy-800 border-l-8 border-noisefy-800 pl-4 ml-4 uppercase">
                    Quem somos nós
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-16 content-center container">
                    <BoxH srcS="imgs/caio.svg" name="Caio Caminitti" altS="Abordagem estratégica e uma mente analítica. Ele é apaixonado por encontrar a melhor forma de alcançar os objetivos, sempre mantendo a equipe no caminho certo. Com sua habilidade em gestão e colaboração, Caio garante que as engrenagens do time estejam sempre em movimento." />
                    <BoxH srcS="imgs/sergio.svg" name="Sérgio Caminitti" altS="Conhecido por sua energia e entusiasmo em cada projeto que assume. Um comunicador nato, ele é a ponte entre as ideias e a execução, ajudando a transformar conceitos em realidade. Sérgio acredita que o trabalho em equipe é o caminho para o sucesso, e está sempre motivando os colegas com sua atitude positiva." />
                    <BoxH srcS="imgs/sara.svg" name="Sara Miranda" altS="Uma profissional multifacetada que combina inovação e organização em seu trabalho. Com um olhar atento para os detalhes e uma mente criativa, ela contribui com ideias únicas e práticas que elevam a qualidade dos projetos. Sara é uma líder natural que inspira confiança e união na equipe." />
                    <BoxH srcS="imgs/pedro.svg" name="Pedro Estevão" altS="Um entusiasta da tecnologia e especialista em desenvolvimento de software. Sempre pronto para solucionar problemas e explorar novas ideias, ele combina criatividade e habilidades técnicas para criar soluções eficientes. Pedro é o tipo de pessoa que inspira confiança na equipe com sua dedicação e foco nos detalhes." />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export { HowAre };