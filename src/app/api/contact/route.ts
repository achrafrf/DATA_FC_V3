// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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
  }
}
