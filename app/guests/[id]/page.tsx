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
      <div className="pt-20 px-4">
        <h1>page</h1>
        <p>{guest?.firstName}</p>
        <Card key={guest?.id} className="pb-3" size="4">
          <Flex gap="4" direction="row" wrap="wrap" className="mb-6">
            <DeleteGuestButton guestId={guest!.id} />
            <Link href={"/guests/edit/" + guest?.id}>
              <Flex gap="1">
                <HiOutlinePencilSquare />
                <Text as="p" size="1">
                  Modifier
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Flex direction="row" gap="4" justify="start" wrap="wrap">
            <Text size="1" className=" sm:w-full lg:w-4/12">
              <span className=" font-bold">{guest?.id}</span> |{" "}
              {guest?.firstName} {guest?.name}
            </Text>

            {guest?.reservationDates.map((booking) => (
              <Text
                key={booking.id}
                size="1"
                className=" rounded-md p-4 shadow border"
              >
                <Link href={`/reservations/edit/${booking.id}`}>
                  {booking.assignedToRoomId === 0 ? (
                    <p className=" text-red-600">No room assigned</p>
                  ) : (
                    <p>room Id : {booking.assignedToRoomId}</p>
                  )}
                  <p>
                    Check in :{" "}
                    <strong>
                      {booking.checkIn.toLocaleDateString("fr-FR", {
                        dateStyle: "full",
                      })}
                    </strong>
                  </p>
                  <p>
                    Check out :{" "}
                    <strong>
                      {booking.checkOut.toLocaleDateString("fr-FR", {
                        dateStyle: "full",
                      })}
                    </strong>
                  </p>
                  {/* {booking.status.valueOf()} */}
                  <Badge
                    variant="solid"
                    radius="full"
                    color={
                      ColorStatus(booking.status)
                      // booking.status === "VACANT" ? "grass" : "crimson"
                      // if (booking.status === "VACANT") {"grass"} else if (boking.status === "OCCUPIED") {"ruby"} else {"orange"}
                    }
                    // "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "brown" | "orange" | "sky" | "mint" | "lime" | "yellow" | "amber" | "gold" | "bronze" | "gray"
                    className="mt-4"
                  >
                    {booking.status}
                  </Badge>

                  {/* <button onClick={async () => {}}>Supprimer</button> */}
                  {/* <DeleteGuest guest={guest.id} /> */}
                </Link>
              </Text>
            ))}
          </Flex>
        </Card>
      </div>
    </>
  );
};

export default pageGuest;
