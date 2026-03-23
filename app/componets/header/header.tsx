"use client";

import Link from "next/link";
import Image from "next/image";
import Hamburg from "./hamburg";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

  return (
    <header className="w-full bg-black">
      <div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-4">
        <Link href="/">
          <Image
            className="h-auto w-auto"
            src="/jl.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8 ">
            <Link
              href="/"
              className={`transition-all duration-300 border-b-2 py-3
            ${pathname === "/"
            ? "text-[#ff751f] border-[#ff751f]"
                : "text-white border-transparent hover:text-[#ff751f] hover:border-[#ff751f]"}`}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className={`transition-all duration-300 border-b-2 py-3
            ${pathname === "/sobre" ? "text-[#ff751f] border-[#ff751f]" 
                : "text-white border-transparent hover:text-[#ff751f] hover:border-[#ff751f]"}`}
            >
              Sobre
            </Link>
            <Link
              href="/projetos"
              className={`transition-all duration-300 border-b-2 py-3
                ${pathname === "/projetos"
                ? "text-[#ff751f] border-[#ff751f]"
                : "text-white border-transparent hover:text-[#ff751f] hover:border-[#ff751f]"}`}
            >
              Projetos
            </Link>
          </div>

          <Link
            href="/contato"
            className="rounded-3xl transition delay-150 duration-300 ease-in-out hover:scale-110 bg-white px-6 py-1 text-center text-black transition-all duration-300 hover:bg-[#ff751f] hover:text-white"
          >
            Contato
          </Link>
        </nav>

        <div className="md:hidden">
          <Hamburg />
        </div>
      </div>
    </header>
  );
}