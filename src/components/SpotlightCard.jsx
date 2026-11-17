import React, { useRef, useState } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(204, 208, 207, 0.08)',
  borderColor = 'rgba(155, 168, 171, 0.4)',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl bg-[#11212D]/90 border border-[#4A5C6A]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#06141B]/80 group ${className}`}
      style={{
        boxShadow: 'inset 0 1px 0 0 rgba(204, 208, 207, 0.08)',
      }}
      {...props}
    >
      {/* AI Designer Mouse-Following Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Dynamic Border Glow Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          border: `1px solid ${borderColor}`,
        }}
        aria-hidden="true"
      />

      {/* Card Inner Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

