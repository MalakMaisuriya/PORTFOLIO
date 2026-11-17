import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaDatabase, FaExternalLinkAlt, FaServer, FaCogs, FaTerminal, FaLaptopCode } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import ScrollRevealText from './ScrollRevealText';
import SpotlightCard from './SpotlightCard';

const projectIllustrations = {
  1: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#11212D] via-[#06141B] to-[#252745] p-6 text-[#CCD0CF]">
      <div className="w-14 h-14 rounded-xl bg-[#252745] border border-[#4A5C6A] flex items-center justify-center mb-3 shadow-md">
        <FaServer className="text-2xl text-[#CCD0CF]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#11212D] border border-[#4A5C6A] text-xs font-semibold text-[#CCD0CF]">
        <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" /> Full Stack MERN Suite
      </div>
    </div>
  ),
  2: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#11212D] via-[#06141B] to-[#252745] p-6 text-[#CCD0CF]">
      <div className="w-14 h-14 rounded-xl bg-[#252745] border border-[#4A5C6A] flex items-center justify-center mb-3 shadow-md">
        <FaCode className="text-2xl text-[#CCD0CF]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#11212D] border border-[#4A5C6A] text-xs font-semibold text-[#CCD0CF]">
        <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" /> React & Redux Architecture
      </div>
    </div>
  ),
  3: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#11212D] via-[#06141B] to-[#252745] p-6 text-[#CCD0CF]">
      <div className="w-14 h-14 rounded-xl bg-[#252745] border border-[#4A5C6A] flex items-center justify-center mb-3 shadow-md">
        <FaLaptopCode className="text-2xl text-[#CCD0CF]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#11212D] border border-[#4A5C6A] text-xs font-semibold text-[#CCD0CF]">
        <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" /> Responsive Web UI
      </div>
    </div>
  ),
  4: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#11212D] via-[#06141B] to-[#252745] p-6 text-[#CCD0CF]">
      <div className="w-14 h-14 rounded-xl bg-[#252745] border border-[#4A5C6A] flex items-center justify-center mb-3 shadow-md">
        <FaCogs className="text-2xl text-[#CCD0CF]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#11212D] border border-[#4A5C6A] text-xs font-semibold text-[#CCD0CF]">
        <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" /> JavaScript Applications
      </div>
    </div>
  ),
  5: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#11212D] via-[#06141B] to-[#252745] p-6 text-[#CCD0CF]">
      <div className="w-14 h-14 rounded-xl bg-[#252745] border border-[#4A5C6A] flex items-center justify-center mb-3 shadow-md">
        <FaDatabase className="text-2xl text-[#CCD0CF]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#11212D] border border-[#4A5C6A] text-xs font-semibold text-[#CCD0CF]">
        <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" /> Student Portal App
      </div>
    </div>
  ),
  6: (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#11212D] via-[#06141B] to-[#252745] p-6 text-[#CCD0CF]">
      <div className="w-14 h-14 rounded-xl bg-[#252745] border border-[#4A5C6A] flex items-center justify-center mb-3 shadow-md">
        <FaTerminal className="text-2xl text-[#CCD0CF]" />
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#11212D] border border-[#4A5C6A] text-xs font-semibold text-[#CCD0CF]">
        <span className="w-2 h-2 rounded-full bg-[#9BA8AB] animate-pulse" /> C++ DSA Implementations
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
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#11212D]/40 rounded-full blur-[160px] pointer-events-none -z-10" />

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
            <span className="text-[#9BA8AB]">[ 01 // SHOWCASE ]</span>
            <span>CURATED WORK</span>
          </div>
          <ScrollRevealText
            text="Featured Projects"
            as="h2"
            split="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCD0CF] tracking-tighter uppercase font-display block"
          />
          <p className="text-[#9BA8AB] text-sm sm:text-base max-w-xl mx-auto">
            Practical web applications, full-stack MERN systems, and algorithmic problem-solving projects.
          </p>
          <div className="w-12 h-1 bg-[#4A5C6A] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#CCD0CF] text-[#06141B] font-bold shadow-md'
                  : 'bg-[#11212D] border border-[#4A5C6A]/60 text-[#9BA8AB] hover:text-[#CCD0CF] hover:bg-[#252745]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with AI Designer Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <SpotlightCard className="h-full">
                <div>
                  {/* Graphic Preview Banner */}
                  <div className="relative h-44 sm:h-48 w-full border-b border-[#4A5C6A]/30 overflow-hidden">
                    {projectIllustrations[project.id]}
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-[#11212D]/90 border border-[#4A5C6A] text-[#CCD0CF] text-[10px] font-mono tracking-wide backdrop-blur-md">
                      {project.badge}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#9BA8AB] tracking-wider font-medium">
                        {project.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-[#CCD0CF] tracking-tight mt-0.5 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[#9BA8AB] text-xs leading-relaxed line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-[#06141B] border border-[#4A5C6A]/40 text-[#CCD0CF] text-[11px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Buttons */}
                <div className="px-5 pb-5 pt-3 border-t border-[#4A5C6A]/30 grid grid-cols-2 gap-2 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#06141B] border border-[#4A5C6A] text-[#CCD0CF] hover:bg-[#252745] hover:border-[#9BA8AB] text-xs font-semibold uppercase tracking-wider transition-all duration-150"
                  >
                    <FaGithub className="text-xs text-[#9BA8AB]" />
                    Code
                  </a>

                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#CCD0CF] text-[#06141B] hover:bg-white text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-sm"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    Live Demo
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
