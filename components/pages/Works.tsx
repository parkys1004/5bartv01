import React from 'react';
import { motion } from 'framer-motion';

const WORKS_DATA = [
  { id: 1, title: 'Project Nexus', category: 'Data Visualization', img: 'https://picsum.photos/id/1/800/1000' },
  { id: 2, title: 'Aura Commerce', category: 'E-Commerce', img: 'https://picsum.photos/id/2/800/1000' },
  { id: 3, title: 'Cinematic Archive', category: 'Platform', img: 'https://picsum.photos/id/3/800/1000' },
  { id: 4, title: 'Neon Dreams', category: 'Campaign', img: 'https://picsum.photos/id/4/800/1000' },
  { id: 5, title: 'Urban Flow', category: 'Photography', img: 'https://picsum.photos/id/5/800/1000' },
  { id: 6, title: 'Future Tech', category: 'Branding', img: 'https://picsum.photos/id/6/800/1000' },
];

const Works: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 italic">Selected Works</h1>
          <p className="text-gray-400 font-sans tracking-wide">
            A curated selection of projects pushing the boundaries of web technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {WORKS_DATA.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-900 cursor-pointer"
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-serif italic text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {work.title}
                </h3>
                <p className="text-xs font-sans text-gray-300 uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {work.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;