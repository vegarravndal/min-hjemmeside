import React, { useState } from "react";
import { useContact } from "./ContactContext";

const ContactForm = ({ headerHeight = 76 }) => {
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
    <section
  id="contact"
  className="px-4 mb-24 md:px-12"
  style={{ scrollMarginTop: `${headerHeight}px` }}
>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-14 text-[var(--text-primary)] relative">
          Contact Me
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-left"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            rows={6}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-full transition hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;