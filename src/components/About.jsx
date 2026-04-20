import { useScrollReveal, useCountUp } from '../hooks/useAnimations';
import { FiCode, FiCoffee, FiBookOpen, FiZap } from 'react-icons/fi';

const stats = [
  { icon: <FiCode />, value: 8, label: 'Semester', suffix: 'th' },
  { icon: <FiCoffee />, value: 15, label: 'Projects Built', suffix: '+' },
  { icon: <FiBookOpen />, value: 3, label: 'Frameworks', suffix: '' },
  { icon: <FiZap />, value: 100, label: 'Passion', suffix: '%' },
];

function StatCard({ icon, value, label, suffix, delay }) {
  const ref = useScrollReveal({ delay });
  const countRef = useCountUp(value);

  return (
    <div ref={ref} className="glass-card p-5 text-center group cursor-default">
      <div className="text-indigo-400 text-2xl mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        <span ref={countRef}>0</span>
        <span className="text-indigo-400">{suffix}</span>
      </div>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function About() {
  const headingRef = useScrollReveal();
  const textRef = useScrollReveal({ delay: 200 });
  const text2Ref = useScrollReveal({ delay: 300 });

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16">
          <p className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3">
            // About Me
          </p>
          <h2 className="section-heading">
            Passionate about building{' '}
            <span className="gradient-text">the web</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-3">
            <p ref={textRef} className="text-lg text-slate-300 leading-relaxed mb-6">
              Hi! I'm <span className="text-white font-semibold">Luthfiandri Ardanie</span>, a Teknik Informatika student at
              <span className="text-indigo-400 font-semibold"> Institut Teknologi Sumatera (ITERA)</span>, currently in my 8th semester.
              I'm deeply passionate about web development and committed to becoming a proficient fullstack developer.
            </p>
            <p ref={text2Ref} className="text-base text-slate-400 leading-relaxed mb-8">
              My journey in web development has led me to explore cutting-edge technologies. I'm currently diving deep into 
              <span className="text-emerald-400 font-medium"> React</span> for building dynamic UIs, 
              <span className="text-emerald-400 font-medium"> Next.js</span> for server-side rendering and fullstack capabilities, and 
              <span className="text-emerald-400 font-medium"> ElysiaJS</span> for blazing-fast backend services with Bun runtime.
              I believe in writing clean, maintainable code and creating seamless user experiences.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Problem Solver', 'Fast Learner', 'Team Player', 'Detail Oriented', 'Creative Thinker'].map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
