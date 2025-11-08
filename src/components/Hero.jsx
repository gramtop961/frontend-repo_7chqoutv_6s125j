import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, Github, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 220px rgba(2,6,23,0.8)' }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-6 pt-28 sm:pt-36 lg:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-emerald-400" />
          <span className="tracking-wide text-white/80">Technical SEO & Growth Strategy Expert</span>
        </div>

        <h1 className="font-extrabold leading-tight tracking-tight">
          <span className="block text-3xl text-white/80 sm:text-4xl">MD AREEB ANSARI</span>
          <span className="mt-2 block bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-4xl text-transparent sm:text-6xl lg:text-7xl">
            SEO & Performance Marketing Specialist
          </span>
        </h1>

        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          Full-Stack Digital Marketer with 3 years of experience improving organic visibility, rankings, and paid campaign ROI. Specialized in technical SEO, link-building strategy, and conversion-led content frameworks. Proven record of driving 60%–120% organic traffic growth across SaaS, service, and local brands.
        </p>

        <div className="grid w-full gap-4 sm:flex sm:w-auto sm:items-center">
          <a
            href="mailto:areeb722@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="https://github.com/areeb722"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-white/70 sm:grid-cols-3">
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-cyan-300" /> Noida, UP
          </div>
          <div className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-cyan-300" /> +91 8210967985
          </div>
          <div className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-cyan-300" /> areeb722@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
}
