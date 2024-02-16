"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

// import "./styles.css";
import "@/app/components/swiper/DetailRoomSwiperSlide.css";

// import required modules
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import Image from "next/image";

interface ImageProps {
  srcs: string[];
  cldImage: boolean;
}

const AroundContent = ({ srcs, cldImage }: ImageProps) => {
  const chooseCloudinary = (cldImage: boolean) => {
    if (cldImage) {
      return srcs.map((image, index) => (
        <SwiperSlide key={image} style={{ height: "45svh" }}>
          <CldImage
            src={image}
            width={960}
            height={600}
            sizes="100vw"
            alt={image}
            className="detailroomswiperslideu"
          />
        </SwiperSlide>
      ));
    } else {
      return srcs.map((image, index) => (
        <SwiperSlide key={image} style={{ height: "45svh" }}>
          <Image
            src={image}
            alt={image}
            width={960}
            height={600}
            className="detailroomswiperslideu"
          />
        </SwiperSlide>
      ));
    }
  };
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
        {chooseCloudinary(cldImage)}
        {/* {srcs.map((image, index) => (
          <SwiperSlide key={image} style={{ height: "45svh" }}>
            <CldImage
              src={image}
              width={960}
              height={600}
              sizes="100vw"
              alt={image}
              className="detailroomswiperslideu"
            />
          </SwiperSlide>
        ))} */}
        <div slot="container-end" className="text-center text-5xl opacity-30">
          ...
        </div>
      </Swiper>
    </>
  );
};

export default AroundContent;
