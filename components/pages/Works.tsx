import React from 'react';
import { motion } from 'framer-motion';

const WORKS_DATA = [
  { id: 1, title: 'Ethereal Portrait', category: 'Fine Art Photography', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Neo Tokyo', category: 'AI Composite Art', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Product Vision', category: 'Commercial & AI Background', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Memory Restored', category: 'AI Restoration', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Monochrome Soul', category: 'Black & White', img: 'https://images.unsplash.com/photo-1589317621382-0af47dfa74e5?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Digital Fashion', category: 'Editorial Lookbook', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop' },
];

const Works: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 italic">Selected Works</h1>
          <p className="text-secondary font-sans tracking-wide">
            렌즈로 포착하고 AI로 완성한 5barTV의 포트폴리오를 확인하세요.
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
              className="group relative aspect-[3/4] overflow-hidden bg-surface cursor-pointer"
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
                <p className="text-xs font-sans text-red-400 uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
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