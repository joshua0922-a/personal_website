"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "IT Technician",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Intern Developer @ TechnoPH",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm an IT professional with a passion for building web applications.
            I love working with React, Node.js, and MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:opacity-90 text-white">
              Hire Me
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-red-600 hover:opacity-90 text-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#181818] rounded-full overflow-hidden">
            <Image
              src="/images/code.jpg"
              alt="Profile Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
