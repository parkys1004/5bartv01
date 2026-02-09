import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Works', href: '/works' },
    { name: 'AI Studio', href: '/ai-studio' },
    { name: 'Estimate', href: '/estimate' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="relative group overflow-hidden">
          <span className="text-2xl font-serif font-black tracking-tighter text-white block transform transition-transform duration-500 group-hover:-translate-y-full">
            KJH.DEV
          </span>
          <span className="absolute top-0 left-0 text-2xl font-serif font-black tracking-tighter text-gray-500 block transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
            KJH.DEV
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href}
              className={({ isActive }) => `
                relative text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300
                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                group
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 items-center">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href}
                  className={({ isActive }) => `
                    text-xl font-serif italic tracking-wide ${isActive ? 'text-white' : 'text-gray-500'}
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