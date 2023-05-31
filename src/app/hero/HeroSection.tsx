import Image from "next/image";
import React from "react";
import profilePic from "../../../public/images/developer-pic-1.png";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full pt-0">
      <div className="flex flex-col gap-1 flex-1">
        <h1 className="font-bold text-8xl uppercase">damilola</h1>
        <h2 className="font-bold text-8xl uppercase">bada</h2>
        <p className="text-xl font-thin mt-4">
          Fullstack Developer @ apomap GmbH
        </p>
      </div>
      <div className="w-1/2">
        <Image src={profilePic} alt="Damilola Bada" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
