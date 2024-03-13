import { useLayoutEffect, useState } from "react";
import type { StaticImageData } from "next/image";

interface WindowsSizeImgRefProps {
  narrowImg: StaticImageData;
  wideImg: StaticImageData;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

// export default useWindowSize;

export default function WindowSizeImgRef({
  narrowImg,
  wideImg,
}: WindowsSizeImgRefProps) {
  // const { width, height } = useWindowSize();
  const windowSize = useWindowSize();
  const imgRef = () => {
    windowSize.width < 768
      ? `width < md (768px)${narrowImg.src}`
      : `width < lg (1024px)${wideImg.src}`;
  };

  return (
    // <div>
    //   <p>Window Width: {width}</p>
    //   <p>Window Height: {height}</p>
    // </div>
    <div className=" bg-red-500 my-border-red w-3/5 h-1/5 mt-52 p-4">
      <p>WINDOW SIZE</p>
      <p>
        <span>Width: </span>
        {windowSize.width}
      </p>
      <p>
        <span>Height: </span>
        {windowSize.height}
      </p>
      <p>
        {windowSize.width < 768
          ? `width < md (768px)${narrowImg.src}`
          : `width < lg (1024px)${wideImg.src}`}
      </p>
    </div>
  );
}
