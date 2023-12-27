"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "@/app/components/swiper/DetailRoomSwiperSlide.css";

// import required modules
import { Navigation, Pagination, EffectCreative } from "swiper/modules";

import { Image, Room } from "@/app/lib/definitions";
type List = {
  // count: number;
  listImages: Image[];
  // listImages: ImageRoom[];
  // listRooms: Room[];
};

const DetailRoomSwiperSlide = ({ listImages }: List) => {
  return (
    <>
      <Swiper
        // dir="rtl"
        // rewind={true}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        // loop={true}
        pagination={{ type: "fraction" }}
        // pagination={{
        //   clickable: true,
        // }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Pagination, EffectCreative]}
        className="mySwipper4"
        injectStyles={[]}
      >
        {listImages.map((image) => (
          <SwiperSlide key={image.id}>
            <CldImage
              src={image.publicId}
              width={960}
              height={600}
              sizes="100vw"
              alt={image.alt}
              className="detailroomswiperslideu"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DetailRoomSwiperSlide;
