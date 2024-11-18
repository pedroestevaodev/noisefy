import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import BoxH from './boxH';


const HowAre = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <div>
        <div className="container text-noisefy-800 font-bold mb-5 mx-36 text-3xl">
            | Quem somos nós
        </div>
        <div className="grid grid-cols-4 content-center container">
            <BoxH/>
            <BoxH/>
            <BoxH/>
            <BoxH/>
        </div>

        </div>

    );
};

export default HowAre;