import { useRef, useState } from 'react';
import anime from 'animejs';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiElysiajs,
  SiPostgresql,
  SiPrisma,
  SiJavascript,
} from 'react-icons/si';

const techIcons = {
  React: <SiReact className="text-sky-400" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  'Node.js': <SiNodedotjs className="text-green-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  'Express.js': <SiExpress className="text-white" />,
  ElysiaJS: <SiElysiajs className="text-purple-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  Prisma: <SiPrisma className="text-white" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Built with a focus on performance and seamless UX.',
    tech: ['Next.js', 'Tailwind CSS', 'ElysiaJS', 'PostgreSQL', 'Prisma'],
    image: null,
    github: '#',
    live: '#',
    featured: true,
    color: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates, drag-and-drop interface, team workspaces, and progress tracking dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    image: null,
    github: '#',
    live: '#',
    featured: true,
    color: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio! A personal website showcasing my skills, projects, and experience — built with React, Tailwind CSS, and anime.js.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: null,
    github: '#',
    live: '#',
    featured: false,
    color: 'from-rose-500/20 to-orange-500/20',
  },
  {
    title: 'Blog Platform',
    description:
      'A full-stack blog platform with markdown support, categories, authentication, and a clean reading experience.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    image: null,
    github: '#',
    live: '#',
    featured: false,
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    title: 'Weather Dashboard',
    description:
      'An interactive weather dashboard with real-time data fetching, location-based forecasts, and beautiful weather visualizations.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: null,
    github: '#',
    live: '#',
    featured: false,
    color: 'from-sky-500/20 to-blue-500/20',
  },
  {
    title: 'API Gateway Service',
    description:
      'A lightweight and blazing-fast API gateway built with ElysiaJS and Bun runtime for microservice architecture.',
    tech: ['ElysiaJS', 'PostgreSQL', 'Prisma'],
    image: null,
    github: '#',
    live: '#',
    featured: false,
    color: 'from-violet-500/20 to-fuchsia-500/20',
  },
];

function FeaturedProject({ project, index }) {
  const ref = useScrollReveal({ delay: index * 150 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    anime({
      targets: card,
      rotateY: x,
      rotateX: -y,
      duration: 400,
      easing: 'easeOutExpo',
    });
  };

  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current,
      rotateY: 0,
      rotateX: 0,
      duration: 800,
      easing: 'easeOutElastic(1, .5)',
    });
  };

  return (
    <div ref={ref} style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card overflow-hidden group"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Gradient header */}
        <div
          className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 grid-dots-bg opacity-20" />
          <FiFolder
            size={64}
            className="text-white/20 group-hover:text-white/30 group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-3">
              <a
                href={project.github}
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={project.live}
                className="text-slate-500 hover:text-indigo-400 transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink size={18} />
              </a>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
              >
                {techIcons[t]}
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallProject({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    anime({
      targets: cardRef.current,
      translateY: -6,
      duration: 300,
      easing: 'easeOutExpo',
    });
  };
  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current,
      translateY: 0,
      duration: 400,
      easing: 'easeOutExpo',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="stagger-item glass-card p-5 group cursor-default"
    >
      <div className="flex items-center justify-between mb-3">
        <FiFolder size={24} className="text-indigo-400" />
        <div className="flex gap-3">
          <a href={project.github} className="text-slate-500 hover:text-white transition-colors">
            <FiGithub size={16} />
          </a>
          <a href={project.live} className="text-slate-500 hover:text-indigo-400 transition-colors">
            <FiExternalLink size={16} />
          </a>
        </div>
      </div>
      <h4 className="text-base font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h4>
      <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-slate-500 font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal();
  const otherRef = useStaggerReveal('.stagger-item', { staggerDelay: 100 });
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-16">
          <p className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3">
            // Projects
          </p>
          <h2 className="section-heading">
            Things I've{' '}
            <span className="gradient-text">built</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-lg font-bold text-slate-300 mb-6">
          Other Noteworthy Projects
        </h3>
        <div ref={otherRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {other.map((project, i) => (
            <SmallProject key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
