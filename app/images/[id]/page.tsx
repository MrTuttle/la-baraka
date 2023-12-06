import DisplayCld from "@/app/components/DisplayCld";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import DeleteImageButton from "./DeleteButtonImage";

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
        <h1>ImageDetailPage</h1>
        <p>Id: {image.id}</p>
        <p>Public Id: {image.publicId}</p>
        <p>alt: {image.alt}</p>
        <p>Assigned room : {image.assignedToRoomId}</p>
        <DeleteImageButton imageId={image.id} />
        <DisplayCld public_id={image.publicId} alt={image.alt} />
      </div>
    </>
  );
};

export default ImageDetailPage;
