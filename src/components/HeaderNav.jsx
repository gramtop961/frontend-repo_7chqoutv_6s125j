import React from 'react';

export default function HeaderNav() {
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
