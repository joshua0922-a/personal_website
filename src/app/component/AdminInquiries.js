"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase"; // adjust your import path
import { collection, onSnapshot } from "firebase/firestore";

const AdminInquiries = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "contacts"), (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Inquiries</h1>
      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg.id} className="border p-4 rounded shadow">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminInquiries;
