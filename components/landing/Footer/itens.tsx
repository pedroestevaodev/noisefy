import Icons from "@/components/common/Icons";
import ModeToggle from "@/components/common/ModeToggle";
import { footerLinks, socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { string } from 'zod';
import React from 'react';
import { Item } from "@radix-ui/react-dropdown-menu";
import ReactNode from 'react';
import Image from 'next/image';


type ItensProps = {
  srcS?: string[],
  altS?: string,
  w? : number,
  h? : number,
  item: string[],
  quant: number,
  link: string[]

}
const Itens: React.FC<ItensProps> = ({ srcS, altS, w, h, item, quant, link }) => {

  if (srcS && altS) {
    return (
      <ul className="text-xs font-normal ">
        {Array.from({ length: quant }, (_, index) => (
          <li className="my-3 hover:text-noisefy-100 cursor-pointer" key={index}>{<a href={link[index]}> <Image className="inline-block" src={srcS[index]} alt={altS} width={w} height={h}/>  {item[index]}</a>} </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="text-xs font-normal ">
        {Array.from({ length: quant }, (_, index) => (
          <li className="my-3 hover:text-noisefy-100 cursor-pointer flex" key={index}>{<a href={link[index]}>  {item[index]}</a>} </li>
        ))}
      </ul>
    );
  }
}

export default Itens;

