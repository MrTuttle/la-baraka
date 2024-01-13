// "use client";

import React from "react";
import getUserRooms from "../actions/GetUserRooms";
import DeleteUserRoom from "../actions/DeleteUserRoom";
import { UserRoom } from "@prisma/client";
import prisma from "@/prisma/client";
import { Badge, Button, Card, Flex, Text } from "@radix-ui/themes";
import DeleteGuest from "./DeleteGuest";

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

  // DeleteUserRoom(11);
  // const handleClick = (item: number) => {
  //   DeleteUserRoom(item);
  // };

  return (
    <div>
      <h1>Guest List</h1>
      {guests.map((guest, index) => (
        <Card key={guest.id} className="p-3" size="4">
          <Flex direction="row" gap="4" justify="start" wrap="wrap">
            <Text size="1" className=" sm:w-full lg:w-4/12">
              <span className=" font-bold">{guest.id}</span> | {guest.firstName}{" "}
              {guest.name}
            </Text>
            {guest.reservationDates.map((booking) => (
              <Text key={booking.id} size="1">
                <p>booking.id</p>

                {booking.assignedToRoomId === 0 ? (
                  <p className=" text-red-600">No room assigned</p>
                ) : (
                  <p>booking id : {booking.id}</p>
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
                <Badge
                  variant="solid"
                  radius="full"
                  color="blue"
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
  );
};

export default pageGuests;
