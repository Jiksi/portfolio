import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const workSection = document.getElementById('work');
        if (!workSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.2 },
        );

        observer.observe(workSection);
        return () => observer.disconnect();
    }, []);

    const scrollToWork = () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative flex min-h-svh flex-col justify-center">
            <div>
                <motion.p
                    className="mb-4 text-xs tracking-widest text-muted uppercase"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.19, 1, 0.22, 1],
                        delay: 0.1,
                    }}
                >
                    ZHICXI AZIS PRAMANA &mdash; SOFTWARE ENGINEER
                </motion.p>
                <motion.h1
                    className="mb-4 text-[clamp(3rem,8vw,8rem)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.19, 1, 0.22, 1],
                        delay: 0.2,
                    }}
                >
                    I need work,
                    <br />
                    <span className="block pl-[15vw] text-accent italic">
                        you need worker.
                    </span>
                </motion.h1>
                <motion.div
                    className="flex flex-col gap-2 pt-3 text-sm text-muted md:flex-row md:justify-between"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.19, 1, 0.22, 1],
                        delay: 0.3,
                    }}
                >
                    <p>Let's work together</p>
                    <p>and make a lot of money.</p>
                </motion.div>
            </div>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        onClick={scrollToWork}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer text-[10px] tracking-[0.3em] text-muted uppercase transition-colors duration-300 hover:text-foreground"
                        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            filter: 'blur(8px)',
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.19, 1, 0.22, 1],
                        }}
                    >
                        Scroll to Explore
                    </motion.button>
                )}
            </AnimatePresence>
        </section>
    );
}
