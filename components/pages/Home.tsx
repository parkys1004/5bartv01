import React from 'react';
import Hero from '../Hero';
import { motion } from 'framer-motion';
import { ArrowRight, Aperture, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* Quick Intro Section */}
      <section className="py-24 bg-surface px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-4 mb-6">
            <Aperture className="text-secondary w-8 h-8" />
            <span className="text-secondary text-2xl font-light">+</span>
            <Sparkles className="text-red-500 w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
            The Fusion of <br />
            <span className="italic text-secondary">Analog Lens</span> & <span className="italic text-red-500">Neural Engine</span>
          </h2>
          <p className="text-secondary mb-10 leading-relaxed font-sans text-lg">
            최고의 장비로 촬영된 고해상도 이미지라도 완벽할 수는 없습니다.<br/>
            하지만 5barTV의 <strong>AI 후처리 프로세스</strong>를 거치면 이야기는 달라집니다.<br/><br/>
            피부의 미세한 결을 살리는 하이엔드 리터칭부터,<br/>
            존재하지 않는 배경을 생성하는 Creative AI까지.<br/>
            당신의 사진을 '작품'으로 승화시킵니다.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/works" className="inline-flex items-center gap-2 text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors font-sans tracking-wide uppercase text-sm">
              View Portfolio <ArrowRight size={16} />
            </Link>
            <Link to="/ai-studio" className="inline-flex items-center gap-2 text-red-500 border-b border-red-500 pb-1 hover:text-red-400 hover:border-red-400 transition-colors font-sans tracking-wide uppercase text-sm">
              Experience AI Lab <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;