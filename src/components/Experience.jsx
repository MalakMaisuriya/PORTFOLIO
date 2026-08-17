import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-[#080c14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono tracking-[0.25em] uppercase">
            <span>◆ EXPERIENCE & TRAINING ◆</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Practical Journey
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Practical full-stack training, academic leadership, and continuous open-source contribution history.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-12 max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 border-cyan-400 bg-cyan-400 shadow-md shadow-cyan-500/50 group-hover:scale-125 transition-transform" />

              <div className="glass-panel p-8 rounded-3xl border border-indigo-500/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 space-y-4">
                
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <FaCalendarAlt className="text-[11px]" /> {exp.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold uppercase text-[10px]">
                    {exp.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-sm font-semibold text-indigo-400 mt-1">
                    <span className="flex items-center gap-1">
                      <FaBriefcase className="text-xs" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal text-xs">
                      <FaMapMarkerAlt className="text-xs" /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Key Accomplishments Checklist */}
                <div className="pt-2 space-y-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold">
                    Key Outcomes & Contributions:
                  </h4>
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <FaCheckCircle className="text-cyan-400 text-xs shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
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
