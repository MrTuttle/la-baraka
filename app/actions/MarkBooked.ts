"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

/// test
export async function MarkBooked() {
  const handleStartDay = (startDay: Date) => {
    console.log("START DAY : ", startDay);
  };
  const handleEndDay = (endDay: Date) => {
    console.log("END DAY : ", endDay);
  };
}

///
interface Props {
  title: string;
  roomId: number;
  bookedDaysToEmail: string;
}
export async function postGuest(formData: FormData) {
  const phone = formData.get("phone");
  const firstName = formData.get("firstName");
  const name = formData.get("name");
  const email = formData.get("email");

  await prisma.userRoom.create({
    data: {
      firstName: firstName as string,
      name: name as string,
      phone: phone as string,
      email: email as string,
    },
  });
  revalidatePath("/");
  console.log("GUEST POSTED");

  //  sendEmail(formData);
}

export default async function UserRoomForm({
  title,
  roomId,
  bookedDaysToEmail,
}: Props) {
  const sendEmail = async function send(formData: FormData) {
    const phone = formData.get("phone");
    const firstName = formData.get("firstName");
    const name = formData.get("name");
    const email = formData.get("email");
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (phone) {
      const { data } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "florent.vincerot@me.com", // replace with email argument
        subject: `${firstName} Demande une réservation pour la Baraka (test)"`,
        html: `<p>${firstName} ${name}</p><p>Voudrait que tu rapelle au ${phone}</p>
        <p>Pour confirmer la location de la chambre ${roomId}.</p><p> Aux dates suivantes : ${bookedDaysToEmail}</p>`,
      });
    }
  };
  const addUserRoom = async (formData: FormData) => {
    const phone = formData.get("phone");
    const firstName = formData.get("firstName");
    const name = formData.get("name");
    const email = formData.get("email");

    await prisma.userRoom.create({
      data: {
        firstName: firstName as string,
        name: name as string,
        phone: phone as string,
        email: email as string,
      },
    });
    revalidatePath("/");
    console.log("SENDEMAIL LAUNCHED");

    sendEmail(formData);
  };

  return console.log("server action");
}
