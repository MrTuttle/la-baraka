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
            <Card key={resa.id} className="pb-3" size="4">
              <Flex gap="4" direction="row" wrap="wrap" className="mb-6">
                <DeleteResaButton resaId={resa.id} />
                <Link href={"/reservations/edit/" + resa.id}>
                  <Flex gap="1">
                    <HiOutlinePencilSquare />
                    <Text as="p" size="1">
                      Modifier
                    </Text>
                  </Flex>
                </Link>
              </Flex>
              <Flex direction="column" gap="2" className="pb-4">
                <Text size="1" className=" sm:w-full lg:w-4/12">
                  Chambre associée : {resa.assignedToRoomId}
                </Text>
                <Text size="1" className=" sm:w-full lg:w-4/12">
                  <Link href={`/guests/${resa.assignedToUserRoomId}`}>
                    Guest associée : n°{resa.assignedToUserRoomId} |{" "}
                    {resa.assignedToUserRoom.firstName}{" "}
                    {resa.assignedToUserRoom.name}
                  </Link>
                </Text>
              </Flex>
              <Flex direction="row" gap="4" justify="start" wrap="wrap">
                <Text size="1" className=" sm:w-full lg:w-4/12">
                  <span className=" font-bold">{resa.id}</span> |{" "}
                  {resa.checkIn.toLocaleString("fr-FR", { dateStyle: "full" })}
                </Text>
                <Text size="1" className=" sm:w-full lg:w-4/12">
                  <span className=" font-bold">{resa.id}</span> |{" "}
                  {resa.checkOut.toLocaleString("fr-FR", { dateStyle: "full" })}
                </Text>
              </Flex>
              <Badge
                variant="solid"
                radius="full"
                color={ColorStatus(resa.status)}
                className="mt-4"
              >
                {resa.status}
              </Badge>
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
