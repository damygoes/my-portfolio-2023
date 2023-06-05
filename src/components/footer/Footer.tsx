"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../shared/Icons";

type Props = {};

const Footer = (props: Props) => {
  const MotionLink = motion(Link);
  return (
    <div className="flex justify-between items-center w-full gap-8">
      <nav className="flex items-center justify-center flex-wrap gap-4">
        <MotionLink
          href="https://www.linkedin.com/in/damilolabada/"
          target="_blank"
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </MotionLink>
        <MotionLink
          href="https://github.com/damygoes"
          target="_blank"
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </MotionLink>
        <MotionLink
          href="https://www.twitter.com"
          target="_blank"
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </MotionLink>
      </nav>
      <div>
        <p> Built with Nextjs and Tailwind CSS by Me, Myself and I</p>
      </div>
    </div>
  );
};

export default Footer;
