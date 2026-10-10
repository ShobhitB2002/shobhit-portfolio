import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="section-tag">About</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[var(--text-1)]">
          Who I Am
        </h2>
        <div className="glass-card p-8 space-y-5 fade-up">
          <p className="text-lg leading-relaxed text-[var(--text-2)]">
            iOS developer with 3 years' experience building and maintaining 10 live App Store apps for HP, Kodak and Polaroid (4.5–4.7★, 115,000+ US ratings, 60+ releases).
          </p>
          <p className="text-lg leading-relaxed text-[var(--text-2)]">
            I work in Objective-C and Swift with UIKit and Core Data, and specialise in connected devices: BLE, EAAccessory and OTA firmware updates.
          </p>
          <p className="text-lg leading-relaxed text-[var(--text-2)]">
            Open to iOS roles: remote, tri-city, Gurugram, Bengaluru or Hyderabad.
          </p>
        </div>
      </div>
    </section>
  );
}
