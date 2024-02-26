"use client";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import React, { useState } from "react";
import DialogRoomRequest2 from "@/app/components/DialogRoomRequest/DialogRoomRequest2";
import DialogRoomRequest3 from "@/app/components/DialogRoomRequest/DialogRoomRequest3";
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
  // console.log(`from page.tsx :, roomId = ${roomId}`);
  // console.log(`from page.tsx :, roomPrice = ${roomPrice}`);

  // console.log(`from page.tsx :, bookedDaysRange = ${bookedDaysRange}`);
  // console.log(`from page.tsx :, bookedDays = ${bookedDays}`);
  // console.log(`from page.tsx :, checkIn = ${checkIn}`);
  // console.log(`from page.tsx :, checkOut = ${checkOut}`);
  // console.log(`from page.tsx :, bookedDaysToEmail = ${bookedDaysToEmail}`);

  // HOOK LOGIC TO GET DATES FROM BKPICKER CLICK
  // get checkInFromBK day clicked from BKPicker & set it
  const [checkInFromBK, setCheckInFromBK] = useState<Date>(new Date());

  const handleStartDay = (startDay: Date) => {
    // ----- Understand UTC (start)----- //
    // Set variable to current date and time
    // const now = new Date();
    // console.log(`NOW new Date() //=> ${now}`); // => Fri Feb 23 2024 10:40:37 GMT+0100 (heure normale d’Europe centrale)

    // Get the current timestamp
    // now.getTime();
    // console.log(`TIMESTAMP now.getTime() //=> ${now.getTime()}`); // => 1708681237004

    // Assign the timestamp 0 to a new variable
    // const epochTime = new Date(0);
    // console.log(
    //   `UTC Time (1er Jan 1970 universal time) - new Date(0) //=> ${epochTime}`
    // );
    // => Thu Jan 01 1970 01:00:00 GMT+0100 (heure normale d’Europe centrale)

    // three ways to write same date :
    // Timestamp method
    // const timeStampMethod = new Date(-6106015800000);
    // console.log(
    //   `timeStampMethod - new Date(-6106015800000) //=> ${timeStampMethod} `
    // );

    // Date string method
    // const dateStringMethod = new Date("July 4 1776 12:30");
    // console.log(
    //   `dateStringMethod - dateStringMethod = new Date("July 4 1776 12:30") //=> ${dateStringMethod}`
    // );

    // Date and time method
    // const dateAndTimeStpMethod = new Date(1776, 6, 4, 12, 30, 0, 0);
    // console.log(
    //   `dateAndTimeStpMethod = new Date(1776, 6, 4, 12, 30, 0, 0) //=> ${dateAndTimeStpMethod}`
    // );

    // Assign current time to a variable
    // const nowTest = new Date();

    // and Print local and UTC timezones
    // console.log(
    //   `NOW LOCAL HOUR - nowTest.getHours() // => ${nowTest.getHours()}`
    // );
    // console.log(
    //   `NOW UTC HOUR - nowTest.getUTCHours() // => ${nowTest.getUTCHours()}`
    // );

    // ----- Understand UTC (end) ----- //

    // ----- BKDayPicker click return start date ----- //

    // let newStartDate = new Date();
    // const newStartDate: Date = new Date(startDay);
    const newStartDate: Date = startDay;
    // newStartDate = startDay;
    setCheckInFromBK(newStartDate);

    // ----- test it UTC vs Local ------ //
    console.log(`BKDay Picker click return : ${newStartDate}`);
    console.log(
      `BKDay Picker click return Local Hour : ${newStartDate.getHours()}`
    );
    console.log(
      `BKDay Picker click return UTC Hour : ${newStartDate.getUTCHours()}`
    );
    console.log(
      `BKDay Picker click UTC : YYYY:${newStartDate.getUTCFullYear()} - MM:${newStartDate.getUTCMonth()} - DD:${newStartDate.getUTCDate()} -T- HH:${newStartDate.getUTCHours()}`
    );
    console.log(
      `BKDay Picker click LOC : YYYY:${newStartDate.getFullYear()} - MM:${newStartDate.getMonth()} - DD:${newStartDate.getDate()} -T- HH:${newStartDate.getHours()}`
    );
    console.log(
      `const newStartDate | UTC : ${newStartDate.toJSON()} | LOC : ${newStartDate.toISOString()}
      `
    );
    console.log(
      `const bookedDays | UTC : ${bookedDays.map((e) =>
        e.toUTCString()
      )} | LOC : ${bookedDays.map((e) => e.toLocaleString())}
      `
    );
    console.log(
      `const bookedDaysRange | UTC : ${bookedDaysRange.map((e) =>
        e.toUTCString()
      )} | LOC : ${bookedDaysRange.map((e) => e.toLocaleString())}
      `
    );
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
      <div className="mb-20">
        <BKDayPicker
          bookedDays={bookedDays}
          bookedDaysRange={bookedDaysRange}
          onStartDay={handleStartDay}
          onEndDay={handleEndDay}
        />
      </div>
      {/* ----------Room detail page content query from BK :--------- */}

      {/* <div className="px-11">
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
      </div> */}
      {/* --------- Room detail page content query : -------- */}
      {/* <div>
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
      </div> */}
      {/* ----------FOOTER FIXED----------- */}
      <div
        className="w-full bg-white h-20 border-t
        fixed left-0 bottom-0
        flex justify-between items-center z-50
        "
      >
        {/* DISPLAY THIS TO SEE CheckInFromBk RETURN
        <div className="border p-4 ml-4">
          <ul>
            <li>{checkInFromBK.toJSON()}</li>
            <li>{checkInFromBK.toString()}</li>
          </ul>
        </div> */}

        <div className="p-4">
          {roomPrice && (
            <p>
              {" "}
              <strong>{roomPrice} € </strong>par nuits{" "}
            </p>
          )}
          <p>
            {/* LOGIC TO DISPLAY DATES SELECTED IN FOOTER */}
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

        {/* ---- ACTIVATE TO HAVE PHONE CALL COMPONENT --- */}

        {/* <div className="p-4" id="activate-when-dates-will-works">
          <DialogRoomRequest3
            checkIn={checkInFromBK}
            checkOut={checkOutFromBK}
            bookedDaysToEmail={bookedDaysToEmail}
            title={title}
            roomId={roomId}
          />
        </div> */}

        {/* --- ACTIVATE TO HAVE SEND EMAIL COMPONENT & PUBLISH DATES --- */}
        <div className="p-4" id="activate-when-dates-will-works">
          <DialogRoomRequest2
            checkIn={checkInFromBK}
            checkOut={checkOutFromBK}
            bookedDaysToEmail={bookedDaysToEmail}
            title={title}
            roomId={roomId}
          />
        </div>
      </div>
    </>
  );
};

export default RoomDetailPageContent;
