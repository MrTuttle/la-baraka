//app/components/swiper/SlidePerViewGetIds.tsx
// USE PRISMA QUERY TO INJECT SELECTED DATAS
// IN SLIDEPERVIEROOM SWIPER COMPONENT

import prisma from "@/prisma/client";
import DisplayCld from "../DisplayCld";
import Link from "next/link";
import SlidePerViewRooms from "./SlidePerViewRooms";
import { Room } from "@/app/lib/definitions";
import { getRoomsWithImages } from "@/app/lib/actions";

const SlidePerViewGetIds = async () => {
  const rooms = await prisma.room.findMany({
    include: {
      // assignedRoom: true,
      // all rooms + get access to related Image via assignedRoom
      // with rooms.map((item, index) => <p key={index}>{item.publicId}</p>)
      assignedRoom: {
        // all images when cover: true
        where: { cover: true },
      },
    },
  });
  getRoomsWithImages();

  const images = await prisma.image.findMany({
    where: {
      cover: true,
    },
  });
  // console.log(" IMAGES :");
  // console.log(images);
  // console.log("ROOMS :");
  // console.log(rooms);
  return (
    <>
      {/* <p className="mx-4">
        we try to get images through rooms data. It will give us the ability to
        pass in swipper images public id & rooms text in one prisa request
      </p> */}
      <SlidePerViewRooms listImages={images} listRooms={rooms} />
      {/* <SlidePerViewRooms listImages={rooms} />; */}
    </>
  );
};

export default SlidePerViewGetIds;
