// "use client";
// app/issue/page.tsx

import React, { useRef, useState } from "react";
import { Button, Section } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import DisplayCld from "./components/DisplayCld";
import prisma from "@/prisma/client";
import SlidesPerViewAuto from "./components/swiper/SlidesPerViewAuto";
import Link from "next/link";
import CallMenuSwiper from "./components/swiperMenu/CallMenuSwiper";
import UploadWidget from "./components/UploadWidget";
import SlidePerViewGetIds from "./components/swiperRooms/SlidePerViewGetIds";
import CldImageClient from "./components/CldImageClient";
import { SiForestry } from "react-icons/si";

const home = async () => {
  // const chambresImage = await prisma.image.findMany();
  return (
    <>
      <div className="relative">
        <div className="prose absolute bottom-64 text-white mx-4 ">
          <div className="flex gap-4 justify-center text-4xl align-content: baseline">
            <div className=" flex">
              <SiForestry />
            </div>
            <div>
              <h1 className="text-white font-extralight text-5xl">La Baraka</h1>
            </div>
          </div>
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
      <Section className="prose mx-8">
        <h3 className=" font-light text-2xl">
          La Baraka vous accueille au cœur des monts des Cevennes. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Laboriosam, est? Quae
          vel adipisci provident tempore, nisi, commodi suscipit pariatur
          perspiciatis beatae modi nam, iste aut possimus consequatur dolores
          aliquam. Laborum!
        </h3>
      </Section>

      <Section className="prose">
        <h2 className="mx-4 mb-0">Au menu aujourd’hui</h2>
        <div className="pt-0">
          <CallMenuSwiper />
        </div>
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
