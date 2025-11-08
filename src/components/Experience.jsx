import React from 'react';
import { Briefcase, MapPin, TrendingUp, CheckCircle2 } from 'lucide-react';

const roles = [
  {
    company: 'Mezzex Technology',
    title: 'SEO Expert',
    period: 'Feb 2024 – Present',
    bullets: [
      'Improved organic keyword rankings with technical SEO corrections, schema, and Core Web Vitals.',
      'Boosted domain authority via targeted link-building and guest posting.',
      'Ran deep-dive audits using Ahrefs, Screaming Frog, and GSC for quarter-over-quarter gains.',
      'Achieved top-3 Map Pack rankings for Spacebox through GMB optimization and citation cleanup.'
    ]
  },
  {
    company: 'Apple Education & Immigration Consultancy, Australia',
    title: 'Digital Marketing Executive',
    period: 'Feb 2023 – Jan 2024',
    bullets: [
      'Designed SEO campaigns combining on-page, content, and social signals.',
      'Resolved crawl errors, improved indexation, and optimized Core Web Vitals.',
      'Performed keyword mapping, competitor analysis, and schema implementation.'
    ]
  },
  {
    company: 'Digital Dhanu Pvt. Ltd.',
    title: 'Intern',
    period: 'Dec 2022 – Feb 2023',
    bullets: [
      'Assisted in SEO audits and keyword research for client websites.',
      'Supported link-building outreach campaigns and reporting.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-emerald-500/20 p-2">
            <Briefcase className="h-5 w-5 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Professional Experience</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.company} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{r.title}</h3>
                  <p className="text-white/80">{r.company}</p>
                </div>
                <span className="text-xs text-white/60">{r.period}</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6">
            <div className="flex items-center gap-2 text-emerald-300">
              <TrendingUp className="h-4 w-4" />
              <p className="text-sm">Impact Highlights</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>60%–120% organic traffic growth across SaaS, service, and local brands.</li>
              <li>Top 10 rankings through schema audits and technical SEO fixes.</li>
              <li>+10–15 domain authority improvement via backlink programs.</li>
              <li>20%–30% more local inquiries with GMB optimization.</li>
              <li>35%+ social engagement lift through targeted paid and organic campaigns.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
