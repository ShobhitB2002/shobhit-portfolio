import React from 'react';

export default function Stats() {
  const stats = [
    { number: "2.5 YRS", label: "Production Experience" },
    { number: "10",      label: "Live App Store Apps" },
    { number: "120K+",   label: "Combined App Ratings" },
    { number: "28",      label: "Languages Supported" },
    { number: "4",       label: "Printer Models Integrated" },
    { number: "3",       label: "Fortune 500 Brands" }
  ];

  return (
    <section id="stats" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 text-center fade-up"
              data-delay={i * 80}
            >
              <div className="stat-num text-2xl md:text-3xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-[var(--text-2)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
