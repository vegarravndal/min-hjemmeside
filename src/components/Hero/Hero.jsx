import React from "react";

const Hero = ({ scrollToSection, headerHeight = 64 }) => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full px-6 pt-16 overflow-hidden"
      style={{
        minHeight: "65vh",
        scrollMarginTop: `${headerHeight}px`,
      }}
    >
      <div className="relative z-10 w-full max-w-6xl text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-(--text-primary) mb-6 tracking-tight leading-[1.05]">
          Hi, I'm a <br />
          Frontend Developer
        </h1>

        <p className="text-lg sm:text-xl text-(--text-secondary) mb-8 max-w-2xl mx-auto">
          Passionate about 3D design, web development, and creating interactive user experiences.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="inline-block px-7 py-3 text-lg font-semibold text-(--primary) border border-(--primary) rounded-full transition-all duration-300 hover:bg-(--primary) hover:text-white"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;