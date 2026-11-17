import React from 'react';
import { FaCode, FaGithub, FaLinkedin, FaHeart, FaChevronUp } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-transparent border-t border-[#4A5C6A]/30 pt-14 pb-10 text-[#9BA8AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#4A5C6A]/30">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#11212D] border border-[#4A5C6A] flex items-center justify-center text-[#CCD0CF] font-bold shadow-md">
              <FaCode className="text-base" />
            </div>
            <div>
              <span className="text-base font-bold text-[#CCD0CF] tracking-tight">
                Malak Maisuriya
              </span>
              <p className="text-[11px] text-[#9BA8AB]">Full-Stack Web Developer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] hover:bg-[#252745] hover:border-[#9BA8AB] transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-[#0A66C2] hover:bg-[#252745] hover:border-[#9BA8AB] transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-base" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] hover:bg-[#252745] hover:border-[#9BA8AB] transition-all cursor-pointer ml-1"
              title="Back to Top"
            >
              <FaChevronUp className="text-xs" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9BA8AB] gap-3">
          <p>© {new Date().getFullYear()} Malak Maisuriya. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-[#9BA8AB] text-[10px]" /> using React 19, Three.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
