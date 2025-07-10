import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally stop observing after the first trigger
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin]);

    return [ref, isVisible];
};

export const useStaggeredScrollAnimation = (itemCount, delay = 0.1) => {
    const containerRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const container = containerRef.current;
        if (container) {
            const items = container.querySelectorAll('[data-index]');
            items.forEach((item) => observer.observe(item));
        }

        return () => {
            if (container) {
                const items = container.querySelectorAll('[data-index]');
                items.forEach((item) => observer.unobserve(item));
            }
        };
    }, [itemCount]);

    return [containerRef, visibleItems];
};
