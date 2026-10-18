import React from 'react';
import ComicSFX from '../ComicSFX';

export default function SideQuestTimeline() {
  const events = [
    {
      date: "2025",
      title: "Portfolio Begins",
      role: "Web & Static Architecture",
      description: "First iterations of personal portfolio architecture. Focused on high-performance static rendering, modular design, and clean web engineering.",
      episode: "CHRONICLE // 01"
    },
    {
      date: "May 2026",
      title: "NERDVANA (Roblox)",
      role: "Game Development & Systems",
      description: "Designed and engineered an MMORPG survival grinder featuring companion pets, progression loops, and multiplayer economics.",
      episode: "CHRONICLE // 02"
    },
    {
      date: "Jun 2026",
      title: "Forge",
      role: "Flutter Mobile Engineering",
      description: "Built an offline fitness and nutrition logbook in Flutter to solve daily personal tracking pain points with zero cloud latency.",
      episode: "CHRONICLE // 03"
    },
    {
      date: "Sep 2026",
      title: "Tracket",
      role: "API Integration & Work Analytics",
      description: "Constructed an Asana tracker leveraging official APIs to monitor, log, and diagnose engineering tasks and work velocity.",
      episode: "CHRONICLE // 04"
    },
    {
      date: "Oct 2026",
      title: "Kioku Begins; Side Quests Build Begins",
      role: "Media Intelligence & Dual Portfolio",
      description: "Commenced Kioku media intelligence system and launched the dual-quest comic architecture for the personal portfolio.",
      episode: "CURRENT ARC // 05",
      current: true
    }
  ];

  return (
    <section id="side-timeline" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="section-tag-warm mb-1">Mission Log</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-1)]">
              Side Quest Timeline
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-2)] font-medium mt-1">
              Milestones of independent exploration and builds
            </p>
          </div>
          <ComicSFX text="LOGGED!" color="warm" rotate={4} size="md" />
        </div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className={`comic-panel-warm p-6 sm:p-8 fade-up relative overflow-hidden group ${
                event.current ? 'border-2 sm:border-[3px] !border-[var(--accent-side)] shadow-[6px_6px_0px_#000]' : ''
              }`}
              data-delay={i * 70}
            >
              <div className="absolute inset-0 comic-halftone-warm opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none" aria-hidden="true" />

              {/* Episode Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b-2 border-black relative z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[var(--accent-side)] text-[#05070f] font-mono font-black text-xs border border-black shadow-[2px_2px_0px_#000]">
                    {event.date}
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[var(--accent-side)]">
                    {event.episode}
                  </span>
                </div>
                {event.current && (
                  <span className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold bg-[rgba(245,158,11,0.2)] text-[var(--accent-side)] border border-[var(--accent-side)]">
                    ACTIVE SPRINT
                  </span>
                )}
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-1)] mb-1">
                  {event.title}
                </h3>
                <p className="font-bold text-sm sm:text-base mb-3 text-[var(--accent-side)]">
                  {event.role}
                </p>
                <p className="text-sm sm:text-base text-[var(--text-2)] mb-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
