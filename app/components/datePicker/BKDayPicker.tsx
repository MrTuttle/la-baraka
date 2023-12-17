"use client";
// REACT DAY PICKER
// https://react-day-picker.js.org/basics/modifiers

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { DateRange, DayPicker, DayClickEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";

const bookedDays = [new Date(2023, 11, 20), new Date(2023, 11, 23)];
const bookedStyle = { border: "2px solid currentColor" };

const BKDayPicker = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [booked, setBooked] = useState(false);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setBooked(day && modifiers.booked);
  };
  // MESSAGE TO GIVE SELECTED RANGE DAYS
  let footer = <p>Please pick the first day.</p>;
  const affiche = () => {
    if (range?.from) {
      if (!range.to) {
        footer = <p>{format(range.from, "PPP")}</p>;
      } else if (range.to) {
        footer = (
          <p>
            {format(range.from, "PPP")}–{format(range.to, "PPP")}
          </p>
        );
      }
    }
  };
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }
  console.log("DAY PICKER LOGS:");
  console.log("booked true / false / undefine : " + booked);
  console.log("bookedDays: " + bookedDays + "donne les jours booked: true");
  // console.log(bookedStyle); // donne le style CSS de l'élément booked
  console.log("dernier jour du range :" + range?.to);
  console.log("premier jour du range :" + range?.from);

  console.log(range); // le range.to et range.from

  // MESSAGE IF DAY IS ALREADY BOOKED
  // const footer = booked
  //   ? "This day is already booked!"
  //   : "Try to pick a booked day.";

  return (
    <>
      <DayPicker
        id="test"
        mode="range" // ability to select a range of days
        selected={range}
        onSelect={setRange}
        footer={footer}
        locale={fr}
        fromYear={2023} // limits years
        toYear={2025}
        showOutsideDays
        onDayClick={handleDayClick}
        modifiers={{ booked: bookedDays }}
        modifiersStyles={{ booked: bookedStyle }}

        // captionLayout="dropdown"
      />
      <div className="px-4">
        <p>E T A T :</p>
        {booked ? "this day is allready booked" : "try to pick a booked day"}
        <p>SELECTION :</p>
        {/* <p>Date d’arrivée : {affiche()}</p> */}
        {/* <p>Date de départ : {range?.to}</p> */}
      </div>
    </>
  );
};

export default BKDayPicker;
