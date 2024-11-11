import { ChildrenProps } from "@/types/nextjs";

const AuthLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="relative flex flex-col bg-[url('/imgs/background-img.png')]">
            <div className="relative flex flex-grow min-h-screen items-center justify-center">
                <div className="flex h-[35rem]">
                    <div className="hidden lg:block bg-noisefy-900 w-[33rem] h-auto rounded-s-xl">   
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <img className="w-[4.2rem] h-[3.5rem] absolute z-0 transform translate-x-[-73px] translate-y-[2px]" src="/imgs/camera-noisefy-purple.png" alt="" />                        
                            <img className="w-[4.2rem] h-[3.5rem] z-10" src="/imgs/camera-noisefy-white.png" alt="" />
                            <h2 className="font-extrabold text-3xl text-white">Noisefy</h2>
                        </div>
                        <div className="flex justify-center h-[500px]">
                            <img  className="self-end scale-90 w-auto h-[442px] mb-10" src="/imgs/img-login.png" alt="Imagem login"/>
                        </div>
                    </div>
                    {children}
                </div>            
            </div>
        </div>
    );
};

export default AuthLayout;