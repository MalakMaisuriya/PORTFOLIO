import React from 'react';

const tickerItems = [
  { tag: 'STACK', label: 'FULL STACK MERN DEVELOPER' },
  { tag: 'CORE', label: 'REACT JS • NODE.JS • EXPRESS • MONGODB' },
  { tag: 'LOGIC', label: 'C++ DATA STRUCTURES & ALGORITHMS' },
  { tag: 'EDUCATION', label: 'VIDHYADEEP UNIVERSITY // BCA' },
  { tag: 'CERTIFICATION', label: 'RED & WHITE MULTIMEDIA EDUCATION' },
  { tag: 'STATUS', label: 'AVAILABLE FOR ROLES & OPPORTUNITIES' },
  { tag: 'LOCATION', label: 'SURAT, GUJARAT, INDIA' },
  { tag: 'REPOS', label: '15+ PUBLIC GITHUB REPOSITORIES' },
];

export default function TickerTape({ className = '' }) {
  // Duplicate array for seamless infinite looping
  const repeatedItems = [...tickerItems, ...tickerItems];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-[#4A5C6A]/35 bg-[#11212D]/60 backdrop-blur-md py-3 select-none ${className}`}
      style={{ boxShadow: 'inset 0 1px 0 0 rgba(204, 208, 207, 0.05)' }}
      aria-label="Scrolling ticker announcements"
    >
      {/* Edge gradient masks for smooth fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#06141B] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#06141B] to-transparent z-10" />

      <div className="animate-ticker flex items-center gap-8 sm:gap-12">
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 shrink-0 font-mono text-xs sm:text-sm tracking-wider uppercase"
          >
            <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-[#252745] border border-[#4A5C6A]/60 text-[#CCD0CF] font-semibold">
              [{item.tag}]
            </span>
            <span className="text-[#CCD0CF] font-medium tracking-widest font-display">
              {item.label}
            </span>
            <span className="text-[#9BA8AB]/60 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

