import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize theme state based on DOM
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Works', href: '/works' },
    { name: 'Retouch', href: '/ai-studio' },
    { name: 'Estimate', href: '/estimate' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="relative group overflow-hidden">
          <span className="text-2xl font-serif font-black tracking-tighter text-primary block transform transition-transform duration-500 group-hover:-translate-y-full">
            5barTV
          </span>
          <span className="absolute top-0 left-0 text-2xl font-serif font-black tracking-tighter text-red-600 block transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
            5barTV
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          <nav className="flex space-x-12">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href}
                className={({ isActive }) => `
                  relative text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300
                  ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}
                  group
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-red-600 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-surface"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="text-secondary hover:text-primary transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 items-center">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href}
                  className={({ isActive }) => `
                    text-xl font-serif italic tracking-wide ${isActive ? 'text-primary' : 'text-secondary'}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;