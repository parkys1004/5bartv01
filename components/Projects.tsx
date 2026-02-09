import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 font-sans">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white italic">Featured Projects</h3>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-gray-800 mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-900 mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-2xl font-serif font-bold text-white group-hover:text-gray-300 transition-colors italic">
                  {project.title}
                </h4>
                <a href={project.link} className="p-2 bg-gray-900 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={20} />
                </a>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-sans leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs text-gray-500 font-mono">
                    /{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;