import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import ResaFormSkeleton from "./loading";
import ResaFormm from "../../_components/ResaFormm";

const ResaForm = dynamic(
  () => import("@/app/reservations/_components/ResaForm"),
  {
    ssr: false,
    loading: () => <ResaFormSkeleton />,
  }
);

interface Props {
  params: { id: string };
}

const EditReservationPage = async ({ params }: Props) => {
  const resa = await prisma.reservation.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!resa) notFound();

  return (
    <div className="mx-4 pt-20">
      <h1>EDIT RESA</h1>
      {/* <ResaForm resa={resa} /> */}
      <ResaFormm />
    </div>
  );
};

export default EditReservationPage;
