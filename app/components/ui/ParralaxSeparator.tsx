"use client";
import React from "react";
// import ParallaxImage from "./ParallaxImage";
import ParallaxSeparatorImage from "./ParralaxSeparatorImage";

interface ParallaxImageProps {
  imageUrl: string;
  imgHeight: string;
}

const ParallaxSeparator: React.FC<ParallaxImageProps> = ({
  imageUrl,
  imgHeight,
}) => {
  return (
    <>
      <ParallaxSeparatorImage imageUrl={imageUrl} imgHeight={imgHeight} />
    </>
  );
};

export default ParallaxSeparator;
