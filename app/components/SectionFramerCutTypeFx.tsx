"use client";
import React, { useRef, useEffect } from "react";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitType from "split-type";
interface Props {
  children: ReactNode;
}

const SectionFramerCutTypeFx = ({ children }: Props) => {
  const ref = useRef(null);
  useEffect(() => {
    // Initialise SplitType on the heading element
    const splitTypeInstance = new SplitType(ref.current!, {
      types: "lines",
    });
    // do something on splitTypeInstance.lines...

    console.log("SPLITTAGE xxxxxxxxxxxxxxxxxx ");
    console.log(
      `splitTypeInstance.chars : ${splitTypeInstance.chars?.map(
        (e) => e.outerHTML
      )}`
    );
    console.log(
      `splitTypeInstance.lines : ${splitTypeInstance.lines?.map(
        (e) => e.outerHTML
      )}`
    );
    console.log(
      `splitTypeInstance.words : ${splitTypeInstance.words?.map(
        (e) => e.outerHTML
      )}`
    );

    // Cleanup on component unmount
    return () => {
      splitTypeInstance.revert();
    };
  }, [children]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        id="splitter"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        // viewport={{ once: true }}
        // animate={{ opacity: 100, y: 0 }}
        // transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", delay: 0, duration: 1 }}
        className="border text-blue-700 my-border-red py-2"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionFramerCutTypeFx;
