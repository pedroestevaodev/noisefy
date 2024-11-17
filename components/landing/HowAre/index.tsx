import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import BoxH from './boxH';


const HowAre = ({ className }: HTMLAttributes<HTMLElement>) => {
    return (
        <div className="border-2 border-black grid grid-cols-4 content-center container">
            <BoxH/>
            <BoxH/>
            <BoxH/>
            <BoxH/>
        </div>

    );
};

export default HowAre;