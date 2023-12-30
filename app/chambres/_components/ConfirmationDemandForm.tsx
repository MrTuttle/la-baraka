//app/chambres/_components/ConfirmationDemandForm.tsx
import { Resend } from "resend";
import ConfirmationDemand from "@/emails/ConfirmationMail";

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
      subject: "Demande de réservation",
      html: "<p>Hello from Next Js</p>",
      // react: <ConfirmationMail title={room.title} roomId={room.id} />,
      react: (
        <ConfirmationDemand
          title={bookedDaysToEmail}
          roomId={roomId}
          // bookedDaysToEmail={title}
        />
      ),
    });

    console.log("datas", data);
    console.log(title, roomId, bookedDaysToEmail);
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
