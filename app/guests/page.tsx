// "use client";

import React from "react";
import getUserRooms from "../actions/GetUserRooms";
import DeleteUserRoom from "../actions/DeleteUserRoom";
import { UserRoom } from "@prisma/client";
import prisma from "@/prisma/client";
import { Badge, Button, Card, Flex, Section, Text } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";

import DeleteGuest from "./DeleteGuestButton";
import DeleteGuestButton from "./DeleteGuestButton";
// import Vue from "./Vue";

// interface Props {
//   onClick: (item: number) => void;
// }

// SERVER
const pageGuests = async () => {
  const guests = await prisma.userRoom.findMany({
    include: {
      reservationDates: true,
    },
  });

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
          <h1 className="mx-4">hard guests</h1>
          {guests.map((guest, index) => (
            <Card key={guest.id} className="pb-3" size="4">
              <Flex gap="4" direction="row" wrap="wrap" className="mb-6">
                <DeleteGuestButton guestId={guest.id} />
                <Link href={"/guests/edit/" + guest.id}>
                  <Flex gap="1">
                    <HiOutlinePencilSquare />
                    <Text as="p" size="1">
                      Modifier
                    </Text>
                  </Flex>
                </Link>
              </Flex>
              <Flex direction="row" gap="4" justify="start" wrap="wrap">
                <Text size="1" className=" sm:w-full lg:w-4/12">
                  <span className=" font-bold">{guest.id}</span> |{" "}
                  {guest.firstName} {guest.name}
                </Text>
                {guest.reservationDates.map((booking) => (
                  <Text key={booking.id} size="1">
                    {booking.assignedToRoomId === 0 ? (
                      <p className=" text-red-600">No room assigned</p>
                    ) : (
                      <p>room Id : {booking.assignedToRoomId}</p>
                    )}
                    <p>
                      Check in :{" "}
                      <strong>
                        {booking.checkIn.toLocaleDateString("fr-FR", {
                          dateStyle: "full",
                        })}
                      </strong>
                    </p>
                    <p>
                      Check out :{" "}
                      <strong>
                        {booking.checkOut.toLocaleDateString("fr-FR", {
                          dateStyle: "full",
                        })}
                      </strong>
                    </p>
                    {/* {booking.status.valueOf()} */}
                    <Badge
                      variant="solid"
                      radius="full"
                      color={booking.status === "VACANT" ? "blue" : "orange"}
                      className="mt-4"
                    >
                      {booking.status}
                    </Badge>

                    {/* <button onClick={async () => {}}>Supprimer</button> */}
                    {/* <DeleteGuest guest={guest.id} /> */}
                  </Text>
                ))}
              </Flex>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default pageGuests;
