import { useState, useEffect, useRef } from "react";
import type { Route } from "./+types/home";
import { projects } from "~/data/projects";
import { motion, useSpring, frame, animate, useMotionTemplate, AnimatePresence } from "motion/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zhicxi Azis Pramana | Software Engineer" },
    { name: "description", content: "Portfolio of Zhicxi Azis Pramana, a software engineer." },
  ];
}

const springConfig = { damping: 20, stiffness: 50, restDelta: 0.001 };

function ImageSlider({ imageUrls, title }: { imageUrls: string[], title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageUrls.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [imageUrls.length, index]);

  const paginate = (newDirection: number) => {
    setIndex((prev) => (prev + newDirection + imageUrls.length) % imageUrls.length);
  };

  const variants = {
    enter: {
      zIndex: 0,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0
    }
  };

  return (
    <div className="work-image-wrapper">
      <div className="work-image-slider">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={imageUrls[index]}
            alt={`${title} - image ${index + 1}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="work-image"
          />
        </AnimatePresence>
        
        {imageUrls.length > 1 && (
          <>
            <button 
              className="slider-arrow prev" 
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
            >
              &lt;
            </button>
            <button 
              className="slider-arrow next"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const workListRef = useRef<HTMLDivElement>(null);
  
  // Motion values for spotlight
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Create a template for the mask image that automatically updates with x and y
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)`;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedId && workListRef.current && !workListRef.current.contains(event.target as Node)) {
        setExpandedId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expandedId]);

  // Effect to handle window resize and detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Effect to handle animations based on isMobile state
  useEffect(() => {
    if (!isMobile) {
      // Desktop: Follow Pointer
      const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
        frame.read(() => {
          x.set(clientX);
          y.set(clientY);
        });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    } else {
      // Mobile: Random Movement
      let intervalId: number;
      
      const moveRandomly = () => {
        const targetX = Math.random() * window.innerWidth;
        const targetY = Math.random() * window.innerHeight;
        
        animate(x, targetX, { duration: 3, ease: "easeInOut" });
        animate(y, targetY, { duration: 3, ease: "easeInOut" });
      };

      // Set interval for random movement
      intervalId = window.setInterval(moveRandomly, 3000);
      moveRandomly(); // initial move
      
      return () => {
        window.clearInterval(intervalId);
      };
    }
  }, [isMobile, x, y]);

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
        {/* Navigation */}
        <nav className="nav animate-fade-up">
          <div className="nav-brand">JIKSI</div>
          <div className="nav-links">
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#work" className="nav-link">Works</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-meta animate-fade-up delay-1">[01] &mdash; SOFTWARE ENGINEER</p>
            <h1 className="hero-title animate-fade-up delay-2">
              Building systems<br />
              <span className="hero-title-indent">with precision.</span>
            </h1>
            <div className="hero-footer animate-fade-up delay-3">
              <p>Specializing in distributed architecture</p>
              <p>and refined user interfaces.</p>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="work">
          <div className="section-header animate-fade-up">
            <h2 className="section-title">Selected Works</h2>
            <span className="section-meta">[02]</span>
          </div>

          <div className="work-list" ref={workListRef}>
            {projects.map((project, index) => {
              const isExpanded = expandedId === project.id;
              
              return (
                <div 
                  key={project.id} 
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
                      <ImageSlider imageUrls={project.imageUrls} title={project.title} />
                      
                      <div className="work-info">
                        <p className="work-description">{project.description}</p>
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
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact animate-fade-up">
          <div className="section-header">
            <h2 className="section-title">Initiate Contact</h2>
            <span className="section-meta">[03]</span>
          </div>
          
          <div className="contact-content">
            <p className="contact-text">Currently accepting new opportunities for Q3.</p>
            <a href="mailto:hello@engineer.com" className="contact-email">
              hello@engineer.com
              <span className="contact-email-underline" />
            </a>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="footer animate-fade-up delay-1">
          <p>&copy; {new Date().getFullYear()} &mdash; All Rights Reserved.</p>
          <p>Designed with Intent.</p>
        </footer>
      </main>
    </div>
  );
}
