//app/components/swiper/SlidePerViewGetIds.tsx
// USE PRISMA QUERY TO INJECT SELECTED DATAS
// IN SLIDEPERVIEROOM SWIPER COMPONENT

import prisma from "@/prisma/client";
import DisplayCld from "../DisplayCld";
import Link from "next/link";
import SlidePerViewRooms from "./SlidePerViewRooms";

const SlidePerViewGetIds = async () => {
  const images = await prisma.image.findMany({
    where: {},
    select: {
      publicId: true,
      assignedToRoomId: true,
      alt: true,
    },
  });
  // console.log(" IMAGES :");
  // console.log(images);
  // console.log("ROOMS :");
  // console.log(rooms);
  return <SlidePerViewRooms listImages={images} />;
};

export default SlidePerViewGetIds;

////
// const rooms = await prisma.room.findMany({
//   include: {
//     assignedRoom: {
//       orderBy: {
//         assignedToRoomId: "asc",
//       },
//       select: {
//         publicId: true,
//         alt: true,
//         assignedToRoomId: true,
//       },
//       take: 1,
//     },
//   },
// });
