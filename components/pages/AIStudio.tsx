import React from 'react';
import { motion } from 'framer-motion';
import ImageComparison from '../ImageComparison';

const COMPARISONS = [
  {
    id: 1,
    before: 'https://picsum.photos/id/10/800/500?grayscale',
    after: 'https://picsum.photos/id/10/800/500',
    title: 'Cinematic Color Grading',
    desc: '평범한 원본 영상을 영화 같은 색감으로 보정합니다.'
  },
  {
    id: 2,
    before: 'https://picsum.photos/id/64/800/500?blur=5',
    after: 'https://picsum.photos/id/64/800/500',
    title: 'Detail Enhancement',
    desc: '피사체의 디테일을 살리고 선명도를 극대화합니다.'
  },
  {
    id: 3,
    before: 'https://picsum.photos/id/100/800/500?grayscale',
    after: 'https://picsum.photos/id/100/800/500',
    title: 'Vintage Restoration',
    desc: '오래된 필름의 노이즈를 제거하고 현대적인 감각으로 재해석합니다.'
  }
];

const AIStudioPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-black">
       <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-sans">Professional Post-Production</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Visual Lab</h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            5barTV만의 독보적인 색보정 및 리터칭 기술.<br/>
            슬라이더를 움직여 원본(Raw)과 최종 마스터링 결과물의 차이를 확인하세요.
          </p>
        </motion.div>

        <div className="space-y-24">
          {COMPARISONS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-serif italic text-white mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-500 font-sans">{item.desc}</p>
                </div>
                <div className="text-xs font-mono text-gray-600 border border-gray-800 px-3 py-1 rounded-full">
                  DaVinci Resolve 18
                </div>
              </div>
              
              <ImageComparison 
                beforeImage={item.before}
                afterImage={item.after}
                beforeLabel="LOG / Raw"
                afterLabel="Graded"
              />
            </motion.div>
          ))}
        </div>
       </div>
    </div>
  );
};

export default AIStudioPage;