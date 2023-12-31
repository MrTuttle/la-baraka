// app/issues/[id]/page.tsx

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import DeleteRoomButton from "./DeleteRoomButton";
import GetCldIdList from "@/app/components/GetCldIdList";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import { Box, Button, Container, Flex } from "@radix-ui/themes";
import DetailRoomSwiperSlide from "@/app/components/swiper/DetailRoomSwiperSlide";
import SendBookingButton from "./SendBookingButton";
import ConfirmationDemandForm from "../_components/ConfirmationDemandForm";

interface Props {
  // params id: typed in string, 'cause url are always string
  params: { id: string };
  // bookedDayz: Date[];
}

const ChambreDetailPage = async ({ params }: Props) => {
  // if not a number in the [id] adress, go to not found page
  // if (typeof params.id !== "number") notFound();

  const room = await prisma.room.findUnique({
    // where: { id: parseInt(params.id) },
    where: { id: parseInt(params.id) },
    include: {
      assignedRoom: true,
      reservationDates: true,
    },
  });
  if (!room) notFound();
  // console.log("ROOM.RESERVATIONDATES");
  // console.log(room.reservationDates.map((date) => date.date));
  // console.log("assigned room : ", room.assignedRoom);
  // console.log("reservationDates : ", room.reservationDates);

  // FOR THE SWIPER IMAGE (rooms with assignedRomm, cover or not)
  const imagesRoom = room.assignedRoom;

  // logic to pass bookedDays to datePicker
  let bookedDays: Date[] = [];
  room.reservationDates.map((reservation) => bookedDays.push(reservation.date));
  // console.log("BOOKEDDAYS: ", bookedDays);

  // logic to stringify dates for react email
  const bookedDaysStringify = () => {
    // let daysInString: string;
    console.log("bookedDays:", bookedDays);
    const list = bookedDays.map((day) => day.toDateString());
    console.log("list:", list);
    let daysInString: string = list.join(" | ");
    console.log("dayInString:", daysInString);

    return daysInString;
  };
  // bookedDaysStringify();
  const bookedDaysToEmail: string = bookedDaysStringify();
  console.log("to email :", bookedDaysToEmail);

  return (
    <Flex direction="column" align="center">
      <DetailRoomSwiperSlide listImages={imagesRoom} />
      <Flex direction="column" className="mx-4">
        <div className="py-4">
          <p>Id: {room.id}</p>
          <p>{room.title}</p>
          <p>{room.description}</p>
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
      <div className="pt-10 pb-32">
        <p className="pt-4 text-gray-400">
          <strong>
            reservation (Bd) : <br />
          </strong>
          {room.reservationDates.map((day, index) => (
            <span key={index}>
              {day.date.toDateString()}
              <br />
            </span>
          ))}
        </p>
        <p>
          <strong>
            bookedDay : <br />
          </strong>
          {bookedDays.map((day, index) => (
            <span key={index}>
              {day.toDateString()}
              <br />
            </span>
          ))}
        </p>

        <ConfirmationDemandForm
          title={room.title}
          roomId={room.id}
          bookedDaysToEmail={bookedDaysToEmail}
        />
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
          {/* <button className=" px-14 bg-red-500 hover:bg-red-600 transition-all p-4 rounded-md text-white">
            Réserver
          </button> */}
          <SendBookingButton title={room.title} roomId={room.id} />
        </div>
      </div>
    </Flex>
  );
};

export default ChambreDetailPage;
