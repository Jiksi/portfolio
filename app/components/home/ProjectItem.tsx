import { ImageSlider } from '../ui/ImageSlider';

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
    index: number;
    isExpanded: boolean;
    toggleExpand: (id: string) => void;
};

export function ProjectItem({
    project,
    index,
    isExpanded,
    toggleExpand,
}: ProjectProps) {
    return (
        <div
            className={`work-item animate-fade-up ${isExpanded ? 'expanded' : ''}`}
            style={{ animationDelay: `${0.3 * index}s` }}
            onClick={() => !isExpanded && toggleExpand(project.id)}
        >
            <div className="work-item-content">
                <h3 className="work-title">{project.title}</h3>
                <div className="work-details">
                    <span className="work-tech">{project.tech}</span>
                    <span className="work-year">{project.year}</span>
                </div>
            </div>

            {isExpanded && (
                <div className="work-expanded-content">
                    <ImageSlider
                        imageUrls={project.imageUrls}
                        title={project.title}
                    />

                    <div className="work-info">
                        <p className="work-description">
                            {project.description}
                        </p>
                        <div className="work-links">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-link-item"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    GitHub
                                </a>
                            )}
                            {project.websiteUrl && (
                                <a
                                    href={project.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-link-item"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Website
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="work-hover-bg" />
        </div>
    );
}
