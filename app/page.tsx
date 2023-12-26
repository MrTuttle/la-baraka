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
import CallMenuSwiper from "./components/swiper/CallMenuSwiper";
import UploadWidget from "./components/UploadWidget";
import SlidePerViewGetIds from "./components/swiper/SlidePerViewGetIds";
import CldImageClient from "./components/CldImageClient";

const home = async () => {
  // const chambresImage = await prisma.image.findMany();
  return (
    <>
      <div className="relative">
        <div className="prose absolute bottom-10 text-white mx-4">
          <h1 className="text-white">
            La Baraka vous accueille au cœur des monts des Cevennes
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam, est? Quae vel adipisci provident tempore, nisi, commodi
            suscipit pariatur perspiciatis beatae modi nam, iste aut possimus
            consequatur dolores aliquam. Laborum!
          </p>
        </div>
        <div>
          <CldImageClient
            src="r6sztwmaweq1sehluh74"
            width={600}
            height={600}
            alt="baraka"
            sizes="100vw"
          />
        </div>
      </div>

      <Section className="prose">
        <h2 className="m-4">Au menu aujourd’hui</h2>
        <CallMenuSwiper />
        <p className="mx-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          est? Quae vel adipisci provident tempore, nisi, commodi suscipit
          pariatur perspiciatis beatae modi nam, iste aut possimus consequatur
          dolores aliquam. Laborum!
        </p>
      </Section>
      <Section className="prose">
        <div className="mx-4">
          <h2>Les chambres</h2>
          <p>
            5 chambres partir de 12€ la nuit, réservables en ligne ou par
            téléphone
          </p>
        </div>
        <SlidePerViewGetIds />
      </Section>
      <div className="mx-4">
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </div>
    </>
  );
};
export const revalidate = 0;

export default home;
