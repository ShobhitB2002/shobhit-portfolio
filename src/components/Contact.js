import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Build Something Together
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Ready to build something that connects mobile and hardware? Looking for opportunities in product companies where I can work on consumer-facing apps and IoT integration.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <a 
            href="mailto:shobhitbansal.chd@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-[#007AFF] text-white rounded-xl font-semibold hover:bg-[#0051D5] transition-all duration-300 shadow-lg shadow-[#007AFF]/30 hover:shadow-[#007AFF]/50 hover:-translate-y-1"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email Me</span>
          </a>
          <a 
            href="https://linkedin.com/in/shobhitbansal2002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-semibold hover:bg-[#252525] transition-all duration-300 border border-white/10 hover:border-[#007AFF]/50 hover:-translate-y-1"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/ShobhitB2002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-semibold hover:bg-[#252525] transition-all duration-300 border border-white/10 hover:border-[#007AFF]/50 hover:-translate-y-1"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Location info */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 md:p-8 inline-block">
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-white">Based in:</span> Mohali, Punjab, India
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-white">Open to relocation:</span> Bangalore, Noida, Gurgaon, Hyderabad
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2025 Shobhit Bansal. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}