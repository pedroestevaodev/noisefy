import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import BoxH from './boxH';


const HowAre = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <div>
        <div className="container text-noisefy-800 font-bold mb-1 mt-4 mx-36 text-3xl">
            | Quem somos nós
        </div>
        <div className="grid grid-cols-4 content-center container">
            <BoxH srcS="imgs/caio.svg" name="Caio Caminitti"/>
            <BoxH srcS="imgs/sergio.svg" name="Sérgio Caminitti"/>
            <BoxH srcS="imgs/sara.svg" name="Sara Miranda"/>
            <BoxH srcS="imgs/pedro.svg" name="Pedro Estevão"/>
        </div>

        </div>

    );
};

export default HowAre;