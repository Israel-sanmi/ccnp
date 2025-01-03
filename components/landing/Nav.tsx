import React from "react";
import { IoMenu } from "react-icons/io5";
import { TbHelpCircle } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="bg-[#ff7aac] flex items-center justify-between p-4">
      <div className="flex items-end gap-3">
        <h1 className="font-medium font-platform text-xl">CCNPlatform</h1>
        <ul className="md:flex hidden gap-2 text-base font-semibold">
          <li className="cursor-pointer">Find tutors</li>
          <li className="cursor-pointer">Corporate language training</li>
          <li className="cursor-pointer">Become a tutor</li>
        </ul>
      </div>
      <div className="md:flex hidden items-center gap-2">
        <TbHelpCircle className="w-6 h-6 cursor-pointer" />
        <div className="flex py-1.5 px-3 items-center cursor-pointer gap-2 rounded-[8px] border-2 border-black text-base font-medium">
          <CiLogin className="w-5 h-5" /> Log In
        </div>
      </div>
      <IoMenu className="w-9 h-9 cursor-pointer block md:hidden" />
    </div>
  );
};

export default NavBar;
