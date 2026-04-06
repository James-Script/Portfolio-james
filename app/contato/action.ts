'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function ContatoForm(formData: FormData) {
  const nome = formData.get('nome') as string;
  const nomeFormatado =
    nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  const tel = formData.get('tel');
  const email = formData.get('email');
  const mensagem = formData.get('mensagem');

  console.log("Nome: ", (nomeFormatado));
  console.log("Telefone: ", (tel));
  console.log("Email: ", (email));
  console.log("Mensagem: ", (mensagem));

  try {
    await resend.emails.send({
      from: `Contato | ${nomeFormatado} <onboarding@resend.dev>`,
      to: 'jamessonlucas01@gmail.com',
      subject: 'Novo contato do Portfólio',
      replyTo: email as string,
      html: `
        <h2>Novo contato ${nomeFormatado}.</h2>
        <p><strong>Nome:</strong> ${nomeFormatado}</p>
        <p><strong>Telefone:</strong> ${tel}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    await resend.emails.send({
      from: 'Jamesson | Portfólio <onboarding@resend.dev>',
      to: email as string,
      subject: 'Recebemos sua mensagem!',
      html: `
      <h2>Fala, ${nome}.</h2>
      <p>Recebi sua mensagem e já vou te responder.</p>
      <p>Em breve entro em contato!</p>
    `,
    });
  } catch (error) {
    console.error(error);
  }
}
