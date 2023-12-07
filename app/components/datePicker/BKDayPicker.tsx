"use client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { DateRange, DayPicker, DayClickEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";

const bookedDays = [new Date(2023, 12, 20), new Date(2023, 12, 23)];
const bookedStyle = { border: "2px solid currentColor" };

const BKDayPicker = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [booked, setBooked] = useState(false);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setBooked(day && modifiers.booked);
  };

  let footer = <p>Please pick the first day.</p>;
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

  return (
    <DayPicker
      id="test"
      mode="range" // ability to select a range of days
      selected={range}
      onSelect={setRange}
      footer={footer}
      locale={fr} // locale on france
      fromYear={2023} // limits years
      toYear={2025}
      showOutsideDays
      onDayClick={handleDayClick}
      modifiers={{ booked: bookedDays }}
      modifiersStyles={{ booked: bookedStyle }}
      // captionLayout="dropdown"
    />
  );
};

export default BKDayPicker;
