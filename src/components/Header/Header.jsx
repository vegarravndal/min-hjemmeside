import React, { useState, forwardRef } from "react";
import NavBar from "./NavBar";
import HamburgerBar from "./HamburgerBar";

// forwardRef slik at App kan hente header-høyde
const Header = forwardRef(({ scrollToSection, headerHeight = 76 }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-100 font-['Wix Madefor Text']"
      style={{ height: `${headerHeight}px` }}
    >
      <div className="flex items-center w-full h-full px-6 lg:px-12">
        {/* Desktop */}
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
});

export default Header;
