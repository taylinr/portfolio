import type { NextPage } from 'next'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Navigation from '../components/Navigation/Navigation'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

const Home: NextPage = () => {
  return (
    <div className="relative mb-52 scroll-smooth">
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
