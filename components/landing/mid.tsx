import React from "react";
import { CgChevronRight } from "react-icons/cg";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Carousel from "../carousel";
import Image from "next/image";
import lady from "@/public/assets/landing/girl.png";
import guy from "@/public/assets/landing/guy.png";
import bag from "@/public/assets/landing/bags.png";

const Mid = () => {
  const listNo = [
    { title: "50,000+", sub: "Experienced tutors" },
    { title: "300,000+", sub: "5-star tutor reviews" },
    { title: "120+", sub: "Subjects taught" },
    { title: "180+", sub: "Tutor nationalities" },
  ];
  const courses = [
    {
      title: "English Language",
      no: "25,700",
    },
    {
      title: "English Language",
      no: "25,700",
    },
    {
      title: "English Language",
      no: "25,700",
    },
    {
      title: "English Language",
      no: "25,700",
    },
    {
      title: "English Language",
      no: "25,700",
    },
    {
      title: "English Language",
      no: "25,700",
    },
  ];
  const cards = [
    {
      title: "Find your tutor.",
      no: 1,
      sub: "We’ll connect you with a tutor who will motivate, challenge, and inspire you.",
      color: "#7bead6",
    },
    {
      title: "Start learning.",
      no: 2,
      sub: "Your tutor will guide the way through your first lesson and help you plan your next steps.",
      color: "#ffe03d",
    },
    {
      title: "Speak. Read. Write. Repeat.",
      no: 3,
      sub: "Choose how many lessons you want to take each week and get ready to reach your goals!",
      color: "#2885fd",
    },
  ];
  const footerDeets = [
    {
      title: "Popular online language courses",
      lis: [
        "Online English classes",
        "Online Spanish classes",
        "Online German classes",
        "Online French classes",
        "Online Business English courses",
      ],
    },
    {
      title: "Popular online language courses",
      lis: [
        "Online English classes",
        "Online Spanish classes",
        "Online German classes",
        "Online French classes",
        "Online Business English courses",
      ],
    },
    {
      title: "Popular online language courses",
      lis: [
        "Online English classes",
        "Online Spanish classes",
        "Online German classes",
        "Online French classes",
        "Online Business English courses",
      ],
    },
    {
      title: "Popular online language courses",
      lis: [
        "Online English classes",
        "Online Spanish classes",
        "Online German classes",
        "Online French classes",
        "Online Business English courses",
      ],
    },
  ];
  return (
    <div className="mb-20">
      <div className="p-10 md:p-20 grid grid-cols-3 gap-5 md:grid-cols-5 justify-between">
        {listNo.map((list, index) => {
          return (
            <div key={index}>
              <h3 className="text-center font-platform font-semibold text-2xl sm:text-3xl">
                {list.title}
              </h3>
              <p className="text-[#4d4c5c] py-1 sm:py-2 text-xs sm:text-base font-semibold text-center">
                {list.sub}
              </p>
            </div>
          );
        })}
        <div>
          <h3 className="text-center flex items-center gap-1 justify-center font-platform font-semibold text-2xl sm:text-3xl">
            4.8 <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="text-[#4d4c5c] sm:py-2 py-1 text-xs sm:text-base font-semibold text-center">
            on the App Store
          </p>
        </div>
      </div>
      <div className="md:px-20 px-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {courses.map((course, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 flex items-center justify-between p-5 cursor-pointer rounded-[4px]"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g id="Frame 316128405">
                    <g id="Group 316127862">
                      <circle
                        id="Ellipse 8"
                        cx="24"
                        cy="23"
                        r="4"
                        fill="#121117"
                        stroke="#121117"
                        stroke-width="2"
                      ></circle>
                      <path
                        id="Vector 1"
                        stroke="#fff"
                        d="M24 20.5V23h2"
                      ></path>
                      <path
                        id="Rectangle 4438"
                        stroke="#121117"
                        stroke-width="2"
                        d="M18 31h12v13H18z"
                      ></path>
                      <path
                        id="Rectangle 4439"
                        stroke="#121117"
                        stroke-width="2"
                        d="M16 15h16v16H16z"
                      ></path>
                      <path
                        id="Rectangle 4440"
                        fill="#121117"
                        d="M14 14h20v2H14z"
                      ></path>
                      <path
                        id="Rectangle 4444"
                        fill="#121117"
                        d="M14 30h20v2H14z"
                      ></path>
                      <path
                        id="Rectangle 4441"
                        fill="#121117"
                        d="M17 11h14v2H17z"
                      ></path>
                      <path
                        id="Rectangle 4442"
                        fill="#121117"
                        d="M19 8h10v2H19z"
                      ></path>
                      <path
                        id="Rectangle 4443"
                        fill="#121117"
                        d="M23.333 3h1.334L26 7h-4z"
                      ></path>
                      <path
                        id="Rectangle 4445"
                        fill="#121117"
                        d="M21 34h2v7h-2z"
                      ></path>
                      <path
                        id="Rectangle 4446"
                        fill="#121117"
                        d="M25 34h2v7h-2z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div>
                  <h1 className=" font-platform font-semibold text-2xl md:text-3xl">
                    {course.title}
                  </h1>
                  <p className="text-[#4d4c5c] py-2 text-xs md:text-base font-semibold ">
                    {course.no}
                  </p>
                </div>
              </div>
              <CgChevronRight className="w-6 h-6 cursor-pointer" />
            </div>
          );
        })}
      </div>
      <div className="mt-10 md:mt-20">
        <h1 className=" text-7xl md:text-8xl font-medium font-platform text-center">
          Find the right tutor for you.
        </h1>
        <p className="text-base md:text-xl text-center py-4 text-[#121117]">
          With over 30,000 tutors and 1M+ learners, we know language learning.
        </p>
      </div>
      <div className="my-10">
        <Carousel />
      </div>
      <div className="px-10">
        <h1 className="text-5xl sm:text-6xl my-4 font-medium font-platform">
          How Preply works:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-3 justify-between gap-2">
          {cards.map((card, index) => {
            return (
              <div key={index}>
                <div className="border border-black max-h-[86vh] overflow-y-scroll scrollbar-none max-w-full w-full sm:w-auto md:max-w-[410px] rounded-[6px] inline-block p-[16px_16px_0_16px]">
                  <p
                    className="w-10 h-10 flex items-center justify-center rounded-[8px] font-platform text-2xl font-semibold"
                    style={{ backgroundColor: card.color }}
                  >
                    {card.no}
                  </p>
                  <div>
                    <h1 className="font-platform my-2 font-semibold text-4xl md:text-5xl">
                      {card.title}
                    </h1>
                    <p className="text-xs sm:text-sm leading-6 py-2 max-w-[350px]">
                      {card.sub}
                    </p>
                  </div>
                  <Image src={lady} alt="lady" className="mt-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[60vh] sm:h-[70vh] flex flex-col justify-center items-center w-full bg-[#ff7aac] my-20 px-10 md:px-20">
        <h1 className="font-platform font-semibold text-6xl sm:text-8xl text-center">
          Lessons you’ll love. Guaranteed.
        </h1>
        <p className="text-lg sm:text-xl my-5 text-center sm:text-left">
          Try another tutor for free if you’re not satisfied.
        </p>
      </div>
      <div className="my-10 sm:my-20 w-full px-2">
        <div className="rounded-[8px] border border-main h-[100vh] flex ">
          <Image
            src={guy}
            alt="guy"
            className="w-1/2 object-cover hidden md:block"
          />
          <div className="w-full md:w-1/2 bg-[#3ddabe] p-5 md:p-10">
            <h1 className=" text-7xl sm:text-8xl font-platform font-semibold">
              Become a tutor
            </h1>
            <p className=" text-sm sm:text-base my-5">
              Earn money sharing your expert knowledge with students. Sign up to
              start tutoring online with Preply.
            </p>
            <ol className=" list-disc font-platform font-medium text-xl sm:text-2xl list-inside">
              <li>Find new students</li>
              <li>Grow your business</li>
              <li>Get paid securely</li>
            </ol>
            <button className="flex items-center gap-2 text-xl w-full my-10 text-center py-4 justify-center bg-black rounded-[6px] font-semibold text-white">
              Become a tutor <FaArrowRight />
            </button>
            <p className="my-5 underline text-sm text-center">
              How our platform works
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 mb-20">
        <h1 className="text-7xl sm:text-8xl font-platform font-medium">
          Corporate language training for business
        </h1>
        <div className="flex md:flex-row flex-col w-full overflow-x-scroll scrollbar-none items-center gap-5 justify-between">
          <div className="w-full md:w-1/2">
            <p className="text-base leading-6">
              Preply corporate training is designed for teams and businesses
              offering personalized language learning with online tutors. Book a
              demo to learn more about it.
            </p>
            <p className="text-base my-5 leading-6">
              Do you want your employer to pay for your lessons? Refer your
              company now!
            </p>
            <div className="flex items-center gap-5">
              <button className="border-2 border-black rounded-[8px] w-full py-3 text-lg">
                Book a demo
              </button>
              <button className="border-2 border-black rounded-[8px] w-full py-3 text-lg">
                Refer your company
              </button>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 items-center">
            <Image src={bag} alt="bags" />
            <Image src={bag} className="hidden md:block" alt="bags" />
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <h1 className="sm:text-2xl text-xl font-platform font-medium">
          Online tutoring & Language lessons and classes
        </h1>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
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
      </div>
    </div>
  );
};

export default Mid;
