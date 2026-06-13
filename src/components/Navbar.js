'use client'
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="navbar-logo">SB</a>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#apps">Apps</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-resume-btn">
        Download Resume
      </a>
    </nav>
  );
}
