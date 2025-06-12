// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { nom, email, objet, message } = await request.json()

  // 1) Transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // 2) Envoi du mail
  await transporter.sendMail({
    from: `"Site Contact" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: `Nouveau message de ${nom} – ${objet}`,
    text: `
Nom   : ${nom}
Email : ${email}
Objet : ${objet}

Message :
${message}
    `,
    html: `
      <h2>Nouveau message de <i>${nom}</i></h2>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Objet :</strong> ${objet}</p>
      <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
