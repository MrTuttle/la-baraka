"use client";
import React from "react";
import ParallaxImage from "./ParallaxImage";

interface ParallaxImageProps {
  imageUrl: string;
}

const ParallaxImageParent: React.FC<ParallaxImageProps> = ({ imageUrl }) => {
  return (
    <>
      <div>ParallaxImageParent</div>
      <ParallaxImage imageUrl={imageUrl} />
    </>
  );
};

export default ParallaxImageParent;
