import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1a1a] text-[#e8f0ee] font-sans selection:bg-[#45a096] selection:text-[#0d1a1a] antialiased overflow-x-hidden">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CourseCurriculum />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
