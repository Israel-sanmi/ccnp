"use client";
import { footerDeets } from "@/data/footerDeets";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bg-black p-10 relative">
      <div
        onClick={scrollToTop}
        className="w-14 h-14 bg-[#ff7aac] absolute right-5 cursor-pointer -top-5 border-2 rounded-[8px] border-black flex items-center justify-center"
      >
        <FaArrowUp />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 text-white">
          {footerDeets.map((deets, index) => {
            return (
              <div className="my-5" key={index}>
                <h4 className="text-base font-platform font-medium ">
                  {deets.title}
                </h4>
                <ul className="underline flex flex-col gap-2 my-3 font-semibold text-sm">
                  {deets.lis.map((list, index) => {
                    return <li key={index}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="text-white text-center py-5 font-platform">© 2012-2025 Preply Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
