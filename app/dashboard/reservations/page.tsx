import prisma from "@/prisma/client";
import React from "react";
import { Reservation, UserRoom } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import { ObjectEnumValue } from "@prisma/client/runtime/library";

// interface Reservations {
//   reservations: Reservation[];

// }
type Guest = {
  id: number;
  firstName: string | null;
  name: string | null;
  email: string | null;
  phone: string;
  emailVerified: Date | null;
  guestBookings: GuestBooking[];
};
type GuestBooking = {
  id: number;
  checkIn: Date;
  checkOut: Date;
  status: ObjectEnumValue;
  assignedToRoomId: number;
  assignedToUserRoomId: number;
};

const pageReservations = async () => {
  // promise from guest with reservations assigned
  const guests = await prisma.userRoom.findMany({
    include: {
      reservationDates: true,
    },
  });

  const extractedRoom = (guestId: number) => {
    const guest = guests.find((e) => e.id === guestId);
    console.log("GUEST with find :", guest); //=> ok give a guest by id

    const guestBooking = guest?.reservationDates.map((e) => e.id);
    console.log("GUEST BOOKINGS by ID", guestBooking); //=> ok give an array of Reservation ids related with guestId

    // guestBooking?.map((e)=> e.)
    console.log("LAST", guestBooking?.findLast);
  };
  extractedRoom(2);

  return (
    <>
      <div>
        <h1>Page reservation</h1>
      </div>
    </>
  );
};

export default pageReservations;
