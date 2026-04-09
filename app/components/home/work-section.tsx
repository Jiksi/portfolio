import { useEffect, useRef, useState } from 'react';
import { projects } from '~/data/projects';
import { ProjectItem } from './project-item';

export function WorkSection({ ref }: { ref?: React.RefObject<HTMLElement | null> }) {
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
        <section id="work" ref={ref} className="min-h-svh">
            <div className="section-header animate-fade-up">
                <h2 className="section-title">Selected Works</h2>
                <span className="section-meta">[02]</span>
            </div>

            <div className="work-list" ref={workListRef}>
                {projects.map((project, index) => (
                    <ProjectItem
                        key={project.id}
                        project={project}
                        index={index}
                        isExpanded={expandedId === project.id}
                        toggleExpand={toggleExpand}
                    />
                ))}
            </div>
        </section>
    );
}
