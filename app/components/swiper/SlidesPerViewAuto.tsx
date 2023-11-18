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

const SlidesPerViewAuto = () => {
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
          Les chambres
        </div>
        <SwiperSlide>
          <CldImage
            src={"qrhlqzrqqecomex9wcyr"}
            width={960}
            height={600}
            sizes="100vw"
            alt={"heu"}
          ></CldImage>
        </SwiperSlide>
        <SwiperSlide>
          <CldImage
            src={"s1pqrceeb5yjoxlldsiv"}
            width={960}
            height={600}
            sizes="100vw"
            alt={"heu"}
          ></CldImage>
        </SwiperSlide>
        <SwiperSlide>
          <CldImage
            src={"kh4tt0exbzev7p3csh32"}
            width={960}
            height={600}
            sizes="100vw"
            alt={"heu"}
          ></CldImage>
        </SwiperSlide>
        <SwiperSlide>
          <CldImage
            src={"s1pqrceeb5yjoxlldsiv"}
            width={960}
            height={600}
            sizes="100vw"
            alt={"heu"}
          ></CldImage>
        </SwiperSlide>
        <SwiperSlide>
          <CldImage
            src={"s1pqrceeb5yjoxlldsiv"}
            width={960}
            height={600}
            sizes="100vw"
            alt={"heu"}
          ></CldImage>
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlidesPerViewAuto;
