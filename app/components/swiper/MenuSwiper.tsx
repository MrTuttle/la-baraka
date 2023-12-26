"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import swiper "./styles.css";
import "@/app/components/swiper/style.css";

// import required modules
import { Pagination } from "swiper/modules";

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
        slidesPerView={"auto"}
        spaceBetween={-5}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {/* <div slot="container-start" className="m-4">
          Menus du jour :
        </div> */}

        {list.map((menu) => (
          <SwiperSlide key={menu.id}>
            <div className="flex flex-col justify-center p-10 h-full w-full bg-slate-100 rounded-lg border-solid border-1 border-indigo-600">
              <div>
                <p className=" font-semibold">{menu.title}</p>
              </div>
              {menu.price > 0 && (
                <div>
                  <p>{menu.price} €</p>
                </div>
              )}

              <div>
                <ReactMarkdown className="prose">
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
