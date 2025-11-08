import React from 'react';
import { Wrench, Sparkles, Globe, Megaphone, Code2, BarChart3 } from 'lucide-react';

const skillGroups = [
  {
    icon: Globe,
    title: 'SEO Expertise',
    items: [
      'On-Page: meta, schema, speed, internal linking',
      'Off-Page: backlinks, outreach, indexing, authority',
      'Local SEO: GMB, citations, reviews',
      'Technical SEO: crawlability, indexation, CWV',
      'AEO & GEO'
    ]
  },
  {
    icon: Megaphone,
    title: 'Digital Advertising',
    items: ['Google Ads: Search, Display, Retargeting', 'Meta Ads: FB & IG']
  },
  {
    icon: Code2,
    title: 'Web & Tech',
    items: ['WordPress (custom + plugins)', 'HTML, CSS, JavaScript', 'Google API Integration']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Tools',
    items: [
      'GA4, GSC, GTM',
      'SEMrush, Ahrefs, Moz, Screaming Frog, SERanking',
      'Ubersuggest'
    ]
  },
  {
    icon: Sparkles,
    title: 'Content & AI',
    items: ['Runway, Opus Clip, Descript, Sora', 'Google CLI']
  },
  {
    icon: Wrench,
    title: 'Design & Editing',
    items: ['Canva, Photoshop, Illustrator', 'Premiere Pro, DaVinci Resolve']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-2xl font-bold sm:text-3xl">Core Competencies</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 inline-flex items-center gap-2">
                <Icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                {items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
