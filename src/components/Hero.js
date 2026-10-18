'use client'
import React from 'react';
import ComicPortraitTilt from './ComicPortraitTilt';
import ComicSFX from './ComicSFX';

export default function Hero({ activeQuest = 'main', setActiveQuest }) {
  const isMain = activeQuest === 'main';

  const switchToSide = () => {
    setActiveQuest('side');
  };

  const switchToMain = () => {
    setActiveQuest('main');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 relative z-10 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full">
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

        {/* Single Centered Active Comic Card with Animated Switch */}
        <div className="w-full max-w-3xl mx-auto">
          {isMain ? (
            /* ── MAIN QUEST CARD (CENTERED) ── */
            <div 
              key="main-card"
              className="comic-panel p-5 sm:p-8 md:p-10 text-center relative overflow-hidden border-2 sm:border-[3px] !border-[var(--accent)] shadow-[8px_8px_0px_#000] animate-card-switch"
            >
              {/* Halftone backdrop */}
              <div className="absolute top-0 right-0 w-72 h-72 comic-halftone-dense opacity-20 pointer-events-none" aria-hidden="true" />

              {/* Panel Top Badge */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-black relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_#38bdf8]" />
                  <span className="text-xs font-mono font-black tracking-widest text-[var(--accent)] uppercase">
                    PANEL A // MAIN QUEST
                  </span>
                </div>
                <span className="text-[10px] font-mono font-black px-2.5 py-0.5 rounded bg-[var(--accent)] text-[#05070f] border border-black shadow-[1px_1px_0px_#000] uppercase">
                  ACTIVE VIEW
                </span>
              </div>

              {/* Centered Portrait with 3D Tilt + Speech Bubble */}
              <div className="relative inline-flex flex-col items-center mb-6 z-10">
                <ComicPortraitTilt 
                  src="/portrait.jpg" 
                  alt="Shobhit Bansal Work Portrait"
                  theme="cyan"
                  tag="SPEC // iOS-ENG"
                  caption="SHOBHIT BANSAL"
                />

                {/* Speech Bubble */}
                <div 
                  className="mt-4 max-w-xs sm:max-w-md comic-speech-bubble comic-speech-tail-top text-center px-4 py-3 select-none"
                  style={{ transform: 'rotate(-1deg)' }}
                >
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
                <h1 
                  className="glow-pulse text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-[var(--text-1)]"
                  style={{ textShadow: '3px 3px 0px #000000' }}
                >
                  SHOBHIT BANSAL
                </h1>
                <div className="inline-block mb-3">
                  <p className="text-xs sm:text-sm md:text-base font-bold text-[var(--accent)] bg-[#0c1220] border-2 border-black px-3.5 py-1 rounded-lg shadow-[2px_2px_0px_#000]">
                    iOS Developer | BLE &amp; Connected Hardware Specialist
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base max-w-xl mx-auto text-[var(--text-2)] leading-relaxed font-medium">
                  4.5–4.7★, 115,000+ US ratings, 60+ releases. Production engineering across Swift, Objective-C, CoreBluetooth, and Core Data.
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-5 border-t-2 border-black flex flex-wrap items-center justify-center gap-3 relative z-10">
                <button
                  type="button"
                  onClick={switchToSide}
                  className="comic-btn-warm px-5 py-2.5 text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#000]"
                >
                  <span>Enter Side Quests</span>
                  <span className="text-sm font-black ml-1.5">➔</span>
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-btn-ghost px-4 py-2.5 text-xs sm:text-sm font-bold"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/ShobhitB2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-btn-ghost px-4 py-2.5 text-xs sm:text-sm font-bold"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/shobhitbansal2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-btn-ghost px-4 py-2.5 text-xs sm:text-sm font-bold"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ) : (
            /* ── SIDE QUESTS CARD (CENTERED) ── */
            <div 
              key="side-card"
              className="comic-panel-warm p-5 sm:p-8 md:p-10 text-center relative overflow-hidden border-2 sm:border-[3px] !border-[var(--accent-side)] shadow-[8px_8px_0px_#000] animate-card-switch"
            >
              {/* Halftone backdrop */}
              <div className="absolute top-0 right-0 w-72 h-72 comic-halftone-dense-warm opacity-25 pointer-events-none" aria-hidden="true" />

              {/* Panel Top Badge */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-black relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-side)] shadow-[0_0_6px_#f59e0b]" />
                  <span className="text-xs font-mono font-black tracking-widest text-[var(--accent-side)] uppercase">
                    PANEL B // SIDE QUESTS
                  </span>
                </div>
                <span className="text-[10px] font-mono font-black px-2.5 py-0.5 rounded bg-[var(--accent-side)] text-[#05070f] border border-black shadow-[1px_1px_0px_#000] uppercase">
                  ACTIVE VIEW
                </span>
              </div>

              {/* Centered Portrait with 3D Tilt + Speech Bubble */}
              <div className="relative inline-flex flex-col items-center mb-6 z-10">
                <ComicPortraitTilt 
                  src="/side-quests/portrait.jpg" 
                  alt="Jugaadu Side Quests Portrait"
                  theme="warm"
                  tag="SIDE QUEST // JUGAADU"
                  caption="JUGAADU"
                />

                {/* Speech Bubble */}
                <div 
                  className="mt-4 max-w-xs sm:max-w-md comic-speech-bubble-warm comic-speech-tail-top-warm text-center px-4 py-3 select-none"
                  style={{ transform: 'rotate(-1deg)' }}
                >
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
                <h1 
                  className="glow-pulse-warm text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-[var(--text-1)]"
                  style={{ textShadow: '3px 3px 0px #000000' }}
                >
                  JUGAADU
                </h1>
                <div className="inline-block mb-3">
                  <p className="text-xs sm:text-sm md:text-base font-bold text-[var(--accent-side)] bg-[#0c0e14] border-2 border-black px-3.5 py-1 rounded-lg shadow-[2px_2px_0px_#000] font-mono">
                    Gets it done, any way it works.
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base max-w-xl mx-auto text-[var(--text-2)] leading-relaxed font-medium">
                  If I can imagine it, I can ship it. My AI Council does the heavy lifting. I do the thinking.
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-5 border-t-2 border-black flex flex-wrap items-center justify-center gap-3 relative z-10">
                <button
                  type="button"
                  onClick={switchToMain}
                  className="comic-btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#000]"
                >
                  <span>Enter Main Quest</span>
                  <span className="text-sm font-black ml-1.5">➔</span>
                </button>

                <span className="text-xs font-mono font-bold px-3 py-2 rounded bg-[#090b12] border border-black text-[var(--accent-side-neon)] shadow-[2px_2px_0px_#000]">
                  5 Platforms
                </span>
                <span className="text-xs font-mono font-bold px-3 py-2 rounded bg-[#090b12] border border-black text-[var(--accent-side-magenta)] shadow-[2px_2px_0px_#000]">
                  AI Council
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 text-center" style={{ opacity: 0.65 }}>
          <a
            href={isMain ? "#about" : "#side-hero"}
            aria-label={isMain ? "Scroll to About" : "Scroll to Dossier"}
            className="inline-flex flex-col items-center hover:scale-110 transition-transform group"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--accent)] mb-1">
              {isMain ? "Scroll to Explore" : "Scroll to Dossier"}
            </span>
            <svg
              className={`w-5 h-5 ${isMain ? 'text-[var(--accent)]' : 'text-[var(--accent-side)]'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
