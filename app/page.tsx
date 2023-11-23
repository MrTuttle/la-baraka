// "use client";
// app/issue/page.tsx

import React, { useRef, useState } from "react";
import { Button, Section } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import DisplayCld from "./components/DisplayCld";
import prisma from "@/prisma/client";
import SlidesPerViewAuto from "./components/swiper/SlidesPerViewAuto";
import Link from "next/link";
import MenuSwiper from "./components/swiper/MenuSwiper";

const home = async () => {
  // const chambresImage = await prisma.image.findMany();
  return (
    <>
      <Section className="prose m-4">
        <h1>La Baraka vous accueille au cœur des monts des Cevennes</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          est? Quae vel adipisci provident tempore, nisi, commodi suscipit
          pariatur perspiciatis beatae modi nam, iste aut possimus consequatur
          dolores aliquam. Laborum!
        </p>
      </Section>
      <Section className="prose m-4">
        <h2>Au menu aujourd’hui</h2>
      </Section>
      <Section className="prose">
        <div className="m-4">
          <h2>Les chambres</h2>
          <p>
            5 chambres partir de 12€ la nuit, réservables en ligne ou par
            téléphone
          </p>
        </div>
        <SlidesPerViewAuto />
      </Section>
      <div className="mx-4">
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
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
      </div>
    </>
  );
};

export default home;
