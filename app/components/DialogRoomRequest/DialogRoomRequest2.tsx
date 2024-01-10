"use client";
//app/components/DialogRoomRequest/DialogRoomRequest.tsx

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
import { HiMiniXMark } from "react-icons/hi2";

// server actions from MarkBooked
import { postGuest } from "@/app/actions/MarkBooked";

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
const DialogRoomRequest2 = ({
  title,
  roomId,
  bookedDaysToEmail,
  checkIn,
  checkOut,
}: // onClick,
Props) => {
  const name = "Fischer";
  const firstName = "Bobby";
  const handleClick = (event: React.MouseEvent) => {
    console.log("CLICK");
    console.log("currentTarget : ", event.currentTarget);
    console.log("type :", event.type);
    console.log("target :", event.target);
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

  // const router = useRouter();

  // get days from BKPicker . Pas de props du client vers le serveur
  // const handleStartDay = (startDay: Date) => {
  //   console.log("START DAY : ", startDay);
  // };
  // const handleEndDay = (endDay: Date) => {
  //   console.log("END DAY : ", endDay);
  // };
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
          Reserver
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            {title} - Reserver la chambre n°{roomId}
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Nous vous rapellons sous 24 heures pour confirmer votre réservation.
            Remplissez l’email si vous préférez être contacté par ce moyen.
          </Dialog.Description>

          <form
            action={addDates}
            // onSubmit={(event) => {
            //   wait().then(() => setOpen(false));
            //   event.preventDefault();
            // }}
          >
            <div className="flex pb-4 gap-10 justify-between">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-500">
                  Date d’arrivée
                </label>
                <input
                  type="Date"
                  id="bookedDayStart"
                  name="bookedDayStart"
                  // value={bookedDayStart}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-500">
                  Dates
                </label>

                <input
                  type="text"
                  id="bookedDaysToEmail"
                  name="bookedDaysToEmail"
                  value={bookedDaysToEmail}
                  className=" select-none pb-2.5 border-gray-300 text-gray-500 text-sm rounded-lg block w-full"
                ></input>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-500">
                  Chambre
                </label>

                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  className=" select-none pb-2.5 border-gray-300 text-gray-500 text-sm rounded-lg block w-full"
                ></input>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-500">
                  N°
                </label>

                <input
                  type="number"
                  id="roomId"
                  name="roomId"
                  value={roomId}
                  // defaultValue={roomId}
                  className=" select-none pb-2.5 border-gray-300 text-gray-500 text-sm rounded-lg block w-full"
                ></input>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
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
              <label className="block mb-2 text-sm font-medium text-gray-900">
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
              <label className="block mb-2 text-sm font-medium text-gray-900">
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
              <label className="block mb-2 text-sm font-medium text-gray-900">
                email :
              </label>

              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>

            {/* <Dialog.Close> */}
            <div>
              <button
                type="submit"
                className="my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleClick}
              >
                bouton
              </button>
            </div>
            {/* </Dialog.Close> */}
          </form>
          {/* STOP */}

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              {/* <Cross2Icon /> */}
              <HiMiniXMark />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogRoomRequest2;