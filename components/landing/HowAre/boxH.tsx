import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

const BoxH = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <div className="border-2 border-black container w-60 h-72 my-32">
            <p></p>
            <p><a href="">insta</a> <a href="">git</a> <a href="">portifolio</a></p>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque unde aliquid, quam quibusdam temporibus eos rem, incidunt, hic iusto eum magni assumenda inventore aspernatur obcaecati est quos libero impedit ipsum!</p>

        </div>

    );
};

export default BoxH;