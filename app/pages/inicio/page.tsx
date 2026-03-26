import Link from 'next/link';
import Image from 'next/image';
import { ImagesIcon } from 'lucide-react';

export default function Inicio() {
  return (
    <>
      <div className="grid md:grid-cols-2 w-full pt-[76px] md:px-10 max-w-[1080px] justify-center text-center md:text-left mx-auto">
        <div className="text-white font-normal  z-9 pt-10">
          <h2 className="text-[12px] md:text-xl justify-self-start ">
            Olá, eu sou Jamesson Lucas
          </h2>
          <div className="text-white text-shadow-lg/30 text-[20px] md:text-5xl justify-self-start font-bold">
            <h1 className="md:text-[46px]">Desenvolvedor</h1>
            <div className="flex md:justify-start justify-center ">
              <span className="text-[#ff751f]">&lt;</span>
              <h1 className="">Front-End</h1>
              <span className="text-[#ff751f]">/&gt;</span>
            </div>
          </div>
          <div className="grid w-full py-4 md:py-10 justify-items-start text-[10px] md:text-sm leading-tight max-w-[1080px] text-left text-white">
            <p className="font-semibold w-80 md:w-120">
              Interfaces modernas, rápidas e responsivas, focadas em
              performance, experiência do usuário e código bem estruturado.
            </p>

            <p className="font-semibold text-[10px] md:text-sm py-4">
              <br></br>React • Next.js • TypeScript • Tailwind • Wordpress
            </p>

            <div className="flex flex-col md:flex-row  md:items-center justify-start gap-4">
              <Link
                href="/projetos"
                className="hover:drop-shadow-xl/40 w-fit font-bold leading-none cursor-pointer 
                        md:text-left transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                <span className="text-[#ff751f]">[</span>
                ver projetos
                <span className="text-[#ff751f] ">]</span>
              </Link>
              <div className="flex md:ml-4 justify-center gap-4 ">
                <Link href={`https://github.com/James-Script`}>
                  <Image
                    className="transition duration-300 md:w-[44px] ease-in-out invert brightness-0 contrast-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
                    src="/github.png"
                    alt="Logo"
                    width={34}
                    height={44}
                  ></Image>
                </Link>

                <Link
                  href={`https://www.linkedin.com/in/jamesson-lucas-78b594207/`}
                >
                  <Image
                    className="transition duration-300 md:w-[44px] ease-in-out invert brightness-0 contrast-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
                    src="/linkedin.png"
                    alt="Logo"
                    width={34}
                    height={44}
                  ></Image>
                </Link>

                <Link href={`https://www.instagram.com/james.marinh0/`}>
                  <Image
                    className="transition duration-300 md:w-[44px] ease-in-out invert brightness-0 contrast-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl/40"
                    src="/instagram.png"
                    alt="Logo"
                    width={34}
                    height={44}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:relative">
          <div className="absolute opacity-[0.6] md:opacity-90 inset-0 flex bg-[url('/image-james.jpg')] md:w-94 w-screen bg-center bg-cover md:h-100 sm:h-120 h-100 justify-self-center md:justify-self-end ">
            <div className="absolute inset-0  md:bg-gradient-to-r bg-gradient-to-t from-black md:via-transparent via-black/50 md:to-black h-100 sm:h-122 to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
}
