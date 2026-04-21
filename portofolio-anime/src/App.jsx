import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimeCursor from './components/AnimeCursor';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  // Setup state untuk dark mode (default true agar langsung keren)
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    // Base layout dengan class dark: untuk mengatur background keseluruhan
    <div className="bg-gray-50 text-anime-dark dark:bg-anime-black dark:text-white min-h-screen relative overflow-hidden transition-colors duration-500">
      <AnimeCursor />

      {/* Theme Toggle Button (Melayang di pojok kanan atas) */}
      <motion.button
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 bg-anime-red text-white p-3 clip-p3-menu hover:bg-anime-dark dark:hover:bg-white dark:hover:text-anime-dark transition-all duration-300 shadow-xl flex items-center justify-center cursor-none"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      {/* Ribbon Marquee (Pita Running Text khas UI Game Jepang) */}
      <div className="fixed top-0 left-0 w-[200%] h-6 bg-anime-dark dark:bg-zinc-900 border-b border-anime-red text-white/50 text-[10px] font-black tracking-[0.3em] uppercase flex items-center z-40 rotate-0 pointer-events-none opacity-80">
        <div className="animate-marquee whitespace-nowrap">
          [ SYS.PORTFOLIO ] LUTHFI ANDRI ARDANIE // FULLSTACK DEVELOPER // REACT & NEXT.JS // ITERA // [ SYS.PORTFOLIO ] LUTHFI ANDRI ARDANIE // FULLSTACK DEVELOPER // REACT & NEXT.JS // ITERA // [ SYS.PORTFOLIO ] LUTHFI ANDRI ARDANIE // FULLSTACK DEVELOPER // REACT & NEXT.JS // ITERA //
        </div>
      </div>

      {/* SECTION UTAMA (DIURUTKAN DENGAN BENAR) */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}