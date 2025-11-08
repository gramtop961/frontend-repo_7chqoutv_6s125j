import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCerts from './components/EducationCerts';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white" id="top">
      <HeaderNav />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <EducationCerts />
      <Footer />
      <BackToTop />
    </div>
  );
}
