import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.5,
        ease: [0.19, 1, 0.22, 1], // "Expo" ease for dramatic effect
      }
    },
  };

  const textRevealVariants = {
    hidden: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', y: 50 },
    visible: { 
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black perspective-1000">
      {/* 1. Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/videos/2516159/pictures/preview-0.jpg" 
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          {/* Abstract Dark Smoke/Ink Video */}
          <source src="https://videos.pexels.com/video-files/2516159/2516159-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>
      
      {/* 2. Main Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-block overflow-hidden mb-6">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="text-gray-400 text-xs md:text-sm tracking-[0.5em] uppercase border border-gray-700 px-6 py-2 rounded-full bg-black/30 backdrop-blur-sm font-sans"
            >
              Portfolio 2024
            </motion.p>
          </div>
        </motion.div>
        
        <div className="mb-8 relative">
           <motion.h1 
            variants={textRevealVariants}
            className="text-6xl md:text-[9rem] font-serif font-black text-white leading-[0.85] tracking-tight mix-blend-difference italic relative z-10"
           >
            CRAFTING
           </motion.h1>
           <motion.h1 
            variants={textRevealVariants}
            className="text-6xl md:text-[9rem] font-serif font-black leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-500 to-gray-800"
           >
            DIGITAL REALITY
           </motion.h1>
        </div>

        <motion.div variants={itemVariants}>
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide mix-blend-plus-lighter font-sans">
            <span className="opacity-70 inline-block border-b border-gray-700 pb-1 mb-2">기술과 예술의 경계에서,</span><br/>
            몰입감 넘치는 웹 경험을 설계하는 프론트엔드 엔지니어 김지훈입니다.
          </p>
        </motion.div>
      </motion.div>

      {/* 3. Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-sans">Explore</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-gray-500/0 via-white to-gray-500/0 animate-pulse-slow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;