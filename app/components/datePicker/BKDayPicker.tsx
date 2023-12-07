"use client";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const pastMonth = new Date(2020, 10, 15);

const BKDayPicker = () => {
  const [range, setRange] = useState<DateRange | undefined>();

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
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
};

export default BKDayPicker;
