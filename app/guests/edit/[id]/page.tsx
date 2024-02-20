import React from "react";
import prisma from "@/prisma/client";
// import { Reservation, UserRoom } from "@prisma/client";

import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import GuestFormSkeleton from "./loading";
import Link from "next/link";
import GuestFormDateStr from "../../_components/GuestFormDateStr";

const GuestForm = dynamic(() => import("@/app/guests/_components/GuestForm"), {
  ssr: false,
  loading: () => <GuestFormSkeleton />,
});

interface Props {
  params: { id: string };
}

// sort typing cause it doesn't fully done by prisma/client
type UserRoom = {
  id: number;
  firstName: string | null;
  name: string | null;
  email: string | null;
  phone: string;
  emailVerified: Date | null;
};

type Reservation = {
  id: number;
  checkIn: Date;
  checkOut: Date;
  status: String;
  assignedToRoomId: number;
  assignedToUserRoomId: number;
};
var foo = { bar: { bas: 123 } };
var {
  bar: { bas },
} = foo; // Effectively `var bas = foo.bar.bas;`

const EditGuestPage = async ({ params }: Props) => {
  const guest = await prisma.userRoom.findUnique({
    where: { id: parseInt(params.id) },
    include: {
      reservationDates: true,
    },
    // data: {
    //   reservationDates: {
    //     // update: {
    //     // },
    //     create: {
    //       assignedToRoomId: body.assignedToRoomId,
    //       checkIn: body.checkIn,
    //       checkOut: body.checkOut,
    //       status: body.status,
    //     },
    //   },
    // },
  });

  if (!guest) notFound();
  // console.log(` GUEST.RESERVATION DATDE :${guest.reservationDates}`);
  // Define pack, destructuration type for getting reservation dates
  // const pack = { guest: { reservationDates: guest.reservationDates } };
  // console.log(`G U E S T DATES: ${pack}`);
  // => [object Object]
  // console.log(
  //   `OPEN : ${pack.guest.reservationDates.map((item, index) => item.checkIn)}`
  // );
  // => Fri Apr 05 2024 02:00:00 GMT+0200 (GMT+02:00),Sun May 05 2024 02:00:00 GMT+0200 (GMT+02:00),Mon Apr 01 2024 02:00:00 GMT+0200 (GMT+02:00)

  // try to get & pass in props reservation in array, cause guest lost his reservations in GuestForm
  // const resaArray: Reservation[] = [];
  // const pushResas = () => {
  //   guest.reservationDates.map((resa, index) => resaArray.push(resa));
  // };
  // pushResas();
  // console.log(`PUSHRESA : ${resaArray}`);
  // console.log(`PUSHRESA 1 : ${resaArray[1].checkIn}`);
  //

  // const reservationPack: {}[] = guest.reservationDates;
  const reservationPack = guest.reservationDates;

  return (
    <div className="mx-4 pt-20">
      <p>{guest.reservationDates.map((date) => date.checkIn.toDateString())}</p>
      <Link href="/guests">Back</Link>

      {/* <GuestForm guest={guest} resaArray={resaArray} /> */}
      {/* <GuestForm guest={guest} /> */}

      <GuestFormDateStr guest={guest} />
    </div>
  );
};

export default EditGuestPage;
