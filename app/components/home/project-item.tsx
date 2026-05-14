import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ImageSlider } from '../ui/image-slider';

export type ProjectProps = {
    project: {
        id: string;
        title: string;
        tech: string;
        year: string;
        description: string;
        imageUrls: string[];
        githubUrl?: string;
        websiteUrl?: string;
    };
    isExpanded: boolean;
    onToggle: () => void;
};

export function ProjectItem({ project, isExpanded, onToggle }: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [originY, setOriginY] = useState<0 | 1>(0);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;
        // If enters from top half, anchor to top (0) so it grows DOWN
        setOriginY(relativeY < rect.height / 2 ? 0 : 1);
        setIsHovered(true);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;
        // When leaving, update originY so it retracts towards the exit side
        setOriginY(relativeY < rect.height / 2 ? 0 : 1);
        setIsHovered(false);
    };

    return (
        <motion.div
            layout
            initial={false}
            className="group border-b border-black"
        >
            {/* Simple View / Header */}
            <motion.div
                layout="position"
                onClick={onToggle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative flex cursor-pointer items-center justify-between py-4 transition-colors"
            >
                {/* Background Fill Animation */}
                <motion.div
                    className="absolute inset-0 z-0 bg-black"
                    initial={{ height: 0 }}
                    animate={{ height: isHovered ? '100%' : 0 }}
                    transition={{
                        duration: 0.4,
                        ease: [0.19, 1, 0.22, 1],
                    }}
                    style={{
                        originY,
                        bottom: originY === 1 ? 0 : 'auto',
                        top: originY === 0 ? 0 : 'auto',
                    }}
                />

                {/* Content Wrapper for Padding and Color Animation */}
                <motion.div
                    animate={{
                        paddingLeft: isHovered ? '1.5rem' : '0rem',
                        paddingRight: isHovered ? '1.5rem' : '0rem',
                        color: isHovered ? '#FFFFFF' : 'inherit',
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.19, 1, 0.22, 1],
                    }}
                    className="relative z-10 flex w-full items-center justify-between"
                >
                    <div className="flex flex-1 items-baseline gap-8">
                        <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
                            {project.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-12 text-right">
                        <span className="hidden font-mono text-xs tracking-widest uppercase opacity-40 md:block">
                            {project.tech}
                        </span>
                        <span className="font-mono text-xs">
                            {project.year}
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Detailed View */}
            <AnimatePresence mode="wait">
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.19, 1, 0.22, 1],
                        }}
                        className="overflow-hidden"
                    >
                        <div className="grid gap-6 py-6 md:grid-cols-2 md:gap-12">
                            <div className="order-2 md:order-1">
                                <ImageSlider
                                    imageUrls={project.imageUrls}
                                    title={project.title}
                                />
                            </div>

                            <div className="order-1 flex flex-col justify-between md:order-2">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <p className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
                                            Technologies
                                        </p>
                                        <p className="text-sm font-medium">
                                            {project.tech}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
                                            Description
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-4 md:mt-12">
                                    {project.githubUrl && (
                                        <Button
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            variant="primary"
                                        >
                                            GitHub
                                        </Button>
                                    )}
                                    {project.websiteUrl && (
                                        <Button
                                            href={project.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            variant="outline"
                                        >
                                            Live Site
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
