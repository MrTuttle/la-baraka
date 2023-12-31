//app/chambres/_components/ConfirmationDemandForm.tsx
import { Resend } from "resend";
import ConfirmationDemand from "@/emails/ConfirmationDemand";

// interface BookedDay {
//   bookedDay: Date;
// }
interface Props {
  title: string;
  roomId: number;
  bookedDaysToEmail: string;
  // bookedDays: BookedDay[];
  // data: FormData;
}

export default async function ConfirmationDemandForm({
  title,
  roomId,
  bookedDaysToEmail,
}: Props) {
  async function send() {
    "use server";
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "florent.vincerot@me.com", // replace with email argument
      subject: "Demande de réservation pour la Baraka (test)",
      html: "<p>Hello from Next Js</p>",
      // react: <ConfirmationMail title={room.title} roomId={room.id} />,
      react: (
        <ConfirmationDemand
          title={title}
          roomId={roomId}
          reservation={bookedDaysToEmail}
        />
      ),
    });

    console.log("datas (no datas = no mail):", data);
    console.log("datas with the same code id doesn't send twice (cache)");
    console.log(
      "just type something new in subject: or other options to get a different id"
    );
    console.log(
      "ConfirmationDemandForm Props",
      title,
      roomId,
      bookedDaysToEmail
    );
  }
  return (
    <form action={send}>
      <button
        type="submit"
        className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all"
      >
        Send Email
      </button>
      <p>{title}</p>
      <p>{roomId}</p>
      <p>{bookedDaysToEmail}</p>
    </form>
  );
}
