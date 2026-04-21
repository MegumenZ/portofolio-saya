import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'timeline', label: 'Journey' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find all intersecting entries
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // 50% dari section harus terlihat agar dianggap aktif
        );

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => {
            navItems.forEach((item) => {
                const el = document.getElementById(item.id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 pointer-events-auto hidden sm:flex">
            {navItems.map((item) => {
                const isActive = activeSection === item.id;
                
                return (
                    <div key={item.id} className="relative group cursor-none flex items-center justify-end">
                        {/* Label Teks - Selalu muncul jika aktif, atau saat di-hover */}
                        <span 
                            className={`absolute right-8 transition-all duration-300 pointer-events-none whitespace-nowrap clip-p3-menu shadow-lg px-3 py-1.5 text-xs font-black italic tracking-widest border border-transparent
                            ${isActive 
                                ? 'opacity-100 bg-anime-red text-white translate-x-0' 
                                : 'opacity-0 bg-anime-dark text-white border-gray-700 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 dark:bg-white dark:text-anime-dark'
                            }`}
                        >
                            {item.label}
                        </span>
                        
                        {/* Dot Button */}
                        <button
                            onClick={() => scrollTo(item.id)}
                            className={`transition-all duration-300 transform rounded-sm cursor-none
                            ${isActive 
                                ? 'w-4 h-4 bg-anime-red scale-125 rotate-45 border-none shadow-[0_0_10px_rgba(220,38,38,0.8)]' 
                                : 'w-3 h-3 bg-gray-400 hover:bg-anime-red dark:bg-zinc-600 border-none hover:scale-150 hover:rotate-45 hover:shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                            }`}
                            aria-label={item.label}
                        />
                    </div>
                );
            })}
        </div>
    );
}
