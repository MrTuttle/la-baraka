// app/issues/[id]/page.tsx

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import DeleteRoomButton from "./DeleteRoomButton";
import GetCldIdList from "@/app/components/GetCldIdList";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import { Box, Button, Flex } from "@radix-ui/themes";

interface Props {
  // params id: typed in string, 'cause url are always string
  params: { id: string };
}

const ChambreDetailPage = async ({ params }: Props) => {
  // if not a number in the [id] adress, go to not found page
  // if (typeof params.id !== "number") notFound();
  const reservations = await prisma.reservation.findMany();

  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!room) notFound();
  return (
    <Flex direction="column" align="center" className="mx-4">
      <h1>Détail chambre</h1>
      <Flex direction="column">
        <GetCldIdList roomId={room.id} />
        <div className="py-4">
          <p>Id: {room.id}</p>
          <p>{room.title}</p>
          <p>{room.description}</p>
          <p>
            <strong>reservation :</strong>
          </p>
          {reservations.map((reservation, index) => (
            <p key={index}>
              {reservation.assignedToRoomId === room.id &&
                reservation.date.toDateString()}
            </p>
          ))}
          {/* <p>{room.map((reservation, index)=> <p key={index}>{reservation}</p>)}</p> */}
        </div>
      </Flex>

      {/* <p>Création : {room.createdAt.toDateString()}</p>
      <p>Modification : {room.updatedAt.toDateString()}</p> */}
      <Flex direction="column" align="center" className="p-8">
        <BKDayPicker />
      </Flex>
      <div className="pt-10 pb-32">
        <DeleteRoomButton roomId={room.id} />
      </div>
      <div
        className="w-full bg-white h-20 border-t-2
            fixed left-0 bottom-0
            flex justify-between items-center z-50
           "
      >
        <div className="p-4">
          {room.price && (
            <p>
              <strong>{room.price} € </strong>par nuits
            </p>
          )}

          <p>8-9 jan</p>
        </div>
        <div className="p-4">
          <button className=" px-14 bg-red-500 hover:bg-red-600 transition-all p-4 rounded-md text-white">
            Réserver
          </button>
        </div>
      </div>
    </Flex>
  );
};

export default ChambreDetailPage;
