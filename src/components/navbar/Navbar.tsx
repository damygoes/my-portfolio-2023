"use client";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../shared/Icons";
import Logo from "../shared/Logo";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName?.startsWith(href);

  return (
    <Link
      href={`/${href}`}
      className={`${className} relative group`}
      scroll
      as={href}
    >
      {title}
      <span
        className={`h-[1px] w-0 inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "bg-text-dark" : "bg-transparent"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const MotionLink = motion(Link);
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  const handleMenuNavigation = (href: string) => {
    router.push(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={` flex items-center justify-between w-full px-32 py-8 font-medium sticky top-0 z-30 shadow-sm bg-neutral text-text-dark `}
    >
      <nav className="invisible lg:visible">
        <CustomLink href="#about" title="About" className="mx-4" />
        <CustomLink href="#experience" title="Experience" className="mx-4" />
        <CustomLink href="#projects" title="Projects" className="ml-4" />
      </nav>
      <nav className="invisible lg:visible lg:flex items-center justify-center flex-wrap gap-4">
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
      <div className="absolute left-[15%] lg:left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      {/* Mobile Navbar */}
      <div className="absolute right-5 top-2 h-12 w-12 translate-y-[20%] lg:invisible">
        {menuOpen ? (
          <RiCloseFill
            className="w-full h-auto cursor-pointer"
            onClick={handleMenuClick}
          />
        ) : (
          <RiMenu3Line
            className="w-full h-auto cursor-pointer"
            onClick={handleMenuClick}
          />
        )}
      </div>
      {menuOpen && (
        <motion.nav
          className="absolute top-[70%] left-0 w-full h-screen flex flex-col justify-center items-center gap-4 backdrop-blur-md bg-primary/80 uppercase text-center text-6xl text-text-white shadow-md rounded-md"
          initial={{ transform: "translateY(-100%)", x: "-50%" }}
          animate={{ transform: "translateY(3%)", x: "-50%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h3
            className="mx-4 shadow-lg"
            onClick={() => handleMenuNavigation("#about")}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.h3>
          <motion.h3
            className="mx-4 shadow-lg"
            onClick={() => handleMenuNavigation("#experience")}
            whileTap={{ scale: 0.9 }}
          >
            Experience
          </motion.h3>
          <motion.h3
            className="ml-4 shadow-lg"
            onClick={() => handleMenuNavigation("#projects")}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h3>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
