// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactBody {
  nom: string
  email: string
  objet?: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json()
    const { nom, email, objet, message } = body

    // إعداد transporter مع خيارات متعددة
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASSWORD,
      },
    })

    // إرسال البريد الإلكتروني
    await transporter.sendMail({
      from: `"${nom}" <${email}>`,
      to: 'datafc2019@gmail.com',
      subject: objet || 'Nouvelle demande via le formulaire',
      text: message,
      html: `
        <h2>Message de ${nom}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Objet:</strong> ${objet || 'Non spécifié'}</p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ ok: true, message: 'Success' }, { status: 200 })
  } catch (err) {
    console.error('Erreur envoi mail:', err)
    return NextResponse.json({ 
      ok: false, 
      message: 'Failed to send email' 
    }, { status: 500 })
  }
}