import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Certifications } from './sections/Certifications'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
