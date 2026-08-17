import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
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
      {/* Inner Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#10b981] pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_12px_#10b981]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? '#34d399' : '#10b981',
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#34d399]/70 bg-[#10b981]/10 backdrop-blur-[0.5px] pointer-events-none z-[9998] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isPointer ? 1.6 : 1,
          borderColor: isPointer ? '#10b981' : 'rgba(52, 211, 153, 0.7)',
          backgroundColor: isPointer ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.08)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}
      />
    </>
  );
}
