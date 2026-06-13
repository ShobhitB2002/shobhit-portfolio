import React, { useEffect } from 'react';
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
  );
}

export default App;
