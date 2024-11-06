import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Box from "./box";


const FAQ = ({ className }: HTMLAttributes<HTMLElement>) => {
    return(
        
        <div className="container w-50 h-97 justify-center items-center content-center border-2 border-black">
            <p>| FAQ</p>
            <Box/>
            <Box/>
        </div>
        
    
    );
};

export default FAQ;