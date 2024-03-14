import { useLayoutEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

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
    <>
      {/* DECOMMENTER CECI POUR AVOIR UN TEMOINS NOM DE FICHIER EMPLOYÉ POUR L'IMAGE */}
      {/* <div className="absolute z-50 left-10 bottom-20 bg-red-500 my-border-red w-3/5 p-4">
        <p>WINDOW SIZE</p>

        <p className="text-xs text-white font-medium">
          <span>Height: </span>
          {windowSize.height}
        </p>
        <p className=" text-xs text-white font-medium">
          {windowSize.width < 768
            ? `width < md (768px)${narrowImg.src}`
            : `width < lg (1024px)${wideImg.src}`}
        </p>
      </div> */}

      {windowSize.width < 768 ? (
        <Image
          // ref={bgRef}
          alt="Mordicus illustration for La Baraka"
          src={narrowImg}
          placeholder="blur"
          quality={75}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          // style={{ height: "150px" }}
          className="box"
        />
      ) : (
        <Image
          // ref={bgRef}
          alt="Mordicus illustration for La Baraka"
          src={wideImg}
          placeholder="blur"
          quality={75}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          // style={{ height: "150px" }}
          className="box"
        />
      )}
    </>
  );
}
