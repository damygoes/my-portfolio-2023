"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/shared/LiIcon";

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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      ref={ref}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-2xl">
          {position}&nbsp;
          <Link href={companyLink} target="_blank" className="text-blue-500">
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium text-black/50">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
    <div id="experience" className="my-72 w-full p-4">
      <h2 className="font-bold text-6xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-14 top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Fullstack Developer"
            company="apomap GmbH"
            companyLink="https://apomap.de/"
            time="2022 - Present"
            address="Winterberg, Nordrhein-Westfalen, Germany"
            work="I am currently working on the advancement and enhancement of our SaaS product at apomap GmbH."
          />
          <Details
            position="Fullstack Developer"
            company="apomap GmbH"
            companyLink="https://apomap.de/"
            time="2022 - Present"
            address="Winterberg, Nordrhein-Westfalen, Germany"
            work="I am currently working on the advancement and enhancement of our SaaS product at apomap GmbH."
          />
          <Details
            position="Fullstack Developer"
            company="apomap GmbH"
            companyLink="https://apomap.de/"
            time="2022 - Present"
            address="Winterberg, Nordrhein-Westfalen, Germany"
            work="I am currently working on the advancement and enhancement of our SaaS product at apomap GmbH."
          />
          <Details
            position="Fullstack Developer"
            company="apomap GmbH"
            companyLink="https://apomap.de/"
            time="2022 - Present"
            address="Winterberg, Nordrhein-Westfalen, Germany"
            work="I am currently working on the advancement and enhancement of our SaaS product at apomap GmbH."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
