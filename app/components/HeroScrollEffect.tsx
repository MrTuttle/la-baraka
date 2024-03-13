"use client";
import React, { useRef, useEffect, useState } from "react";
import { SiForestry } from "react-icons/si";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import terrasse from "@/public/upload/la-baraka-terrasse.jpg";
import paysage from "@/public/tourism/Cevennes-Denis-Carrascosa.jpg";
import paysagestock from "@/public/tourism/AdobeStock_67672065-1920x960-crop-1670422244.jpeg";
// import autre from "@/public/tourism/IMG_6198.jpg";
// import autre from "@/public/tourism/IMG_6183.jpg";
// import autre from "@/public/tourism/IMG_6171.jpg";
import autre from "@/public/burkina/mordicus-wild.jpg";

import Background from "./Background";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Section } from "@radix-ui/themes";
import SplitTypeFramer from "./SplitTypeFramer";

gsap.registerPlugin(ScrollTrigger);

const HeroScrollEffect = () => {
  const logoRef = useRef(null);
  const logoRefContainer = useRef(null);
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

  useGSAP(
    () => {
      const descaleDisolveOnScrool = logoRef.current;
      const bgRefcontainerMoveOnScrool = bgRefContainer.current;
      const lgRefcontainerMoveOnScrool = logoRefContainer.current;
      console.log("bgImage", descaleDisolveOnScrool);

      gsap.to([bgRefcontainerMoveOnScrool, lgRefcontainerMoveOnScrool], {
        // onEnter: () => {
        //   gsap.set([bgRefcontainerMoveOnScrool, lgRefcontainerMoveOnScrool], {
        //     height: "100vh",
        //   });
        // },
        scrollTrigger: {
          trigger: [bgRefcontainerMoveOnScrool, lgRefcontainerMoveOnScrool],
          start: "-0.1% top",
          end: "center 25%",
          scrub: true,
          // markers: true,
        },
        height: "75svh",
        // ease: "expo.out",
      });

      // descale & disolve on scroll -> hero logo
      gsap.to(descaleDisolveOnScrool, {
        scale: 1.1,
        opacity: 0,
        // ease: "expo.out",
        scrollTrigger: {
          trigger: descaleDisolveOnScrool,
          start: "top top",
          end: "200% 30%",
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
      gsap.from(logoRef.current, {
        duration: 3,
        autoAlpha: 0.1,
        // delay: 3,
        ease: "back.out(1.7)",
        y: 10,
      });
    },
    { dependencies: [logoRef, logoRefContainer, bgRef, bgRefContainer] }
  );

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
          ref={logoRefContainer}
          // aply this to saw size of the centered container my-border-red
          className="z-[2] absolute left-[50%] -translate-x-2/4 top-200 w-[380px] h-screen"
        >
          <div
            ref={logoRef}
            className="relative border-white prose  text-white h-56 w-56 top-2/4 left-[22%] md:top-1/2 md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 border-[1px]"

            // className="relative border-white prose  text-white h-56 w-56 top-[10rem] left-[22%] md:top-1/2 md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 border-[1px]"
          >
            <div className="flex flex-col gap-4 items-center text-4xl px-20 pt-5 pb-0 mb-0 leading-[-1]">
              <SiForestry />

              <h1 className=" text-white font-extralight text-5xl">
                La Baraka
              </h1>
            </div>
            <p className=" tracking-widest text-center text-xs pt-0 -mt-8 w-[100%]">
              BAR - RESTAURANT
              <br /> — CHAMBRES D’HÔTES —
            </p>
          </div>
          {/* </div> */}
        </div>
        <div>
          <div
            ref={bgRefContainer}
            className="box App-header relative w-full h-[130vh] lg:h-[100svh]"
          >
            {/* <Background ref={bgRef} /> */}
            <Image
              ref={bgRef}
              alt="Paysage Cevenol"
              src={autre}
              placeholder="blur"
              quality={75}
              fill
              sizes="100vw"
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
