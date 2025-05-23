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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded h-32"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Send
      </button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
