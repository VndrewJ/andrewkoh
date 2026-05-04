import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

const Projects = ({ setShowNavbar }) => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            PROJECTS
          </h2>
          <p className="font-mono text-stone-700 text-medium mt-4 max-w-2xl leading-relaxed">
            A collection of my work spanning embedded firmware, robotics, 
            and software engineering.
          </p>
        </div>
        <ProjectGrid setShowNavbar={setShowNavbar} />
      </div>
    </section>
  );
};

export default Projects;