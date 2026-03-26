'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Hamburg() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      {/* botão */}
      <div className="flex md:hidden justify-end w-full relative z-[999]">
        <button onClick={() => setOpen(!open)} className="cursor-pointer ">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-[40] transition-opacity duration-300 md:hidden ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* sidebar */}
      <div
        className={`fixed top-0 right-[-1] h-screen w-[250px] bg-[#f06d05] z-[60] md:hidden
        transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          ></button>
        </div>

        <nav className="flex flex-col items-center gap-6 ml-[-16] mt-12 ">
          <Link
            href={'/'}
            className="w-[82%] rounded-3xl rounded-s-none bg-[#fff8cd] px-4 py-2 text-black shadow-xl transition-all duration-300 hover:bg-[#fbe97d] hover:shadow-2xl"
            onClick={() => setOpen(false)}
          >
            Início
          </Link>

          <Link
            href="/sobre"
            className="w-[82%] rounded-3xl rounded-s-none bg-[#fff8cd] px-4 py-2 text-black shadow-xl transition-all duration-300 hover:bg-[#fbe97d] hover:shadow-2xl"
            onClick={() => setOpen(false)}
          >
            Sobre
          </Link>

          <Link
            href="/projetos"
            className="w-[82%] rounded-3xl rounded-s-none bg-[#fff8cd] px-4 py-2 text-black shadow-xl transition-all duration-300 hover:bg-[#fbe97d] hover:shadow-2xl"
            onClick={() => setOpen(false)}
          >
            Projetos
          </Link>

          <Link href={'/contato'}>
            <button
              className="cursor-pointer mt-8 w-[85%] rounded-3xl bg-[#fff8cd] ml-[16] px-4 py-2 text-black shadow-xl transition-all duration-300 hover:bg-[#fbe97d] hover:shadow-2xl"
              onClick={() => setOpen(false)}
            >
              Contato
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}
