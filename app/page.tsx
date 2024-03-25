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
import atable from "@/public/burkina/mordicus-cadre.jpg";
import backgroundImage from "@/public/tourism/ste-croix-vf-02.jpg";
import ParallaxImageParent from "./components/ParallaxImageParent";
import AroundContent from "./components/AroundContent";
import { ImageProps, StaticImageData } from "next/image";
import SwiperEvent from "./components/swiper/SwiperEvent";
import EventOverFlowContainer from "./components/EventOverFlowContainer";
import Gallery from "./components/Gallery";
import LogoFooter from "./components/LogoFooter";
import FooterSite from "./components/FooterSite";
import SplitTypeXp from "./components/SplitTypeXp";
import SectionFramerCutTypeFx from "./components/SectionFramerCutTypeFx";
import SectionFramerUp from "./components/SectionFramerUp";
import SectionFramerImg from "./components/SectionFramerImg";
import TitleCut from "./components/ui/TitleCut";
import ParallaxSeparator from "./components/ui/ParralaxSeparator";

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
      {/* <div className="bg-blue-100 h-20 animate-pulse pt-[400px]"></div> */}
      <div className="bg-gray-100">
        <div className="animate-appear">
          <HeroScrollEffect />
        </div>
      </div>
      <div className=" overflow-hidden bg-gray-100">
        <div className="content-holder ">
          <Section className="px-11 lg:px-0 lg:mt-[8rem] lg:min-h-screen flex flex-col w-full lg:w-8/12 mx-auto align-middle">
            <div className="border pt-20">
              <SplitTypeFramer>
                {/* <h3 className="font-light text-2xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
                  La Baraka vous accueille au cœur du village de
                  Sainte-Croix-Vallée-Française avec ses cinq chambres d’hôtes,
                  son bar et son restaurant. Baignade à deux pas dans le Gardon
                  et accès direct au parc national des Cévennes.
                </h3> */}
                {/* <h3 className="font-light text-2xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
                  Située au cœur du charmant village <br />
                  de Sainte-Croix-Vallée-Française en Lozère, <br />
                  au pied du Gardon et du Parc National des Cévennes, <br />
                  La Baraka vous accueille toute l’année <br />
                  avec ses cinq chambres d’hôtes,
                  <br />
                  son bar et son restaurant. <br />
                  Baignade à deux pas !
                </h3> */}
                <h3 className="font-light text-2xl md:text-[2rem] lg:text-[2.5rem] self-center leading-[3rem] md:leading-[3.7rem] lg:leading-[4.2rem]">
                  Située au cœur du charmant village de Sainte‑Croix
                  -Vallée‑Française en Lozère, au pied du Gardon et du Parc
                  National des Cévennes, La Baraka vous accueille toute l’année
                  avec ses cinq chambres d’hôtes, son bar et son restaurant.{" "}
                  <br />
                  Baignade à deux pas !
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
        {/* <ParallaxImageParent
          // imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/mordicus-extend_mc77u3?_a=BAVAExAO0"
          // imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/la-baraka-enseigne_lbtlep?_a=BAVAExAO0"
          // imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/la-baraka-riviere_cleobb?_a=BAVAExAO0"
          // imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/q62jruvczpx3pjtcyhkc?_a=BAVAExAO0"
          // imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/mordicus-wild_ztpprl?_a=BAVAExAO0"
          // imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/jow2nktpofi9tsl4ox8g?_a=BAVAExAO0"
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/mordicus-extend-left_jgluli?_a=BAVAExAO0"
        /> */}
        <div className="bg-white">
          <Section className="pt-0 flex flex-col lg:mt-[8rem] min-h-screen w-full lg:w-8/12 mx-auto align-middle">
            <SectionFramer>
              <div className=" py-8 pl-8 mt-8 -rotate-2 text-center font-normal bg-yellow-500 text-5xl w-[60%] lg:w-[78%] mx-auto  sm:text-start sm:ml-8 -mb-2">
                <TitleCut>A Table !</TitleCut>
              </div>
            </SectionFramer>

            <div className="flex mx-8 flex-col">
              <div className="flex flex-col-reverse items-center sm:flex-row md:gap-12 xl:gap-32">
                {/* <SectionFramer>
                  <div className=" hidden lg:flex flex-col justify-center absolute w-[600px] -translate-y-[12rem] bg-yellow-500 h-40 md:mb-10 px-8 -rotate-3">
                    <TitleCut>A table !</TitleCut>
                  </div>
                </SectionFramer> */}
                <div className="flex-shrink text-center sm:text-start font-light text-2xl lg:px-0 pt-10  ">
                  <SectionFramer>
                    <p>
                      <strong className="font-medium">Tous les midis,</strong>
                      <br /> du lundi au jeudi, notre équipe vous accueille et
                      vous mijote une cuisine conviviale au rythme des produits
                      de saison. <br />
                    </p>
                  </SectionFramer>
                  <SectionFramer>
                    <p className="pt-4">
                      <strong className="font-medium">
                        Les vendredis soirs,
                      </strong>{" "}
                      <br />
                      rendez-vous pour une soirée à thème ou nous vous ferons
                      découvrir de nouvelles saveurs.
                    </p>
                  </SectionFramer>
                </div>

                <SectionFramer>
                  <div
                    id="mordicus"
                    // className="transition-all w-[14rem] sm:w-[15rem] md:w-[18rem] md:pr-[12%] lg:w-[20rem] mb-4 mx-auto rotate-6 "
                    // className="transition-all w-[50%] mx-auto rotate-0 sm:w-full sm:flex-grow sm:rotate-6"
                    className="w-[50%] mx-auto rotate-0 sm:w-full sm:flex-grow sm:rotate-6"
                  >
                    <Image src={atable} alt="re"></Image>
                  </div>
                </SectionFramer>
              </div>
              <div className="my-11 w-full sm:w-96 mx-auto lg:w-[50%] pl-0 ">
                <SectionFramerRight>
                  <CallMenuSwiper />
                </SectionFramerRight>
              </div>
              <div className="w-full flex flex-col items-center gap-3">
                <SectionFramer>
                  <button className="flex align-baseline gap-2 mx-auto sm:mx-0 text-center mt-11 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
                    <MdLocalPhone />
                    <a href="tel:+33749605068">Reserver une table</a>
                  </button>
                </SectionFramer>
              </div>
            </div>
          </Section>
        </div>
        {/* <ParallaxImageParent
          imageUrl="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_6198.19a1d179.jpg&amp;w=3840&amp;q=75
"
        /> */}
        {/* <ParallaxImageParent
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/cawdvxo81d8uulerrsrf?_a=BAVAExAO0"
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/la-baraka-riviere_cleobb?_a=BAVAExAO0"
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/q62jruvczpx3pjtcyhkc?_a=BAVAExAO0"
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_960/f_auto/q_auto/q4akqqcgqdtuth6qflan?_a=BAVAExAO0"
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_500/f_auto/q_auto/jow2nktpofi9tsl4ox8g?_a=BAVAExAO0"
          q4akqqcgqdtuth6qflan
        /> */}

        <ParallaxSeparator
          imageUrl="https://res.cloudinary.com/dc8rzbrbr/image/upload/c_limit,w_1200/f_auto/q_auto/jow2nktpofi9tsl4ox8g?_a=BAVAExAO0"
          imgHeight={"90vh"}
        />
        {/* <div>
          <CldImageClient
            src={"csdrv58eqmedv1cq4jhx"}
            alt="gh"
            width={1200}
            height={100}
            sizes="100"
          />
        </div> */}
        <Container className="bg-white">
          <Section className=" flex flex-col px-8 lg:px-0 lg:mt-[8rem] gap-11 w-full lg:w-8/12 mx-auto bg-gra align-middle">
            {/* <div className="bg-blue-100 flex flex-col lg:mt-[8rem] w-full lg:w-8/12 mx-auto align-middle"> */}
            <SectionFramer>
              <h1 className="font-normal text-5xl lg:text-9xl">
                Cinq chambres d’hôtes <br />à deux pas de la rivière
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
                Chambres à partir de 50 €, petit dejeuner compris. <br />
                Connexion internet sécurisée gratuite. <br />
                Les chambres sont situées au premier étage. <br />
                Taxe de séjour : 0,70 € par adulte et par nuitée.
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
        <div className="overflow-hidden md:overflow-visible pb-48 bg-white">
          <SectionFramerRight>
            <SlidePerViewGetIds />
          </SectionFramerRight>
        </div>
        <Container className="bg-gray-100">
          <Section className=" flex flex-col px-8 lg:px-0 lg:mt-[8rem] gap-11 w-full lg:w-8/12 mx-auto bg-gra align-middle">
            {/* <div className="bg-blue-100 flex flex-col lg:mt-[8rem] w-full lg:w-8/12 mx-auto align-middle"> */}
            <SectionFramer>
              <h1 className="font-normal text-5xl lg:text-9xl">
                Nature sauvage
                <br />
                convivialité
                <br />
                et terroirs
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
                Situé au pied du Parc National, Sainte Croix VF vous convie à
                rêver le longs de paysages somptueux. Les sites de l’
                <Link
                  href="https://www.cevennes-montlozere.com"
                  className=" font-normal text-blue-500 hover:underline"
                >
                  Office du Tourisme Cévennes-Mont Lozère
                </Link>{" "}
                et du{" "}
                <Link
                  href="https://www.cevennes-parcnational.fr"
                  className=" font-normal text-blue-500 hover:underline"
                >
                  Parc National{" "}
                </Link>{" "}
                mettent a disposition les itinéraires et descriptifs des
                principaux sentiers. Également, de nombreux coins de baignade
                dans le village et aux alentours. Sainte Croix vous accueillent
                également avec ses commerces et son fameux marché le dimanche :
                La boucherie, La Boulangerie, l’Epicurienne et la Biotik, le
                Globe, la Roulotte, l’Oultre ou vous pourrez trouver foison de
                produits conçus par les producteurs de la région : plante
                infuse, Antonin, etc...
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

        {/* FOOTER */}
      </div>
    </>
  );
};
export const revalidate = 0;

export default home;
