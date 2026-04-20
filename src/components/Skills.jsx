import { useRef, useEffect } from 'react';
import anime from 'animejs';
import { useScrollReveal, useStaggerReveal } from '../hooks/useAnimations';
import {
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
} from 'react-icons/fi';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiElysiajs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiVite,
  SiPostman,
} from 'react-icons/si';

const categories = [
  {
    title: 'Frontend',
    icon: <FiLayout className="text-sky-400" />,
    color: 'sky',
    skills: [
      { name: 'React', icon: <SiReact />, color: '#61dafb' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
      { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
      { name: 'CSS3', icon: <SiCss3 />, color: '#1572b6' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
    ],
  },
  {
    title: 'Backend',
    icon: <FiServer className="text-emerald-400" />,
    color: 'emerald',
    skills: [
      { name: 'ElysiaJS', icon: <SiElysiajs />, color: '#a855f7' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
    ],
  },
  {
    title: 'Database',
    icon: <FiDatabase className="text-amber-400" />,
    color: 'amber',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169e1' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
      { name: 'Prisma', icon: <SiPrisma />, color: '#2d3748' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: <FiTool className="text-rose-400" />,
    color: 'rose',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
      { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
      { name: 'Figma', icon: <SiFigma />, color: '#f24e1e' },
      { name: 'Vite', icon: <SiVite />, color: '#646cff' },
      { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
    ],
  },
];

function SkillCard({ name, icon, color, delay }) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    anime({
      targets: cardRef.current,
      scale: 1.08,
      duration: 300,
      easing: 'easeOutExpo',
    });
  };
  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current,
      scale: 1,
      duration: 400,
      easing: 'easeOutElastic(1, .6)',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="stagger-item flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/5 cursor-default transition-colors duration-300"
    >
      <span className="text-xl" style={{ color }}>
        {icon}
      </span>
      <span className="text-sm font-medium text-slate-300">{name}</span>
    </div>
  );
}

function CategorySection({ title, icon, skills, color }) {
  const containerRef = useStaggerReveal('.stagger-item', { staggerDelay: 60 });

  return (
    <div ref={containerRef} className="glass-card p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl">{icon}</span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} {...skill} delay={i * 60} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headingRef = useScrollReveal();

  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-16">
          <p className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3">
            // Skills & Tech Stack
          </p>
          <h2 className="section-heading">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <CategorySection key={cat.title} {...cat} />
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4 text-sm font-medium">
            🚀 Currently diving deeper into:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React Hooks', 'Next.js App Router', 'ElysiaJS + Bun', 'Server Components', 'REST & GraphQL APIs'].map(
              (item) => (
                <span
                  key={item}
                  className="tech-badge border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
