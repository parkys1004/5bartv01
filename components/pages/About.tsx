import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-black flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 md:p-8 max-w-[200px] shadow-2xl hidden md:block">
              <p className="font-serif italic text-xl leading-tight">
                "Code is poetry written for machines."
              </p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-10 leading-none italic">
              TURNING <br/>
              <span className="text-gray-600">UNREAL</span> INTO <br/>
              <span className="text-white">REALITY</span>
            </h1>
            
            <div className="space-y-6 text-gray-400 text-lg font-sans leading-relaxed border-l-2 border-gray-800 pl-8">
              <p>
                디지털 세계는 무한한 가능성의 공간입니다. 저는 그곳에서 브랜드의 상상을 현실로 구현하는 엔지니어입니다.
              </p>
              <p>
                {PORTFOLIO_DATA.aboutDetailed}
              </p>
              <p>
                단순히 보기 좋은 웹사이트가 아닌, 사용자의 기억에 남는 '경험'을 설계합니다. 기술적 한계를 넘어 예술적 감성을 코드에 불어넣는 것, 그것이 제가 추구하는 개발의 본질입니다.
              </p>
            </div>

            <div className="mt-12 flex gap-12">
               <div>
                 <span className="block text-4xl font-serif font-bold text-white">5+</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</span>
               </div>
               <div>
                 <span className="block text-4xl font-serif font-bold text-white">30+</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Projects Done</span>
               </div>
               <div>
                 <span className="block text-4xl font-serif font-bold text-white">100%</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Satisfaction</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;