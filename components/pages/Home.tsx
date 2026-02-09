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
            Redefining <span className="italic text-gray-500">Digital Experiences</span>
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-sans">
            사용자의 몰입을 이끄는 디자인과 견고한 엔지니어링의 조화.<br className="hidden md:block"/>
            단순한 웹사이트가 아닌, 브랜드의 가치를 담은 디지털 공간을 구축합니다.
          </p>
          <Link to="/works" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors font-sans tracking-wide uppercase text-sm">
            View Selected Works <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;