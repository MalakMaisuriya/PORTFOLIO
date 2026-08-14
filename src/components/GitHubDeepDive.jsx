import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import { repoDeepDivesData } from '../data/portfolioData';

export default function GitHubDeepDive() {
  return (
    <section id="repos" className="relative py-28 bg-[#080c14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

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
            <FaGithub className="text-sm text-cyan-400" /> REPOSITORY ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GitHub <span className="text-gradient-cyan italic">Deep-Dive</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Detailed breakdown of source code repositories built and maintained by Malak Maisuriya.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {repoDeepDivesData.map((repo, idx) => (
            <motion.div
              key={repo.repoName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-8 rounded-3xl border border-indigo-500/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Row */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold">
                      <FaGithub className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        MalakMaisuriya / {repo.repoName}
                      </h3>
                      <span className="text-xs font-mono text-indigo-400 font-semibold">
                        {repo.language}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-indigo-500/20 text-slate-300 text-[10px] font-mono font-semibold flex items-center gap-1">
                      <FaStar className="text-amber-400 text-[10px]" /> {repo.stars}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-indigo-500/20 text-slate-300 text-[10px] font-mono font-semibold flex items-center gap-1">
                      <FaCodeBranch className="text-cyan-400 text-[10px]" /> {repo.forks}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-normal pt-2">
                  {repo.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold">
                    Technical Highlights:
                  </h4>
                  {repo.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <FaCheck className="text-cyan-400 text-xs shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-indigo-500/15 mt-6">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-slate-200 hover:text-slate-950 hover:bg-cyan-400 hover:border-cyan-400 text-xs font-bold uppercase tracking-wider transition-all duration-200 group/btn"
                >
                  <FaGithub className="text-base text-cyan-400 group-hover/btn:text-slate-950 transition-colors" />
                  Explore Repository Source Code
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
