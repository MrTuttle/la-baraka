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
import Background from "./components/Background";
import DialogRoomRequest from "./components/DialogRoomRequest/DialogRoomRequest";
import SectionFramer from "./components/SectionFramer";
import SplitTypeFramer from "./components/SplitTypeFramer";
import SplitType from "split-type";
import HeroScrollEffect from "./components/HeroScrollEffect";

const home = () => {
  // const chambresImage = await prisma.image.findMany();
  // document.addEventListener("DOMContentLoaded", function () {
  //   const contentHolderHeight = document.querySelector(".content-holder");
  //   const imgHolderHeight = window.innerHeight;
  //   const additionalScrollHeight = window.innerHeight;
  //   const totalBodyHeight =
  //     contentHolderHeight + imgHolderHeight + additionalScrollHeight;
  //   document.body.style.height = `${totalBodyHeight} px`;
  // });

  return (
    <>
      {/* <div className="fixed h-screen w-full flex flex-col items-center top-0 -z-50 my-border-red"> */}
      {/* <div className="h-screen w-full top-0 my-border-red"> */}
      <HeroScrollEffect />
      <div>
        <div className="content-holder">
          <Section className="prose px-8 h-screen flex flex-col items-center w-full mx-auto my-auto mt-[100vh] bg-gray-100 align-middle">
            <SplitTypeFramer>
              <h3 className=" font-light text-2xl self-center leading-10 mx-3">
                La Baraka vous accueille au cœur du massif des Cevennes. Lorem
                ipsum dolor sit, amet consectetur <strong>adipisicing</strong>{" "}
                elit. Laboriosam, est? Quae vel adipisci provident tempore,
                nisi, commodi suscipit pariatur perspiciatis beatae modi nam,
                iste aut possimus consequatur dolores aliquam. Laborum!
              </h3>
            </SplitTypeFramer>
          </Section>

          <section className="prose min-h-screen py-10 mx-auto bg-white">
            {/* <SplitTypeFramer>
              <h2 className="px-4 font-normal text-4xl">
                Au menu
                <br />
                aujourd’hui
              </h2>
            </SplitTypeFramer> */}
            {/* <div className=" pl-0 pr-4 overflow-hidden"> */}
            <div className=" pl-0 pr-4 sm:overflow-hidden md:overflow-visible">
              {/* <SectionFramer>
            <CallMenuSwiper />
          </SectionFramer> */}
            </div>
            {/* <SectionFramer>
              <p className="mx-4 font-light text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, est? Quae vel adipisci provident tempore, nisi,
                commodi suscipit pariatur perspiciatis beatae modi nam, iste aut
                possimus consequatur dolores aliquam. Laborum!
              </p>
            </SectionFramer> */}
          </section>

          <Section className="prose my-border-grey min-h-screen mx-auto bg-white">
            <div className="mx-4">
              {/* <SplitTypeFramer>
                <h1 className=" font-normal text-4xl">
                  Cinq chambres <br />
                  d’hôtes côté rivière
                </h1>
              </SplitTypeFramer> */}
              {/* <SectionFramer>
                <p className="font-light text-2xl">
                  La chambres partir de 50€ la nuit, réservables en ligne ou par
                  téléphone
                </p>
              </SectionFramer> */}
            </div>
            {/* <SectionFramer>
              <SlidePerViewGetIds />
            </SectionFramer> */}
          </Section>
        </div>

        <div className="flex justify-center py-32">
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export const revalidate = 0;

export default home;
