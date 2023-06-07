"use client";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import DAMI from "../../../public/images/dami.jpg";

const fadeAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust these values based on your needs
      const triggerOffset = windowHeight * 0.7; // 70% of window height

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  return (
    <div id="about" className="my-72 w-full p-4" ref={ref}>
      <motion.h2
        className="font-bold text-4xl mt-32 mb-24 w-full origin-left text-left md:text-6xl"
        style={{ scaleX: useSpring(scrollYProgress) }}
      >
        How It All Started
      </motion.h2>
      <motion.div
        className="flex flex-col items-center justify-between w-full gap-16 lg:gap-32 lg:flex-row"
        variants={fadeAnimation}
        initial="hidden"
        animate={controls}
      >
        <div className="relative w-full rounded-2xl border-2 border-solid border-primary bg-neutral p-8 lg:w-1/3">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-primary" />
          <Image
            src={DAMI}
            alt="Damilola Bada"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <p className="text-md text-text-dark md:text-3xl lg:text-[1rem]">
            I embarked on my web development and coding journey back in 2019
            with the purpose of creating a personal journal dedicated to my
            passion for cycling. Over the years, I&apos;ve had the privilege of
            not only working on my own
            <Link
              href="#projects"
              className="font-bold mx-1 text-accent hover:text-primary"
            >
              projects
            </Link>
            but also collaborating with a
            <Link
              href="https://MyCodeCareer.com"
              className="font-bold mx-1 text-accent hover:text-primary"
              target="_blank"
            >
              career-coaching company
            </Link>
            to develop their website.
            <br />
            <br />
            Currently, my primary focus revolves around the advancement and
            enhancement of our
            <Link
              href="https://apomap.app/signin"
              className="font-bold mx-1 text-accent hover:text-primary"
              target="_blank"
            >
              SaaS product
            </Link>
            at
            <Link
              href="https://apomap.de/"
              className="font-bold mx-1 text-accent hover:text-primary"
              target="_blank"
            >
              apomap GmbH.
            </Link>
            During my leisure time, you can usually find me indulging in
            exhilarating bike rides and races, which I enthusiastically document
            on my
            <Link
              href="https://www.instagram.com/damy.goes/"
              className="font-bold mx-1 text-accent hover:text-primary"
              target="_blank"
            >
              Instagram.
            </Link>
            I also cherish the moments spent with my family, cherishing the
            importance of work-life balance.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
