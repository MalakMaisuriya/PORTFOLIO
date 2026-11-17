import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* Subtle Ambient Vignette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06141B]/20 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full z-10 text-center flex flex-col items-center">

        {/* Clean Status Pill with Technical Notation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11212D]/90 border border-[#4A5C6A]/60 text-[#CCD0CF] text-xs font-mono tracking-wider shadow-sm backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" />
          <span className="text-[#9BA8AB]">[STATUS // OPEN]</span>
          <span>Available for Full-Stack & Frontend Roles</span>
        </motion.div>

        {/* Introduction & Headline (Kern Society Bold Typography) */}
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#9BA8AB] uppercase"
          >
            [ FULL STACK DEVELOPER // SURAT, GUJARAT ]
          </motion.p>

          <ScrollRevealText
            text="Malak Maisuriya"
            as="h1"
            split="characters"
            delay={0.2}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#CCD0CF] tracking-tighter leading-[1.05] uppercase font-display"
          />

          <ScrollRevealText
            text="Full Stack MERN Developer"
            as="h2"
            split="words"
            delay={0.4}
            className="text-base sm:text-2xl font-bold font-mono tracking-wider uppercase text-[#9BA8AB]"
          />
        </div>

        {/* Concise, Professional Bio with Editorial Contrast */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm sm:text-base text-[#9BA8AB] max-w-xl mx-auto leading-relaxed mt-5 font-normal"
        >
          Transforming logic into scalable web applications. Mastering <span className="text-[#CCD0CF] font-semibold">Node.js</span>, <span className="text-[#CCD0CF] font-semibold">Express</span>, <span className="text-[#CCD0CF] font-semibold">MongoDB</span>, <span className="text-[#CCD0CF] font-semibold">React JS</span>, and <span className="text-[#CCD0CF] font-semibold">C++ DSA</span> problem solving.
        </motion.p>

        {/* Minimalist CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#CCD0CF] text-[#06141B] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-black/20"
          >
            <span>Explore Work</span>
            <FaArrowRight className="text-xs" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#252745] hover:border-[#9BA8AB]/50 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            <FaEnvelope className="text-xs text-[#9BA8AB]" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Tech Stack Subtle Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="pt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono text-[#9BA8AB]/70 tracking-widest uppercase"
        >
          <span>React.js</span>
          <span>•</span>
          <span>Node.js</span>
          <span>•</span>
          <span>Express</span>
          <span>•</span>
          <span>MongoDB</span>
          <span>•</span>
          <span>Tailwind</span>
          <span>•</span>
          <span>C++ DSA</span>
        </motion.div>

        {/* Wowww Studio Style Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl"
        >
          {[
            { value: '15+', label: 'Public Repos' },
            { value: 'MERN', label: 'Stack Certified' },
            { value: 'BCA', label: 'Final Year (Sem 5)' },
            { value: 'C++', label: 'DSA Problem Solver' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-[#11212D]/80 border border-[#4A5C6A]/40 backdrop-blur-md text-center hover:border-[#9BA8AB]/60 transition-colors"
              style={{ boxShadow: 'inset 0 1px 0 0 rgba(204, 208, 207, 0.06)' }}
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#CCD0CF]">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-[#9BA8AB] tracking-wider uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Studio Scroll Down Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pt-10 flex flex-col items-center gap-2"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="group flex flex-col items-center text-[10px] font-mono text-[#9BA8AB]/70 tracking-[0.25em] uppercase hover:text-[#CCD0CF] transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <span className="w-px h-6 bg-gradient-to-b from-[#9BA8AB]/60 to-transparent mt-2 group-hover:h-8 transition-all duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
