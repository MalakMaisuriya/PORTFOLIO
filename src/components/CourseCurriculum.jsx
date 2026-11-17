import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBootstrap,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaUserGraduate,
  FaLanguage,
  FaBookOpen,
  FaPalette,
  FaPaintBrush,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
} from 'react-icons/si';
import { courseModulesData, certificationData } from '../data/portfolioData';
import ScrollRevealText from './ScrollRevealText';
import SpotlightCard from './SpotlightCard';

const moduleIconMap = {
  FaBootstrap: <FaBootstrap className="text-[#9BA8AB] text-lg" />,
  FaUserGraduate: <FaUserGraduate className="text-[#CCD0CF] text-lg" />,
  SiC: <SiC className="text-[#9BA8AB] text-lg" />,
  FaHtml5: <FaHtml5 className="text-[#E34F26] text-lg" />,
  FaPaintBrush: <FaPaintBrush className="text-[#9BA8AB] text-lg" />,
  FaPalette: <FaPalette className="text-[#CCD0CF] text-lg" />,
  SiCplusplus: <SiCplusplus className="text-[#9BA8AB] text-lg" />,
  FaJsSquare: <FaJsSquare className="text-[#F7DF1E] text-lg" />,
  FaNodeJs: <FaNodeJs className="text-[#339933] text-lg" />,
  FaLanguage: <FaLanguage className="text-[#CCD0CF] text-lg" />,
  FaReact: <FaReact className="text-[#61DAFB] text-lg" />,
};

export default function CourseCurriculum() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    'Frontend',
    'Backend MERN',
    'Programming',
    'DSA & Logic',
    'Design & UI',
    'Career & Soft Skills',
  ];

  const filteredModules = selectedCategory === 'All'
    ? courseModulesData
    : courseModulesData.filter(m => m.category === selectedCategory);

  return (
    <section id="course" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#11212D]/40 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11212D] border border-[#4A5C6A]/50 text-[#CCD0CF] text-xs font-mono tracking-wider uppercase font-semibold">
            <span className="text-[#9BA8AB]">[ 04 // SYLLABUS ]</span>
            <FaGraduationCap className="text-xs text-[#9BA8AB]" />
            <span>TRAINING SYLLABUS</span>
          </div>
          <ScrollRevealText
            text="Curriculum & Specialization"
            as="h2"
            split="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCD0CF] tracking-tighter uppercase font-display block"
          />
          <p className="text-[#9BA8AB] text-sm sm:text-base max-w-xl mx-auto">
            11 modules completed at <span className="text-[#CCD0CF] font-semibold">{certificationData.institute}</span> spanning Web Dev, MERN, and C++ DSA.
          </p>
          <div className="w-12 h-1 bg-[#4A5C6A] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#CCD0CF] text-[#06141B] font-bold shadow-md'
                  : 'bg-[#11212D] border border-[#4A5C6A]/60 text-[#9BA8AB] hover:text-[#CCD0CF] hover:bg-[#252745]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Modules Grid with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: module.id * 0.04 }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-5 sm:p-6 flex flex-col justify-between">
                <div className="space-y-3.5">
                  
                  {/* Module Header Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#CCD0CF] px-2.5 py-0.5 rounded-md bg-[#252745] border border-[#4A5C6A]/60">
                      Module {module.id.toString().padStart(2, '0')}
                    </span>
                    
                    {/* Status Indicator */}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#06141B] border border-[#4A5C6A]/40 text-[#9BA8AB]">
                      {module.status}
                    </span>
                  </div>

                  {/* Module Title & Icon */}
                  <div className="flex items-start gap-3 pt-1">
                    <div className="w-10 h-10 rounded-xl bg-[#252745] border border-[#4A5C6A]/60 flex items-center justify-center shrink-0 shadow-inner">
                      {moduleIconMap[module.icon] || <FaBookOpen className="text-[#CCD0CF] text-base" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#CCD0CF] tracking-tight group-hover:text-white transition-colors leading-snug">
                        {module.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#9BA8AB]">
                        {module.code}
                      </span>
                    </div>
                  </div>

                  {/* Batch Tag */}
                  <div className="text-[11px] text-[#9BA8AB] font-mono bg-[#06141B]/80 px-3 py-1.5 rounded-xl border border-[#4A5C6A]/30">
                    <span className="text-[#CCD0CF]">Batch: </span>
                    <span className="truncate">{module.instructorBatch}</span>
                  </div>

                  {/* Module Description */}
                  <p className="text-[#9BA8AB] text-xs leading-relaxed font-normal">
                    {module.description}
                  </p>

                </div>

                {/* Footer Tag */}
                <div className="pt-3 border-t border-[#4A5C6A]/30 mt-3.5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#9BA8AB]/70">Track:</span>
                  <span className="text-[#CCD0CF] font-medium">{module.category}</span>
                </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
