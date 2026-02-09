import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import AIStudioPage from './components/pages/AIStudio';
import Estimate from './components/pages/Estimate';
import AboutPage from './components/pages/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen bg-background text-primary selection:bg-primary selection:text-background font-sans transition-colors duration-300">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/ai-studio" element={<AIStudioPage />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Contact />
        
        {/* Cinematic Noise Overlay Effect */}
        <div 
          className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
    </Router>
  );
}

export default App;