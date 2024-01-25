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
        viewport={{ margin: "-200px" }}
        // animate={{ opacity: 100, y: 0 }}
        // transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", delay: 0, duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionFramerRight;
