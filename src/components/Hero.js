'use client'
import React from 'react';
import ComicPortraitTilt from './ComicPortraitTilt';
import ComicSFX from './ComicSFX';

export default function Hero({ activeQuest, setActiveQuest }) {
  const isMain = activeQuest === 'main';
  const isSide = activeQuest === 'side';

  const selectMain = () => {
    setActiveQuest('main');
    const el = document.getElementById('quest-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const selectSide = () => {
    setActiveQuest('side');
    const el = document.getElementById('quest-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 relative z-10 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Comic Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <ComicSFX text="POW!" rotate={-8} size="sm" />
            <span className="text-xs font-mono font-black tracking-widest text-[#f1f5f9] bg-[#0c1220] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_#000] uppercase">
              DUAL CHRONICLES // ISSUE #02
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--text-muted)] font-bold">
              CURRENT QUEST:
            </span>
            <span 
              className={`text-xs font-mono font-black px-2.5 py-0.5 rounded border border-black shadow-[2px_2px_0px_#000] uppercase ${
                isMain ? 'bg-[var(--accent)] text-[#05070f]' : 'bg-[var(--accent-side)] text-[#05070f]'
              }`}
            >
              {isMain ? 'MAIN QUEST (WORK)' : 'SIDE QUESTS (JUGAADU)'}
            </span>
            <ComicSFX text={isMain ? "CYAN" : "WARM"} color={isMain ? "cyan" : "warm"} rotate={6} size="sm" />
          </div>
        </div>

        {/* Dual Comic Panels Grid: Two Panels Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* ── PANEL 1: MAIN QUEST ── */}
          <div 
            onClick={() => setActiveQuest('main')}
            className={`comic-panel p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden group ${
              isMain 
                ? 'border-2 sm:border-[3px] !border-[var(--accent)] shadow-[8px_8px_0px_#000] ring-1 ring-[var(--accent)]' 
                : 'opacity-85 hover:opacity-100 hover:border-[var(--accent)]'
            }`}
          >
            {/* Halftone backdrop */}
            <div className="absolute top-0 right-0 w-64 h-64 comic-halftone-dense opacity-20 pointer-events-none" aria-hidden="true" />

            {/* Panel Top Badge */}
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_#38bdf8]" />
                <span className="text-xs font-mono font-black tracking-widest text-[var(--accent)] uppercase">
                  PANEL A // MAIN QUEST
                </span>
              </div>
              {isMain && (
                <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-[var(--accent)] text-[#05070f] border border-black shadow-[1px_1px_0px_#000]">
                  ACTIVE VIEW
                </span>
              )}
            </div>

            {/* Portrait & Speech Bubble */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0">
                <ComicPortraitTilt 
                  src="/portrait.jpg" 
                  alt="Shobhit Bansal Work Portrait"
                  theme="cyan"
                  tag="SPEC // iOS-ENG"
                  caption="SHOBHIT BANSAL"
                />
              </div>

              {/* Speech Bubble */}
              <div className="comic-speech-bubble comic-speech-tail-top sm:comic-speech-tail-top p-4 flex-1 text-left">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent)] uppercase block mb-1">
                  DISPATCH
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#f1f5f9] leading-snug">
                  &ldquo;I build iOS apps that connect to hardware. 3 years maintaining 10 live App Store apps for HP, Kodak &amp; Polaroid.&rdquo;
                </p>
              </div>
            </div>

            {/* Text & Metadata */}
            <div className="relative z-10 mb-6">
              <h2 className="glow-pulse text-3xl sm:text-4xl font-black mb-2 tracking-tight text-[var(--text-1)]">
                SHOBHIT BANSAL
              </h2>
              <p className="text-sm sm:text-base font-bold text-[var(--accent)] mb-3">
                iOS Developer | BLE &amp; Connected Hardware Specialist
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                4.5–4.7★, 115,000+ US ratings, 60+ releases. Production engineering across Swift, Objective-C, CoreBluetooth, and Core Data.
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t-2 border-black flex flex-wrap items-center gap-3 relative z-10">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); selectMain(); }}
                className="comic-btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold flex-1"
              >
                <span>Enter Main Quest</span>
                <span className="text-sm font-black">➔</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="comic-btn-ghost px-4 py-2.5 text-xs font-bold"
              >
                Resume
              </a>
              <a
                href="https://github.com/ShobhitB2002"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="comic-btn-ghost px-4 py-2.5 text-xs font-bold"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* ── PANEL 2: SIDE QUESTS ── */}
          <div 
            onClick={() => setActiveQuest('side')}
            className={`comic-panel-warm p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden group ${
              isSide 
                ? 'border-2 sm:border-[3px] !border-[var(--accent-side)] shadow-[8px_8px_0px_#000] ring-1 ring-[var(--accent-side)]' 
                : 'opacity-85 hover:opacity-100 hover:border-[var(--accent-side)]'
            }`}
          >
            {/* Halftone backdrop */}
            <div className="absolute top-0 right-0 w-64 h-64 comic-halftone-dense-warm opacity-25 pointer-events-none" aria-hidden="true" />

            {/* Panel Top Badge */}
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-side)] shadow-[0_0_6px_#f59e0b]" />
                <span className="text-xs font-mono font-black tracking-widest text-[var(--accent-side)] uppercase">
                  PANEL B // SIDE QUESTS
                </span>
              </div>
              {isSide && (
                <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-[var(--accent-side)] text-[#05070f] border border-black shadow-[1px_1px_0px_#000]">
                  ACTIVE VIEW
                </span>
              )}
            </div>

            {/* Portrait & Speech Bubble */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0">
                <ComicPortraitTilt 
                  src="/side-quests/portrait.jpg" 
                  alt="Jugaadu Side Quests Portrait"
                  theme="warm"
                  tag="SIDE QUEST // JUGAADU"
                  caption="JUGAADU"
                />
              </div>

              {/* Speech Bubble */}
              <div className="comic-speech-bubble-warm comic-speech-tail-top-warm p-4 flex-1 text-left">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent-side)] uppercase block mb-1">
                  OFF THE CLOCK
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#f1f5f9] leading-snug">
                  &ldquo;Off the clock, still building. I&apos;m not limited by platform. On my way to automate myself.&rdquo;
                </p>
              </div>
            </div>

            {/* Text & Metadata */}
            <div className="relative z-10 mb-6">
              <h2 className="glow-pulse-warm text-3xl sm:text-4xl font-black mb-2 tracking-tight text-[var(--text-1)]">
                JUGAADU
              </h2>
              <p className="text-sm sm:text-base font-bold text-[var(--accent-side)] mb-3 font-mono">
                Gets it done, any way it works.
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                If I can imagine it, I can ship it. My AI Council does the heavy lifting. I do the thinking. 5 platforms, autonomous local workflows, and independent tools.
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t-2 border-black flex flex-wrap items-center gap-3 relative z-10">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); selectSide(); }}
                className="comic-btn-warm px-5 py-2.5 text-xs sm:text-sm font-bold flex-1"
              >
                <span>Enter Side Quests</span>
                <span className="text-sm font-black">➔</span>
              </button>

              <span className="text-xs font-mono font-bold px-3 py-2 rounded bg-[#090b12] border border-black text-[var(--accent-side-neon)]">
                5 Platforms
              </span>
              <span className="text-xs font-mono font-bold px-3 py-2 rounded bg-[#090b12] border border-black text-[var(--accent-side-magenta)]">
                AI Council
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
