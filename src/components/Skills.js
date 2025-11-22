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
      skills: ["MVC", "MVVM", "Singleton Pattern", "Delegate Pattern"]
    },
    {
      category: "DATA & PERSISTENCE",
      skills: ["Core Data", "Drift (SQLite)", "Kingfisher", "REST APIs", "JSON"]
    },
    {
      category: "DEVELOPMENT TOOLS",
      skills: ["Xcode", "Git", "SourceTree", "Asana", "Postman", "CocoaPods"]
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      skills: ["UIKit", "Flutter", "Provider", "GCD", "Auto Layout", "fl_chart"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Technologies and tools I work with daily
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 md:p-8 hover:border-[#007AFF]/50 transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-[#007AFF] uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-[#0A0A0A] border border-white/10 rounded-lg text-sm text-gray-300 hover:border-[#007AFF]/50 hover:text-white transition-all duration-300"
                  >
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