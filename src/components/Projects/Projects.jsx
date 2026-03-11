import React from "react";

const Projects = ({ headerHeight = 64 }) => {
  return (
    <section
      id="projects"
      className="px-4 md:px-12"
      style={{ scrollMarginTop: `${headerHeight}px` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-14 text-[var(--text-primary)] relative">
          Projects
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[var(--primary)]"></span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <h3 className="mb-2 font-semibold">
              <a
                href="https://www.artstation.com/vegarravndal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                3D Blender Project
              </a>
            </h3>
            <p>Interactive 3D models and animations showcased via WebGL/Three.js.</p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <h3 className="mb-2 font-semibold">
              <a
                href="https://vegars-butikk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Portfolio Website
              </a>
            </h3>
            <p>Responsive personal website built with React and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;