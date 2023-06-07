"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type SectionHeadingProps = {
  heading: string;
};

const fadeAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const bounceAnimation = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

const SectionHeading = ({ heading }: SectionHeadingProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust these values based on your needs
      const triggerOffset = windowHeight * 1; // 80% of window height

      // Check if the section is within the trigger range
      if (offset > triggerOffset) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.h2
      className="font-bold text-4xl mt-32 mb-24 w-full text-left md:text-6xl"
      variants={bounceAnimation}
      initial="hidden"
      animate={controls}
    >
      {heading}
    </motion.h2>
  );
};

export default SectionHeading;
