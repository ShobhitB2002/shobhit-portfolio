import React from 'react';
import ComicSFX from './ComicSFX';

export default function Education() {
  const degrees = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University (Online)",
      period: "2025 – 2027 (Expected)",
      status: "In Progress",
      accent: "var(--accent)",
      code: "ACADEMIC // 02"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "SVIET, Chandigarh",
      period: "2021 – 2024",
      status: "Completed",
      accent: "var(--accent-2)",
      code: "ACADEMIC // 01"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="section-tag mb-1">Education</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-1)]">
              Academic Background
            </h2>
          </div>
          <ComicSFX text="LEVEL-UP!" rotate={-3} size="md" />
        </div>

        <div className="space-y-6">
          {degrees.map((deg, i) => (
            <div
              key={i}
              className="comic-panel p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 fade-up relative overflow-hidden group"
              data-delay={i * 80}
            >
              <div className="absolute inset-0 comic-halftone-card opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none" aria-hidden="true" />

              <div className="flex-1 relative z-10">
                <div className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-muted)] uppercase mb-1">
                  {deg.code}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-1)] mb-1">
                  {deg.degree}
                </h3>
                <p className="font-semibold text-sm sm:text-base mb-1" style={{ color: deg.accent }}>
                  {deg.institution}
                </p>
                <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)]">
                  {deg.period}
                </p>
              </div>

              <div className="relative z-10 self-start md:self-center">
                <span
                  className="text-xs font-mono font-bold px-3 py-1 rounded border border-black shadow-[2px_2px_0px_#000]"
                  style={{
                    color: deg.accent,
                    background: deg.status === 'In Progress'
                      ? 'rgba(56,189,248,0.15)'
                      : 'rgba(129,140,248,0.15)',
                    borderColor: deg.accent
                  }}
                >
                  {deg.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
