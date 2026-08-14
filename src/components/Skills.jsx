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
  FaHtml5: <FaHtml5 className="text-orange-400 text-lg" />,
  FaCss3Alt: <FaCss3Alt className="text-sky-400 text-lg" />,
  FaJsSquare: <FaJsSquare className="text-yellow-400 text-lg" />,
  FaReact: <FaReact className="text-[#45a096] text-lg" />,
  FaBootstrap: <FaBootstrap className="text-purple-400 text-lg" />,
  SiJquery: <SiJquery className="text-[#45a096] text-lg" />,
  SiC: <SiC className="text-blue-400 text-lg" />,
  SiCplusplus: <SiCplusplus className="text-[#c9a962] text-lg" />,
  FaBrain: <FaBrain className="text-[#c9a962] text-lg" />,
  FaGitAlt: <FaGitAlt className="text-red-400 text-lg" />,
  FaGithub: <FaGithub className="text-[#e8f0ee] text-lg" />,
  VscCode: <VscCode className="text-[#45a096] text-lg" />,
  SiNetlify: <SiNetlify className="text-[#45a096] text-lg" />,
  FaChrome: <FaChrome className="text-emerald-400 text-lg" />,
  SiMongodb: <SiMongodb className="text-emerald-400 text-lg" />,
  FaNodeJs: <FaNodeJs className="text-emerald-400 text-lg" />,
  FaCode: <FaCode className="text-[#45a096] text-lg" />,
  FaPalette: <FaPalette className="text-[#c9a962] text-lg" />,
  FaPaintBrush: <FaPaintBrush className="text-rose-400 text-lg" />,
  FaUserGraduate: <FaUserGraduate className="text-[#45a096] text-lg" />,
  FaLanguage: <FaLanguage className="text-[#45a096] text-lg" />,
};

const categoryIconMap = {
  FaCode: <FaCode className="text-[#45a096] text-xl" />,
  FaServer: <FaServer className="text-[#45a096] text-xl" />,
  FaTerminal: <FaTerminal className="text-[#c9a962] text-xl" />,
  FaPalette: <FaPalette className="text-[#c9a962] text-xl" />,
  FaUserGraduate: <FaUserGraduate className="text-[#45a096] text-xl" />,
  FaTools: <FaTools className="text-[#45a096] text-xl" />,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const categories = ['All', ...skillsData.map(item => item.category)];

  const filteredData = selectedFilter === 'All'
    ? skillsData
    : skillsData.filter(item => item.category === selectedFilter);

  return (
    <section id="skills" className="relative py-28 bg-[#0d1a1a] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#45a096]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c9a962]/6 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Spinning Tech Gear/Hexagon Ring) */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[500px] h-[500px] lg:w-[620px] lg:h-[620px] animate-spin-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <circle cx="250" cy="250" r="240" stroke="rgba(69,160,150,0.4)" strokeWidth="0.8" />
            <polygon points="250,20 440,130 440,370 250,480 60,370 60,130" stroke="rgba(201,169,98,0.35)" strokeWidth="0.8" fill="none" />
            <circle cx="250" cy="250" r="150" stroke="rgba(69,160,150,0.3)" strokeWidth="0.6" strokeDasharray="4 6" />
            <circle cx="250" cy="20" r="6" fill="#45a096" />
            <circle cx="440" cy="130" r="6" fill="#c9a962" />
            <circle cx="440" cy="370" r="6" fill="#45a096" />
            <circle cx="250" cy="480" r="6" fill="#c9a962" />
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#45a096]" /> Skills & Tools <span className="w-1.5 h-1.5 rounded-full bg-[#45a096]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#e8f0ee] tracking-tight">
            Technical <span className="text-gradient-teal italic">Mastery</span>
          </h2>
          <p className="text-[#8ba8a2] text-base max-w-xl mx-auto">
            Technologies, programming languages, frameworks, design tools, and soft skills in my tech stack.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#45a096] to-[#c9a962] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Filter Pills Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === cat
                  ? 'bg-[#45a096] text-[#0d1a1a] shadow-md shadow-[#45a096]/20 font-bold'
                  : 'bg-[#122424] border border-[#2a4040] text-[#8ba8a2] hover:text-white hover:border-[#45a096]/50'
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
              className="glass-panel p-7 sm:p-8 rounded-3xl border border-[#2a4040] hover:border-[#45a096]/50 hover:shadow-xl hover:shadow-[#45a096]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0d1a1a]/90 border border-[#2a4040] flex items-center justify-center shadow-inner">
                    {categoryIconMap[categoryGroup.iconName] || <FaCode className="text-[#45a096] text-xl" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#e8f0ee] tracking-wide">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-[#8ba8a2] font-medium">
                      {categoryGroup.description}
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#2a4040] my-5" />

                <div className="flex flex-wrap gap-3">
                  {categoryGroup.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0d1a1a]/90 border border-[#2a4040] text-[#e8f0ee] hover:text-white hover:bg-[#45a096]/10 hover:border-[#45a096]/50 transition-all duration-200 cursor-default group"
                    >
                      <span className="shrink-0 transition-transform group-hover:scale-110">
                        {iconMap[skill.icon] || <FaCode className="text-[#45a096] text-base" />}
                      </span>
                      <span className="text-sm font-semibold tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#45a096]/15 border border-[#45a096]/30 text-[#45a096] font-semibold">
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
