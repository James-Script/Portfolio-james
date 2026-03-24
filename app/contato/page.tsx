'use client'

import { IMaskInput } from "react-imask";
import Link from "next/link";
import Image from "next/image";
import { ContatoForm } from "@/app/contato/action";
import { useState } from "react";

export default function Contato(){

    const [phone, setPhone] = useState("");

  function formatPhone(value) {
    value = value.replace(/\D/g, ""); // remove tudo que não é número

    if (value.length <= 10) {
      // telefone fixo
      value = value.replace(/^(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      // celular (com 9 dígitos)
      value = value.replace(/^(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }

    return value;
  }

  function handleChange(e) {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  }

    return(
        <>

        {/* Título Contato e informações do Email e Rede sociais */}

        <div className="grid md:grid-cols-2 pt-[76px] md:px-20 max-w-[1080px] mx-auto justify-center">
        <div className="grid w-full mx-auto">
            <h1 className="text-5xl md:justify-self-start justify-self-center md:text-5xl font-bold text-white">
                Contato
            </h1>
        <div>
            <h2 className="flex text-xl px-20 pt-8 md:px-0 justify-self-center md:justify-self-start font-semibold">Email:</h2>

            <p className="flex text-lg px-20 justify-self-center md:px-0 md:justify-self-start font-light text-white">
            jamessonlucas01@gmail.com
            </p>

            <h2 className="flex text-xl px-20 md:px-0 pt-8 justify-self-center md:justify-self-start font-semibold">Redes Sociais:</h2>
           
           {/* Icones de redes sociais */}

        <div className="flex px-20 md:px-0 gap-4 mt-6 mb-8 justify-self-center md:justify-self-start">
            <Link href={`https://github.com/James-Script`}>
                <Image
                className="transition duration-300 ease-in-out invert brightness-0 contrast-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
                src="/github.png"
                alt="Logo"
                width={44}
                height={44}>
                </Image>   
            </Link>

               
            <Link href={`https://www.linkedin.com/in/jamesson-lucas-78b594207/`}>
                <Image
                className="transition duration-300 ease-in-out invert brightness-0 contrast-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
                src="/linkedin.png"
                alt="Logo"
                width={44}
                height={44}>
                </Image>   
            </Link>

            <Link href={`https://www.instagram.com/james.marinh0/`}>
                <Image
                className="transition duration-300 ease-in-out invert brightness-0 contrast-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
                src="/instagram.png"
                alt="Logo"
                width={44}
                height={44}>
                </Image>   
            </Link>

        </div>
        </div>
        </div>

                {/* Forms para Entrar em Contato */}

        <div className="flex px-0 w-70 md:w-auto justify-self-center md:justify-self-end">
            <div className="bg-white w-100 h-110 rounded-[40px] border-[2px] border-gray-200">
                <h2 className="justify-self-center text-black font-semibold py-4 text-xl">Entre em Contato</h2>
                <form action={ContatoForm} className="grid gap-[8px] px-6 py-2">
                    <label htmlFor="" className=" text-black text-[14px]">Nome completo</label>
                    <input type="text" id="name" name="nome" autoComplete="on" required className="rounded-sm bg-[#F0F0F0] border-[1px] transition duration-300 ease-in-out hover:border-[#FF751F] border-gray-200 text-black pl-2 focus:outline-1 placeholder:text-gray-500 focus:outline-[#FF751F]" placeholder="Nome"></input>
                    
                    <label htmlFor="" className="text-black text-[14px]">Telefone</label>
                    <input type="tel" value={phone} onChange={handleChange} placeholder="(00) 00000-0000" id="tel" name="tel" autoComplete="on" required className="rounded-sm bg-[#F0F0F0] border-[1px] transition duration-300 pl-2 ease-in-out hover:border-[#FF751F] border-gray-200 text-black focus:outline-1 placeholder:text-gray-500 focus:outline-[#FF751F]"></input>
              
                    <label htmlFor="" className="text-black text-[14px]">Email</label>
                    <input type="email" id="email" name="email" autoComplete="on" required className="rounded-sm bg-[#F0F0F0] border-[1px] transition duration-300 ease-in-out hover:border-[#FF751F] border-gray-200 text-black pl-2 focus:outline-1 placeholder:text-gray-500 focus:outline-[#FF751F]" placeholder="Email"></input>
                   
                   <label htmlFor="" className="text-black text-[14px]">Mensagem</label>
                   <textarea name="mensagem" id="mensagem" autoComplete="off" placeholder="Mensagem" className="rounded-sm resize-none border-[1px] bg-[#F0F0F0] border-gray-200 text-black pl-2 placeholder:text-gray-500 focus:outline-1 focus:outline-[#FF751F]"></textarea>
                   
                   <button type="submit" className="block bg-[#FF751F] cursor-pointer mt-4 rounded-4xl py-[6px] hover:bg-[#E45800] transition duration-300 ease-in-out hover:scale-104">Enviar</button>
                </form>
                
            </div>
        </div>
      </div>
        </>
    )
}