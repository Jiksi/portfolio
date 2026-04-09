import { motion } from 'motion/react';
import { useRef } from 'react';
import { ContactSection } from '~/components/home/contact-section';
import { HeroSection } from '~/components/home/hero-section';
import { WorkSection } from '~/components/home/work-section';
import { Footer } from '~/components/layout/footer';
import { Navigation } from '~/components/layout/navigation';
import { useMouseSpotlight } from '~/hooks/use-mouse';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Zhicxi Azis Pramana | Software Engineer' },
        {
            name: 'description',
            content: 'Portfolio of Zhicxi Azis Pramana, a software engineer.',
        },
    ];
}

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { maskImage } = useMouseSpotlight();

    return (
        <div ref={containerRef}>
            <div className="fixed top-0 left-0 z-0 size-full">
                <motion.div
                    className="fixed top-0 left-0 z-0 size-full bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[50px_50px]"
                    style={{
                        maskImage: maskImage,
                        WebkitMaskImage: maskImage,
                    }}
                />
            </div>

            <main className="relative z-10 mx-auto max-w-350 px-4 md:px-8">
                <Navigation />
                <HeroSection />
                <WorkSection />
                <ContactSection />
                <Footer />
            </main>
        </div>
    );
}
