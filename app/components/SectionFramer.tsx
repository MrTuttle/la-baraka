"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const SectionFramer = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        // transition={{ delay: 1, duration: 0.5 }}
      >
        <h3 className=" font-light text-2xl self-center">
          La Baraka vous accueille au cœur du massif des Cevennes. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Laboriosam, est? Quae
          vel adipisci provident tempore, nisi, commodi suscipit pariatur
          perspiciatis beatae modi nam, iste aut possimus consequatur dolores
          aliquam. Laborum!
        </h3>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionFramer;
