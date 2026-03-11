import React from "react";

const NavItem = ({ text, onClick }) => {
  const isContact = text === "Contact";

  return (
    <li className="list-none">
      <button
        onClick={onClick}
        aria-label={`Navigate to ${text}`}
        className={`transition-all duration-200 font-medium ${
          isContact
            ? "text-black border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100"
            : "text-gray-600 hover:text-black"
        }`}
      >
        {text}
      </button>
    </li>
  );
};

export default NavItem;