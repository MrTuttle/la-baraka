"use client";
//app/components/DialogRoomRequest/DialogRoomRequest.tsx

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
import { HiMiniXMark } from "react-icons/hi2";

// server actions from MarkBooked
import { postGuest } from "@/app/actions/MarkBooked";

import { MdLocalPhone } from "react-icons/md";

import "./styles.css";

type UserRoom = {
  name: string;
  firstName: string;
  phone: string;
  email: string;
};
interface Props {
  title: string;
  roomId: number;
  bookedDaysToEmail: string;
  // bookedDayStart: Date;
  checkIn: Date;
  checkOut: Date;

  // onSubmit: (formData: FormData) => void;
  // onClick: (event: React.MouseEvent) => void;
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

// const DialogRoomRequest = ({ guest }: { guest?: UserRoom }) => {
const DialogRoomRequest3 = ({
  roomId,
  bookedDaysToEmail,
  checkIn,
  checkOut,
}: // onClick,
Props) => {
  const [checkInFromPage, setCheckInFromPage] = useState<Date>(checkIn);
  const handleClick = (event: React.MouseEvent) => {
    console.log("CLICK");
    console.log("currentTarget : ", event.currentTarget);
    console.log("type :", event.type);
    console.log("target :", event.target);
    console.log("STATE DATE ON CLICK :", checkIn);
    console.log("STATE DATE ON CLICK :", checkInFromPage);
  };

  console.log("booked days action (date to string):", bookedDaysToEmail);
  // console.log("booked day start (date)", bookedDayStart);
  console.log("booked day start (date)", checkIn);

  // if (bookedDaysToEmail) {
  // }
  // let startDateToDb = new Date(bookedDaysToEmail);

  // console.log("startDateToDb :", startDateToDb, typeof startDateToDb);
  // console.log("startDateToDb Type : ", typeof startDateToDb);

  const addDates = postGuest.bind(null, checkIn, checkOut);
  console.log("ADDDATES", addDates.toString());
  console.log(
    `checkIn in formdata before to postGuest (state not updated!) ${checkIn} - ${checkOut}`,
    addDates
  );

  // const router = useRouter();

  const [open, setOpen] = React.useState(false);

  return (
    <button className="flex align-center gap-2 sm:mx-0 text-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
      <MdLocalPhone />
      <a href="tel:+33749605068">Reserver une table</a>
    </button>
    // <Dialog.Root open={open} onOpenChange={setOpen}>
    //   {/* <p>Texte checkout: {checkOut.toDateString()}</p>
    //   <p>Texte checkin: {checkIn.toDateString()}</p> */}
    //   <Dialog.Trigger asChild>
    //     <button className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
    //       Reserver
    //     </button>

    //   </Dialog.Trigger>
    //   <Dialog.Portal>
    //     <Dialog.Overlay className="DialogOverlay" />
    //     <Dialog.Content className="DialogContent">
    //       <Dialog.Title className="DialogTitle">
    //         Reserver la chambre n°{roomId}
    //       </Dialog.Title>
    //       <Dialog.Description className="DialogDescription">
    //         Nous vous rapellons sous 24 heures pour confirmer votre réservation.
    //         Remplissez l’email si vous préférez être contacté par ce moyen.
    //         dates : {checkIn.toDateString()} - {checkOut.toDateString()}
    //       </Dialog.Description>

    //       <form
    //         action={addDates}
    //         // onSubmit={(event) => {
    //         //   wait().then(() => setOpen(false));
    //         //   event.preventDefault();
    //         // }}
    //       >
    //         <div className="flex pb-4 gap-10 justify-between">
    //           <div>
    //             <input
    //               type="number"
    //               id="roomId"
    //               name="roomId"
    //               // value={checkIn.toDateString()}
    //               defaultValue={roomId}
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-gray-900">
    //             {checkIn.toDateString()}
    //           </label>

    //           <input
    //             type="date"
    //             id={"checkIn"}
    //             name="CheckIn"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           ></input>
    //         </div>

    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-gray-900">
    //             prénom
    //           </label>

    //           <input
    //             type="text"
    //             id="firstName"
    //             name="firstName"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           ></input>
    //         </div>
    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-gray-900">
    //             nom
    //           </label>

    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           ></input>
    //         </div>
    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-gray-900">
    //             tél.
    //           </label>

    //           <input
    //             type="text"
    //             id="phone"
    //             name="phone"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             required
    //           ></input>
    //         </div>
    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-gray-900">
    //             email :
    //           </label>

    //           <input
    //             type="text"
    //             id="email"
    //             name="email"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           ></input>
    //         </div>

    //         {/* <Dialog.Close> */}
    //         <div>
    //           <button
    //             type="submit"
    //             className="my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //             onClick={handleClick}
    //           >
    //             bouton
    //           </button>
    //         </div>
    //         {/* </Dialog.Close> */}
    //       </form>
    //       {/* STOP */}

    //       <Dialog.Close asChild>
    //         <button className="IconButton" aria-label="Close">
    //           {/* <Cross2Icon /> */}
    //           <HiMiniXMark />
    //         </button>
    //       </Dialog.Close>
    //     </Dialog.Content>
    //   </Dialog.Portal>
    // </Dialog.Root>
  );
};

export default DialogRoomRequest3;
