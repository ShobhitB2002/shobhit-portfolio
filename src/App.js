import React, { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import FeaturedProjects from './components/FeaturedProjects';
import AllApps from './components/AllApps';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(() => el.classList.add('visible'), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shobhit Bansal | iOS Engineer — Hardware-Connected Apps</title>
        <meta name="description" content="iOS engineer with 3 years building hardware-connected apps for HP, Kodak &amp; Polaroid. Swift, Objective-C, BLE, Core Data. 10 live App Store apps, 120K+ ratings." />
        <meta property="og:title" content="Shobhit Bansal | iOS Engineer — Hardware-Connected Apps" />
        <meta property="og:description" content="iOS engineer building hardware-connected apps for HP, Kodak &amp; Polaroid. 10 live App Store apps, 120K+ ratings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shobhitbansal2002.vercel.app" />
      </Helmet>
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <About />
      <hr className="glow-divider my-0" />
      <Stats />
      <FeaturedProjects />
      <AllApps />
      <hr className="glow-divider my-0" />
      <Skills />
      <Timeline />
      <Education />
      <Contact />
    </div>
    </HelmetProvider>
  );
}

export default App;
