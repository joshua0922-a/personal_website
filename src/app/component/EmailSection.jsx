"use client";

import React, { useState } from "react";
import GithubIcon from "./github-icon.svg";
import LinkedinIcon from "./linkedin-icon.svg";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      {/* Background Gradient */}
      <div className="absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 z-0">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300 to-transparent rounded-full h-80 w-80 blur-lg"></div>
      </div>

      {/* Contact Info */}
      <div className="z-10 px-4 md:px-0">
        <h5 className="text-xl font-bold text-black my-2">Let&apos;s Connect</h5>
        <p className="text-gray-700 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href="https://github.com/joshua0922-a"
            target="_blank"
            rel="noopener noreferrer"
            className="filter brightness-50 hover:brightness-75 transition"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-patriarca-b191b0223/"
            target="_blank"
            rel="noopener noreferrer"
            className="filter brightness-50 hover:brightness-75 transition"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>

      {/* Email Form */}
      <div className="px-4 md:px-0">
        {emailSubmitted ? (
          <p className="text-green-600 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="jacob@google.com"
                className="bg-gray-100 border border-gray-300 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Just saying hi"
                className="bg-gray-100 border border-gray-300 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Let's talk about..."
                className="bg-gray-100 border border-gray-300 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
