"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import TAB_DATA from "./tabdata";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black bg-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 px-4 sm:px-6 md:px-8 xl:px-16">
        <div className="w-full flex justify-center">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="Illustration representing about section"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        <div className="text-left flex flex-col h-full">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Node.js, SQLExpress, MongoDB,
              CSS, and Git. I am a quick learner and always looking to expand
              my knowledge and skill set. I'm a team player and excited to
              collaborate on meaningful projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          <div
            className="mt-6 transition-opacity duration-300 ease-in bg-gray-50 p-4 rounded-lg shadow-sm"
            key={tab}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content ?? (
              <p>No content available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
