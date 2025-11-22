import React from 'react';

export default function Stats() {
  const stats = [
    { number: "2 YEARS", label: "Experience" },
    { number: "11 APPS", label: "Published" },
    { number: "4 PRINTERS", label: "Integrated from Scratch" },
    { number: "SWIFT + OBJC", label: "Bilingual Coder" },
    { number: "15 TABLES", label: "Forge Database" },
    { number: "MILLIONS", label: "Users Served" }
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 md:p-8 text-center hover:border-[#007AFF]/50 hover:shadow-lg hover:shadow-[#007AFF]/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#007AFF] mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}