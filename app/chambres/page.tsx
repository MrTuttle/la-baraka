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
import DisplayCldMulti from "../components/DisplayCldMulti";
import GetCldList from "../components/GetCldList";

export interface Room {
  title: string;
  description: string;
  id: number;
  // imageId: ImageRoom[];
  // allIdsTab: string[];
}
export interface ImageRoom {
  assignedToRoomId: number;
  publicId: string;
  alt: string;
}

const chambresPage = async () => {
  const item = 4;
  const rooms = await prisma.room.findMany();
  // console.log("ROOM PAGE :");
  // console.log(rooms);
  const images = prisma.image.findMany({
    where: {
      assignedToRoom: {
        id: item,
      },
    },
    select: {
      publicId: true,
    },
  });
  console.log(" CONTENUS DE images AVEC ITEM = 4 :");
  console.log(await images);

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
              {rooms.map((item, index) => (
                <p key={index}>{item.id}</p>
              ))}

              {/* <GetCldList imgList={room.id}/> */}
              {/* <DisplayCldMulti
                assignedToRoomId={room.id}
                publicId="kh4tt0exbzev7p3csh32"
                alt="truc"
              /> */}

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
