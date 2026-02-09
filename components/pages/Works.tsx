import React from 'react';
import { motion } from 'framer-motion';

const WORKS_DATA = [
  { id: 1, title: 'Urban Night', category: 'Music Video', img: 'https://images.unsplash.com/photo-1514302240736-b1f830689815?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Luxury Stay', category: 'Brand Film', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Speed Racer', category: 'Commercial', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Summer Vibe', category: 'Fashion Lookbook', img: 'https://images.unsplash.com/photo-1529139574466-a302d2d3f524?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Chef\'s Table', category: 'Documentary', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Neon Cyberpunk', category: 'Art Film', img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop' },
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
            5barTV가 작업한 다양한 필름과 이미지를 확인해보세요.
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