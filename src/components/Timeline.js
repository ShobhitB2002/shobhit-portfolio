import React from 'react';
import ComicSFX from './ComicSFX';

export default function Timeline() {
  const timeline = [
    {
      year: "2023",
      episode: "EPISODE 01 // FOUNDATION",
      title: "CS Soft Solutions",
      role: "iOS Trainee",
      description: "Completed intensive iOS training program. Built prototype UIKit modules and practiced Core Data patterns under mentorship. Applied MVC architecture across internal practice projects.",
      duration: "Jul 2023 – Dec 2023"
    },
    {
      year: "2024",
      episode: "EPISODE 02 // INDEPENDENT SOLO",
      title: "Freelance iOS Developer",
      role: "Independent",
      description: "Delivered a Core Data–powered iOS app for a Canadian client. Sole developer — handled requirements, data architecture, implementation, and delivery.",
      duration: "2024"
    },
    {
      year: "2024–Present",
      episode: "CURRENT ARC // HARDWARE ECOSYSTEM",
      title: "C+A Global India",
      role: "iOS Developer",
      description: "Maintained 10 production apps for HP, Kodak, and Polaroid. Integrated 4 printer models from scratch, built BLE bridges, worked with US QA teams and international hardware teams. 115K+ US App Store ratings, 28 languages.",
      duration: "Jan 2024 – Present",
      current: true
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="section-tag mb-1">Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-1)]">
              Work History
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-2)] font-medium mt-1">
              My journey in iOS development
            </p>
          </div>
          <ComicSFX text="LOGGED!" rotate={4} size="md" />
        </div>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`comic-panel p-6 sm:p-8 fade-up relative overflow-hidden group ${
                item.current ? 'border-2 sm:border-[3px] !border-[var(--accent)] shadow-[6px_6px_0px_#000]' : ''
              }`}
              data-delay={i * 80}
            >
              <div className="absolute inset-0 comic-halftone-card opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none" aria-hidden="true" />

              {/* Episode Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b-2 border-black relative z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[var(--accent)] text-[#05070f] font-mono font-black text-xs border border-black shadow-[2px_2px_0px_#000]">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[var(--accent)]">
                    {item.episode}
                  </span>
                </div>
                {item.current && (
                  <span className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold bg-[rgba(56,189,248,0.2)] text-[var(--accent)] border border-[var(--accent)]">
                    ACTIVE POSITION
                  </span>
                )}
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-1)] mb-1">
                  {item.title}
                </h3>
                <p className="font-bold text-sm sm:text-base mb-3 text-[var(--accent)]">
                  {item.role}
                </p>
                <p className="text-sm sm:text-base text-[var(--text-2)] mb-4 leading-relaxed font-normal">
                  {item.description}
                </p>
                <div className="inline-block text-xs font-mono font-semibold text-[var(--text-muted)] bg-[#05070f] px-2.5 py-1 rounded border border-black">
                  {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
