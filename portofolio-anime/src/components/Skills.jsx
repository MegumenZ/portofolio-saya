import { motion } from 'framer-motion';

const skills = ['React', 'Next.js', 'ElysiaJS', 'Tailwind CSS', 'Vite', 'Node.js', 'TypeScript', 'GCP', 'Ceph'];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, skewX: 20 },
        show: { opacity: 1, scale: 1, skewX: 0, transition: { type: "spring", stiffness: 120 } }
    };

    return (
        <section id="skills" className="py-32 px-6 relative overflow-hidden bg-gray-100 dark:bg-[#0a0a0a] transition-colors duration-500">
            {/* Latar Belakang Halftone */}
            <div className="absolute inset-0 bg-halftone opacity-30 dark:opacity-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-anime-dark dark:text-white relative z-10">
                        Tech <span className="text-anime-red">Arsenal</span>
                    </h2>
                    {/* Teks Bayangan */}
                    <h2 className="absolute top-2 left-0 right-0 text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-outline-dark dark:text-outline-light -z-10">
                        Tech Arsenal
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="bg-white dark:bg-zinc-900 border-l-8 border-anime-dark dark:border-white hover:border-anime-red dark:hover:border-anime-red text-anime-dark dark:text-white px-6 py-4 font-black italic text-xl uppercase tracking-wider clip-p3-menu shadow-lg transition-colors cursor-none group relative overflow-hidden"
                        >
                            {/* Efek kilauan merah saat hover */}
                            <div className="absolute inset-0 bg-anime-red opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}