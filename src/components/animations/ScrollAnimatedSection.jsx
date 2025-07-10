import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ScrollAnimatedSection = ({ 
    children, 
    animationType = 'fadeUp',
    delay = 0,
    duration = 0.2,
    threshold = 0.1 
}) => {
    const [ref, isVisible] = useScrollAnimation(threshold);

    const animations = {
        fadeUp: {
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        fadeLeft: {
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
        },
        fadeRight: {
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        slideDown: {
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animations[animationType]}
            transition={{
                duration,
                delay,
                ease: [0.4, 0.0, 0.2, 1] // Faster, more responsive easing
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimatedSection;
