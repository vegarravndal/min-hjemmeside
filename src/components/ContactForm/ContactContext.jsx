import React, { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  return (
    <ContactContext.Provider value={{ formData, setFormData, status, setStatus }}>
      {children}
    </ContactContext.Provider>
  );
};