import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1a1a] text-[#e8f0ee] overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] animate-spin-slow">
              <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
                <circle cx="300" cy="300" r="280" stroke="rgba(69,160,150,0.3)" strokeWidth="1" />
                <circle cx="300" cy="300" r="220" stroke="rgba(201,169,98,0.25)" strokeWidth="0.8" strokeDasharray="6 6" />
                <circle cx="300" cy="300" r="160" stroke="rgba(69,160,150,0.2)" strokeWidth="0.6" />
                <polygon points="300,20 540,460 60,460" stroke="rgba(69,160,150,0.2)" strokeWidth="0.6" fill="none" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-6">
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#45a096] via-[#c9a962] to-[#45a096] opacity-60 animate-spin-reverse-slow blur-md" />
              
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#122424] border-2 border-[#45a096] flex items-center justify-center shadow-2xl shadow-[#45a096]/30">
                <FaCode className="text-3xl sm:text-4xl text-[#45a096] animate-pulse" />
              </div>
            </div>

            <div className="text-center space-y-1">
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-wide">
                Malak <span className="font-serif italic font-normal text-gradient-teal">Maisuriya</span>
              </h2>
              <p className="text-xs font-mono text-[#c9a962] tracking-[0.3em] uppercase">
                Full Stack MERN Developer
              </p>
            </div>

            <div className="w-64 sm:w-80 space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#8ba8a2]">
                <span>INITIALIZING SYSTEM</span>
                <span className="text-[#45a096] font-bold">{Math.min(progress, 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#122424] rounded-full overflow-hidden border border-[#2a4040]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#45a096] to-[#c9a962]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>

            <p className="font-serif italic text-xs text-[#8ba8a2] tracking-wider pt-2">
              "निरन्तरप्रयत्नेन सर्वं साध्यं भवति"
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
