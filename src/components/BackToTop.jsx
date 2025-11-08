import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
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
