"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-md rounded"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
        >
          Send
        </button>
      </div>

      {status && (
        <p className="text-center text-sm mt-2 text-gray-700">{status}</p>
      )}
    </form>
  );
};

export default ContactForm;
