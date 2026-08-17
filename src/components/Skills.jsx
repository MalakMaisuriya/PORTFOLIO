import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaTerminal,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaChrome,
  FaBrain,
  FaNodeJs,
  FaServer,
  FaPalette,
  FaPaintBrush,
  FaUserGraduate,
  FaLanguage,
} from 'react-icons/fa';
import {
  SiJquery,
  SiC,
  SiCplusplus,
  SiNetlify,
  SiMongodb,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  FaHtml5: <FaHtml5 className="text-[#E34F26] text-xl drop-shadow-[0_0_8px_rgba(227,79,38,0.4)]" />,
  FaCss3Alt: <FaCss3Alt className="text-[#1572B6] text-xl drop-shadow-[0_0_8px_rgba(21,114,182,0.4)]" />,
  FaJsSquare: <FaJsSquare className="text-[#F7DF1E] text-xl drop-shadow-[0_0_8px_rgba(247,223,30,0.4)]" />,
  FaReact: <FaReact className="text-[#61DAFB] text-xl drop-shadow-[0_0_8px_rgba(97,218,251,0.4)] animate-spin-slow" />,
  FaBootstrap: <FaBootstrap className="text-[#7952B3] text-xl drop-shadow-[0_0_8px_rgba(121,82,179,0.4)]" />,
  SiJquery: <SiJquery className="text-[#0769AD] text-xl drop-shadow-[0_0_8px_rgba(7,105,173,0.4)]" />,
  SiC: <SiC className="text-[#A8B9CC] text-xl drop-shadow-[0_0_8px_rgba(168,185,204,0.4)]" />,
  SiCplusplus: <SiCplusplus className="text-[#00599C] text-xl drop-shadow-[0_0_8px_rgba(0,89,156,0.4)]" />,
  FaBrain: <FaBrain className="text-[#EC4899] text-xl drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" />,
  FaGitAlt: <FaGitAlt className="text-[#F05032] text-xl drop-shadow-[0_0_8px_rgba(240,80,50,0.4)]" />,
  FaGithub: <FaGithub className="text-[#F0F6FC] text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />,
  VscCode: <VscCode className="text-[#007ACC] text-xl drop-shadow-[0_0_8px_rgba(0,122,204,0.4)]" />,
  SiNetlify: <SiNetlify className="text-[#00C7B7] text-xl drop-shadow-[0_0_8px_rgba(0,199,183,0.4)]" />,
  FaChrome: <FaChrome className="text-[#4285F4] text-xl drop-shadow-[0_0_8px_rgba(66,133,244,0.4)]" />,
  SiMongodb: <SiMongodb className="text-[#47A248] text-xl drop-shadow-[0_0_8px_rgba(71,162,72,0.4)]" />,
  FaNodeJs: <FaNodeJs className="text-[#339933] text-xl drop-shadow-[0_0_8px_rgba(51,153,51,0.4)]" />,
  FaCode: <FaCode className="text-[#10b981] text-xl" />,
  FaPalette: <FaPalette className="text-[#F43F5E] text-xl" />,
  FaPaintBrush: <FaPaintBrush className="text-[#8B5CF6] text-xl" />,
  FaUserGraduate: <FaUserGraduate className="text-[#3B82F6] text-xl" />,
  FaLanguage: <FaLanguage className="text-[#EAB308] text-xl" />,
};

const categoryIconMap = {
  FaCode: <FaCode className="text-[#10b981] text-xl" />,
  FaServer: <FaServer className="text-[#10b981] text-xl" />,
  FaTerminal: <FaTerminal className="text-[#34d399] text-xl" />,
  FaPalette: <FaPalette className="text-[#F43F5E] text-xl" />,
  FaUserGraduate: <FaUserGraduate className="text-[#3B82F6] text-xl" />,
  FaTools: <FaTools className="text-[#EAB308] text-xl" />,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const categories = ['All', ...skillsData.map(item => item.category)];

  const filteredData = selectedFilter === 'All'
    ? skillsData
    : skillsData.filter(item => item.category === selectedFilter);

  return (
    <section id="skills" className="relative py-28 bg-[#061412] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#10b981]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#34d399]/6 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Spinning Tech Gear/Hexagon Ring) */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[500px] h-[500px] lg:w-[620px] lg:h-[620px] animate-spin-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <circle cx="250" cy="250" r="240" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
            <polygon points="250,20 440,130 440,370 250,480 60,370 60,130" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8" fill="none" />
            <circle cx="250" cy="250" r="150" stroke="rgba(16,185,129,0.3)" strokeWidth="0.6" strokeDasharray="4 6" />
            <circle cx="250" cy="20" r="6" fill="#10b981" />
            <circle cx="440" cy="130" r="6" fill="#34d399" />
            <circle cx="440" cy="370" r="6" fill="#10b981" />
            <circle cx="250" cy="480" r="6" fill="#34d399" />
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Skills & Tools <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Technical Mastery
          </h2>
          <p className="text-[#72b09e] text-base max-w-xl mx-auto">
            Technologies, programming languages, frameworks, design tools, and soft skills in my tech stack.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#10b981] to-[#34d399] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Filter Pills Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === cat
                  ? 'bg-[#10b981] text-[#061412] shadow-md shadow-[#10b981]/20 font-bold'
                  : 'bg-[#0b211e] border border-[#193d37] text-[#72b09e] hover:text-white hover:border-[#10b981]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-7 sm:p-8 rounded-3xl border border-[#193d37] hover:border-[#10b981]/50 hover:shadow-xl hover:shadow-[#10b981]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#061412]/90 border border-[#193d37] flex items-center justify-center shadow-inner">
                    {categoryIconMap[categoryGroup.iconName] || <FaCode className="text-[#10b981] text-xl" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#e6f7f2] tracking-wide">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-[#72b09e] font-medium">
                      {categoryGroup.description}
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#193d37] my-5" />

                <div className="flex flex-wrap gap-3">
                  {categoryGroup.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#061412]/90 border border-[#193d37] text-[#e6f7f2] hover:text-white hover:bg-[#10b981]/10 hover:border-[#10b981]/50 transition-all duration-200 cursor-default group"
                    >
                      <span className="shrink-0 transition-transform group-hover:scale-110">
                        {iconMap[skill.icon] || <FaCode className="text-[#10b981] text-base" />}
                      </span>
                      <span className="text-sm font-semibold tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981] font-semibold">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
