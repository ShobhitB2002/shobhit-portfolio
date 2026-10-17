import React from 'react';
import ComicSFX from './ComicSFX';

export default function Skills() {
  const skillCategories = [
    {
      category: "LANGUAGES",
      code: "SUBSYSTEM // 01",
      skills: ["Swift", "Objective-C"]
    },
    {
      category: "HARDWARE INTEGRATION",
      code: "SUBSYSTEM // 02",
      skills: ["CoreBluetooth", "EAAccessory", "Firmware OTA Updates", "BLE Protocols"]
    },
    {
      category: "ARCHITECTURE & PATTERNS",
      code: "SUBSYSTEM // 03",
      skills: ["MVC", "MVVM", "Singleton Pattern", "Delegate Pattern", "NotificationCenter"]
    },
    {
      category: "DATA & PERSISTENCE",
      code: "SUBSYSTEM // 04",
      skills: ["Core Data", "REST APIs", "JSON", "UserDefaults"]
    },
    {
      category: "DEVELOPMENT TOOLS",
      code: "SUBSYSTEM // 05",
      skills: ["Xcode", "Git", "SourceTree", "Postman", "CocoaPods", "Swift Package Manager", "TestFlight", "Instruments/Profiling"]
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      code: "SUBSYSTEM // 06",
      skills: ["UIKit", "Kingfisher", "GCD", "Auto Layout", "async/await"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="section-tag">Skills</span>
            <ComicSFX text="COMPILED!" rotate={-3} size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-1)]">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-2)] max-w-xl mx-auto font-medium">
            Technologies and tools I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="comic-panel p-6 sm:p-7 fade-up relative overflow-hidden group"
              data-delay={i * 70}
            >
              <div className="absolute inset-0 comic-halftone-card opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" aria-hidden="true" />

              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black relative z-10">
                <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[var(--accent)] uppercase">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold">
                  {cat.code}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 relative z-10">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="comic-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
