import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaDatabase, FaExternalLinkAlt, FaServer, FaCogs, FaTerminal, FaLaptopCode } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

const projectIllustrations = {
  1: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0b211e] via-[#061412] to-[#081212] p-6 text-[#10b981]">
      <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#10b981]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#061412] border border-[#10b981]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaServer className="text-3xl text-[#10b981]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#061412] border border-[#10b981]/30 text-xs font-semibold text-[#10b981]">
        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" /> Full Stack MERN Suite
      </div>
    </div>
  ),
  2: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a2b27] via-[#061412] to-[#081212] p-6 text-[#34d399]">
      <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-[#34d399]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#061412] border border-[#34d399]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaCode className="text-3xl text-[#34d399]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#061412] border border-[#34d399]/30 text-xs font-semibold text-[#34d399]">
        <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" /> React & Redux Architecture
      </div>
    </div>
  ),
  3: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0f2420] via-[#061412] to-[#081212] p-6 text-[#10b981]">
      <div className="absolute -left-8 -top-8 w-40 h-40 bg-[#10b981]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#061412] border border-[#10b981]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaLaptopCode className="text-3xl text-[#10b981]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#061412] border border-[#10b981]/30 text-xs font-semibold text-[#10b981]">
        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" /> HTML5 & CSS3 Responsive UI
      </div>
    </div>
  ),
  4: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a2927] via-[#061412] to-[#081212] p-6 text-yellow-400">
      <div className="absolute -left-8 -top-8 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#061412] border border-yellow-500/40 flex items-center justify-center mb-3 shadow-lg">
        <FaCogs className="text-3xl text-yellow-400" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#061412] border border-yellow-500/30 text-xs font-semibold text-yellow-400">
        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" /> JavaScript ES6+ Applications
      </div>
    </div>
  ),
  5: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0b211e] via-[#061412] to-[#081212] p-6 text-[#34d399]">
      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#34d399]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#061412] border border-[#34d399]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaDatabase className="text-3xl text-[#34d399]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#061412] border border-[#34d399]/30 text-xs font-semibold text-[#34d399]">
        <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" /> Student Portal App
      </div>
    </div>
  ),
  6: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0e2224] via-[#061412] to-[#081212] p-6 text-[#10b981]">
      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#10b981]/10 rounded-full blur-2xl" />
      <div className="w-16 h-16 rounded-2xl bg-[#061412] border border-[#10b981]/40 flex items-center justify-center mb-3 shadow-lg">
        <FaTerminal className="text-3xl text-[#10b981]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#061412] border border-[#10b981]/30 text-xs font-semibold text-[#10b981]">
        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" /> C++ DSA Implementation
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
    <section id="projects" className="relative py-28 bg-[#061412] overflow-hidden">
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-[#10b981]/8 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#34d399]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Dual Orbital Rings) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[520px] h-[520px] lg:w-[650px] lg:h-[650px] animate-spin-reverse-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <circle cx="250" cy="250" r="240" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="180" stroke="rgba(52,211,153,0.35)" strokeWidth="0.6" strokeDasharray="8 8" />
            <polygon points="250,20 450,420 50,420" stroke="rgba(16,185,129,0.35)" strokeWidth="0.6" fill="none" />
            <circle cx="250" cy="20" r="6" fill="#10b981" />
            <circle cx="450" cy="420" r="6" fill="#34d399" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Portfolio Showcase <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Featured Projects
          </h2>
          <p className="text-[#72b09e] text-base max-w-xl mx-auto">
            Practical web applications, full-stack MERN projects, and DSA problem-solving repositories built by Malak Maisuriya.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#10b981] to-[#34d399] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#10b981] text-[#061412] shadow-md shadow-[#10b981]/20 font-bold'
                  : 'bg-[#0b211e] border border-[#193d37] text-[#72b09e] hover:text-white hover:border-[#10b981]/50'
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
              className="glass-panel rounded-3xl border border-[#193d37] overflow-hidden flex flex-col justify-between hover:border-[#10b981]/50 hover:shadow-2xl hover:shadow-[#10b981]/10 transition-all duration-300 group"
            >
              <div>
                {/* Graphic Preview Banner */}
                <div className="relative h-48 sm:h-52 w-full border-b border-[#193d37] overflow-hidden">
                  {projectIllustrations[project.id]}
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#061412]/90 border border-[#10b981]/40 text-[#10b981] text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-md">
                    {project.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#34d399] uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[#e6f7f2] tracking-tight mt-1 group-hover:text-[#10b981] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[#72b09e] text-sm leading-relaxed line-clamp-4 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => {
                      let tagColor = 'text-[#10b981] border-[#193d37]';
                      let dotColor = null;

                      if (t.includes('React')) {
                        tagColor = 'text-[#61DAFB] border-[#61DAFB]/30 bg-[#61DAFB]/10';
                      } else if (t.includes('Node') || t.includes('Express')) {
                        tagColor = 'text-[#339933] border-[#339933]/30 bg-[#339933]/10';
                      } else if (t.includes('MongoDB') || t.includes('MERN')) {
                        tagColor = 'text-[#47A248] border-[#47A248]/30 bg-[#47A248]/10';
                      } else if (t.includes('JavaScript') || t.includes('JS')) {
                        tagColor = 'text-[#F7DF1E] border-[#F7DF1E]/30 bg-[#F7DF1E]/10';
                      } else if (t.includes('HTML')) {
                        tagColor = 'text-[#E34F26] border-[#E34F26]/30 bg-[#E34F26]/10';
                      } else if (t.includes('CSS') || t.includes('Tailwind')) {
                        tagColor = 'text-[#1572B6] border-[#1572B6]/30 bg-[#1572B6]/10';
                      } else if (t.includes('C++') || t.includes('DSA')) {
                        tagColor = 'text-[#00599C] border-[#00599C]/30 bg-[#00599C]/10';
                      } else if (t.includes('Bootstrap')) {
                        tagColor = 'text-[#7952B3] border-[#7952B3]/30 bg-[#7952B3]/10';
                      }

                      return (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-lg bg-[#061412] border text-xs font-semibold shadow-sm transition-all ${tagColor}`}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card Footer with GitHub & Live Demo buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-[#193d37] grid grid-cols-2 gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#061412] border border-[#193d37] text-[#e6f7f2] hover:text-[#061412] hover:bg-[#10b981] hover:border-[#10b981] text-xs font-bold uppercase tracking-wider transition-all duration-200 group/btn"
                >
                  <FaGithub className="text-sm text-[#10b981] group-hover/btn:text-[#061412] transition-colors" />
                  Repository
                </a>

                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 text-[#10b981] hover:bg-[#10b981] hover:text-[#061412] text-xs font-bold uppercase tracking-wider transition-all duration-200"
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
