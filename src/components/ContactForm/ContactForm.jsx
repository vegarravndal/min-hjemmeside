import React, { useState } from "react";
import { useContact } from "./ContactContext";
import { InputField } from "./InputFields";

const ContactForm = ({ headerHeight = 16 }) => {
  const { sendMessage } = useContact();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      await sendMessage({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setStatus("Thanks! Your message has been sent.");
    } catch (error) {
      setStatus(error.message || "Could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section bg-white-section px-4 md:px-12"
      style={{ scrollMarginTop: `${headerHeight}px` }}
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-medium text-gray-900 mb-10">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-6 text-left">

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

          {status && (
            <p role="status" aria-live="polite" className="text-sm text-gray-700">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
