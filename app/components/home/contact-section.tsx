import { motion } from 'motion/react';

export function ContactSection() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="py-40"
        >
            <div className="mb-4 flex items-baseline justify-between">
                <h2 className="text-[clamp(2rem,4vw,4rem)]">
                    Initiate Contact
                </h2>
                <span className="text-xs text-muted">[03]</span>
            </div>

            <div className="flex flex-col gap-4">
                <p className="max-w-150 text-[1.25rem]">
                    Currently looking for new opportunities.
                </p>
                <a
                    href="mailto:zhicxi.ap@gmail.com"
                    className="group relative inline-block self-start font-display text-[clamp(2rem,6vw,6rem)] transition-colors duration-300 hover:text-accent"
                >
                    zhicxi.ap@gmail.com
                    <span className="absolute bottom-[10%] left-0 h-0.5 w-full origin-right scale-x-100 bg-current transition-transform duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:origin-left group-hover:scale-x-0" />
                </a>
            </div>
        </motion.section>
    );
}
