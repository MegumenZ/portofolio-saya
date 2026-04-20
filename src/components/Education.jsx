import { useScrollReveal } from '../hooks/useAnimations';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'S1 — Teknik Informatika',
    institution: 'Institut Teknologi Sumatera (ITERA)',
    location: 'Lampung Selatan, Indonesia',
    period: '2022 — Present (Semester 8)',
    description:
      'Pursuing a bachelor\'s degree in Informatics Engineering with a strong focus on web development, software engineering, and database systems. Active in campus tech communities and hackathons.',
    highlights: [
      'Focus on Web Development & Software Engineering',
      'Active in campus developer community',
      'Participated in various hackathons',
      'Relevant coursework: Data Structures, Algorithms, Database Systems, Web Programming',
    ],
  },
];

const certifications = [
  { name: 'React — The Complete Guide', issuer: 'Udemy', year: '2025' },
  { name: 'Next.js & React — The Complete Guide', issuer: 'Udemy', year: '2025' },
  { name: 'Fullstack Web Development', issuer: 'Dicoding', year: '2024' },
];

export default function Education() {
  const headingRef = useScrollReveal();
  const eduRef = useScrollReveal({ delay: 150 });
  const certHeadRef = useScrollReveal({ delay: 200 });

  return (
    <section id="education" className="relative py-28 px-6">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-16">
          <p className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3">
            // Education
          </p>
          <h2 className="section-heading">
            Academic{' '}
            <span className="gradient-text">journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education */}
          <div className="lg:col-span-2">
            {education.map((edu, i) => (
              <div
                key={i}
                ref={eduRef}
                className="glass-card p-8 relative overflow-hidden"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-emerald-400 rounded-r" />

                <div className="pl-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-indigo-400 font-semibold mb-4">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-5">
                    <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                      <FiCalendar className="text-indigo-400" size={14} />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                      <FiMapPin className="text-emerald-400" size={14} />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <ul className="space-y-3">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div ref={certHeadRef}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <FiAward className="text-amber-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => {
                  const ref = useScrollReveal({ delay: 200 + i * 100 });
                  return (
                    <div
                      key={i}
                      ref={ref}
                      className="glass-card p-4 group cursor-default"
                    >
                      <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {cert.name}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-slate-400">
                          {cert.issuer}
                        </span>
                        <span className="text-xs text-slate-500">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
