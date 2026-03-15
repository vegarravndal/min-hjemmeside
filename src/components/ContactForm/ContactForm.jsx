import React, { useState } from "react";
import { useContact } from "./ContactContext";

const ContactForm = ({ headerHeight = 16 }) => {
  const { sendMessage } = useContact();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="px-4 mb-24 md:px-12 scroll-mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-medium text-gray-900 mb-14">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={6}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
