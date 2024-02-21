// "use client";
// app/issue/page.tsx

import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Container,
  Flex,
  Inset,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";
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
import { MdLocalPhone } from "react-icons/md";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";

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
import ParallaxImageParent from "./components/ParallaxImageParent";
import AroundContent from "./components/AroundContent";
import { ImageProps, StaticImageData } from "next/image";
import SwiperEvent from "./components/swiper/SwiperEvent";
import EventOverFlowContainer from "./components/EventOverFlowContainer";
import Gallery from "./components/Gallery";
import LogoFooter from "./components/LogoFooter";

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

  const ListImages = [
    "ye50xj9r4krxpqcgxjdc",
    "icp3nrbvn1qo2bt3unop",
    "zmer0cxrb7t8nbtsvn7e",
    "z8tv410lo0qpmauisovj",
  ];
  const ListImagesBurkina = [
    "/burkina/burkina-false1.jpg",
    "/burkina/burkina-false2.jpg",
    "/burkina/burkina-false3.jpg",
    "/burkina/burkina-false4.png",
    "/burkina/burkina-false5.png",
  ];

  return (
    <>
      {/* <div className="fixed h-screen w-full flex flex-col items-center top-0 -z-50 my-border-red"> */}
      {/* <div className="h-screen w-full top-0 my-border-red"> */}

      <HeroScrollEffect />
      <div className=" overflow-hidden bg-gray-100">
        <div className="content-holder ">
          <Section className="px-11 lg:px-0 lg:mt-[8rem] lg:min-h-screen flex flex-col w-full lg:w-8/12 mx-auto align-middle">
            <div className="">
              <SplitTypeFramer>
                <h3 className="font-light text-2xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
                  La Baraka vous accueille au cœur du village de
                  Sainte-Croix-Vallée-Française avec ses cinq chambres d’hôtes,
                  son bar et son restaurant. Baignade à deux pas dans le Gardon
                  et accès direct au parc national des Cévennes.
                </h3>
              </SplitTypeFramer>
            </div>
            {/* <div className="mt-11">
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
            </div> */}
          </Section>
        </div>
        <ParallaxImageParent
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/q4akqqcgqdtuth6qflan?_a=BAVAExAO0

"
        />
        <Container className="bg-gray-100">
          <Section className="flex flex-col  lg:mt-[8rem] min-h-screen w-full lg:w-8/12 mx-auto bg-gra align-middle">
            <SectionFramer>
              <h1 className="font-normal text-5xl lg:text-9xl px-8 lg:px-0">
                Au menu <br />
                Aujourd’hui
              </h1>
            </SectionFramer>
            {/* <SectionFramer>
              <h1 className="px-11 lg:px-0 font-normal text-5xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
              Au menu <br /> aujourd’hui
              </h1>
            </SectionFramer> */}
            <div className="flex mx-8 flex-col items-center lg:flex-row-reverse ">
              <div className="my-11 w-full  md:w-3/6 pl-0 pr-4">
                <SectionFramerRight>
                  <CallMenuSwiper />
                </SectionFramerRight>
              </div>
              <div>
                <SectionFramerRight>
                  <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
                </SectionFramerRight>
                <SectionFramer>
                  <p className="bloc lg:w-[75%] text-center sm:text-start font-light text-2xl px-8 lg:px-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam, est? Quae vel adipisci provident tempore, nisi,
                    commodi suscipit pariatur perspiciatis beatae modi nam, iste
                    aut possimus consequatur dolores aliquam. Laborum!
                  </p>
                </SectionFramer>

                <SectionFramerRight>
                  <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
                </SectionFramerRight>
                <SectionFramer>
                  <button className="flex align-baseline gap-2 mx-auto sm:mx-0 text-center mt-11 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
                    <MdLocalPhone />
                    <a href="tel:+33749605068">Reserver une table</a>
                  </button>
                </SectionFramer>
              </div>
            </div>
          </Section>
        </Container>
        {/* <ParallaxImageParent
          imageUrl="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_6198.19a1d179.jpg&amp;w=3840&amp;q=75
"
        /> */}
        <ParallaxImageParent
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/cawdvxo81d8uulerrsrf?_a=BAVAExAO0
"
        />
        <Container className="bg-white">
          <Section className=" flex flex-col px-8 lg:px-0 lg:mt-[8rem] gap-11 w-full lg:w-8/12 mx-auto bg-gra align-middle">
            {/* <div className="bg-blue-100 flex flex-col lg:mt-[8rem] w-full lg:w-8/12 mx-auto align-middle"> */}
            <SectionFramer>
              <h1 className="font-normal text-5xl lg:text-9xl">
                Cinq chambres <br />
                d’hôtes côté rivière
              </h1>
            </SectionFramer>
            {/* This section must be wrapped in a overflow hidden div to keep right width page in mobile */}
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
              </SectionFramerRight>
            </div>

            <SectionFramer>
              <p className="font-light text-2xl">
                La chambres partir de 50€ la nuit, réservables en ligne ou par
                téléphone, la haute saison débute à partir du 0/0 jusqu’au 0/0
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </SectionFramer>
            {/* This section must be wrapped in a overflow hidden div to keep right width page in mobile */}
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
              </SectionFramerRight>
            </div>
          </Section>
        </Container>
        <div className="overflow-hidden md:overflow-visible bg-white pb-48">
          <SectionFramerRight>
            <SlidePerViewGetIds />
          </SectionFramerRight>
        </div>
        <Container className="bg-gray-100">
          <Section className=" flex flex-col px-8 lg:px-0 lg:mt-[8rem] gap-11 w-full lg:w-8/12 mx-auto bg-gra align-middle">
            {/* <div className="bg-blue-100 flex flex-col lg:mt-[8rem] w-full lg:w-8/12 mx-auto align-middle"> */}
            <SectionFramer>
              <h1 className="font-normal text-5xl lg:text-9xl">
                Envie
                <br />
                de nature
                <br />
                sauvage ?
              </h1>
            </SectionFramer>
            {/* This section must be wrapped in a overflow hidden div to keep right width page in mobile */}
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
              </SectionFramerRight>
            </div>

            <SectionFramer>
              <p className="font-light text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, est? Quae vel adipisci provident tempore, nisi,
                commodi suscipit pariatur perspiciatis beatae modi nam, iste aut
                possimus consequatur dolores aliquam. Laborum!
              </p>
            </SectionFramer>
            {/* This section must be wrapped in a overflow hidden div to keep right width page in mobile */}
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
              </SectionFramerRight>
            </div>
            <AroundContent srcs={ListImages} cldImage={true} />
          </Section>
        </Container>
        {/* <AroundContent url="kep8qasiqk4crnl18ii3" /> */}
        {/* <div className="my-border-green h-[25svh] relative overflow-hidden">
          <Image
            src={terrasse}
            alt={"alt"}
            width={960}
            height={600}
            className="absolute w-full left-0 top-[-50%] object-center object-scale-down"
          />
        </div> */}
        {/* ACTIVITIES ABBORTED - START */}
        {/* <Container className="bg-white">
          <Section className=" flex flex-col px-8 lg:px-0 lg:mt-[8rem] gap-11 w-full lg:w-8/12 mx-auto bg-gra align-middle">
            <SectionFramer>
              <h1 className="font-normal text-5xl">
                Les
                <br />
                Barakesqueries
              </h1>
            </SectionFramer>
            This section must be wrapped in a overflow hidden div to keep right width page in mobile
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
              </SectionFramerRight>
            </div>

            <SectionFramer>
              <h3 className="font-light text-2xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
                La Baraka aime accueillir dans ses murs toutes sortes
                d’initiatives locales. Expos, Concerts, soirées à thème. Voici
                quelques évènements :
              </h3>
            </SectionFramer>
            This section must be wrapped in a overflow hidden div to keep right width page in mobile
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
              </SectionFramerRight>
            </div>
          </Section>
          <EventOverFlowContainer />
        </Container>

         <div className="h-[500px] my-border-green">
          <SwiperEvent />
        </div>



        */}

        {/* ACTIVITIES ABBORTED - END */}

        <Container className="bg-yellow-600">
          <Section className=" flex flex-col px-8 lg:px-0 lg:mt-[8rem] gap-11 w-full lg:w-8/12 mx-auto bg-gra align-middle">
            {/* <div className="bg-blue-100 flex flex-col lg:mt-[8rem] w-full lg:w-8/12 mx-auto align-middle"> */}
            <SectionFramer>
              <h1 className="font-normal text-5xl lg:text-9xl text-white opacity-80">
                Cézar
                <br />
                une aventure photo
              </h1>
            </SectionFramer>
            {/* This section must be wrapped in a overflow hidden div to keep right width page in mobile */}
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-white border-0 opacity-50" />
              </SectionFramerRight>
            </div>

            <SectionFramer>
              <p className="font-light text-2xl text-white opacity-90">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, est? Quae vel adipisci provident tempore, nisi,
                commodi suscipit pariatur perspiciatis beatae modi nam, iste aut
                possimus consequatur dolores aliquam. Laborum!
              </p>
            </SectionFramer>
            {/* This section must be wrapped in a overflow hidden div to keep right width page in mobile */}
            <div className=" overflow-hidden">
              <SectionFramerRight>
                <hr className="h-px bg-white border-0 opacity-50" />
              </SectionFramerRight>
            </div>
            <AroundContent srcs={ListImagesBurkina} cldImage={false} />
          </Section>
        </Container>

        <div className=" bg-slate-700 h-screen pt-1">
          <div className="flex justify-center">
            {/* <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link> */}
          </div>
          <LogoFooter>
            <div className=" mt-[15%] xl:mt-64  mb-[15%] xl:mb-40 opacity-40 border-white prose mx-auto  text-b h-56 w-56 border-[1px]">
              <div className="flex flex-col gap-4 items-center text-4xl px-20 pt-5 pb-0 mb-0 leading-[-1] text-white">
                <SiForestry />

                <h1 className=" text-white font-extralight text-5xl">
                  La Baraka
                </h1>
              </div>
              <p className=" tracking-widest text-center text-xs pt-0 -mt-8 w-[100%] text-white">
                CHAMBRES D’HÔTES <br /> - RESTAURANT -
              </p>
            </div>
          </LogoFooter>
          {/* </div> */}
          <div className=" text-gray-400 flex flex-col md:flex-row  gap-8 md:gap-16 justify-center px-1">
            <ul className="">
              <li className=" border-b border-gray-500 pb-2">
                Hôtel La Baraka
              </li>
              <li className="pt-2">Le Village</li>
              <li>48110</li>
              <li> Sainte-Croix-Vallée-Française</li>
              <li>France</li>
            </ul>

            <ul>
              <li className=" border-b border-gray-500 pb-2">Ouverture</li>
              <li className="pt-2 hover:text-gray-300 ">
                <a href="tel:+33749605068" className="flex items-center gap-1">
                  <HiPhoneArrowDownLeft /> Tel. 07 49 60 50 68
                </a>
              </li>
              <li className="pt-2">Semaine 9:00 | 15:00</li>
              <li>Dimanches 9:00 | 15:00</li>
            </ul>

            <ul>
              <li className=" border-b border-gray-500 pb-2">Localisation</li>

              <li className="hover:text-gray-300">
                <a
                  href="http://maps.apple.com/?q=44.17997417613866, 3.7420328899332493"
                  target="_blank"
                  className="pt-2 flex items-center gap-1"
                >
                  <HiMapPin /> Ouvrir dans Apple Plan ou Android
                </a>
              </li>
              <li className="">Coordonnées GPS : 44.179878, 3.742397</li>
            </ul>
          </div>
          <div className=" absolute bottom-2 opacity-30 text-white pt-4 w-full">
            <ul className="flex justify-center gap-8 py-4">
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
