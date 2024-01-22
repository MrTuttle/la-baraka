"use client";
import React, { useRef, useEffect, useState } from "react";
import { SiForestry } from "react-icons/si";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import terrasse from "@/public/upload/la-baraka-terrasse.jpg";

import Background from "./Background";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroScrollEffect = () => {
  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const bgRefContainer = useRef(null);

  const main = useRef(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLElement>(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          y: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  useGSAP(() => {
    gsap.from(headerRef.current, {
      duration: 3,
      autoAlpha: 0.1,
      delay: 3,
      ease: "back.out(1.7)",
      y: 10,
    });
  });

  useGSAP(() => {
    gsap.to(bgRef.current, {
      duration: 3,
      delay: 1,
      ease: "back.out(1.7)",

      scale: 1.1,
      rotate: -25,
    });
    console.log("BGREF:", bgRef.current);
  });
  useGSAP(() => {
    gsap.to(bgRefContainer.current, {
      duration: 3,
      delay: 1,
      ease: "back.out(1.7)",

      scale: 2,
      rotate: 25,
    });
    console.log("BGREFCONTAINER:", bgRefContainer.current);
  });
  useEffect(() => {
    // const element = headerRef.current;
    // console.log("HEADERREF:", headerRef);
    //------------//
    // gsap.from(headerRef.current, {
    //   duration: 1,
    //   autoAlpha: 0.5,
    //   delay: 1,
    //   y: 100,
    // });
    //------------//

    // ScrollTrigger.create({
    //   trigger: ref.current,
    //   start: "-0.1% top",
    //   end: "bottom bottom",
    //   onEnter: () => {
    //     gsap.set(ref.current, { position: "absolute", top: "195%" });
    //   },
    //   onLeave: () => {
    //     gsap.set(ref.current, { position: "relative", top: "0" });
    //   },
    //   scrub: true,
    //   markers: false,
    // });
    //----------------//
    // gsap.to(element, {
    //   scrollTrigger: {
    //     trigger: element,
    //     start: "-0.1% top",
    //     end: "bottom bottom",
    //     onEnter: () => {
    //       gsap.set(headerRef.current, {
    //         position: "absolute",
    //         top: "195%",
    //         rotate: "125",
    //       });
    //     },
    //     onLeave: () => {
    //       gsap.set(element, {
    //         position: "relative",
    //         top: "0",
    //         rotate: "2",
    //       });
    //     },
    //     scrub: true,
    //     markers: false,
    //   },
    //   opacity: 0.2,
    //   rotation: 1,
    // });
    //-------//
    return () => {
      // element.revert();
    };
  }, []);

  return (
    <>
      <div ref={main}>
        <div
          ref={headerRef}
          className="box prose fixed h-56 w-56 top-80 left-[16%] md:top-1/2 md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 text-white  border-[1px]  z-[2]"
        >
          <div className="flex flex-col gap-4 items-center text-4xl px-20 pt-5">
            <SiForestry />

            <h1 className="text-white font-extralight text-5xl">La Baraka</h1>
          </div>
        </div>
        {/* </div> */}
        <div>
          <div
            ref={bgRefContainer}
            className="box App-header relative top-0 w-full h-screen mask-clip"
          >
            {/* <Background /> */}
            <Image
              ref={bgRef}
              alt="Terrasse"
              src={terrasse}
              placeholder="blur"
              quality={100}
              fill
              sizes="110vw"
              style={{ objectFit: "cover" }}
              className="box"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroScrollEffect;
