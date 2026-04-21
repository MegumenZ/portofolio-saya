import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function AnimeCursor() {
    // Gunakan MotionValue agar update instan tanpa re-render React
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics untuk ring luar agar mengikuti dengan halus
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, .cursor-pointer')) setIsHovering(true);
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('a, button, input, .cursor-pointer')) setIsHovering(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Titik Utama (Instan, nol delay) */}
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-anime-red z-[100] pointer-events-none rounded-full"
                style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
                animate={{ scale: isHovering ? 0 : 1 }}
            />

            {/* Ring Luar (Mengikuti dengan efek spring halus) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-anime-red z-[99] pointer-events-none rounded-full"
                style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(220, 38, 38, 0.1)" : "rgba(220, 38, 38, 0)"
                }}
            />
        </>
    );
}