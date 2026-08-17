import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiHackerrank, SiNetlify } from 'react-icons/si';
import { codingProfilesData } from '../data/portfolioData';

const brandIconMap = {
  GitHub: <FaGithub className="text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />,
  HackerRank: <SiHackerrank className="text-3xl text-[#2EC866] drop-shadow-[0_0_10px_rgba(46,200,102,0.4)]" />,
  LinkedIn: <FaLinkedin className="text-3xl text-[#0A66C2] drop-shadow-[0_0_10px_rgba(10,102,194,0.4)]" />,
  Netlify: <SiNetlify className="text-3xl text-[#00C7B7] drop-shadow-[0_0_10px_rgba(0,199,183,0.4)]" />,
};

export default function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-28 bg-[#061412] overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[550px] h-[550px] bg-[#10b981]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#34d399]/6 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Spinning Radar Constellation Ring) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] animate-spin-reverse-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <circle cx="250" cy="250" r="240" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="170" stroke="rgba(52,211,153,0.35)" strokeWidth="0.6" strokeDasharray="6 6" />
            <line x1="250" y1="10" x2="250" y2="490" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
            <line x1="10" y1="250" x2="490" y2="250" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
            <circle cx="250" cy="10" r="6" fill="#10b981" />
            <circle cx="490" cy="250" r="6" fill="#34d399" />
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
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono tracking-[0.25em] uppercase">
            <span>◆ ONLINE PRESENCE ◆</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Developer Profiles & Badges
          </h2>
          <p className="text-[#72b09e] text-base max-w-xl mx-auto">
            Live coding stats, verified skill badges, open source repositories, and online portfolio links.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#10b981] to-[#34d399] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfilesData.map((profile, idx) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-3xl border border-[#193d37] hover:border-[#10b981]/50 hover:shadow-xl hover:shadow-[#10b981]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header with Brand Logo */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#061412]/90 border border-[#193d37] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-[#10b981] transition-all">
                    {brandIconMap[profile.platform]}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
                    {profile.badge}
                  </span>
                </div>

                {/* Platform Name & Handle */}
                <div>
                  <h3 className="text-xl font-bold text-[#e6f7f2] tracking-tight group-hover:text-[#10b981] transition-colors">
                    {profile.platform}
                  </h3>
                  <p className="text-xs font-mono text-[#10b981] font-semibold mt-0.5">
                    {profile.handle}
                  </p>
                </div>

                {/* Stats & Substat */}
                <div className="space-y-1 pt-1">
                  <div className="text-sm font-bold text-[#34d399]">
                    {profile.stat}
                  </div>
                  <p className="text-[#72b09e] text-xs leading-relaxed font-normal">
                    {profile.substat}
                  </p>
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-5 border-t border-[#193d37] mt-4">
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#061412] border border-[#193d37] text-[#10b981] hover:bg-[#10b981] hover:text-[#061412] text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  View Profile <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
