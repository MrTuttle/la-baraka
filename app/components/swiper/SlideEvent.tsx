//app/components/swiper/SlidePerViewRooms.tsx
// display rooms in the SlidePerViewsGetIds component
"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";
// import "@/app/components/swiper/style.css";
import styles from "./SlideEvent.module.css";

// import required modules
import { Pagination } from "swiper/modules";

import { CldImage } from "next-cloudinary";

// import { Room, ImageRoom } from "@/app/chambres/page";
import { Room } from "@/app/lib/definitions";
// import Link from "next/link";
import { Card, Inset, Link, Strong, Text } from "@radix-ui/themes";
import DisplayCld from "../DisplayCld";
import { getRoomsWithCover } from "@/app/lib/actions";
import Image from "next/image";

type List = {
  // count: number;
  // listImages: Image[];
  // listImages: ImageRoom[];
  listRooms: Room[];
};

const SlideEvent = () => {
  // console.log("LIST ROOMS :", listRooms);
  // console.log("LIST IMAGES :", listImages);
  // listRooms.map((room, index)=> room.assignedRoom.findLast(e => e.cover === true));

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className={styles.Swiper}
      >
        {/* <div slot="container-start" className="m-4">
          Les rooms
        </div> */}
        <SwiperSlide>
          <Card size="2" style={{ maxWidth: 440, minWidth: 240 }}>
            <Inset clip="padding-box" side="top" pb="current">
              <Image
                width={100}
                height={100}
                alt="test"
                src="https://res.cloudinary.com/dc8rzbrbr/image/upload/v1705497113/zep6dh1m87dyo9m3zopr.jpg"
                style={{
                  width: "100%",
                  height: "120px",
                  objectPosition: "center 50%",
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Expo</Strong> is the art and technique of arranging type
              to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card size="2" style={{ maxWidth: 440, minWidth: 240 }}>
            <Inset clip="padding-box" side="top" pb="current">
              <Image
                width={100}
                height={100}
                alt="test"
                src="https://res.cloudinary.com/dc8rzbrbr/image/upload/v1705496938/vjrsfwhisynzejerhroh.png"
                style={{
                  width: "100%",
                  height: "120px",
                  objectPosition: "center 50%",
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Concert</Strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideEvent;
