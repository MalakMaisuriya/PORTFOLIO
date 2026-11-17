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
      setStatusText('INITIALIZING...');
    } else if (progress < 60) {
      setStatusText('LOADING ASSETS...');
    } else if (progress < 88) {
      setStatusText('PREPARING INTERFACE...');
    } else if (progress < 100) {
      setStatusText('FINALIZING...');
    } else {
      setStatusText('WELCOME');
    }
  }, [progress]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(6px)' }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#06141B] text-[#CCD0CF] overflow-hidden select-none"
    >
      <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
        <div className="relative">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#11212D] border border-[#4A5C6A] flex items-center justify-center shadow-2xl">
            <FaCode className="text-2xl sm:text-3xl text-[#CCD0CF] animate-pulse" />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#CCD0CF] tracking-tight">
            Malak Maisuriya
          </h2>
          <p className="text-xs font-mono text-[#9BA8AB] tracking-[0.25em] uppercase font-medium">
            Full Stack Developer
          </p>
        </div>

        <div className="w-60 sm:w-72 space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#9BA8AB] tracking-wider uppercase truncate pr-2">{statusText}</span>
            <span className="text-[#CCD0CF] font-bold font-mono">{progress}%</span>
          </div>
          
          <div className="w-full h-1.5 bg-[#11212D] rounded-full overflow-hidden border border-[#4A5C6A]/50 relative">
            <motion.div
              className="h-full bg-[#CCD0CF] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
