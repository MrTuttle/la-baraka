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
  const logoRef = useRef(null);
  const bgRef = useRef(null);
  const bgRefContainer = useRef(null);

  // define main who contain several <HTMLElement>(".box")
  // const main = useRef(null);

  // scrollTrigger on main :
  // useGSAP(
  //   () => {
  // define an array of <HTMLElement>(".box")
  // const boxes = gsap.utils.toArray<HTMLElement>(".box");
  // target all <HTMLElement>(".box")
  //   boxes.forEach((box) => {
  //     gsap.to(box, {
  //       y: 150,
  //       scrollTrigger: {
  //         trigger: box,
  //         start: "bottom bottom",
  //         end: "top 20%",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //   });
  // },
  // { scope: main }
  // {scope: main } applied only on all <HTMLElement>(".box")
  // which contains in main ref, replace the array[] of dependencies of useEffect
  // );
  //----------- trigger on multi elements -----//

  useGSAP(() => {
    const descaleDisolveOnScrool = logoRef.current;
    const containerMoveOnScrool = bgRefContainer.current;
    console.log("bgImage", descaleDisolveOnScrool);

    gsap.to(containerMoveOnScrool, {
      onEnter: () => {
        gsap.set(containerMoveOnScrool, { height: "100vh" });
      },
      scrollTrigger: {
        trigger: containerMoveOnScrool,
        start: "top top",
        end: "bottom 15%",
        scrub: true,
        markers: true,
      },
      height: "10vh",
    });

    // descale & disolve on scroll -> hero logo
    gsap.to(descaleDisolveOnScrool, {
      scale: 1.1,
      opacity: 0,
      scrollTrigger: {
        trigger: descaleDisolveOnScrool,
        start: "top 35%",
        end: "bottom 25%",
        scrub: true,

        // markers: true,
        onEnter: () => {
          // set imediate properties
          // gsap.set(trigerredItem, { position: "fixed" });
          // launch a tween
          // gsap.to(trigerredItem, { y: -40 });
        },
        onLeave: () => {
          // gsap.set(trigerredItem, { rotate: 90 });
        },
      },
    });
    gsap.from(bgRef.current, {
      duration: 3,
      autoAlpha: 0.1,
      // delay: 3,
      ease: "back.out(1.7)",
      y: 10,
    });
  });

  // useGSAP(() => {
  //   gsap.from(logoRef.current, {
  //     duration: 3,
  //     autoAlpha: 0.1,
  //     // delay: 3,
  //     ease: "back.out(1.7)",
  //     y: 10,
  //   });
  // });

  // useGSAP(() => {
  //   gsap.to(bgRef.current, {
  //     duration: 3,
  //     delay: 1,
  //     ease: "back.out(1.7)",

  //     scale: 1.1,
  //     rotate: -25,
  //   });
  //   console.log("BGREF:", bgRef.current);
  // });

  //---- rotate & scale ----//
  // useGSAP(() => {
  //   gsap.to(bgRefContainer.current, {
  //     duration: 3,
  //     delay: 1,
  //     ease: "back.out(1.7)",

  //     scale: 2,
  //     rotate: 25,
  //   });
  //   console.log("BGREFCONTAINER:", bgRefContainer.current);
  // });
  //------ //

  // useEffect(() => {
  // const element = logoRef.current;
  // console.log("logoRef:", logoRef);
  //------------//
  // gsap.from(logoRef.current, {
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
  //       gsap.set(logoRef.current, {
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
  // return () => {
  // element.revert();
  // };
  // }, []);

  return (
    <>
      <div>
        <div
          ref={logoRef}
          className="box prose fixed h-56 w-56 top-80 left-[16%] md:top-1/2 md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 text-gray-400  border-[1px] border-gray-400  z-[2]"
        >
          <div className="flex flex-col gap-4 items-center text-4xl px-20 pt-5">
            <SiForestry />

            <h1 className=" text-gray-400 font-extralight text-5xl">
              La Baraka
            </h1>
          </div>
        </div>
        {/* </div> */}
        <div>
          <div
            ref={bgRefContainer}
            className="box App-header relative top-0 w-full h-[75%] my-border-red"
          >
            {/* <Background ref={bgRef} /> */}
            <Image
              ref={bgRef}
              alt="Terrasse"
              src={terrasse}
              placeholder="blur"
              quality={100}
              fill
              sizes="110vw"
              style={{ objectFit: "cover" }}
              // style={{ height: "150px" }}
              className="box"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroScrollEffect;
