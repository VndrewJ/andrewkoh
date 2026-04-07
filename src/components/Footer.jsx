import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-0.7 border-t border-white/5 bg-slate-500/50 backdrop-blur-md text-center"> 
      <p className="font-mono text-black-900 text-sm tracking-widest">
        &copy; {new Date().getFullYear()} Andrew Koh
      </p>
    </footer>
  );
}
export default Footer;

