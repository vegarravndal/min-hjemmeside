import React from "react";
import { MENU_LIST } from "./menu_data";
import NavItem from "./NavItem";

const NavBar = ({ scrollToSection }) => {
  return (
    <nav>
      <ul className="flex items-center gap-8 text-[16px] font-medium">
        {MENU_LIST.map((item, index) => (
          <NavItem
            key={index}
            text={item.text}
            onClick={() => scrollToSection(item.text.toLowerCase())}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;