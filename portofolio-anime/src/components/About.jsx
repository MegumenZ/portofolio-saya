import { motion } from 'framer-motion';

export default function About() {
    const springConfig = { type: "spring", stiffness: 100, damping: 15 };

    return (
        <section id="about" className="py-32 px-6 relative bg-white dark:bg-anime-black transition-colors duration-500 z-[40]">
            {/* Ornamen Teks Berjalan di Latar Belakang (Vertikal) */}
            <div className="absolute left-[-50px] top-0 bottom-0 flex items-center justify-center opacity-10 dark:opacity-5 pointer-events-none z-0">
                <h2 className="text-[8rem] font-black italic text-anime-dark dark:text-white transform -rotate-90 whitespace-nowrap tracking-tighter">
                    ABOUT ME
                </h2>
            </div>

            {/* Garis Koneksi Global */}
            <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-gray-300 dark:bg-zinc-800 hidden md:block z-0">
                <div className="absolute top-1/2 -left-[10px] text-gray-800 dark:text-zinc-500 font-black text-xs tracking-[0.5em] transform -rotate-90 origin-left whitespace-nowrap opacity-30">
                    PROFILE // 01
                </div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">

                {/* Kolom Kiri: Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="md:w-1/3 relative"
                >
                    <div className="bg-anime-red text-white inline-block px-6 py-2 font-black italic text-2xl uppercase tracking-tighter clip-p3-menu mb-4 shadow-lg">
                        About
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black italic text-anime-dark dark:text-white uppercase leading-none tracking-tighter">
                        Profil <br /> <span className="text-outline-dark dark:text-outline-light">Singkat</span>
                    </h2>
                    {/* Garis Aksen */}
                    <div className="w-full h-1 bg-gray-200 dark:bg-zinc-800 mt-6 relative">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute top-0 left-0 h-full w-1/2 bg-anime-red origin-left"
                        ></motion.div>
                    </div>
                </motion.div>

                {/* Kolom Kanan: Konten dengan Efek Tumpuk */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={springConfig}
                    className="md:w-2/3 relative group"
                >
                    {/* Bayangan Merah Parallelogram */}
                    <div className="absolute inset-0 bg-anime-red translate-x-3 translate-y-3 clip-p3-menu -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>

                    {/* Kotak Konten Utama */}
                    <div className="bg-gray-50 dark:bg-zinc-900 border-2 border-anime-dark dark:border-white p-8 md:p-10 clip-p3-menu relative z-10">
                        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                            Sebagai mahasiswa tingkat akhir di <span className="font-bold text-anime-red italic">Institut Teknologi Sumatera (ITERA)</span>, saya memiliki fokus mendalam pada pengembangan ekosistem web modern.
                        </p>
                        <br />
                        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                            Tujuan karir saya adalah menjadi <span className="font-bold text-anime-dark dark:text-white italic bg-gray-200 dark:bg-zinc-800 px-2 py-1">Fullstack Developer</span> yang mampu merancang arsitektur backend yang baik sekaligus meracik interface frontend yang dinamis dan interaktif.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* P5 Style Divider - Static Skewed Tape */}
            <div className="absolute -bottom-4 left-[-2%] w-[105%] h-8 bg-anime-dark dark:bg-white rotate-[1.5deg] z-50 border-y-2 border-anime-red shadow-xl pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)] dark:bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
            </div>
        </section>
    );
}