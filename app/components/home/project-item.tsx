import { AnimatePresence, motion } from 'motion/react';
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
    return (
        <motion.div
            layout
            initial={false}
            className="group border-b border-border"
        >
            {/* Simple View / Header */}
            <motion.div
                layout="position"
                onClick={onToggle}
                className="flex cursor-pointer items-center justify-between py-8 transition-colors hover:bg-black/2"
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
                    <span className="font-mono text-xs">{project.year}</span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10"
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 1V11M1 6H11"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>
                </div>
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
                        <div className="grid gap-12 pb-12 md:grid-cols-2">
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

                                <div className="mt-12 flex gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex h-12 items-center justify-center border border-black/10 bg-black/5 px-8 font-mono text-xs tracking-widest uppercase transition-all hover:bg-foreground hover:text-background"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.websiteUrl && (
                                        <a
                                            href={project.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex h-12 items-center justify-center border border-black/10 bg-foreground px-8 font-mono text-xs tracking-widest text-background uppercase transition-all hover:bg-transparent hover:text-foreground"
                                        >
                                            Live Site
                                        </a>
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
