import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, SKILLS } from '../../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background flex items-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-surface overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              {/* Updated to a camera/director vibe image */}
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-background p-6 md:p-8 max-w-[200px] shadow-2xl hidden md:block">
              <p className="font-serif italic text-xl leading-tight">
                "Filmmaking is a chance to live many lifetimes."
              </p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-10 leading-none italic">
              BEYOND <br/>
              <span className="text-secondary">THE</span> <br/>
              <span className="text-primary">FRAME</span>
            </h1>
            
            <div className="space-y-6 text-secondary text-lg font-sans leading-relaxed border-l-2 border-border pl-8">
              <p className="text-primary font-bold text-xl mb-2">{PORTFOLIO_DATA.title}</p>
              <p>
                {PORTFOLIO_DATA.aboutDetailed}
              </p>
              <p>
                단순히 보기 좋은 영상이 아닌, 클라이언트의 메세지를 가장 강력하게 전달하는 비주얼 스토리텔링을 지향합니다.
              </p>
            </div>

            <div className="mt-12 bg-surface p-8 border border-border rounded-2xl">
              <h4 className="text-lg font-serif font-bold text-primary mb-6 italic">Gear & Tools</h4>
              <div className="space-y-6">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h5 className="text-xs font-bold text-secondary mb-2 uppercase tracking-widest font-sans">
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-background border border-border text-secondary text-xs rounded-sm font-sans"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;