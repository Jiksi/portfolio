import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router';
import MagneticButton from '../magnetic-button';

const navLinks = [
    { href: '#work', label: 'Works' },
    { href: '#contact', label: 'Contact' },
];

function StaggeredTextLink({ href, label }: { href: string; label: string }) {
    return (
        <motion.a
            href={href}
            className="relative flex overflow-hidden text-xs tracking-widest uppercase"
            initial="initial"
            whileHover="hovered"
        >
            <div className="flex">
                {label.split('').map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: '100%' },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: i * 0.025,
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 flex">
                {label.split('').map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        variants={{
                            initial: { y: '-100%' },
                            hovered: { y: 0 },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: i * 0.025,
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </div>
            <motion.div
                className="absolute bottom-0 left-0 h-px w-full bg-current"
                variants={{
                    initial: { scaleX: 0, originX: 0 },
                    hovered: { scaleX: 1 },
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
            />
        </motion.a>
    );
}

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className="fixed top-0 left-0 z-50 flex w-full items-center justify-between mask-b-from-80% mask-b-to-100% p-4 md:px-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{
                opacity: 1,
                y: 0,
                backdropFilter: isScrolled ? 'blur(8px)' : 'blur(0px)',
                backgroundColor: isScrolled
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0)',
            }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
            <Link to="/">
                <MagneticButton>
                    <img src="/logo.svg" alt="Log" className="size-14" />
                </MagneticButton>
            </Link>
            <div className="flex gap-4">
                {navLinks.map((link) => (
                    <StaggeredTextLink
                        key={link.href}
                        href={link.href}
                        label={link.label}
                    />
                ))}
            </div>
        </motion.nav>
    );
}
