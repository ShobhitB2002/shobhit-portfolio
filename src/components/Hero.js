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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative z-10 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        {isMain ? (
          /* ── MAIN QUEST (WORK) ── */
          <div key="main-quest" className="animate-card-switch">
            {/* Comic SFX Top Accent */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <ComicSFX text="POW!" rotate={-8} size="sm" />
              <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase bg-[#0c1220] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_#000]">
                ISSUE #01 // HARDWARE CONNECTED
              </span>
              <ComicSFX text="ZAP!" rotate={6} size="sm" />
            </div>

            {/* Profile Card with 3D Tilt + Speech Bubble */}
            <div className="relative inline-flex flex-col items-center mb-8">
              <ComicPortraitTilt 
                src="/portrait.jpg" 
                alt="Shobhit Bansal Comic Portrait"
                theme="cyan"
                tag="SPEC // iOS-ENG"
                caption="SHOBHIT BANSAL"
              />

              {/* Speech Bubble Caption */}
              <div 
                className="mt-4 max-w-xs sm:max-w-sm comic-speech-bubble comic-speech-tail-top text-left px-4 py-3 select-none"
                style={{ transform: 'rotate(-1deg)' }}
              >
                <p className="text-xs sm:text-sm font-semibold text-[#f1f5f9] leading-snug">
                  &ldquo;Hey! I specialize in iOS apps bridging real-world hardware &amp; BLE.&rdquo;
                </p>
              </div>
            </div>

            {/* Name */}
            <h1 
              className="glow-pulse text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tight text-[var(--text-1)] select-text"
              style={{ textShadow: '4px 4px 0px #000000' }}
            >
              SHOBHIT BANSAL
            </h1>

            {/* Subtitle */}
            <div className="inline-block mb-6">
              <p className="text-base sm:text-lg md:text-xl font-bold text-[var(--accent)] bg-[#0c1220] border-2 border-black px-4 py-1.5 rounded-lg shadow-[3px_3px_0px_#000]">
                iOS Developer | BLE &amp; Connected Hardware Specialist
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-[var(--text-2)] font-medium">
              I build iOS apps that connect to hardware. 3 years building and maintaining 10 live App Store apps for HP, Kodak and Polaroid — 4.5–4.7★, 115,000+ US ratings, 60+ releases.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-primary px-7 py-3 text-base font-bold"
              >
                Resume
              </a>
              <button
                type="button"
                onClick={switchToSide}
                className="comic-btn-warm px-7 py-3 text-base font-bold shadow-[4px_4px_0px_#000]"
              >
                <span>Explore Side Quests</span>
                <span className="text-base font-black ml-1">➔</span>
              </button>
              <a
                href="https://github.com/ShobhitB2002"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-ghost px-7 py-3 text-base font-bold"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/shobhitbansal2002"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-ghost px-7 py-3 text-base font-bold"
              >
                LinkedIn
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-14" style={{ opacity: 0.5 }}>
              <a href="#about" aria-label="Scroll to about section" className="inline-block hover:scale-110 transition-transform">
                <svg className="w-6 h-6 mx-auto text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        ) : (
          /* ── SIDE QUESTS (JUGAADU) ── */
          <div key="side-quest" className="animate-card-switch">
            {/* Comic SFX Top Accent */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <ComicSFX text="POW!" color="warm" rotate={-8} size="sm" />
              <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-side)] uppercase bg-[#0c1220] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_#000]">
                ISSUE #02 // JUGAADU LABS
              </span>
              <ComicSFX text="ZAP!" color="magenta" rotate={6} size="sm" />
            </div>

            {/* Profile Card with 3D Tilt + Speech Bubble */}
            <div className="relative inline-flex flex-col items-center mb-8">
              <ComicPortraitTilt 
                src="/side-quests/portrait.jpg" 
                alt="Jugaadu Side Quests Portrait"
                theme="warm"
                tag="SIDE QUEST // JUGAADU"
                caption="JUGAADU"
              />

              {/* Speech Bubble Caption */}
              <div 
                className="mt-4 max-w-xs sm:max-w-sm comic-speech-bubble-warm comic-speech-tail-top-warm text-left px-4 py-3 select-none"
                style={{ transform: 'rotate(-1deg)' }}
              >
                <p className="text-xs sm:text-sm font-semibold text-[#f1f5f9] leading-snug">
                  &ldquo;Off the clock, still building. I&apos;m not limited by platform. On my way to automate myself.&rdquo;
                </p>
              </div>
            </div>

            {/* Name */}
            <h1 
              className="glow-pulse-warm text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tight text-[var(--text-1)] select-text"
              style={{ textShadow: '4px 4px 0px #000000' }}
            >
              JUGAADU
            </h1>

            {/* Subtitle */}
            <div className="inline-block mb-6">
              <p className="text-base sm:text-lg md:text-xl font-bold text-[var(--accent-side)] bg-[#0c1220] border-2 border-black px-4 py-1.5 rounded-lg shadow-[3px_3px_0px_#000] font-mono">
                Gets it done, any way it works.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-[var(--text-2)] font-medium">
              Off the clock, still building. I&apos;m not limited by platform. If I can imagine it, I can ship it. My AI Council does the heavy lifting. I do the thinking. Log everything. Diagnose everything. Let AI do the work, and keep the judgment yours.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="/side-quests-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-warm px-7 py-3 text-base font-bold"
              >
                Resume
              </a>
              <button
                type="button"
                onClick={switchToMain}
                className="comic-btn-primary px-7 py-3 text-base font-bold shadow-[4px_4px_0px_#000]"
              >
                <span>Explore Main Quest</span>
                <span className="text-base font-black ml-1">➔</span>
              </button>
              <a
                href="https://github.com/ShobhitB2002"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-ghost px-7 py-3 text-base font-bold"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/shobhitbansal2002"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-ghost px-7 py-3 text-base font-bold"
              >
                LinkedIn
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-14" style={{ opacity: 0.5 }}>
              <a href="#side-hero" aria-label="Scroll to side quest section" className="inline-block hover:scale-110 transition-transform">
                <svg className="w-6 h-6 mx-auto text-[var(--accent-side)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
