

import Link from "next/link"
import Image from "next/image"
import { ImagesIcon } from "lucide-react"


export default function Inicio(){
    return(
    <>
    <div className="grid bg-black md:grid-cols-[360px_1fr] w-full pt-20 md:px-20 max-w-[1080px] text-center md:text-left mx-auto">
              <div  className="text-white font-normal">
            <h2 className="text-lg md:text-xl" >Olá, eu sou Jamesson Lucas</h2>
             <div className="text-white text-shadow-lg/30 text-3xl md:text-5xl font-bold" >
                    <h1 className="md:text-[46px]">Desenvolvedor</h1>
                    <div className="flex md:justify-start justify-center ">
                            <span className="text-[#ff751f]">&lt;</span><h1 className="">Front-End</h1><span className="text-[#ff751f]">/&gt;</span>
                    </div>
         
            </div>    
    <div className="grid w-full mt-10 text-[16px] leading-tight px-6 max-w-[1080px] text-center md:text-left mx-auto text-white">
       <p className="font-semibold" >
        Interfaces modernas, rápidas e responsivas,
        focadas em performance, experiência do usuário
        e código bem estruturado.
                </p>

                <p className="font-semibold mb-10">
                <br></br>React • Next.js • TypeScript • Tailwind • Wordpress
                </p>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-4">
       <Link
  href="/projetos"
  className="hover:drop-shadow-xl/40 w-fit font-bold leading-none cursor-pointer md:text-left transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
>
  <span className="text-[#ff751f]">[</span>
  ver projetos
  <span className="text-[#ff751f] ">]</span>
</Link>
        <div className="flex  md:ml-4 justify-center gap-4 mt-6 mb-8 ">
                <Link href={`https://github.com/James-Script`}>
             <Image
            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
            src="/github.png"
            alt="Logo"
            width={44}
            height={44}>
         </Image>   
        </Link>

               
                <Link href={`https://www.linkedin.com/in/jamesson-lucas-78b594207/`}>
                <Image
                className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
                src="/linkedin.png"
                alt="Logo"
                width={44}
                height={44}>
         </Image>   
        </Link>

        <Link href={`https://www.instagram.com/james.marinh0/`}>
        <Image
        className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
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
           <div className="relative">
           <div className="absolute inset-0 md:flex hidden bg-[url('/image-james.jpg')] bg-center bg-cover h-100 justify-center grid items-center md:ml-40">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black ">
        {/* <Image
        className="md:flex justify-self-center md:w-[340px]" 
        src="/image-james.jpg"
        alt="logo-inicio"
        width={400}
        height={70}
        >
        </Image> */}
        </div>
        </div>

        </div>
    </div>
    </>

    )
}