// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

<<<<<<< HEAD
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
=======
interface ContactBody {
  nom: string
  email: string
  objet?: string
  message: string
}

// إعداد transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json()

    await transporter.sendMail({
      from: `"${body.nom}" <${body.email}>`, 
      to: 'datafc2019@gmail.com',      
      subject: body.objet || 'Nouveau message de contact',
      html: `<h2>Message de ${body.nom}</h2>
             <p><strong>Email:</strong> ${body.email}</p>
             <p>${body.message}</p>`,
    })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ message: 'Failed' }, { status: 500 })
>>>>>>> c7acffa889f181f95a4049eadcca8e3e15bfe577
  }
}
