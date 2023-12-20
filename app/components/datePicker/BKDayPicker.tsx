"use client";
import { Flex } from "@radix-ui/themes";
// REACT DAY PICKER
// https://react-day-picker.js.org/basics/modifiers

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { DateRange, DayPicker, DayClickEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";

let bookedDays = [new Date(2023, 11, 20), new Date(2023, 11, 23)];
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
  console.log(
    "bookedDays: " +
      bookedDays +
      "donne les jours booked: true" +
      typeof bookedDays
  );
  // console.log(bookedStyle); // donne le style CSS de l'élément booked
  console.log("dernier jour du range :" + range?.to);
  console.log("premier jour du range :" + range?.from);
  console.log("typeof range :");

  console.log(typeof range?.to); // le range.to et range.from
  console.log("DATE getDay :");

  console.log(bookedDays[0].getDay());
  //=> 3 (3ejour, Mercredis)
  console.log(bookedDays[0].getFullYear());
  //=> 2023
  console.log(bookedDays[0].getDate());
  //=> 20
  console.log(bookedDays[0].getMonth());
  //=> 11 (decembbre, ok)

  console.log("NOUVELLE DATE");
  bookedDays.push(new Date(2023, 11, 21));
  console.log(bookedDays[2]);
  // Thu Dec 21 2023 00:00:00 GMT+0100 (heure normale d’Europe centrale)

  console.log(bookedDays[2].toLocaleDateString());
  //=> 21/12/2023
  console.log(bookedDays[2].toLocaleTimeString());
  //=> 00:00:00
  console.log(bookedDays[2].toDateString());
  //=> Thu Dec 21 2023
  const stringOrNot = bookedDays[2].toLocaleDateString();
  console.log(typeof stringOrNot);
  //=> string
  console.log(typeof bookedDays[0].getMonth());
  //=> number
  console.log(typeof bookedDays[0]);
  //=> object
  console.log(typeof bookedDays);
  //=> object

  return (
    <>
      <Flex
        direction="column"
        align="start"
        className=" bg-gray-100 rounded-2xl p-4"
      >
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
      </Flex>
    </>
  );
};

export default BKDayPicker;
