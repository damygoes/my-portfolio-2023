"use client";
import Image from "next/image";
import Link from "next/link";
import aboutPic from "../../../public/images/developer-pic-2.jpeg";
import DAMI from "../../../public/images/dami.jpg";

const About = () => {
  return (
    <div id="about" className="my-72 w-full p-4">
      <h2 className="font-bold text-6xl mt-32 mb-24 w-full text-left">About</h2>
      <div className="flex items-center justify-between w-full gap-32">
        <div className="relative rounded-2xl border-2 border-solid border-primary bg-neutral p-8 w-1/3">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-primary" />
          <Image
            src={DAMI}
            alt="Damilola Bada"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <p className="text-md text-gray-400">
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
      </div>
    </div>
  );
};

export default About;
