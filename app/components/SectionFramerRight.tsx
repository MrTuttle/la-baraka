"use client";
import React from "react";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitType from "split-type";
interface Props {
  children: ReactNode;
}

const SectionFramerRight = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        // animate={{ opacity: 100, y: 0 }}
        // transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          // damping: 2, // default 10, perpetual damping 0
          // mass: 8, // default 1
          // delay: 0.25,
          duration: 1,
        }}
        // transition : if damping: 0 = perpetual damping, 10 = default, 50, very slow
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionFramerRight;
