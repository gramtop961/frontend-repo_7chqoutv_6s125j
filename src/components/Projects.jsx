import React from 'react';
import { ExternalLink, Tool, Bot, Globe2, Layers } from 'lucide-react';

const projects = [
  {
    name: 'Khushboo Collection',
    summary: 'Increased brand visibility and customer reach through On-page & Local SEO.',
    tags: ['Local SEO', 'On-Page', 'Citations'],
    link: '#'
  },
  {
    name: "Prakriti's Dental Care (Pune)",
    summary: 'Optimized GMB & local SEO, leading to consistent growth in appointment bookings.',
    tags: ['GMB', 'Local SEO'],
    link: '#'
  },
  {
    name: 'Socialmadaari.com',
    summary: 'Built an SEO tool-rich website using HTML, CSS & JavaScript, integrating multiple utilities.',
    tags: ['SEO Tools', 'Frontend'],
    link: 'https://socialmadaari.com'
  },
  {
    name: 'Inklore Tattoo',
    summary: 'Managed paid ads & social campaigns, boosting online engagement and inquiries.',
    tags: ['Meta Ads', 'Google Ads', 'Creatives'],
    link: '#'
  },
  {
    name: 'OSINT Tool Project',
    summary: 'Linux-based OSINT script for username footprint analysis (B.Tech final year).',
    tags: ['Automation', 'Security'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/20 p-2">
            <Layers className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Selected Work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <ExternalLink className="h-4 w-4 text-white/60 opacity-0 transition group-hover:opacity-100" />
              </div>
              <p className="text-sm text-white/80">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
