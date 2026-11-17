import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode, FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { aboutData, educationData, certificationData } from '../data/portfolioData';
import ScrollRevealText from './ScrollRevealText';
import SpotlightCard from './SpotlightCard';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#11212D]/40 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11212D] border border-[#4A5C6A]/50 text-[#CCD0CF] text-xs font-mono tracking-wider uppercase font-semibold">
            <span className="text-[#9BA8AB]">[ 03 // PROFILE ]</span>
            <span>BACKGROUND & EXPERTISE</span>
          </div>
          <ScrollRevealText
            text="Engineering & Bio"
            as="h2"
            split="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCD0CF] tracking-tighter uppercase font-display block"
          />
          <div className="w-12 h-1 bg-[#4A5C6A] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Sanskrit Watermark Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-4 mb-16 overflow-hidden border-y border-[#4A5C6A]/30 bg-[#11212D]/40 text-center"
        >
          <p className="italic text-base sm:text-xl text-[#CCD0CF] tracking-wide font-normal">
            "{aboutData.watermark}"
          </p>
          <p className="text-[11px] uppercase tracking-widest text-[#9BA8AB] font-mono mt-1">
            Through continuous effort, everything is achievable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">

          {/* Profile Card with Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-sm">
              <SpotlightCard className="p-6 space-y-5">
                <div className="w-16 h-16 rounded-xl bg-[#252745] border border-[#4A5C6A] flex items-center justify-center text-[#CCD0CF] shadow-inner">
                  <FaCode className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#CCD0CF]">
                    Malak Maisuriya
                  </h3>
                  <p className="text-xs text-[#9BA8AB] uppercase font-mono tracking-wider mt-1">
                    BCA Sem 5 • Surat, India
                  </p>
                </div>

                <div className="w-full h-px bg-[#4A5C6A]/40" />

                <p className="text-xs sm:text-sm text-[#9BA8AB] leading-relaxed">
                  Full-Stack Web Developer passionate about building robust applications with clean code, elegant architecture, and seamless user experiences.
                </p>

                <div className="pt-2">
                  <span className="inline-block text-[11px] font-mono px-3 py-1 rounded-full bg-[#252745] border border-[#4A5C6A] text-[#CCD0CF]">
                    MERN & C++ DSA
                  </span>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>

          {/* Biography & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#CCD0CF] leading-snug">
                Building Scalable Solutions with <span className="text-[#9BA8AB]">Engineering Precision</span>
              </h3>
              
              {aboutData.paragraphs.map((para, i) => (
                <p key={i} className="text-[#9BA8AB] text-sm sm:text-base leading-relaxed font-normal">
                  {para}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {aboutData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#11212D] border border-[#4A5C6A]/40 hover:border-[#9BA8AB]/50 transition-all text-center space-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#CCD0CF]">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase font-mono font-semibold text-[#CCD0CF] tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#9BA8AB]">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#CCD0CF] font-semibold">
                Core Strengths:
              </h4>
              {aboutData.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-[#9BA8AB] text-xs sm:text-sm">
                  <FaCheckCircle className="text-[#CCD0CF] text-xs shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Education & Certification Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Academic Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#11212D] border border-[#4A5C6A] flex items-center justify-center text-[#CCD0CF]">
                <FaGraduationCap className="text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#CCD0CF]">
                  Academic Journey
                </h3>
                <p className="text-xs font-mono uppercase text-[#9BA8AB]">Education & Qualifications</p>
              </div>
            </div>

            <div className="relative pl-5 border-l-2 border-[#4A5C6A]/40 space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#4A5C6A] ${edu.highlight ? 'bg-[#CCD0CF]' : 'bg-[#11212D]'}`} />
                  
                  <div className="p-5 rounded-xl bg-[#11212D] border border-[#4A5C6A]/40 hover:border-[#9BA8AB]/50 transition-all space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#9BA8AB] font-mono">
                      <span className="flex items-center gap-1.5 text-[#CCD0CF]">
                        <FaCalendarAlt className="text-[10px]" /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[10px]" /> {edu.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#CCD0CF]">
                      {edu.degree}
                    </h4>

                    <div className="text-xs font-semibold text-[#9BA8AB]">
                      {edu.institution}
                    </div>

                    <p className="text-[#9BA8AB] text-xs leading-relaxed">
                      {edu.details}
                    </p>

                    <div className="pt-1">
                      <span className="inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-[#252745] border border-[#4A5C6A]/60 text-[#CCD0CF]">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#11212D] border border-[#4A5C6A] flex items-center justify-center text-[#CCD0CF]">
                <FaCertificate className="text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#CCD0CF]">
                  Professional Certification
                </h3>
                <p className="text-xs font-mono uppercase text-[#9BA8AB]">Specialized Training</p>
              </div>
            </div>

            <div className="relative pl-5 border-l-2 border-[#4A5C6A]/40 space-y-6">
              <div className="relative group">
                <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#4A5C6A] bg-[#CCD0CF]" />
                
                <div className="p-5 rounded-xl bg-[#11212D] border border-[#4A5C6A]/40 hover:border-[#9BA8AB]/50 transition-all space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#9BA8AB] font-mono">
                    <span className="flex items-center gap-1.5 text-[#CCD0CF]">
                      <FaCalendarAlt className="text-[10px]" /> {certificationData.period}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#252745] border border-[#4A5C6A] text-[#CCD0CF] text-[10px] uppercase font-semibold">
                      {certificationData.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#CCD0CF]">
                    {certificationData.title}
                  </h4>

                  <div className="text-xs font-semibold text-[#9BA8AB]">
                    {certificationData.institute}
                  </div>

                  <p className="text-[#9BA8AB] text-xs leading-relaxed">
                    {certificationData.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'].map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#06141B] border border-[#4A5C6A]/60 text-[#CCD0CF]">
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
