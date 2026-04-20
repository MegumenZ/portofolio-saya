import { useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';

/**
 * Hook to animate elements when they enter the viewport
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      translateY = [40, 0],
      opacity = [0, 1],
      duration = 800,
      delay = 0,
      easing = 'easeOutExpo',
    } = options;

    // Set initial state
    el.style.opacity = '0';
    el.style.transform = `translateY(${translateY[0]}px)`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: el,
            translateY,
            opacity,
            duration,
            delay,
            easing,
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Hook to stagger-animate a list of children
 */
export function useStaggerReveal(selector = '.stagger-item', options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(selector);
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: items,
            translateY: [30, 0],
            opacity: [0, 1],
            duration: options.duration || 700,
            delay: anime.stagger(options.staggerDelay || 100),
            easing: options.easing || 'easeOutExpo',
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return containerRef;
}

/**
 * Hook for text typing/reveal effect
 */
export function useTextReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent;
    el.innerHTML = '';
    
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.textContent = char === ' ' ? '\u00A0' : char;
      el.appendChild(span);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: el.querySelectorAll('span'),
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            delay: anime.stagger(30),
            easing: 'easeOutExpo',
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Hook for cursor-following glow effect
 */
export function useCursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e) => {
      anime({
        targets: glow,
        left: e.clientX,
        top: e.clientY,
        duration: 600,
        easing: 'easeOutExpo',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return glowRef;
}

/**
 * Hook for parallax floating animation
 */
export function useFloating(amplitude = 15, duration = 3000) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = anime({
      targets: el,
      translateY: [-amplitude, amplitude],
      duration,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });

    return () => anim.pause();
  }, []);

  return ref;
}

/**
 * Hook for counting numbers animation
 */
export function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const obj = { value: 0 };
          anime({
            targets: obj,
            value: target,
            round: 1,
            duration,
            easing: 'easeOutExpo',
            update: () => {
              el.textContent = obj.value;
            },
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return ref;
}

/**
 * Magnetic hover effect on element
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    anime({
      targets: el,
      translateX: x * strength,
      translateY: y * strength,
      duration: 400,
      easing: 'easeOutExpo',
    });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    anime({
      targets: el,
      translateX: 0,
      translateY: 0,
      duration: 600,
      easing: 'easeOutElastic(1, .5)',
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}
