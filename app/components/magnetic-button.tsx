import {
    motion,
    useReducedMotion,
    useSpring,
    useTransform,
} from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    distance?: number;
    className?: string;
}

export default function MagneticButton({
    children,
    distance = 0.5,
    className = '',
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    const x = useTransform(mouseX, (val) => (shouldReduceMotion ? 0 : val));
    const y = useTransform(mouseY, (val) => (shouldReduceMotion ? 0 : val));

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || shouldReduceMotion) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } =
            ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        mouseX.set(middleX * distance);
        mouseY.set(middleY * distance);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y, position: 'relative' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
