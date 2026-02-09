import React from 'react';
import { Mail, Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8 font-sans">Get In Touch</h2>
          <h3 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 italic">
            LET'S CREATE <br /> TOGETHER
          </h3>
          <p className="text-gray-400 mb-12 text-lg font-sans">
            새로운 프로젝트나 협업 제안은 언제나 환영합니다.<br/>
            영상 제작 및 촬영 문의는 아래로 연락주세요.
          </p>
          
          <a 
            href="mailto:contact@5bartv.com" 
            className="inline-block border border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 mb-16 font-serif italic"
          >
            Contact Us
          </a>

          <div className="flex justify-center gap-8">
            {[Instagram, Youtube, Mail].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-xs text-gray-800 uppercase tracking-widest font-sans">
          © 2024 5barTV Production. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;