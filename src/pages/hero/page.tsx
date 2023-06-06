"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../../public/images/image-1.svg";

const HeroSection = () => {
  const firstName = "Damilola";
  const lastName = "Bada";
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen pt-8 text-text-dark lg:pt-0 lg:flex-row">
      <div className="flex flex-col gap-1 flex-1 flex-wrap items-center text-center lg:items-start lg:text-left">
        <div className="flex">
          {firstName.split("").map((letter, index) => (
            <motion.h1
              key={index}
              className="font-bold text-[4rem] uppercase cursor-default md:text-8xl"
              whileHover={{
                y: -4,
                backgroundColor: [
                  "#E9EEF4",
                  "#326789",
                  "rgba(120, 166, 8, 1)",
                  "rgba(233, 238, 244, 1)",
                  "rgba(230, 92, 79, 1)",
                  "#E9EEF4",
                ],
                color: "#fff",
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 1 }}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
        <div className="flex">
          {lastName.split("").map((letter, index) => (
            <motion.h2
              key={index}
              className="font-bold text-[4rem] uppercase cursor-default md:text-8xl"
              whileHover={{
                y: -4,
                backgroundColor: [
                  "#E9EEF4",
                  "#326789",
                  "rgba(120, 166, 8, 1)",
                  "rgba(233, 238, 244, 1)",
                  "rgba(230, 92, 79, 1)",
                  "#E9EEF4",
                ],
                color: "#fff",
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 1 }}
            >
              {letter}
            </motion.h2>
          ))}
        </div>
        <p className="text-xl font-light mt-4 text-primary md:text-2xl">
          Fullstack Developer @ apomap GmbH
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src={profilePic} alt="Damilola Bada" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
