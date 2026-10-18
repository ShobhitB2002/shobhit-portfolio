import React from 'react';
import ComicSFX from '../ComicSFX';

export default function SideQuestHeroInfo() {
  return (
    <section id="side-hero" className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="section-tag-warm">Side Quests Dossier</span>
          <ComicSFX text="OFF THE CLOCK!" color="warm" rotate={-3} size="sm" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-1)] tracking-tight glow-pulse-warm mb-2">
              JUGAADU
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[var(--accent-side)] font-mono">
              Gets it done, any way it works.
            </p>
          </div>
          <div className="inline-block">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-[rgba(245,158,11,0.15)] text-[var(--accent-side)] border border-[var(--accent-side)] shadow-[2px_2px_0px_#000]">
              AUTONOMOUS LAB
            </span>
          </div>
        </div>

        {/* Comic Dialogue Panels */}
        <div className="comic-panel-warm p-6 sm:p-8 space-y-6 fade-up relative overflow-hidden">
          {/* Halftone backdrop */}
          <div className="absolute top-0 right-0 w-64 h-64 comic-halftone-warm opacity-30 pointer-events-none" aria-hidden="true" />

          {/* Core Intro Speech Bubble */}
          <div className="comic-speech-bubble-warm comic-speech-tail-bottom p-5 text-left relative z-10">
            <div className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent-side)] uppercase mb-2">
              DISPATCH // PHILOSOPHY IN ACTION
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#f1f5f9] font-medium">
              &ldquo;Off the clock, still building. I&apos;m not limited by platform. If I can imagine it, I can ship it. My AI Council does the heavy lifting. I do the thinking. Log everything. Diagnose everything. Let AI do the work, and keep the judgment yours.&rdquo;
            </p>
          </div>

          {/* Punchline Callout */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#0c0e14] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-between flex-wrap gap-3 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl select-none" aria-hidden="true">⚡</span>
              <p className="text-base sm:text-lg font-bold text-[var(--accent-side-neon)] font-mono">
                On my way to automate myself.
              </p>
            </div>
            <ComicSFX text="SHARP HAND" color="magenta" rotate={2} size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
