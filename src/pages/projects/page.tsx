"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import BURGER from "../../../public/images/burger-up.png";
import KOMPR from "../../../public/images/kompr.png";

const fadeAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
};

const Projects = () => {
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
    <div id="projects" className="my-32 lg:my-72 w-full p-4" ref={ref}>
      <motion.h2
        className="font-bold text-4xl mt-32 mb-24 w-full origin-left text-left md:text-6xl"
        style={{ scaleX: useSpring(scrollYProgress) }}
      >
        Things I&apos;ve Built
      </motion.h2>
      <div className="flex flex-col items-center justify-between gap-4 w-full lg:gap-32 lg:flex-row">
        <motion.div
          className="invisible lg:visible lg:text-2xl lg:text-primary/70 lg:font-light lg:italic lg:w-1/3"
          variants={fadeAnimation}
          initial="hidden"
          animate={controls}
        >
          <q>
            Embrace the journey of self-discovery, for within it lies the power
            to unlock your true potential.
          </q>
        </motion.div>
        <motion.div
          className="flex flex-col justify-start items-start flex-1 gap-8"
          variants={fadeAnimation}
          initial="hidden"
          animate={controls}
        >
          <ProjectCard
            projectName="KOM-PR"
            projectDescription="An app that lists famous cycling climbs around the world for cyclists."
            projectLink="https://kom-pr.vercel.app/"
            githubLink="https://github.com/damygoes/kom-pr"
            projectImage={KOMPR}
            techStack={[
              "Reactjs",
              "Material UI",
              "REDUX Toolkit",
              "MongoDB",
              "Express",
              "Nodejs",
              "JWT",
              "Vercel",
            ]}
          />
          <ProjectCard
            projectName="Burger Up!"
            projectDescription="An e-commerce website for a burger restaurant."
            projectLink="https://burger-up.vercel.app/"
            githubLink="https://github.com/damygoes/burger-up"
            projectImage={BURGER}
            techStack={["Nextjs", "CSS", "REDUX Toolkit", "MongoDB", "Vercel"]}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
