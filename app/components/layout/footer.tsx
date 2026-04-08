import { motion } from 'framer-motion';

export function Footer() {
    return (
        <motion.footer
            className="mt-4 flex justify-between border-t border-border py-4 text-xs text-muted uppercase"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: 'easeInOut' }}
        >
            <p>
                &copy; {new Date().getFullYear()} &mdash; All Rights Reserved.
            </p>
            <p>Designed with Intent.</p>
        </motion.footer>
    );
}
