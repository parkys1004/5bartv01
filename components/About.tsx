import React from 'react';
import { SKILLS, PORTFOLIO_DATA } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8 font-sans">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight italic">
              {PORTFOLIO_DATA.title}
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed whitespace-pre-line font-sans text-lg">
              {PORTFOLIO_DATA.aboutDetailed}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface p-8 border border-gray-800 rounded-2xl"
          >
             <h4 className="text-2xl font-serif font-bold text-white mb-6 italic">Technical Skills</h4>
             <div className="space-y-8">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h5 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest font-sans">
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 text-sm rounded-md font-sans hover:border-gray-600 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;