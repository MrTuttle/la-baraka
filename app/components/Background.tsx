import Image from "next/image";
import React from "react";
import terrasse from "@/public/upload/la-baraka-terrasse.jpg";

export default function Background(ref?: React.MutableRefObject<null>) {
  return (
    <Image
      ref={ref}
      alt="Terrasse"
      src={terrasse}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{ objectFit: "cover" }}
    />
  );
}
