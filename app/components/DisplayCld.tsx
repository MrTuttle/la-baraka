"use client";
//app/components/DisplayCld.tsx

import React from "react";
import { CldImage } from "next-cloudinary";

interface Props {
  public_id: string;
  alt: string;
}

const DisplayCld = ({ public_id, alt }: Props) => {
  return (
    <div>
      {public_id && (
        <CldImage
          src={public_id}
          width={960}
          height={600}
          sizes="100vw"
          alt={alt}
        ></CldImage>
      )}
    </div>
  );
};

export default DisplayCld;
