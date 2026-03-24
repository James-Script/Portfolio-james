"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function ContatoForm(formData:FormData) {
    

    const nome = formData.get("nome")
    const tel = formData.get("tel")
    const email = formData.get("email")
    const mensagem = formData.get("mensagem")
 
    try {
        await resend.emails.send({
            from:"Contato <onboarding@resend.dev>",
            to: "jamessonlucas01@gmail.com",
            subject:"Novo contato do Portfólio",
            html:`
        <h2>Novo contato ${nome}.</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${tel}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
          
        })
             } catch (error) {
    console.error(error)
  }  
}
