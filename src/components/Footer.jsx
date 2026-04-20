import { FiHeart, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-sm text-slate-500">
          <span>Built with</span>
          <FiHeart className="text-rose-500 animate-pulse" size={14} />
          <span>by</span>
          <span className="font-semibold text-slate-300">Luthfiandri Ardanie</span>
        </div>

        <p className="text-sm text-slate-600 font-mono">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <a
          href="#home"
          className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300"
          aria-label="Back to top"
        >
          <FiArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
