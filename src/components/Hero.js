import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(56, 189, 248, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(129, 140, 248, 0.06) 0%, transparent 50%),
          #05070f
        `,
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <img
          src="/profile.jpg"
          alt="Shobhit Bansal"
          className="w-36 h-36 rounded-full mx-auto mb-8"
          style={{
            border: '3px solid rgba(56, 189, 248, 0.5)',
            boxShadow: '0 0 24px rgba(56, 189, 248, 0.3), 0 0 48px rgba(56, 189, 248, 0.08)'
          }}
        />

        {/* Name */}
        <h1 className="glow-pulse text-5xl md:text-6xl font-bold mb-4 tracking-tight text-[var(--text-1)]">
          SHOBHIT BANSAL
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-semibold mb-6 text-[var(--accent)]">
          iOS Developer | BLE &amp; Connected Hardware Specialist
        </p>

        {/* Description */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-[var(--text-2)]">
          I write code that bridges mobile apps and hardware. 2.5 years building production apps for HP, Kodak, and Polaroid. 10 live apps, 120K+ ratings.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn px-8 py-3"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/ShobhitB2002"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn px-8 py-3"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shobhitbansal2002"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn px-8 py-3"
          >
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16" style={{ opacity: 0.4 }}>
          <svg className="w-6 h-6 mx-auto text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
