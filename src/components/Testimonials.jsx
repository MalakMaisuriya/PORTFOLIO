import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaUserCheck } from 'react-icons/fa';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#080c14] overflow-hidden">
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
            <span>◆ RECOMMENDATIONS ◆</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Peer & Mentor Feedback
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-normal">
            Endorsements from technical instructors and university batchmates.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-8 rounded-3xl border border-indigo-500/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <FaQuoteLeft className="text-4xl text-cyan-500/20 mb-4 group-hover:text-cyan-400/30 transition-colors" />

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-normal mb-6">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-indigo-500/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <FaUserCheck className="text-lg" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-indigo-400 font-medium">
                    {item.title}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
