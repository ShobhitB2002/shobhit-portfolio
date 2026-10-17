'use client'
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <a href="#home" className="navbar-logo" aria-label="Shobhit Bansal Home">
          <span>SB</span>
        </a>

        <nav className="navbar-links" aria-label="Main Navigation">
          <a href="#about">About</a>
          <a href="#stats">Stats</a>
          <a href="#apps">Apps</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="comic-btn-primary px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
