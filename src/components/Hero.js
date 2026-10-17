'use client'
import React from 'react';
import ComicPortraitTilt from './ComicPortraitTilt';
import ComicSFX from './ComicSFX';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative z-10 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
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
          <ComicPortraitTilt />

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
            className="comic-btn-primary px-7 py-3 text-base"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/ShobhitB2002"
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn-ghost px-7 py-3 text-base"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shobhitbansal2002"
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn-ghost px-7 py-3 text-base"
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
    </section>
  );
}
