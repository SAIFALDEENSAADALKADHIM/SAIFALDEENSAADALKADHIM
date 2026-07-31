import { lazy, Suspense } from 'react'
import './App.css'
import { PROFILE } from './data/profile'
import Header from './pages/Header/Header'

const Hero = lazy(() => import('./pages/Hero/Hero'))
const Stats = lazy(() => import('./pages/Stats/Stats'))
const Experience = lazy(() => import('./pages/Experience/Experience'))
const Education = lazy(() => import('./pages/Education/Education'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const Software = lazy(() => import('./pages/Software/Software'))
const Skills = lazy(() => import('./pages/Skills/Skills'))
const IEEE = lazy(() => import('./pages/IEEE/IEEE'))
const Publications = lazy(() => import('./pages/Publications/Publications'))
const Partnerships = lazy(() => import('./pages/Partnerships/Partnerships'))
const ScienceHub = lazy(() => import('./pages/ScienceHub/ScienceHub'))
const News = lazy(() => import('./pages/News/News'))
const Footer = lazy(() => import('./pages/Footer/Footer'))

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#top">Skip to content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<div className="loader">Loading…</div>}>
          <Hero />
          <Stats />
          <Experience />
          <Education />
          <Projects />
          <Software />
          <Skills />
          <IEEE />
          <Publications />
          <Partnerships />
          <ScienceHub />
          <News />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
