"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import KOMPR from "../../../public/images/kompr.png";
import BURGER from "../../../public/images/burger-up.png";

const Projects = () => {
  return (
    <div id="projects" className="my-32 lg:my-72 w-full p-4">
      <h2 className="font-bold text-4xl mt-32 mb:12 w-full text-left md:text-6xl md:mb-24">
        Things I&apos;ve Built
      </h2>
      <div className="flex flex-col items-center justify-between gap-4 w-full lg:gap-32 lg:flex-row">
        <div className="invisible lg:visible lg:text-2xl lg:text-primary/70 lg:font-light lg:italic lg:w-1/3">
          <q>
            My code is a reflection of my unwavering dedication and relentless
            pursuit of excellence, as I pour my heart and soul into every line
            to craft digital wonders
          </q>
        </div>
        <div className="flex flex-col justify-start items-start flex-1 gap-8">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
