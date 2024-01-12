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
      <div>RoomDetailPageContent</div>
      <p>
        <strong>display dates click</strong>
      </p>
      <p>
        <strong>checkInFromBK : </strong>
        {checkInFromBK.toDateString()}
      </p>
      <p>
        <strong>checkOutFromBK : </strong>
        {checkOutFromBK.toDateString()}
      </p>
      <p>
        <strong>bookedDays :</strong>
      </p>
      {bookedDays.map((e, index) => (
        <p key={index}>{e.toDateString()}</p>
      ))}

      <p>
        <strong>var bookedDaysRange</strong> - by user
      </p>
      {bookedDaysRange.map((e, index) => (
        <div key={index}>{e.toDateString()}</div>
      ))}
      <p>
        <strong>var bookedDays</strong> - by room
      </p>
      {bookedDays.map((e, index) => (
        <div key={index}>{e.toDateString()}</div>
      ))}
      <BKDayPicker
        bookedDays={bookedDays}
        bookedDaysRange={bookedDaysRange}
        onStartDay={handleStartDay}
        onEndDay={handleEndDay}
      />
      <DialogRoomRequest2
        checkIn={checkInFromBK}
        checkOut={checkOutFromBK}
        bookedDaysToEmail={bookedDaysToEmail}
        title={title}
        roomId={roomId}
      />

      <ul>
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
    </>
  );
};

export default RoomDetailPageContent;
