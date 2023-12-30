//app/api/send/route.tsx

import { NextResponse } from "next/server";
import { Resend } from "resend";
import ConfirmationDemand from "@/emails/ConfirmationMail";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "florent.vincerot@me.com", // replace with email argument
      subject: "Demande de réservation",
      html: "<p>Hello from Next Js</p>",
      // react: <ConfirmationMail title={room.title} roomId={room.id} />,
      // react: <ConfirmationDemand />,
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
