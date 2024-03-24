"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  children: string;
}

const TitleCut = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden text-5xl font-normal h-[2.7rem] sm:text-6xl sm:h-[4.2rem] md:text-7xl md:h-[5rem] lg:text-9xl lg:h-[8.6rem]`}
    >
      <h1
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          // opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export default TitleCut;
