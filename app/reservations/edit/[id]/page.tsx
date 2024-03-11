import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import ResaFormSkeleton from "./loading";
import ResaFormm from "../../_components/ResaFormm";
import { Reservation, Room, UserRoom } from "@prisma/client";

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

  console.log(
    `RESA SERV : pure ${
      resa.checkIn
    } - Get DATE UTC :${resa.checkIn.toLocaleString("fr-FR", {
      dateStyle: "full",
    })} `
  );

  // logic to pass arrays of available rooms and guests
  // to ResaFormm component
  const rooms = await prisma.room.findMany({});
  const guests = await prisma.userRoom.findMany({});
  const createListSelect = (
    rooms: Room[],
    guests: UserRoom[],
    resa: Reservation
  ) => {
    const roomsIds = rooms.map((item, index) => item.id);
    const listRooms = roomsIds;
    const guestIds = guests.map((item, index) => item.id);
    const listGuests = guestIds;

    return { listRooms, listGuests, resa };
  };
  const listSelect = createListSelect(rooms, guests, resa);

  return (
    <div className="mx-4 pt-20">
      <h1>EDIT RESA</h1>
      {/* <ResaForm resa={resa} /> */}
      <ResaFormm listSelect={listSelect} />
    </div>
  );
};

export default EditReservationPage;
