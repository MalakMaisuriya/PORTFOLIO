import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode, FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { aboutData, educationData, certificationData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#061412] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#10b981]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#34d399]/8 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Dual Counter-Spinning Rings) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] animate-spin-slow relative">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <circle cx="250" cy="250" r="240" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="190" stroke="rgba(52,211,153,0.3)" strokeWidth="0.6" strokeDasharray="6 6" />
            <polygon points="250,10 450,420 50,420" stroke="rgba(16,185,129,0.35)" strokeWidth="0.6" fill="none" />
            <circle cx="250" cy="10" r="5" fill="#10b981" />
            <circle cx="450" cy="420" r="5" fill="#34d399" />
          </svg>
        </div>
        <div className="w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] animate-spin-reverse-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
            <circle cx="200" cy="200" r="180" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8" strokeDasharray="4 8" />
            <polygon points="200,390 30,80 370,80" stroke="rgba(16,185,129,0.3)" strokeWidth="0.6" fill="none" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono tracking-[0.25em] uppercase">
            <span>◆ ABOUT ME ◆</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            The Mind Behind The Code
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#10b981] to-[#34d399] mx-auto rounded-full mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-4 mb-16 overflow-hidden border-y border-[#193d37] bg-[#0b211e]/80 text-center"
        >
          <p className="font-serif italic text-lg sm:text-2xl text-[#34d399] tracking-widest font-normal">
            "{aboutData.watermark}"
          </p>
          <p className="text-[11px] uppercase tracking-widest text-[#72b09e] font-mono mt-1">
            (Through continuous effort, everything is achievable)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-[#10b981] rounded-tl-lg pointer-events-none z-20" />
              <div className="absolute -top-3 -right-3 w-10 h-10 border-r-2 border-t-2 border-[#10b981] rounded-tr-lg pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 border-l-2 border-b-2 border-[#10b981] rounded-bl-lg pointer-events-none z-20" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-[#10b981] rounded-br-lg pointer-events-none z-20" />

              <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl border border-[#193d37] group">
                <div className="h-88 sm:h-96 w-full rounded-xl bg-gradient-to-b from-[#0b211e] to-[#061412] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-[#10b981]">
                    <circle cx="100" cy="100" r="80" strokeWidth="0.5" fill="none" />
                    <polygon points="100,20 170,160 30,160" strokeWidth="0.5" fill="none" />
                  </svg>

                  <div className="w-24 h-24 rounded-full bg-[#10b981]/15 border-2 border-[#10b981]/40 flex items-center justify-center mb-6 text-[#10b981] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <FaCode className="text-4xl text-[#10b981]" />
                  </div>

                  <h3 className="font-serif text-3xl font-normal text-[#e6f7f2] mb-1">
                    Malak Maisuriya
                  </h3>
                  <p className="text-xs text-[#34d399] uppercase font-mono tracking-widest font-semibold px-4 py-1 rounded-full bg-[#34d399]/10 border border-[#34d399]/30">
                    BCA Sem 5 • Surat
                  </p>

                  <div className="w-12 h-0.5 bg-[#10b981]/30 my-4" />

                  <p className="text-xs text-[#72b09e] max-w-xs font-normal">
                    Aspiring Full Stack Web Developer & Algorithmic Problem Solver
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-light text-[#e6f7f2] leading-snug">
                Building Modern Web Solutions with <span className="font-serif italic font-normal text-[#10b981]">Passion & Precision</span>
              </h3>
              
              {aboutData.paragraphs.map((para, i) => (
                <p key={i} className="text-[#72b09e] text-base sm:text-lg leading-relaxed font-normal">
                  {para}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {aboutData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel border border-[#193d37] hover:border-[#10b981]/50 transition-all text-center space-y-1"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-gradient-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase font-mono font-bold text-[#e6f7f2] tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#72b09e] font-normal">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-2.5">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#34d399] font-semibold">
                Highlights & Focus:
              </h4>
              {aboutData.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-[#e6f7f2] text-sm">
                  <FaCheckCircle className="text-[#10b981] text-sm shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-normal text-[#e6f7f2]">
                  Academic Timeline
                </h3>
                <p className="text-xs font-mono uppercase text-[#72b09e] tracking-wider">Education & Qualification</p>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-[#193d37] space-y-8">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-[#10b981] transition-colors ${edu.highlight ? 'bg-[#10b981]' : 'bg-[#061412]'}`} />
                  
                  <div className="glass-panel p-6 rounded-2xl border border-[#193d37] hover:border-[#10b981]/50 transition-all space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#72b09e] font-mono">
                      <span className="flex items-center gap-1.5 text-[#10b981]">
                        <FaCalendarAlt className="text-[10px]" /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[10px]" /> {edu.location}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-normal text-[#e6f7f2]">
                      {edu.degree}
                    </h4>

                    <div className="text-sm font-semibold text-[#34d399]">
                      {edu.institution}
                    </div>

                    <p className="text-[#72b09e] text-xs leading-relaxed">
                      {edu.details}
                    </p>

                    <div className="pt-2">
                      <span className="inline-block text-[10px] uppercase font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981]">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#34d399]/15 border border-[#34d399]/30 flex items-center justify-center text-[#34d399]">
                <FaCertificate className="text-2xl" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-normal text-[#e6f7f2]">
                  Professional Training
                </h3>
                <p className="text-xs font-mono uppercase text-[#72b09e] tracking-wider">Certification & Specialization</p>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-[#193d37] space-y-8">
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-[#34d399] bg-[#34d399]" />
                
                <div className="glass-panel p-6 rounded-2xl border border-[#193d37] hover:border-[#34d399]/50 transition-all space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#72b09e] font-mono">
                    <span className="flex items-center gap-1.5 text-[#34d399]">
                      <FaCalendarAlt className="text-[10px]" /> {certificationData.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#34d399]/10 border border-[#34d399]/30 text-[#34d399] font-semibold text-[10px] uppercase">
                      {certificationData.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-normal text-[#e6f7f2]">
                    {certificationData.title}
                  </h4>

                  <div className="text-sm font-semibold text-[#10b981]">
                    {certificationData.institute}
                  </div>

                  <p className="text-[#72b09e] text-xs leading-relaxed">
                    {certificationData.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'].map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#0b211e] border border-[#193d37] text-[#10b981]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
