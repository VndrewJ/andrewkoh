import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const ProjectGrid = ({ setShowNavbar }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setShowNavbar(false);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setShowNavbar(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => handleOpenProject(project)}
            className="cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseProject} 
        />
      )}
    </>
  );
};

export default ProjectGrid;