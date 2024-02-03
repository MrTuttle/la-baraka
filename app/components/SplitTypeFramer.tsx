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

const SplitTypeFramer = ({ children }: Props) => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Initialise SplitType on the heading element
    const splitTypeInstance = new SplitType(ref.current!, {
      types: "words",
    });
    gsap.from(splitTypeInstance.words, {
      scrollTrigger: {
        trigger: ref.current,
        // pin: true,
        // ideal ratio mobile -90% 80%, -150% 30%
        start: "-80% 80%",
        end: "-60% 20%",
        scrub: true, // if true = use scroll, not time for animation
        markers: true,
      },
      opacity: 0, // from 0.2
      stagger: 0.5, // decay animation for multiple instance
    });

    // console.log("SPLITTAGE : ", splitTypeInstance.chars);

    // Cleanup on component unmount
    return () => {
      splitTypeInstance.revert();
    };
  }, [children]);

  return (
    <>
      <div ref={ref} id="splitter">
        {children}
      </div>
    </>
  );
};

export default SplitTypeFramer;
