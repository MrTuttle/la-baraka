//app/components/swiper/SlidePerViewRooms.tsx
// display rooms in the SlidePerViewsGetIds component
"use client";

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

import { Room, ImageRoom } from "@/app/chambres/page";
import Link from "next/link";

type List = {
  // count: number;
  listImages: ImageRoom[];
};

const SlidePerViewRooms = ({ listImages }: List) => {
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
          Les chambres pas encore clicables
        </div>
        {listImages.map((image, index) => (
          <Link key={index} href={`chambres/${image.assignedToRoomId}`}>
            <SwiperSlide>
              <CldImage
                src={image.publicId}
                width={960}
                height={600}
                sizes="100vw"
                alt={image.alt}
              ></CldImage>
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
      {listImages.map((e, index) => (
        <Link key={index} href={`chambres/${e.assignedToRoomId}`}>
          <p>{e.publicId}</p>
          <p>{e.alt}</p>
        </Link>
      ))}
    </>
  );
};

export default SlidePerViewRooms;
