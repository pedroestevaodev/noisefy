import React from 'react';


type ItensProps = {
    srcS?: string,
    altS?: string,
    name?: string,
  
  }

const BoxH : React.FC<ItensProps> = ({ srcS, altS, name }) =>  {
    return (
        <div className="container w-64 h-auto text-justify bg-noisefy-50 shadow-custom-purple items-center flex flex-col" >
            <img className="mx-auto w-28 h-28 mt-4" src={srcS} alt=""/>
            <h4 className="text-center text-black font-semibold text-2xl">{name}</h4>
            <p className="text-pink-500 text-center text-sm">Programador</p>
            <div className="text-verde-100 w-52 flex items-center justify-around text-xs gap-0 text-start mt-4"><img src="/imgs/instagramverde.svg" alt="" /> <img src="/imgs/github.svg" alt="" />  <img src="/imgs/pasta.svg" alt="" /></div>
            <p className="text-xs mt-5 mb-4 dark:text-black">{altS}</p>
        </div>

    );
};

export default BoxH;