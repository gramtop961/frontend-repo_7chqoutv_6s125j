import React from 'react';
import { GraduationCap, BadgeCheck } from 'lucide-react';

const education = [
  { degree: 'B.Tech – Information Technology', place: 'IIMT College of Engineering, Greater Noida', period: '2020 – 2024' },
  { degree: '12th', place: 'Barhi Inter College, Jharkhand', period: '' },
  { degree: '10th', place: 'Sri Ramakrishna Sarada Ashrama (Vivekananda Central School)', period: '' }
];

const certs = [
  'Google Analytics Certification',
  'Google Ads & Meta Ads Program',
  'Advanced ChatGPT & AI Tools Training',
  'Google Digital Garage – Fundamentals of Digital Marketing',
  '10-Finger Typing Certification'
];

export default function EducationCerts() {
  return (
    <section id="education" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-emerald-500/20 p-2">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">Education</h2>
            </div>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">{e.degree}</p>
                  <p className="text-sm text-white/80">{e.place} {e.period && `• ${e.period}`}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/20 p-2">
                <BadgeCheck className="h-5 w-5 text-cyan-300" />
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">Certifications</h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {certs.map((c) => (
                <li key={c} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
