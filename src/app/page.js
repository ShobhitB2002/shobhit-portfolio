'use client'
import React, { useState, useEffect } from 'react';
import AnimationProvider from '../components/AnimationProvider';
import ComicBackdrop from '../components/ComicBackdrop';
import ComicGutter from '../components/ComicGutter';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Main Quest Components
import About from '../components/About';
import Stats from '../components/Stats';
import FeaturedProjects from '../components/FeaturedProjects';
import AllApps from '../components/AllApps';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Education from '../components/Education';

// Side Quests Components
import SideQuestHeroInfo from '../components/side-quests/SideQuestHeroInfo';
import SideQuestStats from '../components/side-quests/SideQuestStats';
import SideQuestProjects from '../components/side-quests/SideQuestProjects';
import SideQuestTimeline from '../components/side-quests/SideQuestTimeline';
import SideQuestTools from '../components/side-quests/SideQuestTools';
import SideQuestInterests from '../components/side-quests/SideQuestInterests';

// Shared Components
import Contact from '../components/Contact';

export default function Page() {
  const [activeQuest, setActiveQuest] = useState('main');

  useEffect(() => {
    // Check initial hash
    if (typeof window !== 'undefined') {
      if (window.location.hash.includes('side')) {
        setActiveQuest('side');
      }
    }
  }, []);

  return (
    <AnimationProvider>
      <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'var(--bg)' }}>
        {/* Dimmed Comic Backdrop with Halftone Overlay */}
        <ComicBackdrop />

        {/* Navigation with Quest Switcher */}
        <Navbar activeQuest={activeQuest} setActiveQuest={setActiveQuest} />

        {/* Hero: Dual Comic Panels (one per side, leading into its side) */}
        <main className="relative z-10">
          <Hero activeQuest={activeQuest} setActiveQuest={setActiveQuest} />

          {/* Quest Content Anchor */}
          <div id="quest-content">
            {activeQuest === 'main' ? (
              /* ── MAIN QUEST SECTIONS ── */
              <div key="main-quest" className="animate-fadeIn">
                <About />
                <ComicGutter label="PANEL BREAK // PRODUCTION IMPACT" />
                <Stats />
                <FeaturedProjects />
                <AllApps />
                <ComicGutter label="PANEL BREAK // TECHNICAL ARSENAL" />
                <Skills />
                <ComicGutter label="PANEL BREAK // MISSION LOG" />
                <Timeline />
                <ComicGutter label="PANEL BREAK // ACCREDITATION" />
                <Education />
              </div>
            ) : (
              /* ── SIDE QUESTS SECTIONS ── */
              <div key="side-quest" className="animate-fadeIn">
                <SideQuestHeroInfo />
                <ComicGutter label="PANEL BREAK // SIDE QUEST METRICS" />
                <SideQuestStats />
                <SideQuestProjects />
                <ComicGutter label="PANEL BREAK // ARSENAL & INTELLIGENCE" />
                <SideQuestTools />
                <ComicGutter label="PANEL BREAK // CHRONICLE LOG" />
                <SideQuestTimeline />
                <ComicGutter label="PANEL BREAK // CREDO & FUEL" />
                <SideQuestInterests />
              </div>
            )}
          </div>

          {/* Shared Contact Footer */}
          <Contact activeQuest={activeQuest} />
        </main>
      </div>
    </AnimationProvider>
  );
}
