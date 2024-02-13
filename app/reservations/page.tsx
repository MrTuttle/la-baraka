// "use client";

import React from "react";
import getUserRooms from "../actions/GetUserRooms";
import DeleteUserRoom from "../actions/DeleteUserRoom";
import { Reservation } from "@prisma/client";
import prisma from "@/prisma/client";
import { Badge, Button, Card, Flex, Section, Text } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";

import DeleteResaButton from "./DeleteResaButton";
// import Vue from "./Vue";

// interface Props {
//   onClick: (item: number) => void;
// }

// SERVER
const pageReservations = async () => {
  const reservations = await prisma.reservation.findMany({});

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
                  Guest associée : {resa.assignedToUserRoomId}
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
                <Badge
                  variant="solid"
                  radius="full"
                  color={resa.status === "VACANT" ? "blue" : "orange"}
                  className="mt-4"
                >
                  {resa.status}
                </Badge>
              </Flex>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default pageReservations;
