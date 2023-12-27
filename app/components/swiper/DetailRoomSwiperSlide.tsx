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
import { Pagination } from "swiper/modules";

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
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
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
