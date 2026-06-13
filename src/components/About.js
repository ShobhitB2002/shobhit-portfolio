import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="section-tag">About</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[var(--text-1)]">
          Who I Am
        </h2>
        <div className="glass-card p-8 space-y-5 fade-up">
          <p className="text-lg leading-relaxed text-[var(--text-2)]">
            I'm an iOS engineer based in Mohali, India — building the software layer between mobile apps and physical hardware.
          </p>
          <p className="text-lg leading-relaxed text-[var(--text-2)]">
            Over 2.5 years at C+A Global, I've shipped features and maintained 10 production apps for HP, Kodak, and Polaroid — 120,000+ App Store ratings, 28 languages, used globally. I work daily in Swift and Objective-C, handle BLE device integration and OTA firmware updates, and collaborate with QA teams in the US and hardware engineers in China.
          </p>
          <p className="text-lg leading-relaxed text-[var(--text-2)]">
            I'm AI-augmented — Cursor, Claude Code, and Copilot are part of my daily workflow. I ship faster, debug smarter, and own the architecture end-to-end.
          </p>
          <p className="text-lg leading-relaxed text-[var(--text-2)]">
            Currently exploring SwiftUI. Open to remote iOS engineering roles.
          </p>
        </div>
      </div>
    </section>
  );
}
