import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <Router>
      <div className="relative min-h-screen bg-slate-400 flex flex-col">
        
        <div 
          className="fixed top-0 left-0 w-60 h-60 bg-sky-700 pointer-events-none z-0 opacity-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />
        <div 
          className="fixed top-0 left-0 w-40 h-40 bg-sky-700 pointer-events-none z-0 opacity-20"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />

        {showNavbar && <Navbar />}

        <main className="flex-grow pt-32 z-10 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/projects" 
              element={<Projects setShowNavbar={setShowNavbar} />} 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;