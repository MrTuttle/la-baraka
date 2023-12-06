import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const ImageDetailPage = async ({ params }: Props) => {
  const image = await prisma.image.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!image) notFound();
  return (
    <>
      <div className="mx-4">
        <div>ImageDetailPage</div>
        <p>Id: {image.id}</p>
        <p>Public Id: {image.publicId}</p>
        <p>alt: {image.alt}</p>
        <p>{image.assignedToRoomId}</p>
      </div>
    </>
  );
};

export default ImageDetailPage;
