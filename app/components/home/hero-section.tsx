import {
    AnimatePresence,
    motion,
    useReducedMotion,
    type Variants,
} from 'motion/react';

export function HeroSection({ isWorkInView }: { isWorkInView?: boolean }) {
    const isVisible = !isWorkInView;
    const shouldReduceMotion = useReducedMotion();

    const scrollToWork = () => {
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
            filter: shouldReduceMotion ? 'none' : 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1],
            },
        },
    };

    const scrollButtonVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            x: '-50%',
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            x: '-50%',
            filter: 'blur(0px)',
            transition: {
                duration: 1,
                ease: [0.19, 1, 0.22, 1],
            },
        },
        floating: {
            y: [0, -8, 0],
            x: '-50%',
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
        hover: {
            scale: 1.1,
            color: 'var(--color-foreground)',
            transition: { type: 'spring', stiffness: 400, damping: 10 },
        },
        tap: { scale: 0.95 },
        exit: {
            opacity: 0,
            y: 20,
            x: '-50%',
            filter: 'blur(8px)',
            transition: { duration: 0.4 },
        },
    };

    return (
        <section className="relative flex min-h-svh flex-col justify-center overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    variants={itemVariants}
                    className="mb-4 text-xs tracking-widest text-muted uppercase"
                >
                    ZHICXI AZIS PRAMANA &mdash; SOFTWARE ENGINEER
                </motion.p>
                <motion.h1
                    variants={itemVariants}
                    className="mb-4 text-[clamp(3rem,8vw,8rem)]"
                >
                    I need work,
                    <br />
                    <span className="block pl-[15vw] text-accent italic">
                        you need worker.
                    </span>
                </motion.h1>
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-2 pt-3 text-sm text-muted md:flex-row md:justify-between"
                >
                    <p>Let's work together</p>
                    <p>and make a lot of money.</p>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        variants={scrollButtonVariants}
                        initial="hidden"
                        animate={
                            shouldReduceMotion
                                ? 'visible'
                                : ['visible', 'floating']
                        }
                        whileHover="hover"
                        whileTap="tap"
                        exit="exit"
                        onClick={scrollToWork}
                        className="fixed bottom-12 left-1/2 z-50 cursor-pointer text-[10px] tracking-[0.3em] text-muted uppercase"
                    >
                        Scroll to Explore
                    </motion.button>
                )}
            </AnimatePresence>
        </section>
    );
}
