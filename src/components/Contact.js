import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ComicSFX from './ComicSFX';

export default function Contact({ activeQuest = 'main' }) {
  const isSide = activeQuest === 'side';

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header with SFX */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className={isSide ? "section-tag-warm" : "section-tag"}>Contact</span>
          <ComicSFX 
            text="DISPATCH!" 
            color={isSide ? "warm" : "cyan"} 
            rotate={-4} 
            size="sm" 
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text-1)]">
          Let&apos;s Build Something Together
        </h2>

        {/* Comic Speech Bubble */}
        <div className={`comic-speech-bubble comic-speech-tail-bottom max-w-lg mx-auto p-5 mb-8 ${isSide ? 'comic-speech-bubble-warm' : ''}`}>
          <p className="text-base sm:text-lg font-bold text-[#f1f5f9] leading-snug mb-2">
            Ready to build something that connects mobile and hardware?
          </p>
          <p className="text-sm font-bold text-[var(--accent-side-neon)] font-mono">
            &ldquo;Let&apos;s automate something.&rdquo;
          </p>
        </div>

        {/* Email Pill */}
        <div className="mb-10 inline-block">
          <a
            href="mailto:shobhitbansal.chd@gmail.com"
            className="inline-flex items-center gap-2 bg-[#0c1220] border-2 border-black px-5 py-2.5 rounded-lg shadow-[3px_3px_0px_#000] text-[var(--accent)] font-mono font-bold text-base sm:text-lg hover:text-[#7dd3fc] transition-colors"
          >
            <span>shobhitbansal.chd@gmail.com</span>
          </a>
        </div>

        {/* Comic Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="mailto:shobhitbansal.chd@gmail.com"
            className="comic-btn-primary px-7 py-3.5 text-base"
          >
            <FaEnvelope className="text-lg" />
            <span>Email Me</span>
          </a>
          <a
            href="https://linkedin.com/in/shobhitbansal2002"
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn-ghost px-7 py-3.5 text-base"
          >
            <FaLinkedin className="text-lg text-[var(--accent)]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ShobhitB2002"
            target="_blank"
            rel="noopener noreferrer"
            className="comic-btn-ghost px-7 py-3.5 text-base"
          >
            <FaGithub className="text-lg text-[var(--accent)]" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Location Info Comic Card */}
        <div className="comic-panel p-5 sm:p-6 inline-block text-left fade-up max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-2xl select-none" aria-hidden="true">📍</span>
            <p className="text-[var(--text-1)] text-xs sm:text-sm font-medium leading-relaxed">
              Open to iOS roles: remote, tri-city, Gurugram, Bengaluru or Hyderabad
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-black/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)]">
            <p>© 2026 Shobhit Bansal. Built with React &amp; Tailwind CSS.</p>
            <p className="bg-[#0c1220] border border-black px-2.5 py-1 rounded text-[var(--accent)]">
              DUAL QUEST EDITION // v2.5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
