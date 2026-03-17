import Link from "next/link";
import Image from "next/image";
import Hamburg from "./hamburg";

export default function Header(){
    return(
        //header desktop
            
        <div className="grid grid-cols-[66px_1fr] items-center w-screen max-w-[1080px] ">
            <Link href="/" className=""><Image className="p-4 " src="/jl.png" alt="Logo" width={100} height={70}/></Link>
        <nav className="md:grid grid-cols-[1fr_2px] justify-center mr-[66px] items-center gap-20 hidden ">
          <div className="flex justify-center gap-30">
          <Link href="http://localhost:3000/" className="transition-all duration-300 hover:text-[#ff751f]">Início</Link>
          <Link href="http://localhost:3000/sobre" className="transition-all duration-300 hover:text-[#ff751f]">Sobre</Link>
          <Link href="/projetos" className="transition-all duration-300 hover:text-[#ff751f]">Projetos</Link>
          </div>    
           
          <div className="cursor-pointer transition-all duration-300 bg-white w-24 py-[1.8] hover:bg-[#ff751f] hover:text-white rounded-3xl text-center text-black ml-[-50]"><Link href={'/contato'}><button className="cursor-pointer">Contato</button></Link></div>

     </nav>
                
        {/* header mobile */}
        <div className="">
            <Hamburg />
        </div>
      </div>
    )

}