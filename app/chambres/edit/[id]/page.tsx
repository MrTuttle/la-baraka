import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import RoomFormSkeleton from "./loading";

const RoomForm = dynamic(() => import("@/app/chambres/_components/RoomForm"), {
  ssr: false,
  loading: () => <RoomFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const EditRoomPage = async ({ params }: Props) => {
  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!room) notFound();

  return <RoomForm room={room} />;
};

export default EditRoomPage;
