import React from "react";

const AboutPage = ({ headerHeight = 64 }) => {
  return (
    <section
      id="about"
      className="px-4 section bg-white-section md:px-12"
      style={{ scrollMarginTop: `${headerHeight}px` }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 md:text-4xl mb-14">
          About Me
        </h2>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="text-lg leading-relaxed text-gray-700">
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

          <div className="p-6 bg-white border border-gray-200 shadow-md rounded-xl">
            <ul className="space-y-4 text-gray-800">
              <li>
                <span className="font-semibold text-gray-900">Location:</span>{" "}
                Norway
              </li>
              <li>
                <span className="font-semibold text-gray-900">Focus:</span>{" "}
                Frontend & 3D
              </li>
              <li>
                <span className="font-semibold text-gray-900">Tech:</span>{" "}
                React, JavaScript, Three.js
              </li>
              <li>
                <span className="font-semibold text-gray-900">Interests:</span>{" "}
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
