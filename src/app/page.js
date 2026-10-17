import AnimationProvider from '../components/AnimationProvider';
import ComicBackdrop from '../components/ComicBackdrop';
import ComicGutter from '../components/ComicGutter';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import FeaturedProjects from '../components/FeaturedProjects';
import AllApps from '../components/AllApps';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <AnimationProvider>
      <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'var(--bg)' }}>
        {/* Dimmed Comic Backdrop with Halftone Overlay */}
        <ComicBackdrop />

        {/* Navigation */}
        <Navbar />

        {/* Comic Panels & Sections */}
        <main className="relative z-10">
          <Hero />
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
          <Contact />
        </main>
      </div>
    </AnimationProvider>
  );
}
