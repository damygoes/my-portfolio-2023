"use client";
import Image from "next/image";
import profilePic from "../../../public/images/developer-pic-1.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const firstName = "Damilola";
  const lastName = "Bada";
  return (
    <div className="flex items-center justify-between w-full min-h-screen pt-0">
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex">
          {firstName.split("").map((letter, index) => (
            <motion.h1
              key={index}
              className="font-bold text-8xl uppercase cursor-default"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 100, damping: 1 }}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
        <div className="flex">
          {lastName.split("").map((letter, index) => (
            <motion.h2
              key={index}
              className="font-bold text-8xl uppercase cursor-default"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 100, damping: 1 }}
            >
              {letter}
            </motion.h2>
          ))}
        </div>
        <p className="text-xl font-thin mt-4">
          Fullstack Developer @ apomap GmbH
        </p>
      </div>
      <div className="w-1/2">
        <Image src={profilePic} alt="Damilola Bada" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
