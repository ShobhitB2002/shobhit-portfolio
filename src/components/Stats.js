import React from 'react';
import ComicSFX from './ComicSFX';

export default function Stats() {
  const stats = [
    { number: "3 YRS",    label: "Production Experience",  code: "METRIC // 01" },
    { number: "10",       label: "Live App Store Apps",    code: "METRIC // 02" },
    { number: "115K+",    label: "US App Store Ratings",   code: "METRIC // 03" },
    { number: "4.5–4.7★", label: "App Store Rating",       code: "METRIC // 04" },
    { number: "60+",      label: "Releases Shipped",       code: "METRIC // 05" }
  ];

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header with sound effect accent */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="section-tag mb-1">Battle-Tested Record</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-1)]">
              Production Stats
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <ComicSFX text="SHIPPED!" rotate={-5} size="lg" />
            <ComicSFX text="VERIFIED!" rotate={4} size="sm" />
          </div>
        </div>

        {/* Comic Stat Panels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`comic-panel p-5 sm:p-7 text-center fade-up relative overflow-hidden group ${
                i === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
              data-delay={i * 70}
            >
              {/* Halftone texture background on card */}
              <div 
                className="absolute inset-0 comic-halftone-card opacity-25 group-hover:opacity-45 transition-opacity duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Panel Top Identifier */}
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono font-bold tracking-widest text-[var(--accent)] uppercase border-b border-black pb-1.5">
                <span>{stat.code}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              </div>

              {/* Metric Number */}
              <div className="stat-num text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tight">
                {stat.number}
              </div>

              {/* Metric Label */}
              <div className="text-xs sm:text-sm font-semibold text-[var(--text-2)] group-hover:text-[var(--text-1)] transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
