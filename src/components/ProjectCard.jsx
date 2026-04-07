import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="h-full border border-slate-400 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
          onError={(e) => console.error(`Failed to load image at: ${project.image}`)}
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-1">{project.title}</h3>
        <p className="text-slate-600 text-sm mt-2 line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded border border-slate-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;