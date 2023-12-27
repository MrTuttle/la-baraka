import prisma from "@/prisma/client";
import React from "react";
import { number } from "zod";
import ReactMarkdown from "react-markdown";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import DeleteRoomButton from "./[id]/DeleteRoomButton";
import GetCldIdList from "../components/GetCldIdList";

export interface Room {
  title: string;
  description: string;
  id: number;
  price: number;

  // imageId: ImageRoom[];
  // allIdsTab: string[];
}
export interface ImageRoom {
  assignedToRoomId: number | null;
  publicId: string;
  alt: string;
  cover: boolean;
}

const chambresPage = async () => {
  const item = 4;
  const rooms = await prisma.room.findMany();
  // console.log("ROOM PAGE :");
  // console.log(rooms);

  return (
    <>
      <div className="mx-4 pt-20">
        <Link href={"/chambres/new"}>
          <Button>Créer une nouvelle chambre</Button>
        </Link>
        {rooms.map((room) => (
          <Card key={room.id} className="prose" mt="4">
            <Flex direction="row" align="baseline" gap="0" justify="between">
              <p>idd: {room.id}</p>

              <Flex gap="2" direction="row" align="center">
                <Link href={"/chambres/edit/" + room.id}>
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
            <Flex direction="column" gap="1">
              <GetCldIdList roomId={room.id} />
              <h3>{room.title}</h3>
              {room.price && (
                <p>
                  <strong>{room.price} € </strong> par nuits
                </p>
              )}

              <ReactMarkdown>{room.description}</ReactMarkdown>
              <Link href={`chambres/${room.id}`}>Détail</Link>
            </Flex>
          </Card>
        ))}
      </div>
    </>
  );
};
export const revalidate = 0;

export default chambresPage;
