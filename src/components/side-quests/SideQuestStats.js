import React from 'react';
import ComicSFX from '../ComicSFX';

export default function SideQuestStats() {
  const stats = [
    { 
      number: "5", 
      label: "Projects Built for Myself", 
      detail: "Independent creations shipped end-to-end",
      code: "QUEST // 01" 
    },
    { 
      number: "2", 
      label: "In Progress", 
      detail: "Kioku, AI experiment",
      code: "QUEST // 02" 
    },
    { 
      number: "5", 
      label: "Platforms Conquered", 
      detail: "Android, iOS, Web, Windows, Roblox",
      code: "QUEST // 03" 
    },
    { 
      number: "NEXT", 
      label: "Smartwatches (Upcoming)", 
      detail: "Upcoming wearable platform exploration",
      code: "QUEST // 04" 
    }
  ];

  return (
    <section id="side-stats" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="section-tag-warm mb-1">Self-Directed Output</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-1)]">
              Side Quest Stats
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <ComicSFX text="BUILT!" color="warm" rotate={-4} size="lg" />
            <ComicSFX text="5 PLATFORMS" color="magenta" rotate={3} size="sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="comic-panel-warm p-6 text-center fade-up relative overflow-hidden group"
              data-delay={i * 70}
            >
              <div 
                className="absolute inset-0 comic-halftone-warm opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="flex items-center justify-between mb-3 text-[10px] font-mono font-bold tracking-widest text-[var(--accent-side)] uppercase border-b border-black pb-1.5 relative z-10">
                <span>{stat.code}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-side)]" />
              </div>

              <div className="stat-num-warm text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tight relative z-10">
                {stat.number}
              </div>

              <div className="text-sm font-bold text-[#f1f5f9] mb-1.5 relative z-10">
                {stat.label}
              </div>

              <div className="text-xs text-[var(--text-2)] font-mono relative z-10">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
