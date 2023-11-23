"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "@/app/components/swiper/style.css";

// import required modules
import { Pagination } from "swiper/modules";

import { CldImage } from "next-cloudinary";

// interface Menu {
//   title: string;
//   description: string;
//   id: number;
// }
interface Props {
  menuslist: [];
}
// const MenuSwiper = ({title, description, id}: Menu) => (
const MenuSwiper = ({ menuslist }: Props) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={-5}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <div slot="container-start" className="m-4">
          Menus{menuslist[2].title}
        </div>

        {menuslist.map((menu) => (
          <SwiperSlide key={menu.id}>
            <div className="flex flex-col justify-center p-10 h-full w-full bg-slate-100 rounded-lg border-solid border-1 border-indigo-600">
              <div>
                <p className=" font-semibold">{menu.title}</p>
              </div>
              <div>
                <p>{menu.price} €</p>
              </div>
              <div>{menu.description}</div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
};

export default MenuSwiper;
