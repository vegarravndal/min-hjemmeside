import React from "react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="relative z-50 border-t border-white/10 bg-slate-950 py-16 font-['Wix Madefor Text'] text-white">
      <div className="flex flex-col items-center max-w-6xl gap-8 px-6 mx-auto">

        {/* Footer logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="cursor-pointer text-lg font-normal transition hover:text-cyan-300"
        >
          Vegar Ravndal
        </h1>

        {/* Footer meny */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-300">
            <li>
              <button onClick={() => scrollToSection("home")} className="transition hover:text-cyan-300">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="transition hover:text-cyan-300">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")} className="transition hover:text-cyan-300">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="transition hover:text-cyan-300">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="transition hover:text-cyan-300">
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Vegar Ravndal
        </p>

      </div>
    </footer>
  );
};

export default Footer;
