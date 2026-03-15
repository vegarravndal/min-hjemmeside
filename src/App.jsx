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

  // Scroll til seksjon
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Dynamisk header-høyde
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <MenuProvider>
      <ContactProvider>

        {/* Fixed background */}
        <div
          className="fixed inset-0 pointer-events-none -z-10"
          style={{
            background: `
              radial-gradient(circle at 20% 35%, rgba(255,200,230,0.35) 0%, rgba(255,200,230,0.15) 20%, transparent 40%),
              radial-gradient(circle at 80% 50%, rgba(180,200,255,0.35) 0%, rgba(180,200,255,0.15) 25%, transparent 45%),
              linear-gradient(to bottom, #ffffff 0%, #ffffff 18%, #eef2ff 40%, #e0e7ff 60%, #f5e8ff 80%, #ffffff 100%)
            `,
            backgroundRepeat: "no-repeat",
            filter: "blur(120px)",
          }}
        />

        {/* Wrapper uten z-index */}
        <div className="relative flex flex-col min-h-screen">

          {/* Header */}
          <Header ref={headerRef} scrollToSection={scrollToSection} />

          {/* Main content */}
          <main className="flex-1 space-y-24">
            <Hero scrollToSection={scrollToSection} headerHeight={headerHeight} />
            <About headerHeight={headerHeight} />
            <Skills headerHeight={headerHeight} />
            <Projects headerHeight={headerHeight} />
            <Contact headerHeight={headerHeight} />
          </main>

          {/* Footer */}
          <Footer />

        </div>
      </ContactProvider>
    </MenuProvider>
  );
};

export default App;
