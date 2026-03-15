import React from "react";

const AboutPage = ({ headerHeight = 16 }) => {
  return (
    <section
      id="about"
      className="px-4 md:px-12 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-medium text-center text-gray-900 md:text-3xl mb-14">
          About Me
        </h2>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="leading-relaxed text-gray-900">
            <p className="mb-5">
              Hello! I’m a frontend developer with a strong interest in 3D design and interactive web experiences.
            </p>
            <p className="mb-5">
              I enjoy building visually engaging, user-friendly interfaces using technologies like HTML, CSS, JavaScript, and React.
            </p>
            <p>
              I’m always exploring new tools and techniques to push the boundaries of modern web design.
            </p>
          </div>

          {/* Hvite tekstboksen med mer prominent skygge */}
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_10px_30px_rgba(0,0,0,0.08)]">
            <ul className="space-y-4 text-gray-900">
              <li><span className="font-medium">Location:</span> Norway</li>
              <li><span className="font-medium">Focus:</span> Frontend & 3D</li>
              <li><span className="font-medium">Tech:</span> React, JavaScript, Three.js</li>
              <li><span className="font-medium">Interests:</span> UI, animation, 3D modeling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
