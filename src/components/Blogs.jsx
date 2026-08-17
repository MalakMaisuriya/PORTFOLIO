import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight, FaTag } from 'react-icons/fa';
import { blogsData } from '../data/portfolioData';

export default function Blogs() {
  return (
    <section id="blogs" className="relative py-28 bg-[#080c14] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

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
            <span>◆ BLOGS ◆</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Articles & Thoughts
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-normal">
            Insights, tutorials, and engineering notes on web architecture, MERN stack, and problem-solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-3" />
        </motion.div>

        {/* Blogs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {blogsData.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-3xl border border-indigo-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="inline-flex items-center gap-1.5 text-indigo-400 font-semibold">
                    <FaTag className="text-[10px]" /> {blog.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <FaClock className="text-[10px]" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {blog.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-indigo-500/15 flex items-center justify-between mt-6">
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <FaCalendarAlt className="text-[10px] text-cyan-400" /> {blog.date}
                </span>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors group/link"
                >
                  Read Article
                  <FaArrowRight className="text-[10px] group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
