import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

const BoxH = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <div className="container w-64 h-80 my-28 text-justify bg-noisefy-50 shadow-custom-purple content-center" >
            <img src="/imgs/caio.svg" alt="" className="w-32 h-32 rounded-full"/>
           
            <h4 className="text-center bold text-lg">Sara Miranda</h4>
            <p><a href="">insta</a> <a href="">git</a> <a href="">portifolio</a></p>
            <p className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque unde aliquid, quam quibusdam temporibus eos rem, incidunt, hic iusto eum magni assumenda inventore aspernatur obcaecati est quos libero impedit ipsum!</p>
        </div>

    );
};

export default BoxH;