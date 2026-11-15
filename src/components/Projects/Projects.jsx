import React from "react";

const Projects = ({ headerHeight = 16 }) => {
  return (
    <section
      id="projects"
      className="section bg-default px-4 py-12 md:px-12"
      style={{ scrollMarginTop: `${headerHeight}px` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-10 text-3xl font-medium text-white">
          Projects
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Prosjekt 1 */}
          <a
            href="https://www.artstation.com/vegarravndal"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card block rounded-xl p-6 text-left text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-950/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            <h3 className="mb-2 font-semibold text-cyan-300">3D Blender Project</h3>
            <p>Interactive 3D models and animations showcased via WebGL/Three.js.</p>
          </a>

          {/* Prosjekt 2 */}
          <a
            href="https://vegars-butikk.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card block rounded-xl p-6 text-left text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-xl hover:shadow-violet-950/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
          >
            <h3 className="mb-2 font-semibold text-violet-300">Portfolio Website</h3>
            <p>Responsive personal website built with React and Tailwind CSS.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
