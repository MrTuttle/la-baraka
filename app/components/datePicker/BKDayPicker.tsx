"use client";
import { Flex } from "@radix-ui/themes";
// REACT DAY PICKER
// https://react-day-picker.js.org/basics/modifiers
// "PPP", format date -> https://date-fns.org/docs/format

import { format, isToday } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { DateRange, DayPicker, DayClickEventHandler } from "react-day-picker";
import { es } from "date-fns/locale";

import "react-day-picker/dist/style.css";

// type bookedDays = {
//   bookedDays: Date[];
// };
interface Props {
  bookedDays: Date[];
  bookedDaysRange: Date[];
  // peut pas passer ça dans un server component :
  onStartDay: (startDay: Date) => void;
  onEndDay: (endDay: Date) => void;
}

// let bookedDays = [new Date(2023, 11, 20), new Date(2023, 11, 23)];
const bookedStyle = { border: "2px solid currentColor" };

const BKDayPicker = ({
  bookedDays,
  bookedDaysRange,
  onStartDay,
  onEndDay,
}: Props) => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [booked, setBooked] = useState(false);
  const defaultMonth = new Date(); // if empty (), set current date, (2024, 0) to january 2024
  // const disabledDays = new Date(2024, 1, 20);
  const disabledDays = [
    ...bookedDays,
    // new Date(2024, 2, 10),
    // new Date(2024, 2, 12),
    // new Date(2024, 2, 20),
    // { from: new Date(2024, 3, 18), to: new Date(2024, 3, 29) },
    { from: new Date(2024, 0, 1), to: new Date() }, // for past days unselectables
  ];

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setBooked(day && modifiers.booked);
    // console.log("HANDLEDAY CLICK", range);
  };
  // MESSAGE TO GIVE SELECTED RANGE DAYS
  let footer = (
    <p className="pt-4 pb-2">
      Selectionnez votre jour d’arrivée
      <br />
      puis le jour de départ
    </p>
  );

  const affiche = () => {};
  if (range?.from) {
    if (!range.to) {
      footer = (
        <p className="pt-4 pb-2">
          Arrivée : {format(range.from, "PP")}
          <br />
          Selectionnez votre jour de départ
        </p>
      );
      // FIRST DAY CLICKED = RANGE.FROM
      // console.log("first day clicked:", range.from);
      onStartDay(range.from);
      // console.log("booked:", booked);
      // console.log("START DAY VALUE :", onStartDay);
    } else if (range.to) {
      footer = (
        <p className="pt-4 pb-2">
          Arrivée : {format(range.from, "PP", { locale: fr })}
          <br />
          Départ :{format(range.to, "PP", { locale: fr })}
        </p>
      );
      // SECOND DAY CLICKED = RANGE.TO
      // console.log("second day clicked:", range.to);
      onEndDay(range.to);
    }
  }

  return (
    <>
      <Flex
        direction="column"
        align="start"
        className=" bg-gray-100 rounded-2xl"
      >
        <DayPicker
          // ISOWeek
          id="test"
          locale={fr} // import { fr } from "date-fns/locale";
          mode="range" // ability to select a range of days
          selected={range}
          onSelect={setRange}
          footer={footer}
          // locale={fr} // french calendar
          // fromYear={2024} // limits years
          toYear={2025}
          defaultMonth={defaultMonth} // = current month, or new Date(), or new Date(2024, 4)
          fromMonth={defaultMonth}
          // toDate={new Date(2025, 12)}
          showOutsideDays
          disabled={disabledDays}
          onDayClick={handleDayClick}
          // modifiers={{ booked: bookedDays }}
          // modifiersStyles={{ booked: bookedStyle }}
          // captionLayout="dropdown"
        />
      </Flex>
    </>
  );
};

export default BKDayPicker;
