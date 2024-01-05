import React from "react";
import getUserRooms from "../actions/GetUserRooms";
import DeleteUserRoom from "../actions/DeleteUserRoom";
import { UserRoom } from "@prisma/client";
import prisma from "@/prisma/client";
import { Button, Card, Flex, Text } from "@radix-ui/themes";
import DeleteGuest from "./DeleteGuest";

interface Props {
  guests: UserRoom[];
}

const GuestListCards = ({ guests }: Props) => {
  return (
    <div>
      <h1>Guest List</h1>
      {guests.map((guest, index) => (
        <Card key={guest.id} className="p-3">
          <Flex direction="row" gap="9" justify="between">
            <Text size="1" weight="bold">
              {guest.firstName} {guest.name} - {guest.id}
            </Text>
            {/* {guest.reservationDates.map((booking) => (
              <Text key={booking.id} size="1" weight="bold">
                <p>booking id : {booking.id}</p>
                <p>booking room : {booking.assignedToRoomId}</p>
                <p>booking date : {booking.date.toLocaleDateString()}</p>
                <p>{booking.status}</p>
                <button>Supprimer</button>
              </Text>
            ))} */}
          </Flex>
        </Card>
      ))}
    </div>
  );
};

export default GuestListCards;
