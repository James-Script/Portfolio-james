import Link from "next/link"

export default function NotFound(){
    return(
        <>
            <div className="grid mt-20 justify-center text-white ">
                <h1 className="text-5xl lg:px-20">Página 404 não encontrada!</h1>
                <p className="text-4xl justify-self-center pb-6">Essa página não existe!</p>
                <Link href={'/'} className="text-2xl justify-self-center">Voltar para a home.</Link>
            </div>
        </>
    )

}