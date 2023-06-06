"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkArrow } from "./Icons";

type ProjectCardProps = {
  projectName: string;
  projectLink: string;
  githubLink: string;
  projectDescription: string;
  projectImage: StaticImageData;
  techStack: string[];
};

const ProjectCard = ({
  projectName,
  projectDescription,
  projectImage,
  projectLink,
  githubLink,
  techStack,
}: ProjectCardProps) => {
  const MotionLink = motion(Link);
  return (
    <motion.div
      className="flex flex-col justify-between items-center w-full h-auto gap-4 p-4 rounded-3xl bg-neutral shadow-xl lg:flex-row"
      whileHover={{
        backgroundColor: ["#E9EEF4", "rgba(50, 103, 137, 0.2)", "#E9EEF4"],
        y: [-4, 0, -4, 0],
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        },
      }}
    >
      <div className="w-full lg:w-[40%]">
        <MotionLink href={projectLink} target="_blank">
          <Image
            src={projectImage}
            alt={projectName}
            className="w-full h-[12rem] rounded-2xl md:h-auto lg:h-[12rem]"
            priority
          />
        </MotionLink>
      </div>
      <div className="flex flex-col justify-between items-start flex-1 gap-2">
        <h4 className="font-bold text-lg mt-2 md:text-4xl lg:mt-0 lg:text-lg">
          {projectName}
        </h4>
        <p className="text-md font-light text-gray-500 mb-3 md:text-2xl lg:text-sm">
          {projectDescription}
        </p>
        <div className="flex justify-start items-center w-full flex-wrap gap-2">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="text-xs font-light  border-b border-solid border-b-accent md:text-lg lg:text-xs"
            >
              {stack}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end w-full flex-wrap gap-4 mt-3 z-20">
          <MotionLink
            href={githubLink}
            target="_blank"
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </MotionLink>
          <MotionLink
            href={projectLink}
            target="_blank"
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkArrow />
          </MotionLink>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
