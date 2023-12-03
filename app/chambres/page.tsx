import prisma from "@/prisma/client";
import React from "react";
import { number } from "zod";
import ReactMarkdown from "react-markdown";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import DisplayCld from "../components/DisplayCld";
import Link from "next/link";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import DeleteRoomButton from "./[id]/DeleteRoomButton";

interface Chambre {
  title: string;
  description: string;
  id: number;
  // imageId: ImageRoom[];
  allIdsTab: string[];
}
interface ImageRoom {
  assignedToRoomId: number;
  publicId: string;
}

const chambresPage = async () => {
  const rooms = await prisma.room.findMany();
  const chambresImage = await prisma.image.findMany();
  const getRoomPublicIds = async (roomId: number) => {
    const getImages = await prisma.image.findMany({
      where: {
        assignedToRoomId: roomId,
      },
    });

    console.log("roomId");
    console.log(roomId);
    console.log("PUBLIC IDS :");

    getImages.map((img) => console.log(img.publicId));
    const allIdsTab: string[] = [];
    getImages.map((imag) => allIdsTab.push(imag.publicId));
    console.log("TAB :");
    console.log(allIdsTab);
    // getImages.map((img) => img.publicId);
  };

  // launch function who get all public ids for a room
  rooms.map((room) => getRoomPublicIds(room.id));

  console.log("CHAMBRESIMAGE :");

  console.log(
    chambresImage.map(
      (image) =>
        `id: ${image.id} publicId: ${image.publicId} assignedToRoomId: ${image.assignedToRoomId} alt: ${image.alt}`
    )
  );
  console.log("ROOMS :");
  console.log(
    rooms.map(
      (room) => `id: ${room.id} | title: ${room.title} | assignedRoom: `
    )
  );

  return (
    <>
      <div className="mx-4">
        <div>chambres</div>
        <Link href={"/chambres/new"}>
          <Button>Créer une nouvelle chambre</Button>
        </Link>
        {rooms.map((room) => (
          <Card key={room.id} className="prose" mt="4">
            <Flex direction="row" align="baseline" gap="0" justify="between">
              <p>idd: {room.id}</p>
              <Flex gap="2" direction="row" align="center">
                <Link href={"/chambres/new"}>
                  <Flex gap="1">
                    <HiOutlinePencilSquare />
                    <Text as="p" size="1">
                      Modifier
                    </Text>
                  </Flex>
                </Link>
                {/* <Link href="/chambres/new">
                  <Flex gap="1">
                  <HiOutlineTrash />
                  <Text as="p" size="1">
                  Supprimer
                  </Text>
                  </Flex>
                </Link> */}
                <DeleteRoomButton roomId={room.id} />
              </Flex>
            </Flex>
            <Flex direction="column">
              <h3>{room.title}</h3>
              <ReactMarkdown>{room.description}</ReactMarkdown>
              <p>mon texte{}</p>

              {/* {getRoomPublicIds(room.id)} */}
              {/* <DisplayCld public_id={} /> */}
            </Flex>
          </Card>
        ))}
        {/* <Card>
        {chambresImage.map((chambreImage) => (
          <DisplayCld
          key={chambreImage.id}
          public_id={chambreImage.publicId}
          alt={chambreImage.alt}
          />
          ))}
        </Card> */}
      </div>
    </>
  );
};
export const revalidate = 0;

export default chambresPage;
