import { Link, useLocation } from 'react-router-dom';
import { Home, FolderCode } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const checkActive = (path) => location.pathname === path;

  const getLinkStyles = (path) => {
    const active = checkActive(path);
    return `flex flex-col items-center px-6 py-2 rounded-full transition-all duration-300 group ${
      active ? 'text-sky-700' : 'text-stone-600 hover:text-sky-600'
    }`;
  };

  return (
    <>
      {/* 1. THE NAME: Uses 'absolute' to stay at the top of the document.
          It will scroll up and off-screen as the user scrolls down. */}
      <div className="absolute top-0 left-0 px-10 py-8 z-0">
        <Link 
          to="/" 
          className="font-mono text-xl tracking-[0.2em] uppercase text-stone-600 hover:text-sky-600 transition-all duration-300"
        >
          Andrew Koh
        </Link>
      </div>

      {/* 2. THE PILL: Uses 'fixed' to stay at the top of the viewport.
          'pointer-events-none' ensures the full-width wrapper doesn't block 
          clicks on content behind the pill. */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-6 z-50 pointer-events-none">
        {/* Re-enable pointer events for the pill itself */}
        <div className="flex items-center gap-2 p-1 bg-white/30 backdrop-blur-md border border-stone-200/30 rounded-full shadow-lg pointer-events-auto">
          <Link to="/" className={getLinkStyles('/')}>
            <Home size={20} strokeWidth={checkActive('/') ? 2.5 : 2} />
            <span className="text-[10px] uppercase font-bold mt-1 tracking-widest">Home</span>
            {checkActive('/') && (
              <div className="w-1 h-1 bg-sky-700 rounded-full mt-1 shadow-[0_0_8px_#38bdf8]" />
            )}
          </Link>

          <Link to="/projects" className={getLinkStyles('/projects')}>
            <FolderCode size={20} strokeWidth={checkActive('/projects') ? 2.5 : 2} />
            <span className="text-[10px] uppercase font-bold mt-1 tracking-widest">Projects</span>
            {checkActive('/projects') && (
              <div className="w-1 h-1 bg-sky-700 rounded-full mt-1 shadow-[0_0_8px_#38bdf8]" />
            )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;