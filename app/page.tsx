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
      <div className="relative h-screen my-border-grey">
        <div className="prose absolute bottom-64 text-white my-border-grey h-2/3 w-2/4 right-1/4">
          <div className="flex flex-col gap-4 items-center text-4xl">
            <SiForestry />
            <h1 className="text-white font-extralight text-5xl">La Baraka</h1>
          </div>
        </div>
        <div className="h-screen my-border-red">
          <CldImageClient
            src="r6sztwmaweq1sehluh74"
            width={900}
            height={900}
            alt="baraka"
            sizes="100vh"
          />
        </div>
      </div>
      <Section className="prose px-8 my-border-grey h-screen flex flex-col items-center">
        <h3 className=" font-light text-2xl self-center">
          La Baraka vous accueille au cœur des monts des Cevennes. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Laboriosam, est? Quae
          vel adipisci provident tempore, nisi, commodi suscipit pariatur
          perspiciatis beatae modi nam, iste aut possimus consequatur dolores
          aliquam. Laborum!
        </h3>
      </Section>

      <section className="prose my-border-grey min-h-screen py-10">
        <h2 className="px-4 font-normal text-4xl">
          Au menu
          <br />
          aujourd’hui
        </h2>
        <div className=" pl-0 pr-4 overflow-hidden">
          <CallMenuSwiper />
        </div>
        <p className="mx-4 font-light text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          est? Quae vel adipisci provident tempore, nisi, commodi suscipit
          pariatur perspiciatis beatae modi nam, iste aut possimus consequatur
          dolores aliquam. Laborum!
        </p>
      </section>
      <Section className="prose my-border-grey min-h-screen">
        <div className="mx-4">
          <h1 className=" font-normal text-4xl">
            Cinq chambres <br />
            d’hôtes côté rivière
          </h1>
          <p className="font-light text-2xl">
            La chambres partir de 50€ la nuit, réservables en ligne ou par
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
