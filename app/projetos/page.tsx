export default function Projetos() {
  return (
    <>
      <div className="grid w-full pt-[76px] md:px-20 max-w-[1080px] mx-auto">
        <h1 className="text-5xl md:justify-self-start justify-self-center md:text-5xl font-bold text-white">
          Projetos
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-30 md:px-20 max-w-[1080px] mx-auto mt-10">
        
        {/* CARD */}
        <div className="bg-gradient-to-b from-[#F5F5F5] via-[#F2B47B] to-[#F2B47B] rounded-3xl hover:scale-105 transition duration-300 ">
          
          {/* IMAGEM */}
          <div className="bg-white rounded-2xl rounded-b-none overflow-hidden ">
            <img
              src="/projeto1.png"
              alt="Projeto"
              className="w-full h-[140px] object-cover hover:scale-105 transition duration-300 cursor-pointer"
            />
          </div>

          {/* TEXTO */}
          <div className="mt-2 pb-28 px-4 text-left text-white">
            <p className="text-sm text-center leading-tight">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>

        </div>

        
        <div className="bg-gradient-to-b from-[#F5F5F5] via-[#F2B47B] to-[#F2B47B] rounded-3xl hover:scale-105 transition duration-300">
          <div className="bg-white rounded-2xl rounded-b-none overflow-hidden">
            <img
              src="/projeto1.png"
              alt="Projeto"
              className="w-full h-[140px] object-cover hover:scale-105 transition duration-300 cursor-pointer"
            />
          </div>
          <div className="mt-2 pb-28 px-4 text-left text-white">
            <p className="text-sm text-center leading-tight">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#F5F5F5] via-[#F2B47B] to-[#F2B47B] rounded-3xl hover:scale-105 transition duration-300">
          <div className="bg-white rounded-2xl rounded-b-none overflow-hidden">
            <img
              src="/projeto1.png"
              alt="Projeto"
              className="w-full h-[140px] object-cover hover:scale-105 transition duration-300 cursor-pointer"
            />
          </div>
          <div className="mt-2 pb-28 px-4 text-left text-white">
            <p className="text-sm text-center leading-tight">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}