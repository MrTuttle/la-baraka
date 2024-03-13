// "use client";

import React from "react";
import getUserRooms from "../actions/GetUserRooms";
import DeleteUserRoom from "../actions/DeleteUserRoom";
import { UserRoom } from "@prisma/client";
import prisma from "@/prisma/client";
import { Badge, Button, Card, Flex, Section, Text } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";

import DeleteGuest from "./DeleteGuestButton";
import DeleteGuestButton from "./DeleteGuestButton";
import { ColorStatus } from "../actions/ColorStatus";
import ClientTime from "../components/ClientTime";
import { addHours } from "@/app/utilities/hoursOffset";

// import Vue from "./Vue";

// interface Props {
//   onClick: (item: number) => void;
// }

// SERVER
const pageGuests = async () => {
  const guests = await prisma.userRoom.findMany({
    include: {
      reservationDates: true,
    },
  });

  // SERVER END

  // SERVER ACTION IMPORTED FROM MarkBooked
  // const guests: [] = () => guestListBoard();

  // DeleteUserRoom(11);
  // const handleClick = (item: number) => {
  //   DeleteUserRoom(item);
  // };

  // function addHours(date: Date, hours: number) {
  //   date.setHours(date.getHours() + hours);

  //   return date;
  // }

  // const addHours = (date: Date, hours: number) => {
  //   date.setHours(date.getHours() + hours);
  //   return date;
  // };
  // const minusHours = (date: Date, hours: number) => {
  //   date.setHours(date.getHours() - hours);
  //   return date;
  // };
  const serverTime = new Date();

  return (
    <>
      {/* <Vue guests={guests} /> */}
      <Section className="mt-0 pt-40">
        <div className="sm:w-8/12 lg:w-6/12  mx-auto p-8">
          <h1 className="text-2xl">Guests page</h1>
          <p className=" font-semibold">What should’you do here ?</p>
          <ul className=" list-disc list-inside py-4">
            <li>Create a new guest</li>
            <li>See all guests and their reservations (UTC & LOC)</li>
            <li>Modify guests</li>
            <li>Access & modify a reservation</li>
          </ul>
          {/* <ul>
            <li>DATE LOC : {new Date().toLocaleString()}</li>
            <li>DATE JSON : {new Date().toJSON()}</li>
            <li>DATE UTC : {new Date().toUTCString()}</li>
            <li>DATE JSON +1 : {addHours(new Date(), 1).toJSON()}</li>
            <li>DATE JSON -1 : {minusHours(new Date(), 1).toJSON()}</li>
            <li>Servertime : {serverTime.toJSON()}</li>
            <li>TIME : {serverTime.getTime()}</li>
            <li>TIME OFFSET : {serverTime.getTimezoneOffset()}</li>
            <li>{serverTime.setTime(1708811781999 - 60)}</li>
            <li>{serverTime.toJSON()}</li>
          </ul> */}
        </div>

        <div className="px-4 flex flex-col gap-3 justify-center flex-wrap">
          <div className="w-full sm:w-8/12 lg:w-6/12  mx-auto border rounded py-8 px-4">
            <Link
              href="/guests/new"
              className="p-2 bg-blue-500 transition-colors ease-in rounded hover:bg-blue-600 text-white font-semibold"
            >
              Create New Guest
            </Link>
          </div>
          {guests.map((guest, index) => (
            // <Card key={guest.id} className="pb-3 mx-auto" size="4">
            <div
              key={guest.id}
              className="pb-3 w-full sm:w-8/12 lg:w-6/12  mx-auto border rounded p-8"
            >
              <div className="flex flex-wrap -mx-3 mb-6 justify-between">
                <div className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Guest n° {guest.id}
                </div>
                <div className="flex gap-4">
                  <Link href={"/guests/edit/" + guest.id}>
                    <div className=" flex gap-1">
                      <HiOutlinePencilSquare />
                      <p className=" text-xs">Modifier</p>
                    </div>
                  </Link>
                  <DeleteGuestButton guestId={guest.id} />
                </div>
              </div>
              <Flex direction="column" gap="2" className="pb-8">
                <div className=" sm:w-full">
                  <ul>
                    <li>
                      <strong>
                        {guest.firstName} {guest.name}
                      </strong>
                    </li>
                    <li>{guest.phone}</li>
                    <li>{guest.email}</li>
                  </ul>
                </div>
              </Flex>

              {guest.reservationDates.map((booking) => (
                <Link
                  key={booking.id}
                  href={`/reservations/edit/${booking.id}`}
                >
                  <div className="w-full rounded-md py-8 pl-8 pr-8 bg-slate-100 transition-all ease-in-out hover:bg-gray-200 hover:pl-10 mb-2">
                    <ul
                      role="list"
                      className=" divide-y divide-gray-300 text-xs pt-4 [&_*]:py-2"
                    >
                      <li>
                        <strong>Reservation n° {booking.id}</strong>
                      </li>

                      {booking.assignedToRoomId === 0 ? (
                        <li className=" text-red-600">No room assigned</li>
                      ) : (
                        <li>Chambre {booking.assignedToRoomId}</li>
                      )}
                      {/* <li className="">
                        Check in ←{" "}
                        <strong>
                          {booking.checkIn.toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </strong>
                        {" (LOC)"}
                      </li>
                      <li>
                        Check out →{" "}
                        <strong>
                          {booking.checkOut.toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </strong>
                        {" (LOC)"}
                      </li> */}
                      <li className="">
                        Check in ←{" "}
                        <strong>
                          {addHours(booking.checkIn, 0).toUTCString()}
                        </strong>
                        {" (UTC + 0h) "}
                        {/* must add 24h on online server, nothing in localhost */}
                      </li>
                      <li>
                        Check out →{" "}
                        <strong>
                          {addHours(booking.checkOut, 0).toUTCString()}
                        </strong>
                        {" (UTC + 0h) "}
                        {/* must add 24h on online server, nothing in localhost */}
                      </li>

                      {/* {booking.status.valueOf()} */}

                      {/* <button onClick={async () => {}}>Supprimer</button> */}
                      {/* <DeleteGuest guest={guest.id} /> */}
                    </ul>
                    <div className="justify-between flex pt-4 ">
                      <Badge
                        variant="solid"
                        radius="full"
                        color={
                          ColorStatus(booking.status)
                          // booking.status === "VACANT" ? "grass" : "crimson"
                          // if (booking.status === "VACANT") {"grass"} else if (boking.status === "OCCUPIED") {"ruby"} else {"orange"}
                        }
                        // "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "brown" | "orange" | "sky" | "mint" | "lime" | "yellow" | "amber" | "gold" | "bronze" | "gray"
                        className=""
                      >
                        {booking.status}
                      </Badge>

                      <div className=" flex gap-1">
                        <HiOutlinePencilSquare />
                        <p className=" text-xs">Modifier</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            // </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export const revalidate = 0;

export default pageGuests;
