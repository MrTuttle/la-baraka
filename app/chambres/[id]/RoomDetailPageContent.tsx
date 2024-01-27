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
  console.log("wwwwww", bookedDaysRange);

  // HOOK LOGIC TO GET DATES FROM BKPICKER CLICK
  // get checkInFromBK day clicked from BKPicker
  const [checkInFromBK, setCheckInFromBK] = useState<Date>(new Date(""));
  const handleStartDay = (startDay: Date) => {
    setCheckInFromBK(startDay);
  };

  const [checkOutFromBK, setCheckOutFromBK] = useState<Date>(new Date(""));
  const handleEndDay = (endDay: Date) => {
    setCheckOutFromBK(endDay);
  };
  let bookedDaysMail: Date[] = [];
  bookedDaysMail.push;

  return (
    <>
      <BKDayPicker
        bookedDays={bookedDays}
        bookedDaysRange={bookedDaysRange}
        onStartDay={handleStartDay}
        onEndDay={handleEndDay}
      />
      {/* ----------Room detail page content query from BK :--------- */}

      <div>
        <ul>
          <p>RoomDetailPageContent query with BKpicker</p>
          <li>
            <strong>display dates click</strong>
          </li>
          <li>
            <strong>checkInFromBK hook startDay from bk : </strong>
            {checkInFromBK.toDateString()}
          </li>

          <li>
            <strong>checkOutFromBK : </strong>
            {checkOutFromBK.toDateString()}
          </li>

          <li>
            <strong>var bookedDaysRange</strong> - by user
          </li>
          {bookedDaysRange.map((e, index) => (
            <div key={index}>{e.toDateString()}</div>
          ))}
          <li>
            <strong>var bookedDays</strong> - by room
          </li>
          {bookedDays.map((e, index) => (
            <div key={index}>{e.toDateString()}</div>
          ))}
        </ul>
      </div>
      {/* --------- Room detail page content query : -------- */}
      <div>
        <ul>
          <p>Room detail page content query</p>
          <li>
            <strong>checkIn :</strong>
            {checkIn.toDateString()}
          </li>
          <li>
            <strong>checkOut :</strong>
            {checkOut.toDateString()}
          </li>
          <li>
            <strong>bookedDaysToEmail :</strong>
            {bookedDaysToEmail}
          </li>
          <li>
            <strong>title :</strong>
            {title}
          </li>
          <li>
            <strong>roomId :</strong>
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

          <p>8-9 jan</p>
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
