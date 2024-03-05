// app/components/SplitTypeXp.tsx

"use client";
import React, { useRef, useEffect } from "react";
import { ReactNode } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import SplitType from "split-type";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Props {
  children: ReactNode;
}

const SplitTypeXp = ({ children }: Props) => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Initialise SplitType on the heading element
    const splitTypeInstance = new SplitType(ref.current!, {
      types: "lines,words,chars",
    });
    gsap.from(splitTypeInstance.lines, {
      scrollTrigger: {
        trigger: ref.current,
        // pin: true,
        // ideal ratio mobile -90% 80%, -150% 30%
        start: "0 90%", // 67% = 1/3 screen height // -80% 80% last compromise mobile/desktop
        end: "0 50%", // 33% = 1/3 screen height // -60% 20% last on compromise mobile/desktop
        scrub: true, // if true = use scroll, not time for animation
        markers: true,
      },
      // opacity: 0, // from 0.2
      y: 200,
      stagger: 0.5, // decay animation for multiple instance
      ease: "circ.inOut",
      duration: 4, // 4 to have smooth transition
    });

    // console.log("SPLITTAGE : ", splitTypeInstance.chars);

    // Cleanup on component unmount
    return () => {
      splitTypeInstance.revert();
    };
  }, [children]);

  return (
    <>
      <div
        ref={ref}
        id="splitter"
        className="my-border-green overflow-hidden py-2"
      >
        {children}
      </div>
    </>
  );
};

export default SplitTypeXp;
