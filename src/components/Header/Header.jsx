import React, { useState, forwardRef } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = forwardRef(({ scrollToSection, headerHeight = 76 }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200"
      style={{ height: `${headerHeight}px` }}
    >
      <div className="flex items-center w-full h-full px-6 lg:px-12">

        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold cursor-pointer hover:opacity-70"
        >
          Vegar Ravndal
        </h1>

        <div className="hidden ml-auto md:flex">
          <NavBar scrollToSection={scrollToSection} />
        </div>

        <div className="ml-auto md:hidden">
          <HamburgerBar
            scrollToSection={scrollToSection}
            toggleMenu={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          />
        </div>

      </div>
    </header>
  );
});

export default Header;