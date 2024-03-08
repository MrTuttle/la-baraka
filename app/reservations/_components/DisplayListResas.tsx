import React from "react";
import getUserRooms from "../../actions/GetUserRooms";
import DeleteUserRoom from "../../actions/DeleteUserRoom";
import { Reservation, Room } from "@prisma/client";
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

const DisplayListResas = (reservations: Reservation[]) => {
  return (
    <div className="px-4 flex flex-col gap-3 justify-center flex-wrap">
      {reservations.map((resa, index) => (
        // <Card key={resa.id} className="pb-3 max-w-md" size="4">
        <div
          key={resa.id}
          className="pb-3 w-full sm:w-8/12 lg:w-6/12  mx-auto border rounded p-8"
        >
          <div className="flex flex-wrap -mx-3 mb-6 justify-between">
            <div className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Reservation n° {resa.id}
            </div>
            <div className="flex gap-4">
              <Link href={"/reservations/edit/" + resa.id}>
                <div className=" flex gap-1">
                  <HiOutlinePencilSquare />
                  <p className=" text-xs">Modifier</p>
                </div>
              </Link>
              <DeleteResaButton resaId={resa.id} />
            </div>
          </div>

          <div className=" sm:w-full">
            <ul className="divide-y divide-gray-300 text-xs pt-4 [&_*]:py-2">
              <li>
                <strong>Chambre {resa.assignedToRoomId}</strong>
              </li>
              <li>
                <Link
                  href={`/guests/${resa.assignedToUserRoomId}`}
                  className=" text-blue-500 font-medium hover:underline"
                >
                  {/* {resa.assignedToUserRoom.firstName}{" "} */}
                  {/* {resa.assignedToUserRoom.name} */}
                </Link>
              </li>
              <li>
                <strong>Check in ← </strong>
                {resa.checkIn.toLocaleDateString("fr-FR", {
                  dateStyle: "full",
                })}{" "}
                (UTC +24)
              </li>
              <li>
                <strong>Check out → </strong>
                {resa.checkOut.toLocaleDateString("fr-FR", {
                  dateStyle: "full",
                })}{" "}
                (UTC +24)
              </li>
              <li>
                {" "}
                <Badge
                  variant="solid"
                  radius="full"
                  color={ColorStatus(resa.status)}
                  className="mt-6 mb-2"
                >
                  {resa.status}
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
