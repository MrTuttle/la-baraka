import prisma from "@/prisma/client";
import React from "react";
import { Badge, Button, Card, Flex, Section, Text } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";
import DeleteGuestButton from "../DeleteGuestButton";
import { ColorStatus } from "@/app/actions/ColorStatus";

interface Props {
  // params id: typed in string, 'cause url are always string
  params: { id: string };
  // bookedDayz: Date[];
}

const pageGuest = async ({ params }: Props) => {
  const guest = await prisma.userRoom.findUnique({
    where: { id: parseInt(params.id) },
    include: {
      reservationDates: true,
    },
  });
  return (
    <>
      <Section>
        <div className="sm:w-8/12 lg:w-6/12  mx-auto p-8">
          <h1 className="text-2xl">Guest detail page</h1>
          <p className=" font-semibold">What should’you do here ?</p>
          <ul className=" list-disc list-inside py-4">
            <li>Modify a guest</li>
            <li>Delete a guest</li>
            <li>
              Create a guest <em className=" text-orange-500">(coming soon)</em>
            </li>
            <li>See all guests reservations</li>
          </ul>
        </div>
        <div className="px-4 flex flex-col gap-3 justify-center flex-wrap">
          <div
            key={guest?.id}
            className="pb-3 w-full sm:w-8/12 lg:w-6/12  mx-auto border rounded p-8"
          >
            <div className="flex flex-wrap -mx-3 mb-6 justify-between">
              <div className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Guest n° {guest?.id}
              </div>
              <div className="flex gap-4">
                <Link href={"/guests/edit/" + guest?.id}>
                  <div className=" flex gap-1">
                    <HiOutlinePencilSquare />
                    <p className=" text-xs">Modifier</p>
                  </div>
                </Link>
                <DeleteGuestButton guestId={guest!.id} />
              </div>
            </div>
            <Flex direction="column" gap="2" className="pb-8">
              <div className=" sm:w-full">
                <ul>
                  <li>
                    <strong>
                      {guest?.firstName} {guest?.name}
                    </strong>
                  </li>
                  <li>{guest?.phone}</li>
                  <li>{guest?.email}</li>
                </ul>
              </div>
            </Flex>

            {guest?.reservationDates.map((booking) => (
              <Link key={booking.id} href={`/reservations/edit/${booking.id}`}>
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
                    <li className="">
                      Check in ←{" "}
                      <strong>
                        {booking.checkIn.toLocaleDateString("fr-FR", {
                          dateStyle: "full",
                        })}
                      </strong>
                    </li>
                    <li>
                      Check out →{" "}
                      <strong>
                        {booking.checkOut.toLocaleDateString("fr-FR", {
                          dateStyle: "full",
                        })}
                      </strong>
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
        </div>
      </Section>
    </>
  );
};

export default pageGuest;
