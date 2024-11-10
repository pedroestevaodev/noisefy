import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import perguntasData from '@/public/perguntas.json';
import React from "react";

type BoxProps = {
    titulo1: string,
    titulo2: string,
    conteudo1: string,
    conteudo2: string
    
}


const Box: React.FC<BoxProps> =({titulo1, titulo2, conteudo1, conteudo2}) => {
const index = 0;
    return (
                <div >
                    <div key={index} className="ml-6 container inline-block gap-4 w-98 h-32 justify-center items-center content-start break-all">
                        <h3  className="text-noisefy-800 font-bold text-2xl">{titulo1}</h3>
                        <img src="/imgs/traco-inferior.svg" alt="" />
                        <p>{conteudo1}</p>
                    </div>
                    
                    <div key={index+1}className="ml-6 container w-98 grid inline-block h-48 justify-center items-center content-start inline-block break-all">
                        <h3 className="text-noisefy-700 font-bold text-2xl" >{titulo2}</h3>
                        <img src="/imgs/traco-inferior.svg" alt="" />
                        <p>{conteudo2}</p>
                    </div>
                
                </div>
                )
      

    

}

export default Box;