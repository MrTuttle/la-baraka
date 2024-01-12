"use client";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import React from "react";

interface BKDayProps {
  bookedDaysRange: Date[];
  bookedDays: Date[];
}

const RoomDetailPageContent = ({ bookedDaysRange, bookedDays }: BKDayProps) => {
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
    </>
  );
};

export default RoomDetailPageContent;
