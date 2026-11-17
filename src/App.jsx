import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CourseCurriculum from './components/CourseCurriculum';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import GlobalBackgroundCanvas from './components/GlobalBackgroundCanvas';
import TickerTape from './components/TickerTape';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-[#06141B] text-[#CCD0CF] font-sans selection:bg-[#4A5C6A] selection:text-[#CCD0CF] antialiased overflow-x-hidden relative">
      <div className="noise-overlay" />
      <GlobalBackgroundCanvas />
      
      {/* Scroll Progress Bar at the Top */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4A5C6A] via-[#9BA8AB] to-[#CCD0CF] origin-left z-50 shadow-[0_0_10px_rgba(204,208,207,0.4)]"
      />

      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          key="main-website-content"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <Navbar />
          <main>
            <Hero />
            <TickerTape />
            <Projects />
            <Skills />
            <About />
            <CourseCurriculum />
            <CodingProfiles />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
