import React from "react";

const Hero = ({ scrollToSection, headerHeight = 64 }) => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full px-6 pt-32 pb-12 overflow-hidden section bg-hero"
      style={{
        minHeight: "60vh",
        scrollMarginTop: `${headerHeight}px`,
      }}
    >
      <div className="relative z-10 w-full max-w-6xl text-center">
        <h1 className="mt-8 mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05]">
          Hi, I'm a <br />
          Frontend Developer
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Passionate about 3D design, web development, and creating interactive
          user experiences.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="inline-block cursor-pointer rounded-full border border-transparent bg-cyan-300 px-7 py-3 text-lg font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
