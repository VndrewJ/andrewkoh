import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const ProjectGrid = ({ setShowNavbar }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    // Hide the navbar pill when the modal opens
    setShowNavbar(false);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    // Show the navbar pill again when the modal closes
    setShowNavbar(true);
  };

  return (
    <div className="relative">
      {/* Grid Container: 
          z-10 ensures the cards slide OVER the absolute-positioned 
          name and background triangles in the header.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseProject} 
        />
      )}
    </div>
  );
};

export default ProjectGrid;