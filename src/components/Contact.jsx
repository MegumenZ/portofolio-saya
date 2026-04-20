import { useRef, useState } from 'react';
import anime from 'animejs';
import { useScrollReveal } from '../hooks/useAnimations';
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiPhone,
} from 'react-icons/fi';

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'luthfiandri@gmail.com',
    href: 'mailto:luthfiandri@gmail.com',
    color: 'text-indigo-400',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Lampung, Indonesia',
    href: null,
    color: 'text-emerald-400',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: '+62 xxx xxxx xxxx',
    href: null,
    color: 'text-amber-400',
  },
];

const socials = [
  { icon: <FiGithub size={22} />, href: 'https://github.com/luthfiandri', label: 'GitHub' },
  { icon: <FiLinkedin size={22} />, href: 'https://linkedin.com/in/luthfiandri', label: 'LinkedIn' },
  { icon: <FiInstagram size={22} />, href: 'https://instagram.com/luthfiandri', label: 'Instagram' },
];

export default function Contact() {
  const headingRef = useScrollReveal();
  const formRef = useScrollReveal({ delay: 200 });
  const infoRef = useScrollReveal({ delay: 300 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const btnRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Simulate submission
    anime({
      targets: btnRef.current,
      scale: [1, 0.95, 1],
      duration: 300,
      easing: 'easeInOutSine',
    });

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3">
            // Get In Touch
          </p>
          <h2 className="section-heading mb-4">
            Let's work{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            I'm currently open to internship opportunities and freelance projects.
            Feel free to reach out if you have a project in mind!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div ref={formRef} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                ref={btnRef}
                type="submit"
                disabled={sending}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-500 disabled:opacity-60"
              >
                {sent ? (
                  <>
                    <span className="text-emerald-300">✓</span> Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <span className="animate-spin text-lg">⏳</span> Sending...
                  </>
                ) : (
                  <>
                    <FiSend
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <div key={i} className="glass-card p-4 flex items-center gap-4 group cursor-default">
                  <span className={`${info.color} p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-slate-300 hover:text-indigo-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <p className="text-sm font-semibold text-slate-300 mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-emerald-400">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Internships, freelance, or collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
