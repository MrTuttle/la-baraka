"use client";
//app/components/DisplayCld.tsx

import React from "react";
import { CldImage } from "next-cloudinary";
import prisma from "@/prisma/client";
import { Room, ImageRoom } from "@/app/chambres/page";

// interface ImageProps {
//   public_id: string;
//   alt: string;
//   roomId: number;
// }
interface Tab {
  imgList: ImageRoom[];
}

const DisplayCldMulti = (
  { publicId, alt, assignedToRoomId }: ImageRoom,
  { imgList }: Tab
) => {
  const tableau = [
    { public_id: "qrhlqzrqqecomex9wcyr", alt: "altname" },
    { public_id: "s1pqrceeb5yjoxlldsiv", alt: "altname" },
  ];
  // const fillTableau = ({ public_id, alt, roomId }: ImageProps) => {
  //   imgList.push({ public_id, alt, roomId });
  // };
  return (
    <div>
      {imgList.map((item, index) => (
        <CldImage
          src={item.publicId}
          width={960}
          height={600}
          sizes="100vw"
          alt={alt}
          key={index}
        ></CldImage>
      ))}
      {/* <p>image 2</p>
      {public_id && (
        <CldImage
          src={public_id}
          width={960}
          height={600}
          sizes="100vw"
          alt={alt}
        ></CldImage>
      )} */}
    </div>
  );
};

export default DisplayCldMulti;
