import prisma from "@/prisma/client";
import React from "react";
import { number } from "zod";
import ReactMarkdown from "react-markdown";
import { Card } from "@radix-ui/themes";
import DisplayCld from "../components/DisplayCld";
import Link from "next/link";

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
      <div className="mx-4">
        <div>chambres</div>
        <Link href={"/chambres/new"}>Nouvelle chambre</Link>
        {chambres.map((chambre) => (
          <Card key={chambre.id} className="prose" mt="4">
            <h3>{chambre.title}</h3>
            <ReactMarkdown>{chambre.description}</ReactMarkdown>
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
