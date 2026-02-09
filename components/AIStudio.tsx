import React from 'react';
import { motion } from 'framer-motion';
import ImageComparison from './ImageComparison';

const AIStudio: React.FC = () => {
  return (
    <section id="ai-studio" className="py-24 bg-black relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase mb-6 font-sans">
              AI Powered Restoration
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              BRINGING MEMORIES<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 italic">
                BACK TO LIFE
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-sans">
              딥러닝 기반의 이미지 처리 기술을 활용하여 손상되거나 오래된 사진을 현대적인 고화질 이미지로 복원합니다. 
              노이즈 제거, 해상도 향상, 그리고 색상 복원까지 원클릭으로 경험해보세요.
            </p>
            
            <div className="flex gap-4 font-sans">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">4K</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Upscaling</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-800 mx-4"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">0.5s</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Processing</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             {/* Using picsum images: Grayscale vs Color to simulate restoration/colorization */}
            <ImageComparison 
              beforeImage="https://picsum.photos/id/237/800/600?grayscale" 
              afterImage="https://picsum.photos/id/237/800/600"
              beforeLabel="B&W Original"
              afterLabel="Color Restored"
            />
            <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-2 font-sans">
              <span className="animate-pulse">●</span> Drag the slider to compare
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AIStudio;