import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

function Valores(){
    return(
        <section className="w-auto h-[100vh] flex justify-center items-start bg-noisefy-500 mt-20">
            <div className="flex flex-col">
                <h1 className="text-white text-center font-bold tracking-wide text-5xl mt-12 mb-12" >Nossos Valores</h1>
                <div className="flex justify-around items-center gap-32 h-auto w-[70w] ">
                    <article className="h-[70vh] w-[25vw] bg-noisefy-900 rounded-3xl flex justify-start items-center flex-col">
                        <h3 className="text-3xl font-semibold text-white mt-7 mb-7">Light Plan</h3>
                        <p className="text-white"><span className="text-gray-600 line-through font-bold text-base">R$ 5,99</span><span className="font-bold text-6xl ml-3">R$ 1,99</span><span className="">/Mês</span></p>
                    </article>
                    <article className="h-[70vh] w-[25vw] bg-noisefy-900 rounded-3xl flex justify-start items-center flex-col">
                        <h3 className="text-3xl font-semibold text-white mt-7 mb-7">Pro Plan</h3>
                        <p className="text-white"><span className="text-gray-600 line-through">R$ 5,99</span><span className="">R$ 1,99</span><span className="">/Mês</span></p>
                    </article>
                </div>
            </div>
        </section>
    )
}


export default Valores;