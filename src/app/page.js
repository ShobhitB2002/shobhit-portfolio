import AnimationProvider from '../components/AnimationProvider'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import FeaturedProjects from '../components/FeaturedProjects'
import AllApps from '../components/AllApps'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <AnimationProvider>
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
    </AnimationProvider>
  )
}
