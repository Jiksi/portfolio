import { LayoutGroup, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { projects } from '~/data/projects';
import { ProjectItem } from './project-item';

export function WorkSection({
    ref,
}: {
    ref?: React.RefObject<HTMLElement | null>;
}) {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const workListRef = useRef<HTMLDivElement>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                expandedId &&
                workListRef.current &&
                !workListRef.current.contains(event.target as Node)
            ) {
                setExpandedId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [expandedId]);

    return (
        <section id="work" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="mb-4 flex items-baseline justify-between"
            >
                <h2 className="text-[clamp(2rem,4vw,4rem)]">Selected Works</h2>
                <span className="text-xs text-muted">[02]</span>
            </motion.div>

            <LayoutGroup>
                <div
                    className="flex flex-col border-t border-black"
                    ref={workListRef}
                >
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            isExpanded={expandedId === project.id}
                            onToggle={() => toggleExpand(project.id)}
                        />
                    ))}
                </div>
            </LayoutGroup>
        </section>
    );
}
