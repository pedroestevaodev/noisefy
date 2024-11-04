import Icons from "@/components/common/Icons";
import ModeToggle from "@/components/common/ModeToggle";
import { footerLinks, socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { string } from 'zod';
import React from 'react';
import { Item } from "@radix-ui/react-dropdown-menu";


type ItensProps = {
    item : any[],
    quant : number,
    link: string[]

}
const Itens: React.FC<ItensProps> = ({item, quant, link}) =>{

const listItens = Array.from({ length: quant }, (_, index) => (
    <li className="my-3 hover:text-noisefy-100 cursor-pointer" key={index}>{<a href={link[index]}>{item[index]}</a>} </li>
  ));

  return(
    <ul className="text-xs font-normal ">
        {listItens}
    </ul>
    
  );
}

export default Itens;

