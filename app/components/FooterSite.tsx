import Link from "next/link";
import React from "react";
import { HiPhoneArrowDownLeft, HiMapPin } from "react-icons/hi2";
import { SiForestry } from "react-icons/si";
import LogoFooter from "./LogoFooter";

const FooterSite = () => {
  return (
    <div className=" bg-slate-700 min-h-screen pt-1 px-4">
      <div className="flex justify-center">
        {/* <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link> */}
      </div>
      <LogoFooter>
        <div className=" mt-[15%] xl:mt-64  mb-[15%] xl:mb-40 opacity-40 border-white prose mx-auto  text-b h-56 w-56 border-[1px]">
          <div className="flex flex-col gap-4 items-center text-4xl px-20 pt-5 pb-0 mb-0 leading-[-1] text-white">
            <SiForestry />

            <h1 className=" text-white font-extralight text-5xl">La Baraka</h1>
          </div>
          <p className=" tracking-widest text-center text-xs pt-0 -mt-8 w-[100%] text-white">
            BAR - RESTAURANT
            <br /> — CHAMBRES D’HÔTES —
          </p>
        </div>
      </LogoFooter>
      {/* </div> */}
      <div className=" text-gray-400 flex flex-col md:flex-row  gap-8 md:gap-16 justify-center px-1">
        <ul className="">
          <li className=" border-b border-gray-500 pb-2">Hôtel La Baraka</li>
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
          <li className="pt-2">La Baraka vous accueille toute l’année :</li>
          <li>Mardi à jeudi : 9h-13h30</li>
          {/* <li>Dimanche : 8h30 - 14h</li> */}
          <li>Les soirées du Vendredi : A partir de 18h30</li>
          <li>Et pendant l’été :</li>
          <li>Mardi à Dimanche : 8h30-14h et 17h à 21h30</li>
        </ul>

        <ul className="">
          <li className=" border-b border-gray-500 pb-2">Localisation</li>

          <li className="flex flex-row items-baseline gap-3">
            <p>Ouvrir dans :</p>
            <a
              href="http://maps.apple.com/?q=44.17998, 3.74203"
              target="_blank"
              className="pt-2 flex items-center gap-1 hover:text-gray-300 "
            >
              <HiMapPin />
              Apple Plan
            </a>{" "}
            |
            <a
              href="https://maps.app.goo.gl/zFoWh59cvRwyVJLo7"
              target="_blank"
              className="pt-2 flex items-center gap-1 hover:text-gray-300 "
            >
              <HiMapPin />
              Google map
            </a>
          </li>
          <li className="">Coordonnées GPS : 44.179878, 3.742397</li>
        </ul>
      </div>
      <div className="flex md:justify-center items-end pt-20 pb-4 md:h-[220px] lg:h-[200px] opacity-30 text-white w-full">
        <ul className="flex gap-8">
          <li>La Baraka 2024</li>
          <li>
            <Link href="/mentions">Mentions légales</Link>
          </li>
          {/* <li>
            <Link href="/cgv">CGV</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default FooterSite;
