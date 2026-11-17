import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiHackerrank, SiNetlify, SiVercel } from 'react-icons/si';
import { codingProfilesData } from '../data/portfolioData';
import ScrollRevealText from './ScrollRevealText';
import SpotlightCard from './SpotlightCard';

const brandIconMap = {
  GitHub: <FaGithub className="text-2xl text-[#CCD0CF]" />,
  HackerRank: <SiHackerrank className="text-2xl text-[#2EC866]" />,
  LinkedIn: <FaLinkedin className="text-2xl text-[#0A66C2]" />,
  Netlify: <SiNetlify className="text-2xl text-[#00C7B7]" />,
  Vercel: <SiVercel className="text-2xl text-[#CCD0CF]" />,
};

export default function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#11212D]/40 rounded-full blur-[160px] pointer-events-none -z-10" />

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
            <span className="text-[#9BA8AB]">[ 05 // PROFILES ]</span>
            <span>ONLINE PRESENCE</span>
          </div>
          <ScrollRevealText
            text="Developer Profiles"
            as="h2"
            split="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCD0CF] tracking-tighter uppercase font-display block"
          />
          <p className="text-[#9BA8AB] text-sm sm:text-base max-w-xl mx-auto">
            Verified problem-solving stats, open source contributions, and verified certifications.
          </p>
          <div className="w-12 h-1 bg-[#4A5C6A] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Profiles Grid with Spotlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfilesData.map((profile, idx) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {/* Header with Brand Logo */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#252745] border border-[#4A5C6A]/60 flex items-center justify-center shadow-inner">
                      {brandIconMap[profile.platform]}
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-md bg-[#252745] text-[#CCD0CF] border border-[#4A5C6A]/60">
                      {profile.badge}
                    </span>
                  </div>

                  {/* Platform Name & Handle */}
                  <div>
                    <h3 className="text-lg font-bold text-[#CCD0CF] group-hover:text-white transition-colors">
                      {profile.platform}
                    </h3>
                    <p className="text-xs font-mono text-[#9BA8AB] mt-0.5">
                      {profile.handle}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-[#CCD0CF]">
                      {profile.stat}
                    </div>
                    <p className="text-[#9BA8AB] text-xs leading-relaxed">
                      {profile.substat}
                    </p>
                  </div>

                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-[#4A5C6A]/30 mt-4">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#06141B] border border-[#4A5C6A] text-[#CCD0CF] hover:bg-[#252745] hover:border-[#9BA8AB] text-xs font-semibold uppercase tracking-wider transition-all duration-150"
                  >
                    View Profile <FaExternalLinkAlt className="text-[10px]" />
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
