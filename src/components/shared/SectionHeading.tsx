"use client";
import { motion, useScroll } from "framer-motion";

type SectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <motion.h2
      className="font-bold text-4xl mt-32 mb-24 w-full text-left md:text-6xl"
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        animate={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 1, delay: 0.1 }}
     
    >
      {heading}
    </motion.h2>
  );
};

export default SectionHeading;
