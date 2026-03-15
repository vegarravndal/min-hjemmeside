import React from "react";

const Projects = ({ headerHeight = 16 }) => {
  return (
    <section id="projects" className="px-4 md:px-12 scroll-mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium text-gray-900 mb-14">
          Projects
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Prosjekt 1 */}
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_10px_30px_rgba(0,0,0,0.08)]">
            <h3 className="mb-2 font-semibold">
              <a
                href="https://www.artstation.com/vegarravndal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                3D Blender Project
              </a>
            </h3>
            <p>Interactive 3D models and animations showcased via WebGL/Three.js.</p>
          </div>

          {/* Prosjekt 2 */}
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_10px_30px_rgba(0,0,0,0.08)]">
            <h3 className="mb-2 font-semibold">
              <a
                href="https://vegars-butikk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
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
