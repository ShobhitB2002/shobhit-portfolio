import React from 'react';

export default function Timeline() {
  const timeline = [
    {
      year: "2023",
      title: "CS Soft Solutions",
      role: "iOS Trainee",
      description: "Intensive training in Swift, UIKit, and MVC architecture. Built prototype modules and learned iOS fundamentals.",
      duration: "Jul 2023 - Dec 2023"
    },
    {
      year: "2024-2025",
      title: "C+A Global India",
      role: "iOS Developer",
      description: "Maintained 11 production apps for HP, Kodak, and Polaroid. Integrated 4 printers from scratch, built BLE bridges, fixed legacy Objective-C code.",
      duration: "Jan 2024 - Dec 2025",
      current: true
    },
    {
      year: "2024",
      title: "Personal Projects",
      role: "Independent Developer",
      description: "Built Forge fitness tracker from scratch using Flutter. 15-table database, TDEE calculator, body composition tracking. 3000+ lines of code.",
      duration: "2024 - Present"
    },
    {
      year: "2025+",
      title: "What's Next?",
      role: "Looking for New Opportunities",
      description: "Seeking product companies in Bangalore, Noida, Gurgaon, or Hyderabad where I can work on consumer-facing apps and hardware integration.",
      duration: "Future",
      future: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience Timeline
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          My journey in iOS development
        </p>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`relative bg-[#1A1A1A] border rounded-xl p-6 md:p-8 transition-all duration-300 ${
                item.current ? 'border-[#007AFF]' : 'border-white/10'
              } ${item.future ? 'border-dashed border-white/20' : ''} hover:border-[#007AFF]/50 hover:shadow-lg hover:shadow-[#007AFF]/20`}
            >
              {/* Year badge */}
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${
                item.current ? 'bg-[#007AFF] text-white' : 
                item.future ? 'bg-white/10 text-gray-400' :
                'bg-white/5 text-gray-400'
              }`}>
                {item.year}
              </div>

              {/* Current badge */}
              {item.current && (
                <span className="ml-3 px-3 py-1 bg-[#007AFF]/20 text-[#007AFF] text-xs font-semibold rounded-full">
                  CURRENT
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#007AFF] font-semibold mb-3">{item.role}</p>
              <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}