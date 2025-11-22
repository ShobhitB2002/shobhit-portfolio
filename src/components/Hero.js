import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
        <img 
          src="/background.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <img 
          src="/profile.jpg" 
          alt="Shobhit Bansal" 
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-[#007AFF] shadow-lg shadow-[#007AFF]/30"
        />

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          SHOBHIT BANSAL
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#007AFF] font-semibold mb-6">
          iOS Developer | BLE & Connected Hardware Specialist
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I write code that bridges mobile apps and hardware. 2 years building production apps for HP, Kodak, and Polaroid. 11 apps serving millions of users.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#007AFF] text-white rounded-lg font-semibold hover:bg-[#0051D5] transition-all duration-300 shadow-lg shadow-[#007AFF]/30 hover:shadow-[#007AFF]/50 hover:-translate-y-1"
          >
            Download Resume
          </a>
          <a 
            href="https://github.com/ShobhitB2002" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#1A1A1A] text-white rounded-lg font-semibold hover:bg-[#252525] transition-all duration-300 border border-white/10 hover:border-[#007AFF]/50 hover:-translate-y-1"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/shobhitbansal2002" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#1A1A1A] text-white rounded-lg font-semibold hover:bg-[#252525] transition-all duration-300 border border-white/10 hover:border-[#007AFF]/50 hover:-translate-y-1"
          >
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-[#007AFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}