// app/components/CldImageClient.tsx
// To use cloudinary images in "use server" environnements

"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

interface Props {
  src: string;
  width: number;
  height: number;
  sizes: string | "100vw";
  alt: string;
}

const CldImageClient = ({ src, width, height, sizes, alt }: Props) => {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      sizes={sizes}
      alt={alt}
    ></CldImage>
  );
};

export default CldImageClient;
