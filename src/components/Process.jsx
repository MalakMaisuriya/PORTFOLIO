import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaDraftingCompass, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { processData } from '../data/portfolioData';

const processIcons = {
  FaLightbulb: <FaLightbulb className="text-cyan-400 text-xl" />,
  FaDraftingCompass: <FaDraftingCompass className="text-indigo-400 text-xl" />,
  FaLaptopCode: <FaLaptopCode className="text-sky-400 text-xl" />,
  FaRocket: <FaRocket className="text-cyan-300 text-xl" />,
};

export default function Process() {
  return (
    <section id="process" className="relative py-28 bg-[#080c14] overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono tracking-[0.25em] uppercase">
            <span>◆ PROCESS ◆</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight">
            Development <span className="font-serif italic font-normal text-gradient-cyan">Workflow</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-normal">
            A structured, 4-step approach to turning complex requirements into production-ready web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-3" />
        </motion.div>

        {/* 4-Step Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-3xl border border-indigo-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background Step Number Overlay */}
              <span className="absolute -top-4 -right-2 font-serif text-8xl font-bold text-cyan-500/10 pointer-events-none group-hover:text-cyan-400/20 transition-colors">
                {item.step}
              </span>

              <div className="space-y-6 z-10">
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center shadow-lg group-hover:border-cyan-400 transition-colors">
                  {processIcons[item.icon]}
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono font-bold text-indigo-400 tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Step Indicator Bar */}
              <div className="pt-6 border-t border-indigo-500/10 mt-6 flex items-center justify-between z-10">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  Step {item.step} of 04
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
