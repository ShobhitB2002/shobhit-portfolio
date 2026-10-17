import React from 'react';
import ComicSFX from './ComicSFX';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="section-tag">About</span>
          <ComicSFX text="ORIGIN!" rotate={-4} size="sm" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-[var(--text-1)] flex items-center gap-4 flex-wrap">
          <span>Who I Am</span>
          <span className="text-xs font-mono font-bold bg-[#0c1220] border-2 border-black text-[var(--accent)] px-3 py-1 rounded shadow-[2px_2px_0px_#000]">
            FILE #001
          </span>
        </h2>

        {/* Comic Panel Container */}
        <div className="comic-panel p-6 sm:p-8 space-y-6 fade-up relative overflow-hidden">
          {/* Halftone backdrop in panel */}
          <div className="absolute top-0 right-0 w-48 h-48 comic-halftone-card opacity-30 pointer-events-none" aria-hidden="true" />

          {/* Comic Dialogue / Narrative Bubble */}
          <div className="comic-speech-bubble comic-speech-tail-bottom p-5 text-left">
            <div className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent)] uppercase mb-2">
              DISPATCH // EXPERIENCE SUMMARY
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-1)] font-medium">
              iOS developer with 3 years&apos; experience building and maintaining 10 live App Store apps for HP, Kodak and Polaroid (4.5–4.7★, 115,000+ US ratings, 60+ releases).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#070b14] border-2 border-black shadow-[3px_3px_0px_#000]">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-2)]">
              I work in Objective-C and Swift with UIKit and Core Data, and specialise in connected devices: BLE, EAAccessory and OTA firmware updates.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#070b14] border-2 border-black shadow-[3px_3px_0px_#000] flex items-start gap-3">
            <span className="text-xl select-none" aria-hidden="true">📍</span>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-2)]">
              Open to iOS roles: remote, tri-city, Gurugram, Bengaluru or Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
