// "use client";

import React from "react";
import getUserRooms from "../actions/GetUserRooms";
import DeleteUserRoom from "../actions/DeleteUserRoom";
import { Reservation, Room } from "@prisma/client";
import prisma from "@/prisma/client";
import { Badge, Button, Card, Flex, Section, Text } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";
import { ColorStatus } from "../actions/ColorStatus";

import DeleteResaButton from "./DeleteResaButton";
import ResaFormm from "./_components/ResaFormm";
import ResaForm from "./_components/ResaForm";
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
      <Section className="mt-0 pt-0">
        <div className="flex flex-col gap-3 mx-4">
          <h1 className="mx-4">hard Reservations</h1>

          {reservations.map((resa, index) => (
            <Card key={resa.id} className="pb-3 max-w-md" size="4">
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

              <Flex direction="column" gap="2" className="pb-4">
                <div className=" sm:w-full lg:w-4/12">
                  <ul>
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
                      {resa.checkIn.toLocaleString("fr-FR", {
                        dateStyle: "full",
                      })}
                    </li>
                    <li>
                      <strong>Check out → </strong>
                      {resa.checkOut.toLocaleString("fr-FR", {
                        dateStyle: "full",
                      })}
                    </li>
                    <li>
                      {" "}
                      <Badge
                        variant="solid"
                        radius="full"
                        color={ColorStatus(resa.status)}
                        className="mt-4"
                      >
                        {resa.status}
                      </Badge>
                    </li>
                  </ul>
                </div>
              </Flex>
            </Card>
          ))}
        </div>
      </Section>
      <div className="py-20 px-4 border">
        <div className="flex">
          <ul className="flex mr-11">
            Chambres :
            {rooms.map((room, index) => (
              <li key={room.id} className="px-2">
                {room.id}
              </li>
            ))}
          </ul>
          <ul className="flex mr-11">
            Guests :
            {guests.map((guest, index) => (
              <li key={guest.id} className="px-2">
                {guest.id}
              </li>
            ))}
          </ul>
        </div>
        <ResaForm />
      </div>
    </>
  );
};
export const revalidate = 0;

export default pageReservations;
