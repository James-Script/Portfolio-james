import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header(){
    return(
        //header desktop
            
        <div className="grid grid-cols-[66px_1fr] items-center w-screen max-w-[1080px] ">
                  <Image className="p-4 "
        src="/jl.png"
        alt="Logo"
        width={100}
        height={70}
      />
        <nav className="md:grid grid-cols-[1fr_2px] justify-center mr-[66px] items-center gap-20 hidden ">
          <div className="flex justify-center gap-20">
          <Link href="#" className="hover:text-[#ff751f]">Início</Link>
          <Link href="#" className="hover:text-[#ff751f]">Sobre</Link>
          <Link href="#" className="hover:text-[#ff751f]">Projetos</Link>
          </div>    
          <div className="cursor-pointer bg-white w-24 py-[1.8] hover:bg-[#ff751f] hover:text-white rounded-3xl text-center text-black ml-[-50]"><button className="cursor-pointer">Contato</button></div>
        </nav>
        {/* header mobile */}
        <div className="grid md:hidden justify-end mr-10 ">
            <nav className=""><Menu /></nav>
        </div>
      </div>
    )

}