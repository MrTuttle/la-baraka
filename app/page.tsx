// "use client";
// app/issue/page.tsx

import React, { useRef, useState } from "react";
import { Button, Container, Section } from "@radix-ui/themes";
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
import SectionFramerRight from "./components/SectionFramerRight";
import SplitTypeFramer from "./components/SplitTypeFramer";
import SplitType from "split-type";
import HeroScrollEffect from "./components/HeroScrollEffect";

import Image from "next/image";
import terrasse from "@/public/upload/la-baraka-terrasse.jpg";
import backgroundImage from "@/public/tourism/ste-croix-vf-02.jpg";

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
          <Section className="px-11 lg:px-0 lg:mt-[8rem] min-h-screen flex flex-col w-full lg:w-8/12 mx-auto bg-white align-middle">
            <div className="">
              <SplitTypeFramer>
                <h3 className="font-light text-2xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
                  La Baraka vous accueille au cœur du massif des Cévennes. Lorem
                  ipsum dolor sit, amet consectetur <strong>adipisicing</strong>{" "}
                  elit. Laboriosam, est? Quae vel adipisci provident tempore,
                  nisi, commodi suscipit pariatur perspiciatis beatae modi nam,
                  iste aut possimus consequatur dolores aliquam. Laborum!
                </h3>
              </SplitTypeFramer>
            </div>
            <div className="mt-11">
              <SectionFramer>
                <Image
                  src={backgroundImage}
                  alt="portrait"
                  // fill
                  className="object-cover"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  // 480px = standart mobiles, 768 = standard tablets, 33vw other width devices -> seem not working on dev tools, see in real mobile device
                  quality="75" // default = 75 percent
                  // priority // boolean, set priority to images above the fold
                />
              </SectionFramer>
            </div>
          </Section>
        </div>

        <Container className="bg-gray-100 overflow-hidden md:overflow-visible">
          <Section className="flex flex-col  lg:mt-[8rem] min-h-screen w-full lg:w-8/12 mx-auto bg-gra align-middle">
            <SectionFramer>
              <h1 className="font-normal text-5xl px-8 lg:px-0">
                Au menu <br />
                Aujourd’hui
              </h1>
            </SectionFramer>
            {/* <SectionFramer>
              <h1 className="px-11 lg:px-0 font-normal text-5xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
              Au menu <br /> aujourd’hui
              </h1>
            </SectionFramer> */}
            <div className="flex flex-col items-center lg:flex-row-reverse ">
              {/* responsive settings for swipper */}
              <div className="my-11 w-full  md:w-3/6 pl-0 pr-4 overflow-hidden md:overflow-visible">
                <SectionFramerRight>
                  <CallMenuSwiper />
                </SectionFramerRight>
              </div>
              <SectionFramer>
                <p className="bloc lg:w-[75%] font-light text-2xl px-8 lg:px-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam, est? Quae vel adipisci provident tempore, nisi,
                  commodi suscipit pariatur perspiciatis beatae modi nam, iste
                  aut possimus consequatur dolores aliquam. Laborum!
                </p>
              </SectionFramer>
            </div>
          </Section>
        </Container>
        <Container className="">
          <Section className=" flex flex-col px-8 lg:px-0 lg:mt-[8rem] gap-11 w-full lg:w-8/12 mx-auto bg-gra align-middle">
            {/* <div className="bg-blue-100 flex flex-col lg:mt-[8rem] w-full lg:w-8/12 mx-auto align-middle"> */}
            <SectionFramer>
              <h1 className="font-normal text-5xl">
                Cinq chambres <br />
                d’hôtes côté rivière
              </h1>
            </SectionFramer>

            <SectionFramer>
              <p className="font-light text-2xl">
                La chambres partir de 50€ la nuit, réservables en ligne ou par
                téléphone
              </p>
            </SectionFramer>
            {/* </div> */}
          </Section>
        </Container>

        <div className="overflow-hidden md:overflow-visible">
          <SectionFramerRight>
            <SlidePerViewGetIds />
          </SectionFramerRight>
        </div>
        <div className="mt-80 bg-slate-100">
          <div className="flex justify-center py-32">
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
          <div className=" opacity-30">
            <ul className="flex flex-row-reverse gap-8 p-11">
              <li>La Baraka 2024</li>
              <li>
                <Link href="/mentions">Mentions légales</Link>
              </li>
              <li>
                <Link href="/cgv">CGV</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export const revalidate = 0;

export default home;
