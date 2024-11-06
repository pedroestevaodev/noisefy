import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

function Box() {
    return (
        <div >
            <div className="ml-12 container w-97 h-48 justify-center items-center content-center border-2 mx-5 my-5 border-black inline-block">
                <h3>Titulo da pergunta</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aperiam blanditiis quam quibusdam fugiat nihil saepe. Architecto quas cumque, praesentium dolore ut alias ipsam libero, error ea aliquam labore quidem.</p>
            </div>
            <div className="ml-12 container w-97 h-48 justify-center items-center content-center border-2 mx-5 my-5 border-black inline-block">
            <h3>Titulo da pergunta</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aperiam blanditiis quam quibusdam fugiat nihil saepe. Architecto quas cumque, praesentium dolore ut alias ipsam libero, error ea aliquam labore quidem.</p>
            </div>
        </div>

    )
}

export default Box;