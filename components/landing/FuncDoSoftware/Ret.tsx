import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import perguntasData from '@/public/perguntas.json';
import React from "react";

type RetPropos = {
    titulo: string,
    img: string,
    conteudo: string,    
}

const Ret: React.FC <RetPropos >= ({titulo,img,conteudo}) => {
    return (
            <div className="w-auto h-[14rem] relative bg-purple-500 text-white sm:p-6 shadow-lg flex-row items-center justify-between rounded-xl">
                <div className="container inline-block gap-4 w-98 h-32 justify-center items-center content-start break-all">
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="text-lg sm:text-xl font-bold mb-2">
                            {titulo}
                        </h2>
                        <img
                            src={img}
                            className="w-8 h-8 sm:w-20 sm:h-20 lg:w-16 lg:h-16"
                        />
                    </div>
                    <p className="text-lg text-justify">
                        {conteudo}
                    </p>
                </div>
            </div>
    )
}

export default Ret;