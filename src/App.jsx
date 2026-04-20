import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCursorGlow } from './hooks/useAnimations';

function App() {
  const cursorGlowRef = useCursorGlow();

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Cursor glow */}
      <div ref={cursorGlowRef} className="cursor-glow hidden lg:block" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
