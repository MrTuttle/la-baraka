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
import { type } from "os";

// interface Menu {
//   title: string;
//   description: string;
//   id: number;
// }
type Menu = {
  id: number;
  title: string;
  description: string;
  price: number | null;
  // menuPushed: () => void;
};
type Menulist = {
  // count: number;
  list: Menu[];
};
// const menulist = [];

interface Props {
  menuslist: [
    {
      title: string;
      id: number;
      description: string;
      price: number | null;
    }
  ];
}
// const menus: {
//   id: number;
//   title: string;
//   price: number | null;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
// }[];

// const MenuSwiper = (menulist: object[{}: Menu]) => {
// const MenuSwiper = ({ menuslist }: Props) => {
const MenuSwiper = ({ list }: Menulist) => {
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
          Menus du jour :
        </div>

        {list.map((menu) => (
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
      </Swiper>
    </>
  );
};

export default MenuSwiper;
