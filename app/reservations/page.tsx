// "use client";

import React from "react";
import getUserRooms from "../actions/GetUserRooms";
import DeleteUserRoom from "../actions/DeleteUserRoom";
import { Reservation, Room, UserRoom } from "@prisma/client";
import prisma from "@/prisma/client";
import { Badge, Button, Card, Flex, Section, Text } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";
import { ColorStatus } from "../actions/ColorStatus";

import DeleteResaButton from "./DeleteResaButton";
import ResaFormm from "./_components/ResaFormm";
import ResaForm from "./_components/ResaForm";
import { addHours } from "@/app/utilities/hoursOffset";
import DisplayListResas from "./_components/DisplayListResas";

// import Vue from "./Vue";

// interface Props {
//   onClick: (item: number) => void;
// }

// SERVER

const pageReservations = async () => {
  const reservations = await prisma.reservation.findMany({
    include: {
      assignedToUserRoom: true,
    },
  });
  const rooms = await prisma.room.findMany({});
  const guests = await prisma.userRoom.findMany({});
  const createListSelect = (rooms: Room[], guests: UserRoom[]) => {
    const roomsIds = rooms.map((item, index) => item.id);
    const listRooms = roomsIds;
    const guestIds = guests.map((item, index) => item.id);
    const listGuests = guestIds;
    return { listRooms, listGuests };
  };
  const listSelect = createListSelect(rooms, guests);
  console.log(`LISTSELECT ${listSelect.listRooms} - ${listSelect.listGuests}`);

  // SERVER END

  // SERVER ACTION IMPORTED FROM MarkBooked
  // const guests: [] = () => guestListBoard();

  // DeleteUserRoom(11);
  // const handleClick = (item: number) => {
  //   DeleteUserRoom(item);
  // };

  return (
    <>
      {/* <Vue guests={guests} /> */}
      <Section className="mt-0 pt-40">
        <div className="sm:w-8/12 lg:w-6/12  mx-auto p-8">
          <h1 className="text-2xl">Reservation page</h1>
          <p className=" font-semibold">What should’you do here ?</p>
          <ul className=" list-disc list-inside py-4">
            <li>See all reservations</li>
            <li>Modify a reservation</li>
            <li>Access to owner’s reservations</li>
          </ul>
        </div>
      </Section>

      <div className="px-4 flex flex-col gap-3 justify-center flex-wrap">
        <p className=" text-center">+ 24 h</p>
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
                    {resa.assignedToUserRoom.firstName}{" "}
                    {resa.assignedToUserRoom.name}
                  </Link>
                </li>
                <li>
                  <strong>Check in ← </strong>
                  {addHours(resa.checkIn, 24).toLocaleDateString("fr-FR", {
                    dateStyle: "full",
                  })}{" "}
                  (UTC +24)
                </li>
                <li>
                  <strong>Check out → </strong>
                  {addHours(resa.checkOut, 24).toLocaleDateString("fr-FR", {
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
      <section className=" py-10 px-10">
        <div className=" max-w-md mx-auto">
          <p>REVERVATION WITHOUT TIME COMPENSATION (TO DO)</p>
          <br />
          <p></p>
          <p>
            write correct typescript to add userRoom & room to reservations
            props
          </p>
        </div>
      </section>
      <DisplayListResas />

      <div className="mt-4 py-4 px-4 border max-w-md mx-auto">
        <ResaForm listSelect={listSelect} />
      </div>
    </>
  );
};
export const revalidate = 0;

export default pageReservations;
