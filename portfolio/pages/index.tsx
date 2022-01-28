import type { NextPage } from 'next'
import About from '../components/About/About'
import Navigation from '../components/Navigation/Navigation'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Navigation />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
