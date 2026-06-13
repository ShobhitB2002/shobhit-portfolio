import React from 'react';

export default function Education() {
  const degrees = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University (Online)",
      period: "2025 – 2027 (Expected)",
      status: "In Progress",
      accent: "var(--accent)"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "SVIET, Chandigarh",
      period: "2021 – 2024",
      status: "Completed",
      accent: "var(--accent-2)"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="section-tag">Education</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[var(--text-1)]">
          Academic Background
        </h2>
        <div className="space-y-6">
          {degrees.map((deg, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 fade-up"
              data-delay={i * 80}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[var(--text-1)] mb-1">{deg.degree}</h3>
                <p className="font-medium mb-1" style={{ color: deg.accent }}>{deg.institution}</p>
                <p className="text-sm text-[var(--text-muted)]">{deg.period}</p>
              </div>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full self-start md:self-center"
                style={{
                  color: deg.accent,
                  background: deg.status === 'In Progress'
                    ? 'rgba(56,189,248,0.12)'
                    : 'rgba(129,140,248,0.12)'
                }}
              >
                {deg.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
