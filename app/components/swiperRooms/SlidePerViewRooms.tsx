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
import { Suspense } from "react";
import { Spinner } from "..";
import SwiperSkeleton from "./SwiperSkeleton";

type List = {
  // count: number;
  listImages: Image[];
  // listImages: ImageRoom[];
  listRooms: Room[];
};

const SlidePerViewRooms = ({ listImages, listRooms }: List) => {
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
        {listRooms.map((room) => (
          <SwiperSlide
            key={room.id}
            className={styles["swiper-slide"]}
            // dont use style={} - use SlidePerViewRooms.module.css
            // style={{ maxWidth: "55svw", maxHeight: "55svh" }}
          >
            <Link
              href={`chambres/${room.id}`}
              className={"my-display-contents"}
            >
              {room.assignedRoom.map(
                (image) =>
                  image.cover && (
                    <Suspense
                      key={image.id}
                      fallback={
                        // <div className="animate-pulse border w-full h-full bg-slate-200 flex justify-center items-center">
                        //   <div
                        //     className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        //     role="status"
                        //   >
                        //     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        //       Loading...
                        //     </span>
                        //   </div>
                        // </div>
                        <SwiperSkeleton />
                      }
                    >
                      <CldImage
                        key={image.id}
                        src={image.publicId}
                        width={960}
                        height={600}
                        sizes="100vw"
                        alt={image.alt}
                      />
                    </Suspense>
                  )
              )}
              <div className=" absolute bottom-10 text-white">
                <p className="my-0">{room.title}</p>
                {/* {room.price && <p className="my-0">{room.price} €</p>}
                {room.assignedRoom.map((image) =>
                  image.cover ? "cover ok" : "cover false"
                )} */}
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div
          slot="container-end"
          className="text-center text-5xl text-gray-400"
        >
          ...
        </div>
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
