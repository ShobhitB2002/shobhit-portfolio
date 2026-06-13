import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-tag">Contact</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-1)]">
          Let's Build Something Together
        </h2>
        <p className="text-lg text-[var(--text-2)] mb-4 max-w-2xl mx-auto">
          Ready to build something that connects mobile and hardware?
        </p>
        <p className="text-[var(--accent)] font-medium mb-12 text-lg" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          shobhitbansal.chd@gmail.com
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap gap-5 justify-center mb-12">
          <a
            href="mailto:shobhitbansal.chd@gmail.com"
            className="primary-btn flex items-center gap-3 px-8 py-4 font-semibold"
          >
            <FaEnvelope />
            <span>Email Me</span>
          </a>
          <a
            href="https://linkedin.com/in/shobhitbansal2002"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn flex items-center gap-3 px-8 py-4 font-semibold"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ShobhitB2002"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn flex items-center gap-3 px-8 py-4 font-semibold"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>

        {/* Location info */}
        <div className="glass-card p-6 md:p-8 inline-block text-left fade-up">
          <p className="text-[var(--text-2)] text-sm leading-relaxed">
            Open to remote/WFH worldwide · Hybrid in Tricity · Relocation considered
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(56,189,248,0.1)' }}>
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 Shobhit Bansal. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
