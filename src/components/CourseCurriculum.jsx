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

const moduleIconMap = {
  FaBootstrap: <FaBootstrap className="text-purple-400 text-xl" />,
  FaUserGraduate: <FaUserGraduate className="text-[#45a096] text-xl" />,
  SiC: <SiC className="text-blue-400 text-xl" />,
  FaHtml5: <FaHtml5 className="text-orange-400 text-xl" />,
  FaPaintBrush: <FaPaintBrush className="text-rose-400 text-xl" />,
  FaPalette: <FaPalette className="text-[#45a096] text-xl" />,
  SiCplusplus: <SiCplusplus className="text-[#c9a962] text-xl" />,
  FaJsSquare: <FaJsSquare className="text-yellow-400 text-xl" />,
  FaNodeJs: <FaNodeJs className="text-emerald-400 text-xl" />,
  FaLanguage: <FaLanguage className="text-[#45a096] text-xl" />,
  FaReact: <FaReact className="text-[#45a096] text-xl" />,
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
    <section id="course" className="relative py-28 bg-[#0d1a1a] overflow-hidden">
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-[#45a096]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#c9a962]/8 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Spinning Academic Mandala) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[500px] h-[500px] lg:w-[620px] lg:h-[620px] animate-spin-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <circle cx="250" cy="250" r="240" stroke="rgba(201,169,98,0.4)" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="180" stroke="rgba(69,160,150,0.35)" strokeWidth="0.6" strokeDasharray="4 6" />
            <polygon points="250,20 450,420 50,420" stroke="rgba(201,169,98,0.35)" strokeWidth="0.6" fill="none" />
            <circle cx="250" cy="20" r="6" fill="#c9a962" />
            <circle cx="450" cy="420" r="6" fill="#45a096" />
            <circle cx="50" cy="420" r="6" fill="#c9a962" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45a096]/10 border border-[#45a096]/30 text-[#45a096] text-xs font-mono tracking-[0.25em] uppercase">
            <FaGraduationCap className="text-sm text-[#45a096]" /> PROFESSIONAL COURSE SYLLABUS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#e8f0ee] tracking-tight">
            Full Stack Development <span className="text-[#45a096] italic">Curriculum</span>
          </h2>
          <p className="text-[#8ba8a2] text-base max-w-2xl mx-auto">
            11 Specialized Training Modules completed at <span className="text-[#45a096] font-semibold">{certificationData.institute}</span> covering modern Web Tech, MERN Backend, C++ DSA, and Professional Skills.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#45a096] to-[#c9a962] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#45a096] text-[#0d1a1a] shadow-md shadow-[#45a096]/20 font-bold'
                  : 'bg-[#122424] border border-[#2a4040] text-[#8ba8a2] hover:text-white hover:border-[#45a096]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: module.id * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-3xl border border-[#2a4040] hover:border-[#45a096]/50 hover:shadow-xl hover:shadow-[#45a096]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Module Header Bar */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-[#45a096] px-2.5 py-1 rounded-lg bg-[#45a096]/10 border border-[#45a096]/30">
                    Module {module.id.toString().padStart(2, '0')}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d1a1a] border border-[#2a4040] text-[11px] font-mono font-semibold">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        module.status.includes('Active')
                          ? 'bg-amber-400 animate-pulse'
                          : 'bg-emerald-400'
                      }`}
                    />
                    <span
                      className={
                        module.status.includes('Active')
                          ? 'text-amber-300'
                          : 'text-emerald-400'
                      }
                    >
                      {module.status}
                    </span>
                  </div>
                </div>

                {/* Module Title & Icon */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#0d1a1a]/90 border border-[#2a4040] flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#45a096] transition-colors">
                    {moduleIconMap[module.icon] || <FaBookOpen className="text-[#45a096] text-xl" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#e8f0ee] tracking-tight group-hover:text-[#45a096] transition-colors leading-snug">
                      {module.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#c9a962] font-medium">
                      Code: {module.code}
                    </span>
                  </div>
                </div>

                {/* Instructor & Batch tag */}
                <div className="text-[11px] text-[#8ba8a2] font-mono bg-[#0d1a1a]/60 px-3 py-1.5 rounded-xl border border-[#2a4040] flex items-center gap-2">
                  <span className="text-[#45a096] font-semibold">Batch:</span>
                  <span className="truncate">{module.instructorBatch}</span>
                </div>

                {/* Module Description */}
                <p className="text-[#8ba8a2] text-xs leading-relaxed font-normal pt-1">
                  {module.description}
                </p>

              </div>

              {/* Footer Tag */}
              <div className="pt-4 border-t border-[#2a4040] mt-4 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#8ba8a2]">Category:</span>
                <span className="text-[#45a096] font-semibold">{module.category}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
