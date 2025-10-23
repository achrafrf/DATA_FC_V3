// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { nom, email, objet, message } = await request.json()

    // 1) Configurez le transporteur SMTP
    //    Remplacez les vars d’environnement par vos valeurs
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,        // ex. 'smtp.gmail.com'
      port: Number(process.env.SMTP_PORT),// ex. 587
      secure: false,                      // false pour STARTTLS
      auth: {
        user: process.env.SMTP_USER,      // ex. 'votre@gmail.com'
        pass: process.env.SMTP_PASS,      // mot de passe ou App Password Gmail
      },
    })

    // 2) Envoyez le mail
    await transporter.sendMail({
      from: `"${nom}" <${email}>`,        // expéditeur = nom + email du formulaire
      to: 'datafc2019@gmail.com',         // destinataire fixe
      subject: objet || 'Nouvelle demande via le formulaire',
      text: message,
      html: `<p>${message.replace(/\n/g, '<br/>')}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Erreur envoi mail :', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
