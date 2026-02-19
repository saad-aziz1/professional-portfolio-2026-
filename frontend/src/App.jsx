import Contact from './components/Contact'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App