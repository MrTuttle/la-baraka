// import WelcomeTemplate from "@/emails/WelcomeTemplate";
import ConfirmationMail from "@/emails/ConfirmationMail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "florent.vincerot@me.com",
    subject: "Demande de réservation",
    // html: "<p>Congrats on sending your <strong>Third email</strong>!</p>",
    react: <ConfirmationMail name="Flo" />,
  });
  return NextResponse.json({});
}
