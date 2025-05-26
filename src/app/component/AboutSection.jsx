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
    <section id="about" className="bg-white py-16 px-6 sm:px-10 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/about-image.png"
            width={480}
            height={480}
            alt="About Me Illustration"
            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg transition-transform hover:scale-105"
          />
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold mb-3 text-black">About Me</h2>
            <p className="text-black text-lg leading-relaxed">
              I'm a full stack web developer passionate about crafting sleek,
              efficient, and responsive web applications. I specialize in
              JavaScript, React, Node.js, MongoDB, SQLExpress, Git, and modern
              UI/UX practices.
              <br />
              <br />
              I'm a fast learner and love solving real-world problems with clean
              code. Whether working solo or with a team, I thrive on building
              impactful digital experiences.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4">
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

          {/* Tab Content */}
          <div
            key={tab}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 transition-all duration-300 ease-in"
          >
            {TAB_DATA.find((t) => t.id === tab)?.content ?? (
              <p className="text-black">No content available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
