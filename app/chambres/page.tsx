import prisma from "@/prisma/client";
import React from "react";
import { number } from "zod";
import ReactMarkdown from "react-markdown";
import { Card } from "@radix-ui/themes";
import DisplayCld from "../components/DisplayCld";

interface Chambre {
  title: string;
  description: string;
  id: number;
}

const chambresPage = async () => {
  const chambres = await prisma.room.findMany();
  // const chambresImage = await prisma.image.findMany();
  return (
    <>
      <div>chambress</div>
      <Card className="prose" mt="4">
        {chambres.map((chambre) => (
          <ReactMarkdown key={chambre.id}>{chambre.description}</ReactMarkdown>
        ))}
      </Card>
      {/* <Card>
        {chambresImage.map((chambreImage) => (
          <DisplayCld
            key={chambreImage.id}
            public_id={chambreImage.publicId}
            alt={chambreImage.alt}
          />
        ))}
      </Card> */}
    </>
  );
};

export default chambresPage;
