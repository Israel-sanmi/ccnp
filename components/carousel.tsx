"use client";

import Image from "next/image";
import React, { useState } from "react";
import image1 from "@/public/assets/landing/caro1.png";
import image2 from "@/public/assets/landing/caro2.png";
import image3 from "@/public/assets/landing/caro3.png";

const Carousel = () => {
  const slides = [
    {
      image: image1,
      title: "Her energy is amazing!",
      //   subName: "Liviana",
      name: "Ismael",
      role: "English Teacher",
    },
    {
      image: image2,
      title: "The class was so much fun!",
      //   subName: "Mario",
      name: "Alina",
      role: "Math Teacher",
    },
    {
      image: image3,
      title: "The class was so much fun!",
      //   subName: "Mario",
      name: "Oliver",
      role: "Computer Teacher",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Slides */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full transition-transform h-[90vh] object-center object-cover duration-500"
        />

        <div className="absolute bottom-4 left-4 bg-white/80 w-[95%] p-4 rounded-lg shadow-lg">
          <h3 className="font-bold text-3xl sm:text-4xl font-platform text-center">
            "{slides[currentSlide].title}"
          </h3>
          {/* <p className="text-sm text-gray-700">{slides[currentSlide].subName}</p> */}
          <p className="text-base sm:text-lg font-medium text-right">
            {slides[currentSlide].name}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 text-right">
            {slides[currentSlide].role}
          </p>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-r-md hover:bg-black"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-l-md hover:bg-black"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-[#ff7aac]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
