import React from "react";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  Squares2X2Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const ICONS = {
  home: HomeIcon,
  about: UserIcon,
  skills: CodeBracketIcon,
  projects: Squares2X2Icon,
  contact: EnvelopeIcon,
};

const NavItem = ({ text, icon, onClick }) => {
  const isContact = text === "Contact";
  const Icon = ICONS[icon];

  return (
    <li className="list-none">
      <button
        onClick={onClick}
        aria-label={`Navigate to ${text}`}
        className={`inline-flex items-center gap-2 transition-all duration-200 font-medium ${
          isContact
            ? "rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            : "text-gray-600 hover:text-black"
        }`}
      >
        {Icon && <Icon aria-hidden="true" className="size-5" />}
        {text}
      </button>
    </li>
  );
};

export default NavItem;
