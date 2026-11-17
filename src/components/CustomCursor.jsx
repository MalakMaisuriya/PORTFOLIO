import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only initialize custom cursor on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');

      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] shadow-sm shadow-black"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isPointer ? 1.6 : 1,
          backgroundColor: isPointer ? '#FFFFFF' : '#CCD0CF',
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#4A5C6A]/70 bg-[#252745]/20 backdrop-blur-[0.5px] pointer-events-none z-[9998] shadow-sm"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
          borderColor: isPointer ? '#CCD0CF' : 'rgba(155, 168, 171, 0.4)',
          backgroundColor: isPointer ? 'rgba(37, 39, 69, 0.4)' : 'rgba(37, 39, 69, 0.15)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}
      />
    </>
  );
}
