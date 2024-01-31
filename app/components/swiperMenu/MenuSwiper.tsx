"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Pagination, EffectCards } from "swiper/modules";
import styles from "./MenuSwiper.module.css";

import { CldImage } from "next-cloudinary";
import { type } from "os";
import ReactMarkdown from "react-markdown";

import { SiForestry } from "react-icons/si";
import { GrRestaurant } from "react-icons/gr";
import { LuSalad } from "react-icons/lu";
import { TbSalad } from "react-icons/tb";
import { RiRestaurant2Line } from "react-icons/ri";

import { RiCake3Line } from "react-icons/ri";

type Menu = {
  id: number;
  title: string;
  description: string;
  price: number;
  updatedAt: Date;
  // menuPushed: () => void;
};
type Menulist = {
  // count: number;
  list: Menu[];
};

// const menus: {
//   id: number;
//   title: string;
//   price: number | null;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
// }[];

const MenuSwiper = ({ list }: Menulist) => {
  return (
    <>
      <Swiper
        // slidesPerView={"auto"}
        // spaceBetween={-5}
        // pagination={{
        //   clickable: true,
        // }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        // modules={[]}
        className={styles.swiper}
      >
        {/* <div slot="container-start" className="m-4">
          Menus du jour :
        </div> */}
        {list.map((menu) => (
          <SwiperSlide key={menu.id} className={styles["swiper-slide"]}>
            <div className="flex flex-col p-10 h-full w-full justify-center items-center ">
              <div className="mx-auto text-4xl text-black opacity-40 pb-4">
                <GrRestaurant />
              </div>
              <div className=" font-semibold text-2xl leading-tight pb-4">
                <p>
                  {menu.title}
                  <br />
                  {menu.price > 0 && (
                    <span className=" font-normal opacity-50">
                      - {menu.price} € -
                    </span>
                  )}
                </p>
              </div>

              <div>
                <ReactMarkdown className="prose text-white text-xl">
                  {menu.description}
                </ReactMarkdown>
              </div>
              <p className=" text-sm text-black mt-8 opacity-40">
                Mis a jour le :
                <br />
                <strong>
                  {menu.updatedAt.toLocaleDateString("fr-FR", {
                    dateStyle: "full",
                  })}
                </strong>
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div
          slot="container-end"
          className="text-center text-5xl text-gray-400"
        >
          ...
        </div>
      </Swiper>
    </>
  );
};

export default MenuSwiper;
