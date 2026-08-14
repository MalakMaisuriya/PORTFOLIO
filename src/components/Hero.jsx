import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
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
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden bg-[#0d1a1a]">
      
      <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-[#45a096]/30 rounded-tl-xl pointer-events-none z-20" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-[#45a096]/30 rounded-tr-xl pointer-events-none z-20" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-[#45a096]/30 rounded-bl-xl pointer-events-none z-20" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-[#45a096]/30 rounded-br-xl pointer-events-none z-20" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#45a096]/10 rounded-full blur-[170px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a962]/10 rounded-full blur-[140px]" />
      </div>

      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25 z-0 flex items-center justify-center">
        <div className="w-[680px] h-[680px] sm:w-[880px] sm:h-[880px] lg:w-[1050px] lg:h-[1050px] animate-spin-slow">
          <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
            <circle cx="300" cy="300" r="292" stroke="rgba(69,160,150,0.35)" strokeWidth="0.8" />
            <circle cx="300" cy="300" r="285" stroke="rgba(201,169,98,0.25)" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="300" cy="300" r="220" stroke="rgba(69,160,150,0.3)" strokeWidth="0.6" />
            <circle cx="300" cy="300" r="160" stroke="rgba(201,169,98,0.2)" strokeWidth="0.5" strokeDasharray="3 6" />
            <polygon points="300,10 550,450 50,450" stroke="rgba(69,160,150,0.25)" strokeWidth="0.5" fill="none" />
            <polygon points="300,590 50,150 550,150" stroke="rgba(201,169,98,0.2)" strokeWidth="0.5" fill="none" />
            <circle cx="300" cy="10" r="6" fill="rgba(69,160,150,0.6)" />
            <circle cx="550" cy="450" r="6" fill="rgba(69,160,150,0.6)" />
            <circle cx="50" cy="450" r="6" fill="rgba(69,160,150,0.6)" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center space-y-7">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45a096]/10 border border-[#45a096]/30 text-[#c9a962] text-xs font-mono tracking-[0.25em] uppercase shadow-lg backdrop-blur-md"
        >
          <span className="text-[#c9a962]">⚡</span> FULL STACK DEVELOPER <span className="text-[#c9a962]">⚡</span>
        </motion.div>

        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#e8f0ee] tracking-tight leading-[1.05]"
          >
            Malak{' '}
            <span className="font-serif italic font-normal text-gradient-teal">
              Maisuriya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-serif text-xl sm:text-3xl text-[#c9a962] italic font-light"
          >
            "{personalDetails.tagline}"
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[#8ba8a2] text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
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
            className="px-8 py-3.5 rounded-full bg-[#45a096] text-[#0d1a1a] font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#45a096]/20 hover:bg-[#3d8a7e] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore About Me
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-8 py-3.5 rounded-full bg-[#122424] border border-[#2a4040] text-[#e8f0ee] font-bold text-sm uppercase tracking-wider hover:bg-[#45a096]/15 hover:border-[#45a096] hover:text-[#45a096] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center gap-4 pt-4 text-[#8ba8a2]"
        >
          <a
            href={personalDetails.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#122424] border border-[#2a4040] text-[#e8f0ee] hover:text-[#45a096] hover:border-[#45a096] hover:bg-[#45a096]/10 transition-all"
            title="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href={personalDetails.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#122424] border border-[#2a4040] text-[#e8f0ee] hover:text-[#45a096] hover:border-[#45a096] hover:bg-[#45a096]/10 transition-all"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="pt-8"
        >
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="inline-flex flex-col items-center gap-2 group"
          >
            <div className="w-6 h-10 rounded-full border-2 border-[#45a096]/50 flex justify-center p-1.5 group-hover:border-[#45a096] transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#45a096]"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
