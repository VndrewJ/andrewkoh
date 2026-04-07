import React, { useState } from 'react';
import { X, FileText, ExternalLink, ZoomIn } from 'lucide-react';
import { LuGithub } from 'react-icons/lu';

const ProjectModal = ({ project, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  if (!project) return null;

  const getMediaUrl = (folder, fileName) => `/projects/${folder}/${fileName}`;

  return (
    <>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center z-20">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={24} className="text-slate-500" />
            </button>
          </div>

          <div className="p-8">
            {/* Long Description Section */}
            <section className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sky-700 mb-3">Project Overview</h3>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                {project.longDesc}
              </p>

              {/* GitHub & PDF Links - Updated for Vertical Layout */}
              {project.links && (
                <div className="flex flex-col gap-3 items-start">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:text-sky-700 transition-all text-sm font-semibold"
                    >
                      {/* Specific Icon logic */}
                      <span className="font-mono text-slate-500 group-hover:text-sky-700 transition-colors">
                        {link.type === 'github' && <LuGithub size={20} />}
                        {link.type === 'pdf' && <FileText size={20} />}
                        {!link.type && <ExternalLink size={20} />}
                      </span>
                      
                      <span className="flex-1">{link.name}</span>
                      
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                    </a>
                  ))}
                </div>
              )}
            </section>

            <hr className="border-slate-100 mb-10" />
          
          {/* Tech Stack */}
          <section className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-700 mb-4">
              Tech Stack & Techniques
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.techStack?.map((tech, idx) => (
                <div key={idx} className="flex flex-col p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tight">
                    {tech.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-700 mt-1">
                    {tech.items.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-slate-100 mb-10" />

            {/* Media Grid with Zoom Capability */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Technical Media & Demos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.media?.map((item, index) => {
                  const assetUrl = getMediaUrl(project.folder, item.url);
                  return (
                    <div 
                      key={index} 
                      className="group relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 cursor-zoom-in"
                      onClick={() => item.type === 'image' && setZoomedImage(assetUrl)}
                    >
                      {item.type === 'image' && (
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                          <ZoomIn className="text-white" size={32} />
                        </div>
                      )}
                      
                      {item.type === 'image' ? (
                        <img src={assetUrl} alt={item.caption} className="w-full aspect-video object-cover" />
                      ) : (
                        <video src={assetUrl} controls className="w-full aspect-video bg-black" />
                      )}
                      <div className="p-3 bg-white">
                        <p className="text-sm text-slate-500 italic text-center">{item.caption}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <img 
            src={zoomedImage} 
            className="max-w-full max-h-full object-contain shadow-2xl" 
            alt="Enlarged view" 
          />
          <button className="absolute top-6 right-6 text-white"><X size={40} /></button>
        </div>
      )}
    </>
  );
};

export default ProjectModal;