import { About } from './components/About'
import { Architecture } from './components/Architecture'
import { BtpSpotlight } from './components/BtpSpotlight'
import { Credentials } from './components/Credentials'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Snapshot } from './components/Snapshot'
import { Strengths } from './components/Strengths'
import { TechStack } from './components/TechStack'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Snapshot />
        <About />
        <BtpSpotlight />
        <Expertise />
        <Experience />
        <Projects />
        <Architecture />
        <TechStack />
        <Strengths />
        <Credentials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
