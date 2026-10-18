import React from 'react';
import ComicSFX from '../ComicSFX';

export default function SideQuestTools() {
  const languages = [
    "Swift", 
    "Objective-C", 
    "Dart", 
    "Kotlin", 
    "JavaScript", 
    "HTML/CSS", 
    "C/C++", 
    "PowerShell", 
    "Luau"
  ];

  return (
    <section id="side-tools" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="section-tag-warm">Arsenal &amp; Intelligence</span>
            <ComicSFX text="NO BARRIERS!" color="warm" rotate={-3} size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-1)]">
            Language is not the barrier. Imagination is.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-2)] max-w-xl mx-auto font-medium">
            Multi-platform toolchain amplified by an autonomous local &amp; cloud intelligence council
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Languages Panel */}
          <div className="lg:col-span-6 comic-panel-warm p-6 sm:p-8 fade-up relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 comic-halftone-warm opacity-15 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black">
                <h3 className="text-sm font-mono font-bold tracking-wider text-[var(--accent-side)] uppercase">
                  ACTIVE LANGUAGES &amp; RUNTIMES
                </h3>
                <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold">
                  POLYGLOT MATRIX
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 my-4">
                {languages.map((lang, idx) => (
                  <span key={idx} className="comic-pill-warm text-sm font-semibold">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/40 text-xs text-[var(--text-muted)] font-mono relative z-10">
              Cross-platform versatility across mobile, desktop, game engines, and automation scripts.
            </div>
          </div>

          {/* AI Council Featured Card */}
          <div className="lg:col-span-6 comic-panel-warm p-6 sm:p-8 fade-up relative overflow-hidden border-2 sm:border-[3px] !border-[var(--accent-side)] shadow-[6px_6px_0px_#000] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 comic-halftone-dense-warm opacity-25 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5 pb-2 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🤖</span>
                  <h3 className="text-lg font-black tracking-wider text-[var(--accent-side-neon)]">
                    AI Council
                  </h3>
                </div>
                <ComicSFX text="SHARPEST HAND" color="magenta" rotate={3} size="sm" />
              </div>

              <div className="space-y-3.5 mb-6">
                <div className="p-3.5 rounded-lg bg-[#0c0e16] border border-black shadow-[2px_2px_0px_#000] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-side)] shadow-[0_0_6px_#f59e0b]" />
                  <p className="text-sm font-semibold text-[#f1f5f9]">
                    Cloud and local models, working as one team.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0c0e16] border border-black shadow-[2px_2px_0px_#000] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-side-neon)] shadow-[0_0_6px_#fbbf24]" />
                  <p className="text-sm font-semibold text-[#f1f5f9]">
                    Running local LLMs on my own hardware.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0c0e16] border border-black shadow-[2px_2px_0px_#000] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-side-magenta)] shadow-[0_0_6px_#f43f5e]" />
                  <p className="text-sm font-semibold text-[#f1f5f9]">
                    Favourite in the cloud: Haiku 5.5.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Council Caption Tape */}
            <div className="comic-speech-bubble-warm p-4 text-center relative z-10 mt-2">
              <span className="text-xs sm:text-sm font-mono font-black tracking-wider text-[var(--accent-side-neon)] uppercase">
                &ldquo;Not the biggest model. The sharpest hand.&rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
