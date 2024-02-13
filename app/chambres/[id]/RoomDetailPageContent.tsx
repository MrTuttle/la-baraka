"use client";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import React, { useState } from "react";
import DialogRoomRequest2 from "@/app/components/DialogRoomRequest/DialogRoomRequest2";
import { DateRange } from "react-day-picker";

interface BKDayProps {
  bookedDaysRange: Date[];
  bookedDays: Date[];
  checkIn: Date;
  checkOut: Date;
  bookedDaysToEmail: string;
  title: string;
  roomId: number;
  roomPrice: number;
}
interface DialogProps {}

const RoomDetailPageContent = ({
  bookedDaysRange,
  bookedDays,
  checkIn,
  checkOut,
  bookedDaysToEmail,
  title,
  roomId,
  roomPrice,
}: BKDayProps) => {
  console.log("x x x x x RoomDetailPageContent x x x x x");
  console.log(`from page.tsx :, roomId = ${roomId}`);
  console.log(`from page.tsx :, roomPrice = ${roomPrice}`);

  console.log(`from page.tsx :, bookedDaysRange = ${bookedDaysRange}`);
  console.log(`from page.tsx :, bookedDays = ${bookedDays}`);
  console.log(`from page.tsx :, checkIn = ${checkIn}`);
  console.log(`from page.tsx :, checkOut = ${checkOut}`);
  console.log(`from page.tsx :, bookedDaysToEmail = ${bookedDaysToEmail}`);

  // HOOK LOGIC TO GET DATES FROM BKPICKER CLICK
  // get checkInFromBK day clicked from BKPicker & set it
  const [checkInFromBK, setCheckInFromBK] = useState<Date>(new Date());

  const handleStartDay = (startDay: Date) => {
    let newStartDate = new Date();
    newStartDate = startDay;
    setCheckInFromBK(newStartDate);
    console.log(`CHECKINFROMBK UPDATED : ${newStartDate}`);
  };
  // get checkOutFromBK day clicked from BKPicker & set it
  const [checkOutFromBK, setCheckOutFromBK] = useState<Date>(new Date());
  const handleEndDay = (endDay: Date) => {
    let newEndDate = new Date();
    newEndDate = endDay;
    setCheckOutFromBK(newEndDate);
  };
  // construction of the DialogRoomRequest2 props for react email
  let bookedDaysMail: Date[] = [];
  bookedDaysMail.push;
  // const to display months in the footer widget
  const month = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jui",
    "Aou",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    " ",
  ];
  let monthToShow = month[12];
  // const showMiniRange = (checkInFromBK: Date, checkOuFromBK: Date) => {
  //   let checkInDay = 1;
  //   let checkInMonth = checkInFromBK.getMonth();
  //   let checkOutDay = checkOutFromBK.getDate();
  //   let checkOutMonth = checkOutFromBK.getMonth();
  //   checkInFromBK ? (checkInDay = checkInFromBK.getMonth()) : (checkInDay = 0);

  //   return `${checkInDay} - ${checkOutDay}`;
  // };

  return (
    <>
      <BKDayPicker
        bookedDays={bookedDays}
        bookedDaysRange={bookedDaysRange}
        onStartDay={handleStartDay}
        onEndDay={handleEndDay}
      />
      {/* ----------Room detail page content query from BK :--------- */}

      <div className="px-11">
        <ul>
          <p className=" uppercase">
            RoomDetailPageContent <br />
            query with BKpicker
          </p>
          <li>
            <strong>dates clicked from hooked from BK :</strong>
          </li>
          <li>
            <strong>
              checkInFromBK : <br />
            </strong>
            {checkInFromBK.toLocaleDateString("fr-FR", { dateStyle: "full" })}
          </li>

          <li>
            <strong>
              checkOutFromBK : <br />
            </strong>
            {checkOutFromBK.toLocaleDateString("fr-FR", {
              dateStyle: "medium",
            })}
          </li>
        </ul>
      </div>
      {/* --------- Room detail page content query : -------- */}
      <div>
        <ul>
          <p>Room detail page content query</p>
          <li>
            <strong>bookedDaysRange :</strong> - by user (to BK)
          </li>
          {bookedDaysRange.map((e, index) => (
            <p key={index}>{e.toDateString()}</p>
          ))}
          <li>
            <strong>bookedDays</strong> - by room db (to BK)
          </li>
          {bookedDays.map((e, index) => (
            <div key={index}>
              {e.toLocaleDateString("fr-FR", { dateStyle: "short" })}
            </div>
          ))}
          <li>
            <strong>checkIn (to Diag2):</strong>
            {checkIn.toDateString()}
          </li>
          <li>
            <strong>checkOut (to Diag2):</strong>
            {checkOut.toDateString()}
          </li>
          <li>
            <strong>bookedDaysToEmail (to Diag2):</strong>
            {bookedDaysToEmail}
          </li>
          <li>
            <strong>title (to Diag2):</strong>
            {title}
          </li>
          <li>
            <strong>roomId (to Diag2):</strong>
            {roomId}
          </li>
        </ul>
      </div>
      {/* ----------FOOTER FIXED----------- */}
      <div
        className="w-full bg-white h-20 border-t-2
        fixed left-0 bottom-0
        flex justify-between items-center z-50
        "
      >
        <div className="p-4">
          {roomPrice && (
            <p>
              <strong>{roomPrice} € </strong>par nuits
            </p>
          )}

          <p>
            {checkInFromBK.getTime() > Date.now()
              ? `${checkInFromBK.getDate().toString()} `
              : "  "}
            {checkOutFromBK.getTime() > Date.now()
              ? ` - ${checkOutFromBK.getDate().toString()}
                `
              : "  "}
            {checkInFromBK.getTime() > Date.now()
              ? `${month[checkInFromBK.getMonth()]}`
              : "  "}{" "}
            {` — ${monthToShow}`}
          </p>
          {/* <p>{showMiniRange(checkInFromBK, checkOutFromBK)}</p> */}
        </div>
        <div className="p-4">
          <DialogRoomRequest2
            checkIn={checkInFromBK}
            checkOut={checkOutFromBK}
            bookedDaysToEmail={bookedDaysToEmail}
            title={title}
            roomId={roomId}
          />

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
    </>
  );
};

export default RoomDetailPageContent;
