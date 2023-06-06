"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/shared/LiIcon";
import SectionHeading from "@/components/shared/SectionHeading";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-center justify-between lg:w-[60%]"
      ref={ref}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-lg md:text-4xl lg:text-2xl">
          {position}&nbsp;
          <Link href={companyLink} target="_blank" className="text-primary">
            @{company}
          </Link>
        </h3>
        <p className="capitalize font-medium text-primary/90 my-2 md:text-2xl lg:text-sm">
          {time} | {address}
        </p>
        <p className="w-full mt-2 md:text-3xl md:mt-8 lg:text-lg">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="experience" className="my-32 lg:my-72 w-full p-4">
      <SectionHeading heading="Where I've Worked" />
      <div className="w-full mx-auto relative lg:w-[75%]" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="invisible lg:visible lg:absolute lg:left-14 lg:top-0 lg:w-[4px] lg:h-full lg:bg-accent lg:origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between lg:ml-4">
          <Details
            position="Fullstack Developer"
            company="apomap GmbH"
            companyLink="https://apomap.de/"
            time="2022 - Present"
            address="Winterberg, Nordrhein-Westfalen, Germany"
            work="I am responsible for developing new features and optimizing the existing codebase. Additionally, I integrate third-party SaaS solutions with apomap, aiming to enhance profitability and address users' needs effectively."
          />
          <Details
            position="Frontend Developer"
            company="MyCodeCareer"
            companyLink="https://mycodecareer.com/"
            time="October 2022 - December 2022"
            address="Remote"
            work="Rebuilt company's website using React and TailwindCSS. Additionally, I ensured that the website is responsive and optimized for mobile devices and performed thorough testing to ensure cross-browser compatibility."
          />
          <Details
            position="Trainee"
            company="Brainnest Consulting GmbH"
            companyLink="https://www.brainnest.consulting/"
            time="June 2022 - August 2022"
            address="Bremen, Germany"
            work="Developed a solid understanding of web developement and best practices for clean code. Additionally, I worked on various projects with other developers using HTML, CSS and Javascript."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
