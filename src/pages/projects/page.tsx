"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import KOMPR from "../../../public/images/kompr.png";
import BURGER from "../../../public/images/burger-up.png";

const Projects = () => {
  return (
    <div id="projects" className="my-72 w-full p-4">
      <h2 className="font-bold text-6xl mt-32 mb-24 w-full text-left">
        Projects
      </h2>
      <div className="flex items-center justify-between w-full gap-32">
        <div className="text-2xl  text-primary/70 font-light italic w-1/3">
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
