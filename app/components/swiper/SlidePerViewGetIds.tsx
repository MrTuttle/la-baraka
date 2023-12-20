//app/components/swiper/SlidePerViewGetIds.tsx
// USE PRISMA QUERY TO INJECT SELECTED DATAS
// IN SLIDEPERVIEROOM SWIPER COMPONENT

import prisma from "@/prisma/client";
import DisplayCld from "../DisplayCld";
import Link from "next/link";
import SlidePerViewRooms from "./SlidePerViewRooms";

const SlidePerViewGetIds = async () => {
  // try to get images through rooms
  const rooms = await prisma.room.findMany({
    include: {
      assignedRoom: true,
    },
  });
  const covers = () => {
    rooms.map((room) => room.assignedRoom.map((image) => image.publicId));
  };
  console.log("COVERS");

  console.log(covers());

  const images = await prisma.image.findMany({
    where: {
      // activate when we should pass cover to new images
      cover: true,
    },
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
  return (
    <>
      <p>TEXT</p>
      <p>
        we try to get images through rooms data. It will give us the ability to
        pass in swipper images public id & rooms text in one prisa request
      </p>
      {rooms.map((room, index) => (
        <div key={index}>
          <p>
            <strong>ROOM TITLE :</strong>
            {room.title}
          </p>
          {room.assignedRoom.map((image) => (
            <div key={image.id}>
              <p>
                <strong>PublicId :</strong>
                {image.publicId}
              </p>
            </div>
          ))}
        </div>
      ))}
      <p>TEXT</p>
      <SlidePerViewRooms listImages={images} />;
    </>
  );
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
