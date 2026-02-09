import React from 'react';
import { motion } from 'framer-motion';
import ImageComparison from '../ImageComparison';

const COMPARISONS = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&blur=20&grayscale',
    after: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    title: 'AI Face Recovery',
    desc: '흐릿하고 손상된 인물 사진의 이목구비를 AI가 분석하여 선명하게 재구성합니다.'
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop&sepia',
    after: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    title: 'Historical Colorization',
    desc: '흑백 필름 사진에 딥러닝 기반의 자연스러운 컬러를 입혀 생동감을 불어넣습니다.'
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop&brightness=50',
    after: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    title: 'Low-Light Enhancement',
    desc: '어두운 환경에서 촬영된 노이즈를 제거하고 디테일을 복원합니다.'
  }
];

const AIStudioPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background">
       <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-sans">
            AI-Driven Photography Lab
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">
            AI Visual Lab
          </h1>
          <p className="text-secondary font-sans max-w-2xl mx-auto leading-relaxed">
            5barTV의 기술력은 단순한 보정을 넘어 '복원'과 '창조'의 영역에 있습니다.<br/>
            흐릿한 기억을 선명한 현실로, 평범한 사진을 예술로 바꿉니다.
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
                  <h2 className="text-2xl font-serif italic text-primary mb-2">{item.title}</h2>
                  <p className="text-sm text-secondary font-sans">{item.desc}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono text-secondary border border-border px-2 py-1 rounded">Neural Engine</span>
                  <span className="text-[10px] font-mono text-red-500 border border-red-900/30 px-2 py-1 rounded bg-red-900/10">Gen-AI</span>
                </div>
              </div>
              
              <ImageComparison 
                beforeImage={item.before}
                afterImage={item.after}
                beforeLabel="Original / Damaged"
                afterLabel="AI Restored"
              />
            </motion.div>
          ))}
        </div>
       </div>
    </div>
  );
};

export default AIStudioPage;