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
// import DialogRoomRequest from "@/app/components/DialogRoomRequest/DialogRoomRequest";

import dynamic from "next/dynamic";
import RoomFormSkeleton from "@/app/chambres/_components/RoomFormSkeleton";
import UserRoomForm from "./UserRoomForm";
import DialogRoomRequest2 from "@/app/components/DialogRoomRequest/DialogRoomRequest2";
import { getDate } from "date-fns";
import RoomDetailPageContent from "./RoomDetailPageContent";

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
  // console.log(room.reservationDates.map((date) => date.checkIn));
  // console.log("assigned room : ", room.assignedRoom);
  // console.log("reservationDates : ", room.reservationDates);

  // FOR THE SWIPER IMAGE (rooms with assignedRomm, cover or not)
  //=> in this param room, get assignedRoom value
  const imagesRoom = room.assignedRoom;

  // let checkouts = room.reservationDates.map((checkout) => checkout.checkOut);
  // console.log("CHECKOUTs", checkouts);

  // let checkoutsId = room.reservationDates.map((checkout) => checkout.id);
  // console.log("CHECKOUTsIDS", checkoutsId);

  // logic to pass range of booked dates to datePicker

  const bookedDaysRange: Date[] = [];

  const checksIds = room.reservationDates.map((check) => {
    let id = check.id;
    let checkIn = check.checkIn;
    let checkOut = check.checkOut;
    // console.log("GROUP CHECK :", id, checkIn, checkOut);

    const getDatesInRange = (startDate: Date, endDate: Date) => {
      const date = new Date(startDate.getTime());
      // const dates = [];
      while (date < endDate) {
        bookedDaysRange.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return bookedDaysRange;
    };
    // console.log(
    //   `DATES IN RANGE FOR RESERVATION ID ${id}: `,
    //   getDatesInRange(checkIn, checkOut)
    // );
    getDatesInRange(checkIn, checkOut);
  });
  // console.log("checkids ---- : ", checksIds);
  // console.log("CONST BOOKEDDAYSRANGE", bookedDaysRange);

  // DialogRoomRequest2
  let bookedDays: Date[] = [];
  let checkIn: Date = new Date();
  let checkOut: Date = new Date();
  const assignCheckIn = () => {
    room.reservationDates.map((reservation) => {
      bookedDays.push(reservation.checkIn);
      checkIn = reservation.checkIn;
      checkOut = reservation.checkOut;
      console.log("checkin :", checkIn);
      return checkIn;
    });
  };
  assignCheckIn();

  console.log("BOOKEDDAYS: ", bookedDays);
  console.log("BOOKEDDAYS 1", bookedDays[0]);
  console.log("CHECKIN", checkIn);

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

  // access to UserRoom
  const DialogRoomRequest = dynamic(
    () => import("@/app/components/DialogRoomRequest/DialogRoomRequest"),
    {
      ssr: false,
      loading: () => <RoomFormSkeleton />,
    }
  );

  return (
    <Flex direction="column" align="center" className="mx-auto">
      <RoomDetailPageContent
        bookedDays={bookedDaysRange}
        bookedDaysRange={bookedDays}
        checkIn={checkIn}
        checkOut={checkOut}
        bookedDaysToEmail={bookedDaysToEmail}
        title={room.title}
        roomId={room.id}
      />
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

        {/* <BKDayPicker
          bookedDays={bookedDaysRange}
          bookedDaysRange={bookedDays}
        /> */}
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
              {day.checkIn.toDateString()}
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
          {/* <UserRoomForm
            title={room.title}
            roomId={room.id}
            bookedDaysToEmail={bookedDaysToEmail}
          /> */}
          {/* <DialogRoomRequest2
            checkIn={checkIn}
            checkOut={checkOut}
            bookedDaysToEmail={bookedDaysToEmail}
            title={room.title}
            roomId={room.id}
          /> */}

          {/* <SendBookingButton title={room.title} roomId={room.id} /> */}
        </div>
      </div>
    </Flex>
  );
};

export default ChambreDetailPage;
