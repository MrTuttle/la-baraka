// app/issues/[id]/page.tsx

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  // params id: typed in string, 'cause url are always string
  params: { id: string };
}

const ChambreDetailPage = async ({ params }: Props) => {
  // if not a number in the [id] adress, go to not found page
  if (typeof params.id !== "number") notFound();

  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!room) notFound();
  return (
    <div>
      <p>{room.title}</p>
      <p>{room.description}</p>
      <p>{room.createdAt.toDateString()}</p>
    </div>
  );
};

export default ChambreDetailPage;
