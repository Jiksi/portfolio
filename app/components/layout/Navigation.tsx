import { motion } from 'framer-motion';

const navLinks = [
    { href: '#work', label: 'Works' },
    { href: '#contact', label: 'Contact' },
];

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
                    <a key={link.href} href={link.href} className="nav-link">
                        {link.label}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
