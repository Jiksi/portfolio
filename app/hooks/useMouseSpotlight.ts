import { animate, frame, useMotionTemplate, useSpring } from 'motion/react';
import { useEffect } from 'react';
import { useIsMobile } from './useIsMobile';

const springConfig = { damping: 20, stiffness: 50, restDelta: 0.001 };

export function useMouseSpotlight() {
    const isMobile = useIsMobile();
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const maskImage = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)`;

    useEffect(() => {
        if (!isMobile) {
            // Desktop: Follow Pointer
            const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
                frame.read(() => {
                    x.set(clientX);
                    y.set(clientY);
                });
            };

            window.addEventListener('pointermove', handlePointerMove);
            return () =>
                window.removeEventListener('pointermove', handlePointerMove);
        } else {
            // Mobile: Random Movement
            let intervalId: number;

            const moveRandomly = () => {
                const targetX = Math.random() * window.innerWidth;
                const targetY = Math.random() * window.innerHeight;

                animate(x, targetX, { duration: 3, ease: 'easeInOut' });
                animate(y, targetY, { duration: 3, ease: 'easeInOut' });
            };

            // Set interval for random movement
            intervalId = window.setInterval(moveRandomly, 3000);
            moveRandomly(); // initial move

            return () => {
                window.clearInterval(intervalId);
            };
        }
    }, [isMobile, x, y]);

    return { maskImage };
}
