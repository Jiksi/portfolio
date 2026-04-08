import { motion } from 'framer-motion';

const navLinks = [
    { href: '#work', label: 'Works' },
    { href: '#contact', label: 'Contact' },
];

function StaggeredTextLink({ href, label }: { href: string; label: string }) {
    return (
        <motion.a
            href={href}
            className="nav-link relative flex overflow-hidden"
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
    return (
        <motion.nav
            className="fixed top-0 left-0 z-50 flex w-full items-center justify-between mask-b-from-50% mask-b-to-100% px-4 pt-5 pb-20 backdrop-blur-sm md:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
            <img src="/logo.svg" alt="Logo" className="size-14" />
            <div className="relative flex gap-4 text-xs tracking-widest uppercase">
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
