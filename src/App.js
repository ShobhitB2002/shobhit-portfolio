import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeaturedProjects from './components/FeaturedProjects';
import AllApps from './components/AllApps';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <AllApps />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;