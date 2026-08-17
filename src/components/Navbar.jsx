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
  { name: 'About', href: '#about', icon: FaUser },
  { name: 'Skills', href: '#skills', icon: FaCode },
  { name: 'Projects', href: '#projects', icon: FaLaptopCode },
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
      setIsScrolled(window.scrollY > 100);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 250;

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
      {/* TOP HEADER (FIXED NAVBAR AT VERY TOP) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#061412]/90 backdrop-blur-md border-b border-[#193d37] py-3 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group font-serif text-2xl font-normal tracking-tight text-[#e6f7f2]"
            >
              <span className="font-serif italic text-[#34d399] group-hover:text-[#10b981] transition-colors">
                Malak Maisuriya
              </span>
            </a>

            {/* Standard Top Nav Links (Visible when NOT scrolled on desktop) */}
            <AnimatePresence>
              {!isScrolled && (
                <motion.nav
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="hidden lg:flex items-center gap-1 bg-[#0b211e]/90 p-1.5 rounded-full border border-[#193d37] backdrop-blur-md shadow-lg"
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
                            ? 'text-[#061412] font-bold'
                            : 'text-[#72b09e] hover:text-white hover:bg-[#10b981]/15'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTabTop"
                            className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full -z-10 shadow-md shadow-[#10b981]/30"
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
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#e6f7f2] bg-[#0b211e] border border-[#193d37] rounded-full hover:border-[#10b981] hover:text-[#10b981] hover:bg-[#10b981]/10 transition-all duration-300"
                title="View GitHub Profile"
              >
                <FaGithub className="text-sm text-[#10b981]" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative inline-flex items-center justify-center px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/40 rounded-full hover:bg-[#10b981] hover:text-[#061412] transition-all duration-300 shadow-md shadow-[#10b981]/10 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk{' '}
                  <FaPaperPlane className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#0b211e] border border-[#193d37] text-[#e6f7f2] hover:border-[#10b981] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
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
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-b border-[#193d37] bg-[#061412]/98 backdrop-blur-xl overflow-hidden mt-3"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
                        activeSection === link.href.substring(1)
                          ? 'bg-[#10b981] text-[#061412] font-bold'
                          : 'text-[#72b09e] hover:bg-[#10b981]/20 hover:text-white'
                      }`}
                    >
                      <Icon className="text-base" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={personalDetails.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 text-center text-xs uppercase font-bold text-[#e6f7f2] bg-[#0b211e] border border-[#193d37] rounded-xl hover:border-[#10b981] transition-all"
                  >
                    <FaGithub className="text-sm text-[#10b981]" /> GitHub Profile
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 text-center text-xs uppercase font-bold text-[#061412] bg-[#10b981] rounded-xl shadow-lg"
                  >
                    Let's Talk <FaPaperPlane className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DOCKED FLOATING SIDEBAR NAVIGATION (DOCKS TO RIGHT SIDE WHEN SCROLLED ON DESKTOP) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3"
          >
            {/* Main Floating Side Pill Dock */}
            <div className="bg-[#0b211e]/95 backdrop-blur-2xl border border-[#193d37] p-2 rounded-full shadow-2xl shadow-black/80 flex flex-col items-center gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative group p-3 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"
                    title={link.name}
                  >
                    {/* Tooltip Label on Hover (Floats to Left) */}
                    <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#061412] border border-[#10b981]/40 text-[#e6f7f2] text-xs font-semibold uppercase tracking-wider whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-xl shadow-black">
                      {link.name}
                      {/* Arrow */}
                      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#061412] border-t border-r border-[#10b981]/40 rotate-45" />
                    </div>

                    {/* Icon */}
                    <Icon
                      className={`text-lg transition-transform duration-200 group-hover:scale-110 ${
                        isActive ? 'text-[#061412] font-bold z-10' : 'text-[#72b09e] group-hover:text-white'
                      }`}
                    />

                    {/* Active Background Pill Glow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSideDockPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full z-0 shadow-lg shadow-[#10b981]/40"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Back To Top Quick Button under Side Pill */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#0b211e]/90 backdrop-blur-xl border border-[#10b981]/40 text-[#10b981] hover:bg-[#10b981] hover:text-[#061412] transition-all shadow-xl shadow-black cursor-pointer group"
              title="Scroll Back To Top"
            >
              <FaChevronUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
