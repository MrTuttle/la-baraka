import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import GuestFormSkeleton from "./loading";

const GuestForm = dynamic(() => import("@/app/guests/_components/GuestForm"), {
  ssr: false,
  loading: () => <GuestFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const EditGuestPage = async ({ params }: Props) => {
  const guest = await prisma.userRoom.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!guest) notFound();

  return (
    <div className="mx-4">
      <GuestForm guest={guest} />
    </div>
  );
};

export default EditGuestPage;
