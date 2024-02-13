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
import ReactMarkdown from "react-markdown";

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

  // FOR THE SWIPER IMAGE (rooms with assignedRomm, cover or not)
  //=> in this param room, get assignedRoom value
  const imagesRoom = room.assignedRoom;

  // let checkouts = room.reservationDates.map((checkout) => checkout.checkOut);
  // console.log("CHECKOUTs", checkouts);

  // let checkoutsId = room.reservationDates.map((checkout) => checkout.id);
  // console.log("CHECKOUTsIDS", checkoutsId);

  // logic to pass db range of booked dates to datePicker

  const bookedDaysRange: Date[] = [];

  console.log("xxxxxxxx page.tsx xxxxxxxxxx");
  console.log(
    `PRISMA SOURCE date : ${room.reservationDates.map((date) =>
      date.checkIn.toLocaleDateString("fr-FR")
    )}`
  );

  const checksIds = room.reservationDates.map((check) => {
    let id = check.id;
    let checkIn = check.checkIn;
    let checkOut = check.checkOut;
    console.log("page.tsx GROUP CHECK :", id, checkIn, checkOut);

    const getDatesInRange = (startDate: Date, endDate: Date) => {
      const date = new Date(startDate.getTime());
      // const dates = [];
      console.log(`page.tsx DATE getTime: ${date} `);

      while (date < endDate) {
        bookedDaysRange.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      console.log(`page.tsx DATE setDate (+1 ): ${date} `);
      console.log(`page.tsx DATE bokkedDaysRange: ${bookedDaysRange} `);
      return bookedDaysRange;
    };
    console.log(
      `DATES IN RANGE FOR RESERVATION ID ${id}: `,
      getDatesInRange(checkIn, checkOut)
    );
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
  // assignCheckIn();

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
    <>
      <div className="mb-11 w-full lg:w-4/6 mx-auto lg:mt-11 bg-white">
        <DetailRoomSwiperSlide listImages={imagesRoom} />
      </div>
      <Flex
        direction="column"
        gap="8"
        align="center"
        className="mx-auto bg-white"
      >
        <div className="prose">
          <p>Chambre n°{room.id}</p>
          <h1>{room.title}</h1>
          <ReactMarkdown>{room.description}</ReactMarkdown>
        </div>

        {/* -------- ACTIVATE CALENDAR COMPONENT -------- */}
        <RoomDetailPageContent
          bookedDays={bookedDaysRange}
          bookedDaysRange={bookedDays}
          checkIn={checkIn}
          checkOut={checkOut}
          bookedDaysToEmail={bookedDaysToEmail}
          title={room.title}
          roomId={room.id}
          roomPrice={room.price}
        />
        {/* -------- CALENDAR COMPONENT -------- */}

        {/* <Flex direction="column" className="mx-4">
        <div className="py-4">
        <p>Id: {room.id}</p>
        <p>{room.title}</p>
        <p>{room.description}</p>
        </div>
      </Flex> */}

        <Flex direction="column" align="center" className="p-8">
          {/* <BKDayPicker
          bookedDays={[new Date(2023, 11, 20), new Date(2023, 11, 23)]}
        /> */}

          {/* <BKDayPicker
          bookedDays={bookedDaysRange}
          bookedDaysRange={bookedDays}
        /> */}
        </Flex>

        {/* <div className="pt-10 pb-32">
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


          </div> */}
      </Flex>
    </>
  );
};

export default ChambreDetailPage;
