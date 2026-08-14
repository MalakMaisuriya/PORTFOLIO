import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaDatabase, FaExternalLinkAlt, FaServer, FaCogs, FaTerminal, FaLaptopCode } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

const projectIllustrations = {
  1: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#122424] via-[#0d1a1a] to-[#081212] p-6 text-[#45a096]">
      <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#45a096]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#0d1a1a] border border-[#45a096]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaServer className="text-3xl text-[#45a096]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1a1a] border border-[#45a096]/30 text-xs font-semibold text-[#45a096]">
        <span className="w-2 h-2 rounded-full bg-[#45a096] animate-pulse" /> Full Stack MERN Suite
      </div>
    </div>
  ),
  2: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a2b27] via-[#0d1a1a] to-[#081212] p-6 text-[#c9a962]">
      <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-[#c9a962]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#0d1a1a] border border-[#c9a962]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaCode className="text-3xl text-[#c9a962]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1a1a] border border-[#c9a962]/30 text-xs font-semibold text-[#c9a962]">
        <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse" /> React & Redux Architecture
      </div>
    </div>
  ),
  3: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0f2420] via-[#0d1a1a] to-[#081212] p-6 text-[#45a096]">
      <div className="absolute -left-8 -top-8 w-40 h-40 bg-[#45a096]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#0d1a1a] border border-[#45a096]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaLaptopCode className="text-3xl text-[#45a096]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1a1a] border border-[#45a096]/30 text-xs font-semibold text-[#45a096]">
        <span className="w-2 h-2 rounded-full bg-[#45a096] animate-pulse" /> HTML5 & CSS3 Responsive UI
      </div>
    </div>
  ),
  4: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a2927] via-[#0d1a1a] to-[#081212] p-6 text-yellow-400">
      <div className="absolute -left-8 -top-8 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#0d1a1a] border border-yellow-500/40 flex items-center justify-center mb-3 shadow-lg">
        <FaCogs className="text-3xl text-yellow-400" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1a1a] border border-yellow-500/30 text-xs font-semibold text-yellow-400">
        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" /> JavaScript ES6+ Applications
      </div>
    </div>
  ),
  5: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#122424] via-[#0d1a1a] to-[#081212] p-6 text-[#c9a962]">
      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#c9a962]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#0d1a1a] border border-[#c9a962]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaDatabase className="text-3xl text-[#c9a962]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1a1a] border border-[#c9a962]/30 text-xs font-semibold text-[#c9a962]">
        <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse" /> Student Portal App
      </div>
    </div>
  ),
  6: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0e2224] via-[#0d1a1a] to-[#081212] p-6 text-[#45a096]">
      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#45a096]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#0d1a1a] border border-[#45a096]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaTerminal className="text-3xl text-[#45a096]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1a1a] border border-[#45a096]/30 text-xs font-semibold text-[#45a096]">
        <span className="w-2 h-2 rounded-full bg-[#45a096] animate-pulse" /> C++ DSA Implementation
      </div>
    </div>
  )
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'MERN', 'React', 'HTML/CSS', 'JavaScript', 'DSA'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 bg-[#0d1a1a] overflow-hidden">
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-[#45a096]/8 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#c9a962]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Dual Orbital Rings) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[520px] h-[520px] lg:w-[650px] lg:h-[650px] animate-spin-reverse-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <circle cx="250" cy="250" r="240" stroke="rgba(69,160,150,0.4)" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="180" stroke="rgba(201,169,98,0.35)" strokeWidth="0.6" strokeDasharray="8 8" />
            <polygon points="250,20 450,420 50,420" stroke="rgba(69,160,150,0.35)" strokeWidth="0.6" fill="none" />
            <circle cx="250" cy="20" r="6" fill="#45a096" />
            <circle cx="450" cy="420" r="6" fill="#c9a962" />
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
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45a096]/10 border border-[#45a096]/30 text-[#45a096] text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#45a096]" /> Portfolio Showcase <span className="w-1.5 h-1.5 rounded-full bg-[#45a096]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#e8f0ee] tracking-tight">
            Featured <span className="text-[#45a096] italic">Projects</span>
          </h2>
          <p className="text-[#8ba8a2] text-base max-w-xl mx-auto">
            Practical web applications, full-stack MERN projects, and DSA problem-solving repositories built by Malak Maisuriya.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#45a096] to-[#c9a962] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#45a096] text-[#0d1a1a] shadow-md shadow-[#45a096]/20 font-bold'
                  : 'bg-[#122424] border border-[#2a4040] text-[#8ba8a2] hover:text-white hover:border-[#45a096]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-3xl border border-[#2a4040] overflow-hidden flex flex-col justify-between hover:border-[#45a096]/50 hover:shadow-2xl hover:shadow-[#45a096]/10 transition-all duration-300 group"
            >
              <div>
                {/* Graphic Preview Banner */}
                <div className="relative h-48 sm:h-52 w-full border-b border-[#2a4040] overflow-hidden">
                  {projectIllustrations[project.id]}
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0d1a1a]/90 border border-[#45a096]/40 text-[#45a096] text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-md">
                    {project.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#c9a962] uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[#e8f0ee] tracking-tight mt-1 group-hover:text-[#45a096] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[#8ba8a2] text-sm leading-relaxed line-clamp-4 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-[#0d1a1a] border border-[#2a4040] text-[#45a096] text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with GitHub & Live Demo buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-[#2a4040] grid grid-cols-2 gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#0d1a1a] border border-[#2a4040] text-[#e8f0ee] hover:text-[#0d1a1a] hover:bg-[#45a096] hover:border-[#45a096] text-xs font-bold uppercase tracking-wider transition-all duration-200 group/btn"
                >
                  <FaGithub className="text-sm text-[#45a096] group-hover/btn:text-[#0d1a1a] transition-colors" />
                  Repository
                </a>

                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#45a096]/15 border border-[#45a096]/40 text-[#45a096] hover:bg-[#45a096] hover:text-[#0d1a1a] text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  Preview
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
