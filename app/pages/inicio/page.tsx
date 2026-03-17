import Link from "next/link"
import Image from "next/image"
import { ImagesIcon } from "lucide-react"



export default function Inicio(){
    return(
    <>
    <div className="grid justify-center-safe mt-20 lg:mr-160 px-4 py-8 md:px-20 sm:px-20 lg:px-20 ">
              <div className="text-[30px] text-black font-normal">
            <h2 className="pb-4 w-[500px]">Olá, eu sou Jamesson Lucas</h2>
            </div>
            <div className="text-black text-shadow-lg/30 text-[46px] max-sm:text-5xl sm:text-5xl lg:text-5xl font-bold">
                    <h1 >Desenvolvedor</h1>
                    <div className="flex pl-4">
                            <span className="text-[#ff751f]">&lt;</span><h1 className="">Front-End</h1><span className="text-[#ff751f]">/&gt;</span>
                    </div>
         
            </div>    
    </div>
    <div className="grid text-black justify-center-safe text-[24px]">
        <p>

        </p>
    </div>
    </>

    )
}