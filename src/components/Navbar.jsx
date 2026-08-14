import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPaperPlane, FaGithub } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Course', href: '#course' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d1a1a]/90 backdrop-blur-md border-b border-[#2a4040] py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group font-serif text-2xl font-normal tracking-tight text-[#e8f0ee]"
          >
            Malak <span className="font-serif italic text-[#c9a962] group-hover:text-[#45a096] transition-colors">Maisuriya</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 bg-[#122424]/90 p-1.5 rounded-full border border-[#2a4040] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 uppercase tracking-wider ${
                    isActive
                      ? 'text-[#0d1a1a] font-bold'
                      : 'text-[#8ba8a2] hover:text-white hover:bg-[#45a096]/15'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#45a096] to-[#c9a962] rounded-full -z-10 shadow-md shadow-[#45a096]/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#e8f0ee] bg-[#122424] border border-[#2a4040] rounded-full hover:border-[#45a096] hover:text-[#45a096] hover:bg-[#45a096]/10 transition-all duration-300"
              title="View GitHub Profile"
            >
              <FaGithub className="text-sm text-[#45a096]" />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#45a096] bg-[#45a096]/10 border border-[#45a096]/40 rounded-full hover:bg-[#45a096] hover:text-[#0d1a1a] transition-all duration-300 shadow-md shadow-[#45a096]/10 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <FaPaperPlane className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#122424] border border-[#2a4040] text-[#e8f0ee] hover:border-[#45a096] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-b border-[#2a4040] bg-[#0d1a1a]/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#45a096] text-[#0d1a1a] font-bold'
                      : 'text-[#8ba8a2] hover:bg-[#45a096]/20 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-center text-xs uppercase font-bold text-[#e8f0ee] bg-[#122424] border border-[#2a4040] rounded-xl hover:border-[#45a096] transition-all"
                >
                  <FaGithub className="text-sm text-[#45a096]" /> GitHub Profile
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-center text-xs uppercase font-bold text-[#0d1a1a] bg-[#45a096] rounded-xl shadow-lg"
                >
                  Let's Talk <FaPaperPlane className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
