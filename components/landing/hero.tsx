import React from "react";
import Image from "next/image";

import NavBar from "./Nav";
import { FaArrowRight } from "react-icons/fa6";

import heroBg from "@/public/assets/landing/heroBg.png";

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full flex md:flex-row flex-col gap-3 items-center justify-between px-10 lg:px-20 h-auto md:h-[70vh] bg-[#ff7aac]">
        <div>
          <h1 className="font-platform text-center md:text-left font-medium text-5xl sm:text-6xl max-w-full w-auto sm:w-full sm:max-w-[400px]">
            Learn faster with your best language tutor.
          </h1>
          <button className="flex items-center gap-2 text-xl w-full sm:w-[400px] text-center py-4 justify-center bg-black rounded-[6px] font-semibold my-4 text-white">
            Get Started <FaArrowRight />
          </button>
        </div>
        <div className="flex relative justify-center items-center">
          <Image src={heroBg} alt="hero-bg" className="z-30" />
          <Image src={heroBg} className="absolute left-5 z-20 h-[90%]" alt="hero-bg" />
          <Image src={heroBg} className="absolute left-10 z-10 h-[80%]" alt="hero-bg" />

        </div>
      </div>
    </div>
  );
};

export default Hero;
