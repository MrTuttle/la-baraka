import React, { useEffect, useRef, useState } from "react";
import classes from "./ParallaxSeparatorImage.module.css";

interface ParallaxImageProps {
  imageUrl: string;
  imgHeight: string;
}
const ParallaxSeparatorImage: React.FC<ParallaxImageProps> = ({
  imageUrl,
  imgHeight,
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [scrollRatio, setScrollRatio] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const image = imageRef.current;

      if (container && image) {
        const containerTop = container.getBoundingClientRect().top;
        const containerHeight = container.offsetHeight;
        const imageHeight = image.offsetHeight;
        const scrollDistance = containerHeight + imageHeight;
        const newScrollRatio =
          (containerTop + containerHeight) / scrollDistance;

        setScrollRatio(newScrollRatio);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const containerHeight = () => {
    console.log(`imgeHeight = ${imgHeight}`);
    const height = parseInt(imgHeight);
    console.log(`height :${height}`);

    // if (typeof imgHeight !== "number") {
    //   parseInt(imgHeight)
    //   imgHeight = 1; // or any other default value
    // }
    const newHeight = height / 2;
    console.log(`newHeight: ${newHeight}`);

    return `${newHeight}vh`;
  };

  return (
    <>
      <div
        ref={containerRef}
        style={{ height: containerHeight() }}
        // className="parallax-container"
        className={`${classes.parallaxContainer} `}
      >
        <div
          // className={`${classes.parallaxImage} w-vh h-[900px] border border-green-600 bg-cover bg-center`}
          className="absolute left-0 top-[-32%] w-[100%] h-[130%] xl:h-[180%] xl:top-[-32%] border bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            transform: `translateY(${scrollRatio * 100}px)`,
            // default scroll ration * 100, good result at *200
            transition: `transform 0.1s cubic-bezier(0.39,
      0.575,
      0.565,
      1)`,
          }}
          ref={imageRef}
        />
      </div>
    </>
  );
};

export default ParallaxSeparatorImage;
