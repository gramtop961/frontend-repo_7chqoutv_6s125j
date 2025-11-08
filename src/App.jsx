import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCerts from './components/EducationCerts';
import { ArrowUp } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
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

function HeaderNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white/90">
          MD AREEB ANSARI
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#education" className="hover:text-white">Education</a>
        </nav>
        <a
          href="mailto:areeb722@gmail.com"
          className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-slate-900 shadow-md transition hover:bg-emerald-400"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} MD AREEB ANSARI — SEO & Performance Marketing Specialist</p>
        <p className="mt-2">
          <a href="mailto:areeb722@gmail.com" className="hover:text-white">areeb722@gmail.com</a> ·
          <span className="mx-2">Noida, UP</span> ·
          <a href="https://github.com/areeb722" target="_blank" rel="noreferrer" className="hover:text-white">github.com/areeb722</a>
        </p>
      </div>
    </footer>
  );
}

function BackToTop() {
  const onTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button
      aria-label="Back to top"
      onClick={onTop}
      className="fixed bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur transition hover:bg-white/20"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
