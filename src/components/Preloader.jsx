import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING PORTFOLIO...');

  useEffect(() => {
    let isMounted = true;
    let isWindowLoaded = document.readyState === 'complete';

    const handleWindowLoad = () => {
      isWindowLoaded = true;
    };

    if (!isWindowLoaded) {
      window.addEventListener('load', handleWindowLoad);
    }

    const timer = setInterval(() => {
      if (!isMounted) return;

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (isMounted && onComplete) {
              onComplete();
            }
          }, 350);
          return 100;
        }

        if (isWindowLoaded) {
          const next = prev + Math.floor(Math.random() * 12) + 6;
          return next > 100 ? 100 : next;
        } else {
          if (prev < 88) {
            return prev + Math.floor(Math.random() * 4) + 2;
          }
          return prev;
        }
      });
    }, 40);

    const maxTimeout = setTimeout(() => {
      isWindowLoaded = true;
    }, 3000);

    return () => {
      isMounted = false;
      window.removeEventListener('load', handleWindowLoad);
      clearInterval(timer);
      clearTimeout(maxTimeout);
    };
  }, [onComplete]);

  useEffect(() => {
    if (progress < 30) {
      setStatusText('INITIALIZING PORTFOLIO...');
    } else if (progress < 60) {
      setStatusText('LOADING ASSETS & COMPONENTS...');
    } else if (progress < 88) {
      setStatusText('OPTIMIZING INTERFACE...');
    } else if (progress < 100) {
      setStatusText('FINALIZING EXPERIENCE...');
    } else {
      setStatusText('WELCOME TO THE PORTFOLIO');
    }
  }, [progress]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#061412] text-[#e6f7f2] overflow-hidden select-none"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <div className="w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] animate-spin-slow">
          <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
            <circle cx="300" cy="300" r="280" stroke="#10b981" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="300" cy="300" r="220" stroke="#34d399" strokeWidth="0.8" strokeDasharray="6 6" />
            <circle cx="300" cy="300" r="160" stroke="#10b981" strokeWidth="0.6" />
            <polygon points="300,20 540,460 60,460" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-7 px-4">
        <div className="relative">
          <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#10b981] opacity-60 animate-spin-reverse-slow blur-md" />
          
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0b211e] border-2 border-[#10b981] flex items-center justify-center shadow-2xl shadow-[#10b981]/30">
            <FaCode className="text-3xl sm:text-4xl text-[#10b981] animate-pulse" />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-wide">
            <span className="font-serif italic font-normal text-gradient-teal">Malak Maisuriya</span>
          </h2>
          <p className="text-xs font-mono text-[#34d399] tracking-[0.3em] uppercase">
            Full Stack MERN Developer
          </p>
        </div>

        <div className="w-64 sm:w-80 space-y-2.5 pt-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#72b09e] tracking-wider uppercase truncate pr-2">{statusText}</span>
            <span className="text-[#10b981] font-bold font-mono">{progress}%</span>
          </div>
          
          <div className="w-full h-2 bg-[#0b211e] rounded-full overflow-hidden border border-[#193d37] relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#10b981] via-[#6ee7b7] to-[#34d399] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>
        </div>

        <p className="font-serif italic text-xs text-[#72b09e] tracking-wider pt-2">
          "निरन्तरप्रयत्नेन सर्वं साध्यं भवति"
        </p>
      </div>
    </motion.div>
  );
}

