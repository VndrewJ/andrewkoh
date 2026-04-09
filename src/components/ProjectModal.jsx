import React, { useState, useEffect } from 'react';
import { X, FileText, ExternalLink, ZoomIn } from 'lucide-react';
import { LuGithub } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';

const ProjectModal = ({ project, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.documentElement.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const getMediaUrl = (folder, fileName) => `/projects/${folder}/${fileName}`;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="bg-slate-100 w-full max-w-5xl max-h-[90vh] flex flex-col rounded-xl shadow-2xl relative border border-slate-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-200 border-b border-slate-300 p-6 flex justify-between items-center z-20">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-slate-300 text-slate-700 text-xs font-semibold rounded border border-slate-400/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-300 rounded-full transition-colors">
            <X size={24} className="text-slate-600 hover:text-slate-900" />
          </button>
        </div>

        <div className="overflow-y-auto p-8 custom-modal-scrollbar">
          {/* Project Overview */}
          <section className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-800 mb-3">Project Overview</h3>
            <div className="w-full">
              <ReactMarkdown
                components={{
                  p: ({children}) => <p className="mb-6 last:mb-0 leading-relaxed text-lg text-slate-800">{children}</p>,
                  strong: ({children}) => <strong className="font-semibold text-slate-950">{children}</strong>,
                  ol: ({children}) => <ol className="list-decimal ml-6 mb-6 space-y-3 text-slate-800 text-lg">{children}</ol>,
                  ul: ({children}) => <ul className="list-disc ml-6 mb-6 space-y-3 text-slate-800 text-lg">{children}</ul>,
                  li: ({children}) => <li className="pl-1 leading-relaxed">{children}</li>
                }}
              >
                {project.longDesc}
              </ReactMarkdown>
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex flex-col gap-3 items-start mt-8">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-2.5 bg-slate-200 border border-slate-300 rounded-lg text-slate-800 hover:text-sky-900 hover:border-sky-400 transition-all text-sm font-semibold"
                  >
                    <span className="text-slate-600 group-hover:text-sky-800">
                      {link.type === 'github' && <LuGithub size={20} />}
                      {link.type === 'pdf' && <FileText size={20} />}
                      {!link.type && <ExternalLink size={20} />}
                    </span>
                    <span className="flex-1">{link.name}</span>
                  </a>
                ))}
              </div>
            )}
          </section>

          <hr className="border-slate-300 mb-10" />
        
          {/* Tech Stack */}
          <section className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-800 mb-4">Tech Stack & Techniques</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.techStack?.map((tech, idx) => (
                <div key={idx} className="flex flex-col p-3 rounded-lg bg-slate-200 border border-slate-300">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tight">{tech.label}</span>
                  <span className="text-sm font-semibold text-slate-800 mt-1">{tech.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-slate-300 mb-10" />

          {/* Media */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.media?.map((item, index) => {
                const isExternal = item.url.includes('drive.google.com'); // Switched to embed google drive vids
                const assetUrl = isExternal ? item.url : getMediaUrl(project.folder, item.url);

                return (
                  <div 
                    key={index} 
                    className={`group relative rounded-lg overflow-hidden border border-slate-300 bg-slate-200 ${item.type === 'image' ? 'cursor-zoom-in' : ''}`}
                    onClick={() => item.type === 'image' && setZoomedImage(assetUrl)}
                  >
                    {item.type === 'image' && (
                      <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10 transition-opacity">
                        <ZoomIn className="text-white" size={32} />
                      </div>
                    )}

                    {/* Media */}
                    {item.type === 'image' ? (
                      <img src={assetUrl} alt={item.caption} className="w-full aspect-video object-cover" />
                    ) : isExternal ? (
                      <iframe 
                        src={assetUrl} 
                        className="w-full aspect-video bg-black border-none" 
                        allow="autoplay"
                        title={item.caption}
                      />
                    ) : (
                      <video src={assetUrl} controls className="w-full aspect-video bg-black" />
                    )}

                    <div className="p-3 bg-slate-200 border-t border-slate-300 text-center text-sm text-slate-600 font-medium">
                      {item.caption}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Lightbox  */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-slate-950/95 p-4 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <img src={zoomedImage} className="max-w-full max-h-full object-contain shadow-2xl" alt="Enlarged" />
          <button className="absolute top-6 right-6 text-white hover:text-slate-300" onClick={() => setZoomedImage(null)}>
            <X size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;