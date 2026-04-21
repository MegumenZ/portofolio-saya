import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Contact() {
    return (
        <footer id="contact" className="bg-anime-dark dark:bg-[#000000] text-white py-32 relative transition-colors duration-500 z-0">
            {/* Background Accent Slash */}
            <div className="absolute left-[-10%] top-0 bottom-0 w-1/3 bg-anime-red skew-x-[30deg] opacity-20 pointer-events-none"></div>

            {/* Garis Koneksi Global - Tanda Berakhir */}
            <div className="absolute left-4 md:left-12 top-0 bottom-10 w-px bg-gray-300 dark:bg-zinc-800 hidden md:block z-0">
                <div className="absolute bottom-0 -left-[5px] w-3 h-3 bg-anime-red rotate-45 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                <div className="absolute top-[30%] -left-[10px] text-gray-800 dark:text-zinc-500 font-black text-xs tracking-[0.5em] transform -rotate-90 origin-left whitespace-nowrap opacity-30">
                    TERMINAL // 05
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">
                        Ready To <br /> <span className="text-anime-red">Collaborate?</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 dark:text-gray-400 mb-12 max-w-lg mx-auto font-medium text-lg"
                >
                    Terbuka untuk diskusi proyek, peran pengembangan fullstack, atau bertukar wawasan seputar dunia web development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                >
                    {/* Tombol Email */}
                    <Button
                        size="lg"
                        className="bg-anime-red hover:bg-white text-white hover:text-anime-dark rounded-none clip-p3-menu px-10 py-8 text-xl font-black italic tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(255,255,255,0.1)] cursor-none"
                        onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ardanie2004@gmail.com', '_blank')}
                    >
                        HUBUNGI SAYA
                    </Button>

                    <div className="flex gap-4">
                        {/* GitHub Button */}
                        <Button variant="outline" size="icon" className="w-14 h-14 bg-transparent border-2 border-gray-600 text-gray-300 hover:text-anime-dark hover:bg-white hover:border-white rounded-none clip-p3-menu transition-all cursor-none" asChild>
                            <a href="https://github.com/MegumenZ" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                        </Button>

                        {/* LinkedIn Button */}
                        <Button variant="outline" size="icon" className="w-14 h-14 bg-transparent border-2 border-gray-600 text-gray-300 hover:text-anime-dark hover:bg-white hover:border-white rounded-none clip-p3-menu transition-all cursor-none" asChild>
                            <a href="https://www.linkedin.com/in/luthfiandri-ardanie-549a6224b/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </Button>
                    </div>
                </motion.div>

                <div className="mt-8 text-sm text-gray-500 border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center font-bold tracking-widest">
                    <p>© {new Date().getFullYear()} Luthfi Andri Ardanie.</p>
                    <p className="mt-2 md:mt-0 italic flex items-center gap-2">
                        STATUS: <span className="text-anime-red">ONLINE</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}