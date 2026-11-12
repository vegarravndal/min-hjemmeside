import React from "react";

const Projects = ({ headerHeight = 16 }) => {
  return (
    <section
      id="projects"
      className="section bg-default px-4 md:px-12"
      style={{ scrollMarginTop: `${headerHeight}px` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium text-gray-900 mb-10">
          Projects
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Prosjekt 1 */}
          <a
            href="https://www.artstation.com/vegarravndal"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.16),0_10px_30px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            <h3 className="mb-2 font-semibold text-blue-600">3D Blender Project</h3>
            <p>Interactive 3D models and animations showcased via WebGL/Three.js.</p>
          </a>

          {/* Prosjekt 2 */}
          <a
            href="https://vegars-butikk.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.16),0_10px_30px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            <h3 className="mb-2 font-semibold text-blue-600">Portfolio Website</h3>
            <p>Responsive personal website built with React and Tailwind CSS.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
