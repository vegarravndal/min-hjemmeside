import React from "react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="relative z-50 bg-white border-t border-gray-200 py-16 font-['Wix Madefor Text']">
      <div className="flex flex-col items-center max-w-6xl gap-8 px-6 mx-auto">

        {/* Footer logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-lg font-bold transition cursor-pointer hover:opacity-70"
        >
          Vegar Ravndal
        </h1>

        {/* Footer meny */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-700">
            <li>
              <button onClick={() => scrollToSection("home")} className="transition hover:text-black">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="transition hover:text-black">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")} className="transition hover:text-black">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="transition hover:text-black">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="transition hover:text-black">
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Vegar Ravndal
        </p>

      </div>
    </footer>
  );
};

export default Footer;