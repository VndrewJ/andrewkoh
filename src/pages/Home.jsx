import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react'; 
import { LuGithub, LuLinkedin, LuFile } from 'react-icons/lu';

function Home() {
  const socialLinks = [
    { name: 'LinkedIn', icon: <LuLinkedin size={20} />, url: 'https://www.linkedin.com/in/andrew-koh-171717243/' },
    { name: 'GitHub', icon: <LuGithub size={20} />, url: 'https://github.com/VndrewJ' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:andyjkoh@gmail.com' },
    { name: 'Resume', icon: <LuFile size={20} />, url: '/Resume_2026.pdf' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-10 py-20">
      <section className="mb-20 text-left">
        <h1 className="text-6xl md:text-5xl font-black tracking-tighter text-stone-950 mb-6 uppercase">
          Andrew <span className="text-sky-700">Koh</span>
        </h1>
        <p className="font-mono text-xl text-stone-600 max-w-2xl leading-relaxed">
          Mechatronics Engineer. <span className="italic">Broadly skilled, specifically focused</span>
        </p>
        <p className="font-mono text-medium text-stone-700 mt-4 tracking-wide">
          <span className="font-bold">Embedded </span> 
          // 
          <span className="font-bold"> Robotics </span> 
          // 
          <span className="font-bold"> Full-Stack </span> 
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-stone-200 pt-16">
        
        <div className="md:col-span-8 text-left">
          <h2 className="text-xs uppercase tracking-[0.3em] text-sky-700 font-bold mb-8">About</h2>
          <div className="space-y-6 text-lg text-stone-800 leading-relaxed">
            <p>
              I am passionate about building integrated systems from the ground up, drawing from a broad skillset in hardware, software, and mechanical design.
              I love seeing how technology interacts with the physical world, and bringing those ideas to life. 
            </p>
            <p>
              I mostly enjoy working in the embedded/robotics space, with a particular interest in human interaction. Alongside this, I have
              experience on frontend, backend, and purely mechanical projects. I am always looking to learn new skills and take on new challenges, so feel free to reach out! 
            </p>
          </div>
        </div>

        <div className="md:col-span-4 text-left">
          <h2 className="text-xs uppercase tracking-[0.3em] text-sky-700 font-bold mb-8">Connect</h2>
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-sky-50 transition-all duration-300 border border-transparent hover:border-sky-100"
              >
                <div className="flex items-center gap-4 text-stone-600 group-hover:text-sky-700 transition-colors">
                  {link.icon}
                  <span className="font-medium tracking-widest text-xs uppercase">{link.name}</span>
                </div>
                <ArrowUpRight size={18} className="text-stone-300 group-hover:text-sky-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;