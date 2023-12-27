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
import styles from "./SlidePerViewRooms.module.css";

// import required modules
import { Pagination } from "swiper/modules";

import { CldImage } from "next-cloudinary";

// import { Room, ImageRoom } from "@/app/chambres/page";
import { Image, Room } from "@/app/lib/definitions";
// import Link from "next/link";
import { Link } from "@radix-ui/themes";
import DisplayCld from "../DisplayCld";
import { getRoomsWithCover } from "@/app/lib/actions";

type List = {
  // count: number;
  listImages: Image[];
  // listImages: ImageRoom[];
  listRooms: Room[];
};

const SlidePerViewRooms = ({ listImages, listRooms }: List) => {
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
        <div slot="container-start" className="m-4">
          Les rooms
        </div>
        {listRooms.map((room) => (
          <SwiperSlide key={room.id} className={styles["swiper-slide"]}>
            <Link
              href={`chambres/${room.id}`}
              className={"my-display-contents"}
            >
              {room.assignedRoom.map(
                (image) =>
                  image.cover && (
                    <CldImage
                      key={image.id}
                      src={image.publicId}
                      width={960}
                      height={600}
                      sizes="100vw"
                      alt={image.alt}
                    />
                  )
              )}
              <div className=" absolute bottom-10 mt- text-white">
                <p className="my-0">{room.title}</p>
                {room.price && <p className="my-0">{room.price} €</p>}
                {room.assignedRoom.map((image) =>
                  image.cover ? "cover ok" : "cover false"
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* -----------ANCIEN SWIPER ---------------- */}
      {/* <Swiper
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

        {listImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`chambres/${image.assignedToRoomId}`}
              className="my-display-contents"
            >
              <CldImage
                src={image.publicId}
                width={960}
                height={600}
                sizes="100vw"
                alt={image.alt}
              />
              <div className=" absolute bottom-10 mt- text-white">
                <p className="my-0">Chambre Familliale</p>
                <p className="my-0">Pour 3 personnes</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
};

export default SlidePerViewRooms;
