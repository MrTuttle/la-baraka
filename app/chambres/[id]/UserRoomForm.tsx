import DialogRoomRequest from "@/app/components/DialogRoomRequest/DialogRoomRequest";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

import { Resend } from "resend";
import ConfirmationDemand from "@/emails/ConfirmationDemand";

interface Props {
  title: string;
  roomId: number;
  bookedDaysToEmail: string;
}

export default async function UserRoomForm({
  title,
  roomId,
  bookedDaysToEmail,
}: Props) {
  const sendEmail = async function send(formData: FormData) {
    "use server";
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
        // react: <ConfirmationMail title={room.title} roomId={room.id} />,
        // react: (
        //   <ConfirmationDemand
        //     title={title}
        //     roomId={roomId}
        //     reservation={bookedDaysToEmail}
        //     phone={phone}
        //   />
        // ),
      });
    }
    // console.log("JE SUIS PASSÉ PAR LA");

    // console.log("datas (no datas = no mail):", data);
    // console.log("datas with the same code id doesn't send twice (cache)");
    // console.log(
    //   "just type something new in subject: or other options to get a different id"
    // );
    // console.log(
    //   "ConfirmationDemandForm Props",
    //   title,
    //   roomId,
    //   bookedDaysToEmail
    // );
  };
  // const userRooms = await prisma.userRoom.findMany();
  const addUserRoom = async (formData: FormData) => {
    "use server";
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

  return (
    <>
      <DialogRoomRequest
        onSubmit={addUserRoom}
        // onClick={sendEmail}
        title={title}
        roomId={roomId}
        bookedDaysToEmail={bookedDaysToEmail}
      />
      {/* <form action={addUserRoom}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            prénom
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            nom
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            tél.
          </label>

          <input
            type="text"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            email :
          </label>

          <input
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          bouton
        </button>
      </form> */}
    </>
  );
}
