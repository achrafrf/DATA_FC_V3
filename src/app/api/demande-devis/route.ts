import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  nom: string
  email: string
  societe?: string
  rc: string
  telephone: string
  prestation: string
  civility:string
  prenom: string
  profession: string
  message: string
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json()

    await transporter.sendMail({
      from: `"${body.nom}" <${body.email}>`,
      to: 'datafc2019@gmail.com',
      subject: `🧾 Nouvelle demande de devis de ${body.societe || "Client"}`,
      html: `
        <h2>Demande de devis</h2>
        <p><strong>Société / Particulier :</strong> ${body.societe}</p>
        <p><strong>RC / CIN :</strong> ${body.rc}</p>
        <p><strong>Téléphone :</strong> ${body.telephone}</p>
        <p><strong>Prestation demandée :</strong> ${body.prestation}</p>
        <p><strong>Civilité :</strong> ${body.civility}</p>
        <p><strong>Prénom :</strong> ${body.prenom}</p>
        <p><strong>Nom :</strong> ${body.nom}</p>
        <p><strong>Profession :</strong> ${body.profession}</p>
        <p><strong>Email :</strong> ${body.email}</p>
        <p><strong>Message / Détails :</strong></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}