import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
    const springConfig = { type: "spring", stiffness: 120, damping: 14 };

    // Data partikel melayang untuk mengurangi kesan sepi
    const particles = Array.from({ length: 6 });

    return (
        <section id="hero" className="min-h-screen flex items-center px-6 md:px-20 relative pt-10 z-[50]">
            {/* Halftone Pattern - Adaptif di Dark/Light */}
            <div className="absolute inset-0 bg-halftone opacity-40 dark:opacity-20 pointer-events-none"></div>

            {/* Garis Koneksi Global */}
            <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-gray-300 dark:bg-zinc-800 hidden md:block z-0">
                <div className="absolute top-0 -left-[5px] w-3 h-3 bg-anime-red rotate-45 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                <div className="absolute top-[40%] -left-[10px] text-gray-800 dark:text-zinc-500 font-black text-xs tracking-[0.5em] transform -rotate-90 origin-left whitespace-nowrap opacity-30">
                    SYS.ROOT // 00
                </div>
            </div>

            {/* Partikel Geometris Melayang khas Persona */}
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-anime-red/20 dark:text-anime-red/40 font-black select-none pointer-events-none text-2xl"
                    initial={{ y: "110vh", x: Math.random() * 100 + "vw", rotate: 0 }}
                    animate={{ y: "-10vh", rotate: 360 }}
                    transition={{ duration: Math.random() * 10 + 15, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                >
                    +
                </motion.div>
            ))}

            {/* Teks Outline Raksasa (Menyesuaikan Dark Mode) */}
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] md:text-[22rem] font-black italic text-outline-dark dark:text-outline-light whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter"
            >
                PORTFOLIO
            </motion.div>

            {/* Aksen Slash Merah */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute right-[5%] md:right-[15%] top-0 bottom-0 w-24 md:w-32 bg-anime-red skew-x-[-20deg] origin-top pointer-events-none z-0 opacity-90"
            ></motion.div>

            <div className="z-10 max-w-5xl relative w-full mt-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springConfig, delay: 0.2 }}
                    className="mb-4 inline-block relative"
                >
                    {/* Aksen kotak di belakang label */}
                    <div className="absolute inset-0 bg-anime-red translate-x-1 translate-y-1 clip-p3-menu -z-10"></div>
                    <span className="bg-anime-dark dark:bg-white dark:text-anime-dark text-white font-black px-6 py-2 text-sm tracking-widest uppercase italic clip-p3-menu block border border-anime-dark dark:border-white">
                        Fullstack Developer
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springConfig, delay: 0.3 }}
                    className="relative mb-8"
                >
                    <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] text-anime-dark dark:text-white drop-shadow-xl">
                        Luthfiandri <br />
                        <span className="text-anime-red ml-8 md:ml-16 block relative">
                            Ardanie
                            <span className="absolute top-[4px] left-[4px] text-anime-red opacity-30 dark:opacity-50 -z-10">Ardanie</span>
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springConfig, delay: 0.4 }}
                    className="max-w-2xl mb-12 pl-6 border-l-8 border-anime-red relative"
                >
                    {/* Kotak deskripsi dengan efek glassmorphism yang cocok di light/dark */}
                    <p className="text-lg font-medium leading-relaxed bg-white/90 dark:bg-zinc-900/90 text-gray-800 dark:text-gray-200 backdrop-blur-sm p-5 shadow-lg relative overflow-hidden group">
                        {/* Dekorasi scanline halus di dalam kotak text saat hover */}
                        <span className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] dark:bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
                        Mahasiswa Teknik Informatika semester 8 di ITERA. Berfokus pada pengembangan interface web modern dengan React dan membangun sistem backend yang solid.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springConfig, delay: 0.5 }}
                >
                    <Button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-anime-red hover:bg-anime-dark dark:hover:bg-white dark:hover:text-anime-dark text-white rounded-none clip-p3-menu px-12 py-8 text-xl font-black italic tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.05)] cursor-none"
                    >
                        LIHAT PROJECT
                    </Button>
                </motion.div>
            </div>

            {/* P5 Style Divider - Static Skewed Tape */}
            <div className="absolute -bottom-4 left-[-2%] w-[105%] h-8 bg-anime-red rotate-[-1deg] z-50 border-y-2 border-anime-dark dark:border-white shadow-xl pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.2)_10px,rgba(0,0,0,0.2)_20px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.15)_10px,rgba(255,255,255,0.15)_20px)]"></div>
            </div>
        </section>
    );
}