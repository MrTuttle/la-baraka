// app/issues/[id]/page.tsx

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import DeleteRoomButton from "./DeleteRoomButton";
import GetCldIdList from "@/app/components/GetCldIdList";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import { Button, Flex } from "@radix-ui/themes";

interface Props {
  // params id: typed in string, 'cause url are always string
  params: { id: string };
}

const ChambreDetailPage = async ({ params }: Props) => {
  // if not a number in the [id] adress, go to not found page
  // if (typeof params.id !== "number") notFound();

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
        </div>
      </Flex>

      {/* <p>Création : {room.createdAt.toDateString()}</p>
      <p>Modification : {room.updatedAt.toDateString()}</p> */}
      <Flex direction="column" align="center" className="p-8">
        <BKDayPicker />
      </Flex>

      <DeleteRoomButton roomId={room.id} />
      <div
        className="w-full bg-white h-20 border-t-2
            fixed left-0 bottom-0
            flex justify-center items-center z-50
           "
      >
        <Button>Reserver</Button>
      </div>
    </Flex>
  );
};

export default ChambreDetailPage;
