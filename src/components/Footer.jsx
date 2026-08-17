import React from 'react';
import { FaCode, FaGithub, FaLinkedin, FaHeart, FaChevronUp } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#091313] border-t border-[#193d37] pt-16 pb-12 text-[#72b09e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#193d37]">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#10b981] to-[#34d399] flex items-center justify-center text-[#061412] font-extrabold shadow-lg">
              <FaCode className="text-xl" />
            </div>
            <div>
              <span className="text-xl font-bold text-[#e6f7f2] tracking-tight">
                Malak <span className="text-[#34d399]">Maisuriya</span>
              </span>
              <p className="text-xs text-[#72b09e]">Full Stack MERN Developer • BCA Sem 5</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#0b211e] border border-[#193d37] text-white hover:text-[#10b981] hover:border-[#10b981] transition-colors shadow-md"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg text-white" />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#0b211e] border border-[#193d37] text-[#0A66C2] hover:text-sky-300 hover:border-[#0A66C2] transition-colors shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg text-[#0A66C2]" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#10b981]/15 border border-[#10b981]/40 text-[#10b981] hover:bg-[#10b981] hover:text-[#061412] transition-all ml-2"
              title="Back to Top"
            >
              <FaChevronUp className="text-sm" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#72b09e] gap-4">
          <p>© {new Date().getFullYear()} Malak Maisuriya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <FaHeart className="text-[#34d399] text-xs" /> using React, Tailwind CSS & Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}
