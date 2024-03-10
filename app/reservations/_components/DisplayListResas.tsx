import React from "react";
import getUserRooms from "../../actions/GetUserRooms";
import DeleteUserRoom from "../../actions/DeleteUserRoom";
// import { Reservation, Room } from "@prisma/client";
// import Reservation from "@/app/types/Reservation";
// import UserRoom from "@/app/types/userRoom";
import Room from "@/app/types/Room";
import prisma from "@/prisma/client";
import { Badge, Button, Card, Flex, Section, Text } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";
import { ColorStatus } from "../../actions/ColorStatus";

import DeleteResaButton from "../DeleteResaButton";
import ResaFormm from "./ResaFormm";
import ResaForm from "./ResaForm";
import { addHours } from "@/app/utilities/hoursOffset";

// const reservations: ({
//   assignedToUserRoom: {
//     id: number;
//     firstName: string | null;
//     name: string | null;
//     email: string | null;
//     phone: string;
//     emailVerified: Date | null;
//   };
// } & {
//   id: number;
//   checkIn: Date;
//   checkOut: Date;
//   status: $Enums.Status;
//   assignedToRoomId: number;
//   assignedToUserRoomId: number;
// })[];

// type reservations = {
//   assignedToUserRoom: {
//     id: number;
//     firstName: string | null;
//     name: string | null;
//   } & { id: number; checkIn: Date; checkOut: Date };
// }[];

// type reservations = {
//   assignedToUserRoom: {
//     // jokerrr: string;
//     id: number;
//     firstName: string | null;
//     name: string | null;
//     email: string | null;
//     phone: string;
//     emailVerified: Date | null;
//   };
// } & {
//   id: number;
//   checkIn: Date;
//   checkOut: Date;
//   status: "VACANT" | "OCCUPIED" | "IN_PROGRESS";

//   // status: $Enums.Status;
//   assignedToRoomId: number;
//   assignedToUserRoomId: number;
// }[];

// interface DisplayListResasProps {
//   assignedToUserRoom: {
//     id: number;
//     firstName: string | null;
//     name: string | null;
//   } & {
//     resa: {
//       id: number;
//       checkIn: Date;
//       checkOut: Date;
//       status: string;
//       assignedToRoomId: number;
//       assignedToUserRoomId: number;
//     };
//   };
// }
// interface DisplayListResasProps {
//   assignedToUserRoom: {
//     assignedToUserRoom: {
//       id: number;
//       firstName: string;
//       name: string;
//       resa: {
//         id: number;
//         checkIn: Date;
//         checkOut: Date;
//         status: string;
//         assignedToRoomId: number;
//         assignedToUserRoomId: number;
//       };
//     };
//   }[];
// };

interface DisplayListResasProps {
  assignedToUserRoom: {
    id: number;
  };
}

const DisplayListResas = async () => {
  const reservations = await prisma.reservation.findMany({
    include: {
      assignedToUserRoom: true,
    },
  });
  return (
    <div className="px-4 flex flex-col gap-3 justify-center flex-wrap">
      {reservations.map((item, index) => (
        // <Card key={resa.id} className="pb-3 max-w-md" size="4">
        <div
          key={index}
          className="pb-3 w-full sm:w-8/12 lg:w-6/12  mx-auto border rounded p-8"
        >
          <div className="flex flex-wrap -mx-3 mb-6 justify-between">
            <div className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Reservation n° {item.id}
            </div>
            <div className="flex gap-4">
              <Link href={"/reservations/edit/" + item.id}>
                <div className=" flex gap-1">
                  <HiOutlinePencilSquare />
                  <p className=" text-xs">Modifier</p>
                </div>
              </Link>
              <DeleteResaButton resaId={item.id} />
            </div>
          </div>

          <div className=" sm:w-full">
            <ul className="divide-y divide-gray-300 text-xs pt-4 [&_*]:py-2">
              <li>
                <strong>Chambre {item.assignedToRoomId}</strong>
              </li>
              <li>
                <Link
                  href={`/guests/${item.assignedToUserRoom.id}`}
                  className=" text-blue-500 font-medium hover:underline"
                >
                  {item.assignedToUserRoom.firstName}{" "}
                  {item.assignedToUserRoom.name}
                </Link>
              </li>
              <li>
                <strong>Check in ← </strong>
                {item.checkIn.toLocaleDateString("fr-FR", {
                  dateStyle: "full",
                })}
              </li>
              <li>
                <strong>Check out → </strong>
                {item.checkOut.toLocaleDateString("fr-FR", {
                  dateStyle: "full",
                })}
              </li>
              <li>
                {" "}
                <Badge
                  variant="solid"
                  radius="full"
                  color={ColorStatus(item.status)}
                  className="mt-6 mb-2"
                >
                  {item.status}
                </Badge>
              </li>
            </ul>
          </div>
        </div>
        // </Card>
      ))}
    </div>
  );
};

export default DisplayListResas;
