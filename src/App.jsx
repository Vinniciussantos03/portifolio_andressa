import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-rosegold focus:px-5 focus:py-2.5 focus:font-heading focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
