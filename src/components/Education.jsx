import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import { educationData, certificationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-[#090714] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest">
            <FaGraduationCap className="text-xs" /> Academic Journey
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Education & Certification
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            My academic qualifications and specialized full-stack development training background.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-400 mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Timeline Column (Left 7 cols) */}
          <div className="lg:col-span-7 relative border-l-2 border-purple-500/20 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot Icon */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full border-2 ${
                  item.highlight
                    ? 'bg-purple-600 border-purple-300 text-white shadow-lg shadow-purple-600/50'
                    : 'bg-slate-900 border-purple-500/40 text-purple-400'
                } flex items-center justify-center text-sm transition-transform duration-300 group-hover:scale-110`}>
                  {item.type === 'Degree' ? <FaGraduationCap /> : <FaSchool />}
                </div>

                {/* Timeline Card */}
                <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300">
                      <FaCalendarAlt className="text-[10px]" /> {item.period}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      item.highlight
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                    <span className="font-semibold text-purple-300">{item.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <FaMapMarkerAlt className="text-purple-400 text-xs" /> {item.location}
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-1">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification Card Column (Right 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28 p-8 rounded-3xl bg-gradient-to-br from-[#181335] via-[#120f28] to-[#0c091d] border-2 border-purple-500/30 shadow-2xl shadow-purple-950/60 space-y-6 relative overflow-hidden">
              
              {/* Top Accent Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-violet-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/40">
                <FaAward />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  {certificationData.badge}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {certificationData.title}
                </h3>
                <p className="text-sm font-semibold text-purple-400 mt-1">
                  {certificationData.institute}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-900/40 border border-purple-500/30 text-xs text-purple-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                Status: <span className="font-bold text-white">{certificationData.status}</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed border-t border-purple-500/20 pt-4 font-normal">
                {certificationData.description}
              </p>

              {/* Decorative Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-purple-500/20 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
