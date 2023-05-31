"use client";
import Link from "next/link";
import React from "react";
import Logo from "../shared/Logo";
import { useRouter, usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../shared/Icons";
import { motion } from "framer-motion";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName.startsWith(href);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${isActive ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const MotionLink = motion(Link);
  return (
    <header className="flex items-center justify-between w-full px-32 py-8 font-medium">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/experience" title="Experience" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
