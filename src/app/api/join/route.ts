import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prenom, nom, email, telephone, ville, message } = body;

    // Vérification basique
    if (!prenom || !nom || !email || !ville) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configuration Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || '"Mouvement Politique" <no-reply@mouvement.com>',
      to: process.env.SMTP_TO || process.env.SMTP_USER || 'contact@mouvement.com',
      replyTo: email,
      subject: `Nouvelle adhésion : ${prenom} ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #1d4ed8;">Nouvelle demande d'adhésion au mouvement</h2>
          <p>Une nouvelle personne souhaite rejoindre le mouvement. Voici ses informations :</p>
          <hr style="border-top: 1px solid #e2e8f0; border-bottom: none; my: 20px;" />
          <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 10px;"><strong>Prénom & Nom :</strong> ${prenom} ${nom}</li>
            <li style="margin-bottom: 10px;"><strong>Email :</strong> <a href="mailto:${email}">${email}</a></li>
            <li style="margin-bottom: 10px;"><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</li>
            <li style="margin-bottom: 10px;"><strong>Ville :</strong> ${ville}</li>
          </ul>
          <h3>Motivations :</h3>
          <p style="background-color: #f1f5f9; padding: 15px; border-radius: 4px;">
            ${message ? message.replace(/\n/g, "<br>") : "<em>Non renseigné</em>"}
          </p>
        </div>
      `,
    };

    // Si les identifiants SMTP ne sont pas configurés (comme en mode dev), on simule l'envoi
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Mocking email sending (No SMTP credentials configured):", mailOptions);
      // Simuler une petite latence réseau
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
