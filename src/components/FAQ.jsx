import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { faqData } from '../data/portfolioData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#080c14] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono tracking-[0.25em] uppercase">
            <FaQuestionCircle className="text-xs" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got <span className="text-gradient-cyan italic">Questions?</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Quick answers about my skills, availability, and project workflow.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel rounded-2xl border border-indigo-500/20 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-400 text-slate-950' : ''}`}>
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-indigo-500/10 font-normal"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
