import React from 'react';
import Hero from '../Hero';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
           className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            We Create <span className="italic text-gray-500">Masterpieces</span>
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-sans text-lg">
            단순한 영상 제작을 넘어 브랜드의 아이덴티티를 확립하는<br className="hidden md:block"/>
            크리에이티브 파트너가 되어드립니다.<br/><br/>
            기획부터 촬영, 편집, 그리고 색보정까지.<br/>
            5barTV만의 독보적인 톤앤매너를 경험하세요.
          </p>
          <Link to="/works" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-red-500 hover:border-red-500 transition-colors font-sans tracking-wide uppercase text-sm">
            View Showreel <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;