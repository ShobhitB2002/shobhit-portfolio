import React from 'react';
import ComicSFX from '../ComicSFX';

export default function SideQuestInterests() {
  const interests = [
    { name: "Gaming",     icon: "🎮", desc: "MMORPGs, systems design, immersion" },
    { name: "Movies",     icon: "🎬", desc: "Cinematography, storytelling, direction" },
    { name: "Comics",     icon: "💥", desc: "Visual framing, graphic novels, typography" },
    { name: "AI",         icon: "🧠", desc: "Autonomous agents, local inference, LLMs" },
    { name: "Automation", icon: "⚙️", desc: "Scripts, workflows, self-operating systems" }
  ];

  return (
    <section id="side-interests" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Philosophy Featured Banner */}
        <div className="comic-panel-warm p-8 sm:p-12 text-center mb-16 fade-up relative overflow-hidden border-2 sm:border-[3px] !border-[var(--accent-side)] shadow-[8px_8px_0px_#000]">
          <div className="absolute inset-0 comic-halftone-dense-warm opacity-20 pointer-events-none" aria-hidden="true" />
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-tag-warm">Guiding Philosophy</span>
            <ComicSFX text="CREDO" color="magenta" rotate={-4} size="sm" />
          </div>

          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f1f5f9] tracking-tight leading-tight mb-4">
            &ldquo;If it doesn&apos;t exist, birth it.&rdquo;
          </blockquote>

          <p className="text-sm sm:text-base font-mono font-bold text-[var(--accent-side-neon)] max-w-lg mx-auto">
            The core engine driving every side quest, build, and experiment.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="section-tag-warm">Recreational Focus</span>
            <ComicSFX text="FUEL!" color="warm" rotate={3} size="sm" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-1)]">
            Interests
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {interests.map((item, idx) => (
            <div
              key={idx}
              className="comic-panel-warm p-5 text-center fade-up relative overflow-hidden group"
              data-delay={idx * 60}
            >
              <div className="text-3xl mb-2 select-none group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-base font-black text-[#f1f5f9] mb-1">
                {item.name}
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] font-mono leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
