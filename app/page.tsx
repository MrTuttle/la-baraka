// "use client";
// app/issue/page.tsx

import React from "react";
import { Button } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import DisplayCld from "./components/DisplayCld";
import prisma from "@/prisma/client";
import NewMenuForm from "./components/MenuForm";

const home = async () => {
  // const chambresImage = await prisma.image.findMany();
  return (
    <>
      <NewMenuForm />
      <Button>New Issue</Button>
      {/* <CldImage
        width="960"
        height="600"
        src="kh4tt0exbzev7p3csh32"
        sizes="100vw"
        alt="Description of my image"
      /> */}
      <DisplayCld public_id="s1pqrceeb5yjoxlldsiv" alt="Chambre" />
      {/* {chambresImage.map((image) => (
        <DisplayCld key={image.id} public_id={image.publicId} alt={image.alt} />
      ))}  */}
    </>
  );
};

export default home;
