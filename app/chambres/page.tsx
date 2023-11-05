import prisma from "@/prisma/client";
import React from "react";
import { number } from "zod";

interface Chambre {
  title: string;
  description: string;
  id: number;
}

const chambresPage = async () => {
  const chambres = await prisma.room.findMany();
  return (
    <>
      <div>chambress</div>
      <div>
        {chambres.map((chambre) => (
          <p key={chambre.id}>{chambre.title}</p>
        ))}
      </div>
    </>
  );
};

export default chambresPage;
