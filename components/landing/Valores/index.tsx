import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

function Valores(){
    return(
        <section className="w-auto h-[100vh] flex justify-center items-start bg-noisefy-500 mt-20">
            <div className="flex flex-col">
                <h1 className="text-white text-center font-bold tracking-wide text-5xl pb-4 mt-12 mb-12" >Nossos Valores</h1>
                <div className="flex justify-around items-center h-[70vh] gap-32">
                    <article className="h-[70vh] w-[30vw] bg-black">

                    </article>
                    <article className="h-[70vh] w-[30vw] bg-black">

                    </article>
                </div>
            </div>
        </section>
    )
}


export default Valores;