"use client";

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GithubIcon from "./github-icon.svg";
import LinkedinIcon from "./linkedin-icon.svg";
import Image from "next/image";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const EmailSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaVerified(!!token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify the CAPTCHA before submitting.");
      return;
    }

    try {
      await addDoc(collection(db, "inquiries"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setError(null);
      setForm({ name: "", email: "", message: "" });
      recaptchaRef.current?.reset();
      setCaptchaVerified(false);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again later.");
      setSuccess(false);
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Contact Me</h2>

      <div className="relative z-10 px-4 md:px-0 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Contact Info */}
        <div className="flex-1">
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

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full p-6 rounded-lg shadow-md space-y-4 ml-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded text-black"
            rows={5}
            required
          />

          {/* reCAPTCHA component */}
          <ReCAPTCHA
            sitekey="6LcbPkYrAAAAAMCFAa0LX2TH6YKx2Z4BAyqFFtaa" // Replace with your actual Google reCAPTCHA site key
            onChange={handleCaptchaChange}
            ref={recaptchaRef}
          />

          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 text-sm pt-2">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-600 text-sm pt-2">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
