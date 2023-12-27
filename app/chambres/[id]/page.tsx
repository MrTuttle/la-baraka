// app/issues/[id]/page.tsx

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import DeleteRoomButton from "./DeleteRoomButton";
import GetCldIdList from "@/app/components/GetCldIdList";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import { Box, Button, Container, Flex } from "@radix-ui/themes";
import DetailRoomSwiperSlide from "@/app/components/swiper/DetailRoomSwiperSlide";

interface Props {
  // params id: typed in string, 'cause url are always string
  params: { id: string };
}

const ChambreDetailPage = async ({ params }: Props) => {
  // if not a number in the [id] adress, go to not found page
  // if (typeof params.id !== "number") notFound();

  const room = await prisma.room.findUnique({
    // where: { id: parseInt(params.id) },
    where: { id: parseInt(params.id) },
    include: {
      assignedRoom: true,
    },
  });
  if (!room) notFound();

  const imagesRoom = room.assignedRoom;
  // console.log("LISTIMAFES :");

  // console.log(room.assignedRoom);

  // => log table of rooms images

  // FIND RESERVATION LOGIC (for BKDayPicker component) :
  const reservations = await prisma.reservation.findMany({
    where: { assignedToRoomId: room.id },
  });
  let bookedDays: Date[] = [];
  reservations.map((reservation) => bookedDays.push(reservation.date));

  return (
    <Flex direction="column" align="center">
      <DetailRoomSwiperSlide listImages={imagesRoom} />
      <Flex direction="column" className="mx-4">
        {/* <SlidePerViewRooms listRooms={} /> */}
        {/* <GetCldIdList roomId={room.id} /> */}
        <div className="py-4">
          <p>Id: {room.id}</p>
          <p>{room.title}</p>
          <p>{room.description}</p>
          <p>
            <strong>reservation (Bd) :</strong>
          </p>
          {reservations.map((reservation, index) => (
            <p key={index}>
              {reservation.assignedToRoomId === room.id &&
                reservation.date.toDateString()}
            </p>
          ))}
          {/* <p>{room.map((reservation, index)=> <p key={index}>{reservation}</p>)}</p> */}
        </div>
      </Flex>

      <Flex direction="column" align="center" className="p-8">
        {/* <BKDayPicker
          bookedDays={[new Date(2023, 11, 20), new Date(2023, 11, 23)]}
        /> */}

        <BKDayPicker bookedDays={bookedDays} />
      </Flex>
      <div className="pt-10 pb-32">
        <DeleteRoomButton roomId={room.id} />
      </div>
      <div
        className="w-full bg-white h-20 border-t-2
        fixed left-0 bottom-0
        flex justify-between items-center z-50
        "
      >
        <div className="p-4">
          {room.price && (
            <p>
              <strong>{room.price} € </strong>par nuits
            </p>
          )}

          <p>8-9 jan</p>
        </div>
        <div className="p-4">
          <button className=" px-14 bg-red-500 hover:bg-red-600 transition-all p-4 rounded-md text-white">
            Réserver
          </button>
        </div>
      </div>
    </Flex>
  );
};

export default ChambreDetailPage;
