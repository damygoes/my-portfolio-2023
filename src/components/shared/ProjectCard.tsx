import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectCardProps = {
  projectName: string;
  projectLink: string;
  projectDescription: string;
  projectImage: StaticImageData;
  techStack: string[];
};

const ProjectCard = ({
  projectName,
  projectDescription,
  projectImage,
  projectLink,
  techStack,
}: ProjectCardProps) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink href={projectLink} target="_blank">
      <motion.div
        className="flex justify-between items-start w-full h-auto gap-4 p-4 rounded-3xl bg-gray-100 shadow-xl"
        whileHover={{
          backgroundColor: [
            "rgba(236,236,236,1)",
            "rgba(239,239,240,1)",
            "rgba(236,240,241,1)",
            "rgba(236,236,236,1)",
          ],
          y: [-4, 0, -4, 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          },
        }}
      >
        <div className="w-[40%]">
          <Image
            src={projectImage}
            alt={projectName}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-between items-start flex-1 gap-2">
          <h4 className="font-bold text-lg">{projectName}</h4>
          <p className="text-md font-light text-gray-500 mb-2">
            {projectDescription}
          </p>
          <div className="flex justify-start items-center w-full flex-wrap gap-2">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className="text-xs font-light rounded-md bg-slate-400 p-1"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </MotionLink>
  );
};

export default ProjectCard;
