"use client";
//app/components/DialogRoomRequest/DialogRoomRequest.tsx

import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
import { HiMiniXMark } from "react-icons/hi2";
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

  // onSubmit: (formData: FormData) => void;
  // onClick: (event: React.MouseEvent) => void;
}

// const DialogRoomRequest = ({ guest }: { guest?: UserRoom }) => {
const DialogRoomRequest2 = ({
  title,
  roomId,
  bookedDaysToEmail,
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

  // const router = useRouter();

  // get days from BKPicker . Pas de props du client vers le serveur
  // const handleStartDay = (startDay: Date) => {
  //   console.log("START DAY : ", startDay);
  // };
  // const handleEndDay = (endDay: Date) => {
  //   console.log("END DAY : ", endDay);
  // };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
          Reserver 4
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

          <form action={postGuest}>
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
