import React from "react";

const AboutPage = ({ headerHeight = 64 }) => {
  return (
    <section
      id="about"
      className="px-4 py-12 section bg-white-section md:px-12"
      style={{ scrollMarginTop: `${headerHeight}px` }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
          About Me
        </h2>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="text-lg leading-relaxed text-slate-300">
            <p className="mb-5">
              Hello! I’m a frontend developer with a strong interest in 3D
              design and interactive web experiences.
            </p>
            <p className="mb-5">
              I enjoy building visually engaging, user-friendly interfaces using
              React and modern web tools.
            </p>
            <p>
              I’m always exploring new techniques to improve UI and animation.
            </p>
          </div>

          <div className="surface-card rounded-xl p-6">
            <ul className="space-y-4 text-slate-200">
              <li>
                <span className="font-semibold text-white">Location:</span>{" "}
                Norway
              </li>
              <li>
                <span className="font-semibold text-white">Focus:</span>{" "}
                Frontend & 3D
              </li>
              <li>
                <span className="font-semibold text-white">Tech:</span>{" "}
                React, JavaScript, Three.js
              </li>
              <li>
                <span className="font-semibold text-white">Interests:</span>{" "}
                UI, animation, 3D modeling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
