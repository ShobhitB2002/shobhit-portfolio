import React from 'react';

export default function Timeline() {
  const timeline = [
    {
      year: "2023",
      title: "CS Soft Solutions",
      role: "iOS Trainee",
      description: "Completed intensive iOS training program. Built prototype UIKit modules and practiced Core Data patterns under mentorship. Applied MVC architecture across internal practice projects.",
      duration: "Jul 2023 – Dec 2023"
    },
    {
      year: "2024",
      title: "Freelance iOS Developer",
      role: "Independent",
      description: "Delivered a Core Data–powered iOS app for a Canadian client. Sole developer — handled requirements, data architecture, implementation, and delivery.",
      duration: "2024"
    },
    {
      year: "2024–Present",
      title: "C+A Global India",
      role: "iOS Developer",
      description: "Maintained 10 production apps for HP, Kodak, and Polaroid. Integrated 4 printer models from scratch, built BLE bridges, worked with US QA teams and Chinese hardware engineers. 120K+ combined App Store ratings, 28 languages.",
      duration: "Jan 2024 – Present",
      current: true
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="section-tag">Experience</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-1)]">
          Work History
        </h2>
        <p className="text-lg text-[var(--text-2)] mb-16">
          My journey in iOS development
        </p>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 fade-up"
              data-delay={i * 80}
              style={item.current ? { borderColor: 'rgba(56, 189, 248, 0.35)' } : {}}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={
                    item.current
                      ? { background: 'var(--accent)', color: '#05070f' }
                      : { background: 'rgba(56,189,248,0.08)', color: 'var(--text-muted)' }
                  }
                >
                  {item.year}
                </span>
                {item.current && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(56,189,248,0.12)', color: 'var(--accent)' }}>
                    CURRENT
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-1)] mb-1">{item.title}</h3>
              <p className="font-semibold mb-3 text-[var(--accent)]">{item.role}</p>
              <p className="text-[var(--text-2)] mb-4 leading-relaxed">{item.description}</p>
              <p className="text-sm text-[var(--text-muted)]">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
