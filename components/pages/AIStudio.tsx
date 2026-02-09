import React from 'react';
import { motion } from 'framer-motion';
import ImageComparison from '../ImageComparison';

const COMPARISONS = [
  {
    id: 1,
    before: 'https://picsum.photos/id/10/800/500?grayscale',
    after: 'https://picsum.photos/id/10/800/500',
    title: 'Landscape Restoration',
    desc: '흑백 풍경 사진을 생생한 컬러로 복원합니다.'
  },
  {
    id: 2,
    before: 'https://picsum.photos/id/64/800/500?blur=5',
    after: 'https://picsum.photos/id/64/800/500',
    title: 'Portrait Enhancement',
    desc: '흐릿한 인물 사진의 디테일을 선명하게 개선합니다.'
  },
  {
    id: 3,
    before: 'https://picsum.photos/id/100/800/500?grayscale',
    after: 'https://picsum.photos/id/100/800/500',
    title: 'Historical Archive',
    desc: '오래된 기록물의 손상을 제거하고 해상도를 높입니다.'
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
          <span className="text-purple-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-sans">AI Powered Tool</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">AI Studio</h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            최신 딥러닝 모델을 활용하여 이미지의 품질을 극대화합니다.<br/>
            슬라이더를 움직여 복원 전후의 차이를 직접 확인해보세요.
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
                  Model v2.5
                </div>
              </div>
              
              <ImageComparison 
                beforeImage={item.before}
                afterImage={item.after}
              />
            </motion.div>
          ))}
        </div>
       </div>
    </div>
  );
};

export default AIStudioPage;