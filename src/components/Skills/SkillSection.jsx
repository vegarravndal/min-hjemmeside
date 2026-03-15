import React from "react";
import skillsData from "../../data/Skills.json";

const SkillSection = ({ headerHeight = 16 }) => {
  return (
    <section id="skills" className="px-4 md:px-12 scroll-mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-10 text-2xl font-medium text-gray-900 md:text-3xl">
          My Skills
        </h2>

        <p className="mb-12 leading-relaxed text-gray-900">
          Here are some of the technologies I use regularly:
        </p>

        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 justify-items-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:scale-110"
              title={skill.tooltip || skill.skillName}
            >
              <img
                src={skill.icon}
                alt={skill.skillName}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm text-gray-900">{skill.skillName}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
