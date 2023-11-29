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
}

const chambresPage = async () => {
  const rooms = await prisma.room.findMany();
  // const chambresImage = await prisma.image.findMany();
  return (
    <>
      <div className="mx-4">
        <div>chambres</div>
        <Link href={"/chambres/new"}>
          <Button>Créer une nouvelle chambre</Button>
        </Link>
        {rooms.map((room) => (
          <Card key={room.id} className="prose" mt="4">
            <Flex direction="row" justify="between" align="baseline" gap="0">
              <Box>
                <h3>{room.title}</h3>
                <p>id: {room.id}</p>
                <p>{}</p>
              </Box>
              <Flex gap="2" direction="column">
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
            <ReactMarkdown>{room.description}</ReactMarkdown>
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
