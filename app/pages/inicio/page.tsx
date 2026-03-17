import Link from "next/link"
import Image from "next/image"
import { ImagesIcon } from "lucide-react"



export default function Inicio(){
    return(
    <>
    <div className="grid justify-center mt-20 mr-100 px-4 py-8 md:px-10 lg:px-20 ">
            <div className="text-black text-shadow-lg/30 text-[40px] lg:text-5xl font-bold"><h1>Desenvolvedor</h1><div className="flex"><span className="text-[#ff751f]">&lt;</span><h1>Front-End</h1><span className="text-[#ff751f]">/&gt;</span></div>
           <div className="text-[30px] font-normal"><h2>Jamesson Lucas</h2></div>
                
            </div>
        
    </div>
    </>

    )
}