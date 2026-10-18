'use client'
import React, { useEffect, useState } from 'react';

export default function Navbar({ activeQuest = 'main', setActiveQuest }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isMain = activeQuest === 'main';

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-3">
        {/* Monogram Logo */}
        <a href="#home" className="navbar-logo" aria-label="Shobhit Bansal Home">
          <span>SB</span>
        </a>

        {/* Quest Switcher Toggle */}
        <div className="quest-toggle-container">
          <button
            type="button"
            onClick={() => setActiveQuest('main')}
            className={`quest-toggle-btn ${isMain ? 'active-main' : 'inactive'}`}
            aria-pressed={isMain}
          >
            <span>⚡ Main Quest</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveQuest('side')}
            className={`quest-toggle-btn ${!isMain ? 'active-side' : 'inactive'}`}
            aria-pressed={!isMain}
          >
            <span>⚔️ Side Quests</span>
          </button>
        </div>

        {/* Navigation Links (contextual to active quest) */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {isMain ? (
            <>
              <a href="#about">About</a>
              <a href="#stats">Stats</a>
              <a href="#apps">Apps</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <>
              <a href="#side-hero">Dossier</a>
              <a href="#side-stats">Stats</a>
              <a href="#side-projects">Projects</a>
              <a href="#side-timeline">Timeline</a>
              <a href="#side-tools">Tools</a>
              {/* <a href="#side-interests">Interests</a> */}
              <a href="#contact">Contact</a>
            </>
          )}
        </nav>

        {/* Action Button */}
        <a 
          href={isMain ? "/resume.pdf" : "/side-quests-resume.pdf"}
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${isMain ? 'comic-btn-primary' : 'comic-btn-warm'} px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold`}
        >
          Resume
        </a>
      </div>
    </header>
  );
}
