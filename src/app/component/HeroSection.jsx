"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-20 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left"
        >
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-7xl leading-tight font-extrabold text-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-700">
              Hello, I&apos;m
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              <TypeAnimation
                sequence={[
                  "Joshua",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
            I am a passionate developer with a knack for creating beautiful and
            functional web applications. I enjoy learning new technologies and
            pushing the boundaries of user experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-500 hover:opacity-90 text-white font-medium shadow-md transition-all"
            >
              Hire Me
            </Link>
            <Link href="https://drive.google.com/file/d/1H-w_u-WRUQoV3bIprGrolQvOlgJxH7rB/view?usp=sharing" className="w-full sm:w-auto" 
            target="_blank">
              <span className="block px-6 py-3 rounded-full border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-900 transition-all font-medium shadow-md">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-10 sm:mt-0 flex justify-center"
        >
          <div className="rounded-full bg-gray-100 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-lg">
            <Image
              src="/images/code.jpg"
              alt="hero image"
              className="object-cover"
              fill
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
