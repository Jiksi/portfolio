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
            <div className="grid-overlay-container">
                <motion.div
                    className="grid-overlay"
                    style={{
                        maskImage: maskImage,
                        WebkitMaskImage: maskImage,
                    }}
                />
            </div>

            <main className="container">
                <Navigation />
                <HeroSection />
                <WorkSection />
                <ContactSection />
                <Footer />
            </main>
        </div>
    );
}
