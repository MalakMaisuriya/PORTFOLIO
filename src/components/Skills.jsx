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
  FaUserGraduate,
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
import ScrollRevealText from './ScrollRevealText';
import SpotlightCard from './SpotlightCard';

const iconMap = {
  FaHtml5: <FaHtml5 className="text-[#E34F26] text-lg" />,
  FaCss3Alt: <FaCss3Alt className="text-[#1572B6] text-lg" />,
  FaJsSquare: <FaJsSquare className="text-[#F7DF1E] text-lg" />,
  FaReact: <FaReact className="text-[#61DAFB] text-lg" />,
  FaBootstrap: <FaBootstrap className="text-[#7952B3] text-lg" />,
  SiJquery: <SiJquery className="text-[#0769AD] text-lg" />,
  SiC: <SiC className="text-[#A8B9CC] text-lg" />,
  SiCplusplus: <SiCplusplus className="text-[#00599C] text-lg" />,
  FaBrain: <FaBrain className="text-[#EC4899] text-lg" />,
  FaGitAlt: <FaGitAlt className="text-[#F05032] text-lg" />,
  FaGithub: <FaGithub className="text-[#CCD0CF] text-lg" />,
  VscCode: <VscCode className="text-[#007ACC] text-lg" />,
  SiNetlify: <SiNetlify className="text-[#00C7B7] text-lg" />,
  FaChrome: <FaChrome className="text-[#4285F4] text-lg" />,
  SiMongodb: <SiMongodb className="text-[#47A248] text-lg" />,
  FaNodeJs: <FaNodeJs className="text-[#339933] text-lg" />,
  FaCode: <FaCode className="text-[#CCD0CF] text-lg" />,
};

const categoryIconMap = {
  FaCode: <FaCode className="text-[#CCD0CF] text-xl" />,
  FaServer: <FaServer className="text-[#CCD0CF] text-xl" />,
  FaTerminal: <FaTerminal className="text-[#CCD0CF] text-xl" />,
  FaPalette: <FaPalette className="text-[#CCD0CF] text-xl" />,
  FaUserGraduate: <FaUserGraduate className="text-[#CCD0CF] text-xl" />,
  FaTools: <FaTools className="text-[#CCD0CF] text-xl" />,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const categories = ['All', ...skillsData.map(item => item.category)];

  const filteredData = selectedFilter === 'All'
    ? skillsData
    : skillsData.filter(item => item.category === selectedFilter);

  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#11212D]/40 rounded-full blur-[160px] pointer-events-none -z-10" />

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
            <span className="text-[#9BA8AB]">[ 02 // STACK ]</span>
            <span>TECHNICAL ARSENAL</span>
          </div>
          <ScrollRevealText
            text="Technical Stack"
            as="h2"
            split="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCD0CF] tracking-tighter uppercase font-display block"
          />
          <p className="text-[#9BA8AB] text-sm sm:text-base max-w-xl mx-auto">
            Programming languages, backend frameworks, database systems, and development tools I work with.
          </p>
          <div className="w-12 h-1 bg-[#4A5C6A] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Filter Pills Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#CCD0CF] text-[#06141B] font-bold shadow-md'
                  : 'bg-[#11212D] border border-[#4A5C6A]/60 text-[#9BA8AB] hover:text-[#CCD0CF] hover:bg-[#252745]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-6 sm:p-7">
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#252745] border border-[#4A5C6A]/60 flex items-center justify-center shadow-inner">
                      {categoryIconMap[categoryGroup.iconName] || <FaCode className="text-[#CCD0CF] text-lg" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#CCD0CF] tracking-wide">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-xs text-[#9BA8AB]">
                        {categoryGroup.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#4A5C6A]/30 my-4" />

                  <div className="flex flex-wrap gap-2.5">
                    {categoryGroup.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.03 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#06141B] border border-[#4A5C6A]/40 text-[#CCD0CF] hover:border-[#9BA8AB]/60 hover:bg-[#252745]/40 transition-all duration-150 cursor-default"
                      >
                        <span className="shrink-0">
                          {iconMap[skill.icon] || <FaCode className="text-[#CCD0CF] text-sm" />}
                        </span>
                        <span className="text-xs font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#252745] border border-[#4A5C6A]/60 text-[#9BA8AB]">
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
