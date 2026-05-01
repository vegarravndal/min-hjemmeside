import React, { useState } from "react";
import { useContact } from "./ContactContext";
import { InputField } from "./InputFields";

const ContactForm = () => {
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
    <section id="contact" className="px-4 mb-24 md:px-12">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-medium text-gray-900 mb-14">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">

          <InputField
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            name="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            name="message"
            type="textarea"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

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