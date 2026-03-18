import Link from "next/link"
import Image from "next/image"
import { ImagesIcon } from "lucide-react"



export default function Inicio(){
    return(
    <>
    <div className="grid grid-cols-[360px_1fr] px-2 w-full mt-20 md:px-20 max-w-[1080px] text-center md:text-left mx-auto ">
              <div className="text-black font-normal">
            <h2 className="text-lg md:text-xl">Olá, eu sou Jamesson Lucas</h2>
             <div className="text-black text-shadow-lg/30 text-3xl md:text-5xl font-bold">
                    <h1 >Desenvolvedor</h1>
                    <div className="flex md:justify-start justify-center ">
                            <span className="text-[#ff751f]">&lt;</span><h1 className="">Front-End</h1><span className="text-[#ff751f]">/&gt;</span>
                    </div>
         
            </div>    
    <div className="grid w-full mt-10 text-[16px] leading-tight px-6 max-w-[1080px] text-center md:text-left mx-auto text-black">
       <p className="">
        Interfaces modernas, rápidas e responsivas,
        focadas em performance, experiência do usuário
        e código bem estruturado.
                </p>

                <p className="">
                <br></br>React • Next.js • TypeScript • Tailwind • Wordpress
                </p>

        <div className="flex justify-center md:justify-start">
       <Link href={`/projetos`}> <button className="cursor-pointer  md:text-left mt-10 transition delay-150
        duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <span className="text-[#ff751f] ">[</span>ver projetos<span className="text-[#ff751f]">]</span>
        </button></Link>
        
        <div className="md:flex ml-4 grid justify-center gap-2 mt-6 ">
                <Link className="" href={`https://github.com/James-Script`}>
             <Image
            className=""
            src="/github.png"
            alt="Logo"
            width={44}
            height={44}>
         </Image>   
        </Link>

               
                <Link href={`https://www.linkedin.com/in/jamesson-lucas-78b594207/`}>
                <Image
                className=""
                src="/linkedin.png"
                alt="Logo"
                width={44}
                height={44}>
         </Image>   
        </Link>

        <Link href={`https://www.instagram.com/james.marinh0/`}>
        <Image
        className=""
        src="/instagram.png"
        alt="Logo"
        width={44}
        height={44}>
        </Image>   
        </Link>

         </div>
        </div>
        </div>

            </div>
           
        <Image
        className="" 
        src="/jl.png"
        width={44}
        height={44}
        >
        </Image>
 
    </div>
    </>

    )
}