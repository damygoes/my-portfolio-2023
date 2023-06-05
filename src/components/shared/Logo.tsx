"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const MotionLink = motion(Link);

const Logo = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-primary text-text-white flex items-center justify-center rounded-full font-bold text-2xl"
        whileHover={{
          backgroundColor: [
            "#326789",
            "rgba(120, 166, 8, 1)",
            "rgba(233, 238, 244, 1)",
            "rgba(230, 92, 79, 1)",
            "#326789",
          ],
          transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        DB
      </MotionLink>
    </div>
  );
};

export default Logo;
