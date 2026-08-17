import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden bg-[#061412]">
      
      <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-[#10b981]/30 rounded-tl-xl pointer-events-none z-20" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-[#10b981]/30 rounded-tr-xl pointer-events-none z-20" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-[#10b981]/30 rounded-bl-xl pointer-events-none z-20" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-[#10b981]/30 rounded-br-xl pointer-events-none z-20" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] sm:w-[800px] sm:h-[800px] bg-[#10b981]/12 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#34d399]/10 rounded-full blur-[130px]" />
      </div>

      {/* Central Geometric Orbital Constellation (Proportioned to Reference) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 z-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] lg:w-[760px] lg:h-[760px] animate-spin-slow">
          <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
            <circle cx="300" cy="300" r="290" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
            <circle cx="300" cy="300" r="282" stroke="rgba(52,211,153,0.3)" strokeWidth="0.6" strokeDasharray="4 8" />
            <circle cx="300" cy="300" r="215" stroke="rgba(16,185,129,0.35)" strokeWidth="0.6" />
            <circle cx="300" cy="300" r="155" stroke="rgba(52,211,153,0.25)" strokeWidth="0.5" strokeDasharray="3 6" />
            <polygon points="300,10 550,450 50,450" stroke="rgba(16,185,129,0.3)" strokeWidth="0.6" fill="none" />
            <polygon points="300,590 50,150 550,150" stroke="rgba(52,211,153,0.25)" strokeWidth="0.6" fill="none" />
            <circle cx="300" cy="10" r="6" fill="#10b981" />
            <circle cx="550" cy="450" r="6" fill="#34d399" />
            <circle cx="50" cy="450" r="6" fill="#10b981" />
            <circle cx="300" cy="590" r="6" fill="#34d399" />
            <circle cx="50" cy="150" r="6" fill="#10b981" />
            <circle cx="550" cy="150" r="6" fill="#34d399" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center space-y-7">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#34d399] text-xs font-mono tracking-[0.25em] uppercase shadow-lg backdrop-blur-md"
        >
          <span className="text-[#34d399]">⚡</span> FULL STACK DEVELOPER <span className="text-[#34d399]">⚡</span>
        </motion.div>

        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#e6f7f2] tracking-tight leading-[1.1]"
          >
            <span className="font-serif italic font-normal text-gradient-teal">
              Malak Maisuriya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-serif text-xl sm:text-3xl text-[#34d399] italic font-light"
          >
            "{personalDetails.tagline}"
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[#72b09e] text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
        >
          {personalDetails.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="px-8 py-3.5 rounded-full bg-[#10b981] text-[#061412] font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#10b981]/20 hover:bg-[#059669] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore About Me
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-8 py-3.5 rounded-full bg-[#0b211e] border border-[#193d37] text-[#e6f7f2] font-bold text-sm uppercase tracking-wider hover:bg-[#10b981]/15 hover:border-[#10b981] hover:text-[#10b981] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
