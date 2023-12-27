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

type Menu = {
  id: number;
  title: string;
  description: string;
  price: number;
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
            <div className="flex flex-col justify-center p-10 h-full w-full ">
              <div>
                <p className=" font-semibold ">{menu.title}</p>
              </div>
              {menu.price > 0 && (
                <div>
                  <p>{menu.price} €</p>
                </div>
              )}

              <div>
                <ReactMarkdown className="prose text-white">
                  {menu.description}
                </ReactMarkdown>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MenuSwiper;
