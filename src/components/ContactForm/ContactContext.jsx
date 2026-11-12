import React, { createContext, useContext } from "react";

const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const sendMessage = async (formData) => {
    let response;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      throw new Error("Unable to reach the contact server. Please try again later.");
    }

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.error || "Could not send your message. Please try again.");
    }

    return result;
  };

  return (
    <ContactContext.Provider value={{ sendMessage }}>
      {children}
    </ContactContext.Provider>
  );
};
