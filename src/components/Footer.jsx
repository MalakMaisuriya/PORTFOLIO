import React from 'react';
import { FaCode, FaGithub, FaLinkedin, FaHeart, FaChevronUp } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#091313] border-t border-[#2a4040] pt-16 pb-12 text-[#8ba8a2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#2a4040]">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#45a096] to-[#c9a962] flex items-center justify-center text-[#0d1a1a] font-extrabold shadow-lg">
              <FaCode className="text-xl" />
            </div>
            <div>
              <span className="text-xl font-bold text-[#e8f0ee] tracking-tight">
                Malak <span className="text-[#c9a962]">Maisuriya</span>
              </span>
              <p className="text-xs text-[#8ba8a2]">Full Stack MERN Developer • BCA Sem 5</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#122424] border border-[#2a4040] text-[#e8f0ee] hover:text-[#45a096] hover:border-[#45a096] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#122424] border border-[#2a4040] text-[#e8f0ee] hover:text-[#45a096] hover:border-[#45a096] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#45a096]/15 border border-[#45a096]/40 text-[#45a096] hover:bg-[#45a096] hover:text-[#0d1a1a] transition-all ml-2"
              title="Back to Top"
            >
              <FaChevronUp className="text-sm" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8ba8a2] gap-4">
          <p>© {new Date().getFullYear()} Malak Maisuriya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <FaHeart className="text-[#c9a962] text-xs" /> using React, Tailwind CSS & Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}
