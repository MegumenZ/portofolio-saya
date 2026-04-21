import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

export default function Projects() {
    const menuVariants = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12, staggerChildren: 0.1 } }
    };

    return (
        <section id="projects" className="py-32 px-6 relative bg-gray-50 dark:bg-[#050505] transition-colors duration-500 z-[10]">
            {/* Teks Outline Background - Berubah warna di Dark Mode */}
            <div className="absolute top-10 right-0 text-[10rem] font-black italic text-outline-red dark:opacity-30 pointer-events-none select-none tracking-tighter opacity-50 z-0">
                PROJECTS
            </div>

            {/* Garis Koneksi Global */}
            <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-gray-300 dark:bg-zinc-800 hidden md:block z-0">
                <div className="absolute top-1/2 -left-[10px] text-gray-800 dark:text-zinc-500 font-black text-xs tracking-[0.5em] transform -rotate-90 origin-left whitespace-nowrap opacity-30">
                    ARCHIVE // 04
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 md:pl-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl font-black uppercase italic tracking-tighter text-anime-dark dark:text-white">Project Archive</h2>
                    <div className="w-24 h-2 bg-anime-red mt-4 skew-x-[-20deg]"></div>
                </motion.div>

                <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-6"
                >
                    {projectsData.map((proj, index) => (
                        <motion.a
                            href={proj.github || "#"}
                            target={proj.github ? "_blank" : "_self"}
                            rel={proj.github ? "noopener noreferrer" : ""}
                            key={proj.id}
                            variants={menuVariants}
                            whileHover={{ x: 20 }}
                            className="group cursor-none relative block"
                        >
                            {/* Baris Menu Parallelogram - Support Dark Mode */}
                            <div className="bg-white dark:bg-zinc-900 shadow-md group-hover:bg-anime-dark dark:group-hover:bg-white transition-colors duration-300 clip-p3-menu relative z-10 border-l-8 border-transparent group-hover:border-anime-red flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8">

                                <div className="flex-grow">
                                    <h3 className="text-2xl md:text-3xl font-black italic text-anime-dark dark:text-white group-hover:text-white dark:group-hover:text-anime-dark transition-colors duration-300 uppercase tracking-tight mb-2">
                                        {proj.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-700 transition-colors duration-300 max-w-2xl font-medium">
                                        {proj.description}
                                    </p>
                                </div>

                                <div className="mt-6 md:mt-0 flex gap-2 flex-wrap md:justify-end">
                                    {proj.techStack.map(tech => (
                                        <span key={tech} className="bg-gray-100 dark:bg-zinc-800 group-hover:bg-gray-800 dark:group-hover:bg-zinc-200 text-anime-dark dark:text-gray-200 group-hover:text-white dark:group-hover:text-anime-dark text-xs font-bold italic px-3 py-1 uppercase clip-p3-menu transition-colors duration-300 border border-gray-200 dark:border-zinc-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Efek Bayangan Merah di belakang saat hover */}
                            <div className="absolute inset-0 bg-anime-red clip-p3-menu opacity-0 group-hover:opacity-100 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300 -z-10"></div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}