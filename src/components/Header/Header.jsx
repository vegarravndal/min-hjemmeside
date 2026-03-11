import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

const Header = ({ scrollToSection, headerHeight = 64 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-[100] font-[Wix_Madefor_Text]"
      style={{ height: `${headerHeight}px` }}
    >
      <div className="flex items-center w-full h-full px-6 lg:px-12">
        {/* Desktop menu */}
        <div className="hidden md:flex">
          <NavBar scrollToSection={scrollToSection} />
        </div>

        {/* Mobile hamburger */}
        <div className="ml-auto md:hidden">
          <HamburgerBar
            scrollToSection={scrollToSection}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;