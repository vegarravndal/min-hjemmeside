import React, { useRef, useEffect, useState } from "react";
import { MenuProvider } from "./Context/MenuContext";
import { ContactProvider } from "./components/ContactForm/ContactContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutPage/AboutPage";
import Skills from "./components/Skills/SkillSection";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactForm/ContactForm";

const App = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(76);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -headerHeight;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <MenuProvider>
      <ContactProvider>

        {/* ✅ BACKGROUND (MÅ være helt øverst) */}
        <div className="app-background" />

        {/* CONTENT */}
        <div className="relative flex flex-col min-h-screen">

          <Header
            ref={headerRef}
            scrollToSection={scrollToSection}
          />

          <main className="flex-1 space-y-24">
            <Hero scrollToSection={scrollToSection} headerHeight={headerHeight} />
            <About headerHeight={headerHeight} />
            <Skills headerHeight={headerHeight} />
            <Projects headerHeight={headerHeight} />
            <Contact headerHeight={headerHeight} />
          </main>

          <Footer scrollToSection={scrollToSection} />

        </div>
      </ContactProvider>
    </MenuProvider>
  );
};

export default App;