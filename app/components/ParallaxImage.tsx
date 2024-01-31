import React, { useEffect, useRef, useState } from "react";
import "./ParallaxImage.css";

interface ParallaxImageProps {
  imageUrl: string;
}
const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageUrl }) => {
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

  return (
    <>
      <div
        className="parallax-container"
        ref={containerRef}
        style={{ height: `300px` }}
      >
        <div
          className="parallax-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
            transform: `translateY(${scrollRatio * 100}px)`,
            // default scroll ration * 100, good result at *200
          }}
          ref={imageRef}
        />
      </div>
    </>
  );
};

export default ParallaxImage;
