"use client";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import React from "react";
import DialogRoomRequest2 from "@/app/components/DialogRoomRequest/DialogRoomRequest2";

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

  return (
    <>
      <div>RoomDetailPageContent</div>
      <p>var booked days in rannge</p>
      {bookedDaysRange.map((e, index) => (
        <div key={index}>{e.toDateString()}</div>
      ))}
      <p>var booked days</p>
      {bookedDays.map((e, index) => (
        <div key={index}>{e.toDateString()}</div>
      ))}
      <BKDayPicker bookedDays={bookedDaysRange} bookedDaysRange={bookedDays} />
      {roomId ? (
        <DialogRoomRequest2
          checkIn={checkIn}
          checkOut={checkOut}
          bookedDaysToEmail={bookedDaysToEmail}
          title={title}
          roomId={roomId}
        />
      ) : (
        <p>NO ROOM ID !!!</p>
      )}

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
