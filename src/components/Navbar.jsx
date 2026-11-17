import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaPaperPlane,
  FaGithub,
  FaHome,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaGlobe,
  FaEnvelope,
  FaChevronUp
} from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home', icon: FaHome },
  { name: 'Projects', href: '#projects', icon: FaLaptopCode },
  { name: 'Skills', href: '#skills', icon: FaCode },
  { name: 'About', href: '#about', icon: FaUser },
  { name: 'Course', href: '#course', icon: FaGraduationCap },
  { name: 'Profiles', href: '#profiles', icon: FaGlobe },
  { name: 'Contact', href: '#contact', icon: FaEnvelope },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* TOP HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06141B]/90 backdrop-blur-md border-b border-[#4A5C6A]/30 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo (Kern Society Typographic Wordmark) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group font-display text-base sm:text-lg font-black tracking-tighter uppercase text-[#CCD0CF] flex items-center gap-1.5"
            >
              <span>MALAK</span>
              <span className="text-[#9BA8AB] group-hover:text-white transition-colors">
                MAISURIYA
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#252745] text-[#9BA8AB] border border-[#4A5C6A]/50 hidden sm:inline-block">
                DEV
              </span>
            </a>

            {/* Top Nav Links */}
            <AnimatePresence>
              {!isScrolled && (
                <motion.nav
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="hidden lg:flex items-center gap-1 bg-[#11212D]/85 p-1.5 rounded-full border border-[#4A5C6A]/40 backdrop-blur-md shadow-sm"
                >
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 uppercase tracking-wider ${
                          isActive
                            ? 'text-[#06141B] font-bold'
                            : 'text-[#9BA8AB] hover:text-[#CCD0CF] hover:bg-[#252745]/60'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTabTop"
                            className="absolute inset-0 bg-[#CCD0CF] rounded-full -z-10 shadow-sm"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        {link.name}
                      </a>
                    );
                  })}
                </motion.nav>
              )}
            </AnimatePresence>

            {/* Header Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#CCD0CF] bg-[#11212D] border border-[#4A5C6A] rounded-xl hover:border-[#9BA8AB] hover:bg-[#252745] transition-all duration-200"
                title="View GitHub Profile"
              >
                <FaGithub className="text-sm text-[#9BA8AB]" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#06141B] bg-[#CCD0CF] hover:bg-white rounded-xl transition-all duration-200 shadow-sm group"
              >
                <span>Let's Talk</span>
                <FaPaperPlane className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] hover:border-[#9BA8AB] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-b border-[#4A5C6A]/30 bg-[#06141B]/98 backdrop-blur-xl overflow-hidden mt-3 shadow-xl"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'bg-[#CCD0CF] text-[#06141B] font-bold'
                          : 'text-[#9BA8AB] hover:bg-[#11212D] hover:text-[#CCD0CF]'
                      }`}
                    >
                      <Icon className="text-sm" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={personalDetails.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-center text-xs uppercase font-bold text-[#CCD0CF] bg-[#11212D] border border-[#4A5C6A] rounded-xl hover:border-[#9BA8AB] transition-all"
                  >
                    <FaGithub className="text-sm text-[#9BA8AB]" /> GitHub Profile
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-center text-xs uppercase font-bold text-[#06141B] bg-[#CCD0CF] rounded-xl shadow-md"
                  >
                    Let's Talk <FaPaperPlane className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* FLOATING SIDEBAR DOCK WHEN SCROLLED */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3"
          >
            <div className="bg-[#11212D]/95 backdrop-blur-2xl border border-[#4A5C6A]/50 p-2 rounded-full shadow-2xl shadow-black/50 flex flex-col items-center gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative group p-2.5 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer"
                    title={link.name}
                  >
                    {/* Tooltip on Hover */}
                    <div className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#06141B] border border-[#4A5C6A] text-[#CCD0CF] text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-xl">
                      {link.name}
                      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#06141B] border-t border-r border-[#4A5C6A] rotate-45" />
                    </div>

                    <Icon
                      className={`text-base transition-transform duration-200 group-hover:scale-110 ${
                        isActive ? 'text-[#06141B] font-bold z-10' : 'text-[#9BA8AB] group-hover:text-[#CCD0CF]'
                      }`}
                    />

                    {isActive && (
                      <motion.div
                        layoutId="activeSideDockPill"
                        className="absolute inset-0 bg-[#CCD0CF] rounded-full z-0 shadow-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Back To Top Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] hover:bg-[#252745] hover:border-[#9BA8AB] transition-all shadow-lg shadow-black/40 cursor-pointer group"
              title="Scroll to Top"
            >
              <FaChevronUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
