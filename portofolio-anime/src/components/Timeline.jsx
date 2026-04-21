import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowDown } from 'lucide-react';

const timelineData = [
    {
        year: "2025 Juli - 2025 Agustus",
        title: "Intern Web Developer - DISKOMINFO",
        description: "Membantu DISKOMINFO Kabupaten Pringsewu membuat website data kabupaten.",
        type: "Experience",
        icon: Briefcase,
        tech: ["Laravel", "Bootstrap", "PHP", "MySQL"]
    },
    {
        year: "2022 - Sekarang",
        title: "S1 Teknik Informatika - ITERA",
        description: "Mempelajari rekayasa perangkat lunak, struktur data, UI/UX, dan pengembangan sistem web secara mendalam.",
        type: "Education",
        icon: GraduationCap,
        tech: ["Computer Science", "Software Engineering", "UI/UX"]
    }
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-32 px-6 relative bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 z-[30]">
            {/* Latar Belakang Halftone */}
            <div className="absolute inset-0 bg-halftone opacity-30 dark:opacity-20 pointer-events-none z-0"></div>

            {/* Garis Koneksi Global */}
            <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-gray-300 dark:bg-zinc-800 hidden md:block z-0">
                <div className="absolute top-1/3 -left-[10px] text-gray-800 dark:text-zinc-500 font-black text-xs tracking-[0.5em] transform -rotate-90 origin-left whitespace-nowrap opacity-30">
                    JOURNEY // 02
                </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 relative"
                >
                    <div className="inline-block bg-anime-dark dark:bg-white text-white dark:text-anime-dark px-4 py-1 font-black italic text-sm mb-4 clip-p3-menu uppercase tracking-widest shadow-lg">
                        Archive // 02
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-anime-dark dark:text-white relative z-10 drop-shadow-xl">
                        My <span className="text-anime-red">Journey</span>
                    </h2>
                    {/* Teks Bayangan Animasi */}
                    <div className="absolute top-10 md:top-12 left-0 right-0 text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-outline-red blur-[2px] -z-10 animate-pulse opacity-50">
                        My Journey
                    </div>
                </motion.div>

                {/* Garis Vertikal Timeline */}
                <div className="relative border-l-4 border-dashed border-gray-300 dark:border-zinc-700 ml-6 md:ml-32 mt-10">
                    {timelineData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50, skewX: 10 }}
                                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.2 }}
                                className="mb-20 ml-12 md:ml-16 relative group"
                            >
                                {/* Titik Timeline & Icon */}
                                <div className="absolute -left-[66px] md:-left-[84px] top-0 w-12 h-12 bg-gray-200 dark:bg-zinc-800 border-4 border-anime-dark dark:border-white rounded-full flex items-center justify-center text-anime-dark dark:text-white group-hover:bg-anime-red group-hover:border-anime-red group-hover:text-white dark:group-hover:text-white dark:group-hover:bg-anime-red transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg] shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10">
                                    <Icon size={20} strokeWidth={3} />
                                </div>

                                {/* Garis Penghubung Kesamping */}
                                <div className="absolute -left-12 md:-left-16 top-6 w-12 md:w-16 h-1 bg-gray-300 dark:bg-zinc-700 group-hover:bg-anime-red transition-colors duration-500 -z-10"></div>

                                {/* Konten Kotak */}
                                <div className="bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 group-hover:border-anime-red p-6 md:p-8 clip-p3-menu shadow-xl hover:shadow-2xl transition-all duration-300 relative transform origin-left group-hover:scale-[1.02]">

                                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
                                        <span className="inline-block bg-anime-red text-white text-[10px] md:text-xs font-black px-4 py-1.5 italic tracking-widest clip-p3-menu uppercase shadow-md w-max">
                                            {item.year}
                                        </span>
                                        <span className="text-gray-400 dark:text-zinc-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
                                            // {item.type}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-anime-dark dark:text-white mb-3 italic tracking-tight uppercase group-hover:text-anime-red dark:group-hover:text-anime-red transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] font-black italic bg-gray-100 dark:bg-zinc-800 text-anime-dark dark:text-gray-200 px-3 py-1.5 uppercase clip-p3-menu border border-gray-200 dark:border-zinc-700 group-hover:bg-anime-dark group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-anime-dark transition-colors duration-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Efek Bayangan Merah di belakang saat hover */}
                                <div className="absolute inset-0 bg-anime-red clip-p3-menu opacity-0 group-hover:opacity-100 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-300 -z-20"></div>
                            </motion.div>
                        );
                    })}

                    {/* Titik Akhir Berkedip (To Be Continued) */}
                    <div className="ml-[14px] md:ml-[14px] mt-8 flex items-center gap-6 relative group">
                        <div className="absolute -left-[30px] md:-left-[24px]">
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="text-anime-red"
                            >
                                <ArrowDown strokeWidth={4} size={32} />
                            </motion.div>
                        </div>
                        <span className="text-gray-400 dark:text-zinc-600 font-black italic tracking-[0.5em] text-xs md:text-sm uppercase bg-gray-100 dark:bg-zinc-900 px-4 py-2 clip-p3-menu group-hover:text-anime-red transition-colors duration-300">
                            To Be Continued...
                        </span>
                    </div>
                </div>
            </div>

            {/* P5 Style Divider - Static Skewed Tape */}
            <div className="absolute -bottom-4 left-[-2%] w-[105%] h-8 bg-gray-300 dark:bg-zinc-800 rotate-[-1.5deg] z-50 border-y-2 border-anime-dark dark:border-white shadow-xl pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]"></div>
            </div>
        </section>
    );
}
