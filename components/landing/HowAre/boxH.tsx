import { cn } from "@/lib/utils";
import Image from "next/image";
import Icons from "@/components/common/Icons";
import ModeToggle from "@/components/common/ModeToggle";
import { footerLinks, socialLinks } from "@/config/site";
import Link from "next/link";
import React from 'react';


type ItensProps = {
    srcS?: string,
    altS?: string,
    name?: string,
  
  }

const BoxH : React.FC<ItensProps> = ({ srcS, altS, name }) =>  {
    return (
        <div className="container w-64 h-80 my-28 text-justify bg-noisefy-50 shadow-custom-purple items-center flex flex-col" >
            <img className="mx-auto w-28 h-28 mt-2" src={srcS} alt=""/>
            <h4 className="text-center font-semibold text-2xl">{name}</h4>
            <p className="text-pink-500 text-center text-sm">Programador</p>
            <div className="text-verde-100 w-52  columns-6 text-xs gap-0 text-start "><img src="/imgs/instagramverde.svg" alt="" /><a href="">insta</a> <img src="/imgs/github.svg" alt="" /> <a href="">git</a> <img src="/imgs/pasta.svg" alt="" /><a href="">portifolio</a></div>
            <p className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque unde aliquid, quam quibusdam temporibus eos rem, incidunt, hic iusto eum magni assumenda inventore aspernatur obcaecati est quos libero impedit ipsum!</p>
        </div>

    );
};

export default BoxH;