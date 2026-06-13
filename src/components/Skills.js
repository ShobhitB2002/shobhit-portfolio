import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "LANGUAGES",
      skills: ["Swift", "Objective-C", "Dart (Flutter)"]
    },
    {
      category: "HARDWARE INTEGRATION",
      skills: ["CoreBluetooth", "EAAccessory", "Firmware OTA Updates", "BLE Protocols"]
    },
    {
      category: "ARCHITECTURE & PATTERNS",
      skills: ["MVC", "MVVM", "Singleton Pattern", "Delegate Pattern", "NotificationCenter"]
    },
    {
      category: "DATA & PERSISTENCE",
      skills: ["Core Data", "Drift (SQLite)", "REST APIs", "JSON", "UserDefaults"]
    },
    {
      category: "DEVELOPMENT TOOLS",
      skills: ["Xcode", "Git", "SourceTree", "Postman", "CocoaPods", "Swift Package Manager", "TestFlight", "Instruments/Profiling"]
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      skills: ["UIKit", "Flutter", "Kingfisher", "Provider", "GCD", "Auto Layout", "fl_chart", "async/await"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="section-tag">Skills</span>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--text-1)]">
          Technical Skills
        </h2>
        <p className="text-lg text-[var(--text-2)] text-center mb-16">
          Technologies and tools I work with daily
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 fade-up"
              data-delay={i * 80}
            >
              <h3 className="section-tag mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
