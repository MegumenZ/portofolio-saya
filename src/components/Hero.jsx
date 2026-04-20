import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useFloating, useMagnetic } from '../hooks/useAnimations';

export default function Hero() {
  const containerRef = useRef(null);
  const floatingRef = useFloating(12, 3500);
  const ctaRef = useMagnetic(0.2);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Main entrance animation timeline
    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl.add({
      targets: '.hero-badge',
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 800,
    })
    .add({
      targets: '.hero-title span',
      translateY: [60, 0],
      opacity: [0, 1],
      duration: 900,
      delay: anime.stagger(80),
    }, '-=400')
    .add({
      targets: '.hero-subtitle',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 700,
    }, '-=500')
    .add({
      targets: '.hero-description',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 700,
    }, '-=400')
    .add({
      targets: '.hero-cta',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(100),
    }, '-=300')
    .add({
      targets: '.hero-social',
      translateX: [-20, 0],
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100),
    }, '-=300')
    .add({
      targets: '.hero-scroll',
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 500,
    }, '-=200');

    // Floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle');
      particles.forEach((p, i) => {
        anime({
          targets: p,
          translateX: () => anime.random(-100, 100),
          translateY: () => anime.random(-100, 100),
          scale: [0, () => anime.random(5, 15) / 10],
          opacity: [0, () => anime.random(2, 6) / 10],
          duration: () => anime.random(3000, 6000),
          delay: i * 200,
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine',
        });
      });
    }
  }, []);

  const titleWords = ['Luthfiandri', 'Ardanie'];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle bg-indigo-400/30"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid dots background */}
      <div className="absolute inset-0 grid-dots-bg opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
          style={{ opacity: 0 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-300">
            Open to Opportunities & Internship
          </span>
        </div>

        {/* Title */}
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6">
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block" style={{ opacity: 0 }}>
              <span className={i === 1 ? 'gradient-text' : 'text-white'}>
                {word}
              </span>
              {i < titleWords.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="hero-subtitle text-xl sm:text-2xl font-medium text-slate-300 mb-4"
          style={{ opacity: 0 }}
        >
          Aspiring{' '}
          <span className="gradient-text-reverse font-bold">
            Fullstack Developer
          </span>
        </p>

        {/* Description */}
        <p
          className="hero-description max-w-xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10"
          style={{ opacity: 0 }}
        >
          Teknik Informatika student at <span className="text-indigo-400 font-semibold">ITERA</span> — crafting modern web experiences with React, Next.js & ElysiaJS.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            ref={ctaRef}
            href="#projects"
            className="hero-cta group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden"
            style={{ opacity: 0 }}
          >
            <span className="relative z-10">View My Work</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="hero-cta inline-flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white font-bold rounded-2xl transition-all duration-300 hover:bg-indigo-500/5"
            style={{ opacity: 0 }}
          >
            Get In Touch
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: <FiGithub size={20} />, href: 'https://github.com/luthfiandri', label: 'GitHub' },
            { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/luthfiandri', label: 'LinkedIn' },
            { icon: <FiInstagram size={20} />, href: 'https://instagram.com/luthfiandri', label: 'Instagram' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hero-social p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
              style={{ opacity: 0 }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          ref={floatingRef}
          className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: 0 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <FiArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
