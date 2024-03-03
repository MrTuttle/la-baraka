"use client";
import React from "react";
import ParallaxImage from "./ParallaxImage";

interface ParallaxImageProps {
  imageUrl: string;
}

const ParallaxImageParent: React.FC<ParallaxImageProps> = ({ imageUrl }) => {
  return (
    <>
      <ParallaxImage imageUrl={imageUrl} imgHeight="600px" />
    </>
  );
};

export default ParallaxImageParent;
