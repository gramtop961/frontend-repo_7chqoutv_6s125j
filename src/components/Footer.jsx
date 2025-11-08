import React from 'react';

export default function Footer() {
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
