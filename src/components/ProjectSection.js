import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Projects } from '../data/projects';
import './ProjectSection.css';

// Image lookup order: public/images/project-<id>.svg, then .png, then .jpg.
const IMAGE_EXTENSIONS = ['svg', 'png', 'jpg'];

const isDev = process.env.NODE_ENV !== 'production';
const visibleProjects = Projects.filter((p) => isDev || !p.sample);

const ProjectCard = ({ project }) => {
  const [extIndex, setExtIndex] = useState(0);
  const imgRef = useRef(null);
  const src =
    extIndex < IMAGE_EXTENSIONS.length
      ? `/images/project-${project.id}.${IMAGE_EXTENSIONS[extIndex]}`
      : null;

  const handleError = () => {
    setExtIndex((i) => Math.min(i + 1, IMAGE_EXTENSIONS.length));
  };

  // With prerendered HTML the image can fail before React attaches onError,
  // so check once after mount (and after each fallback) for an already-broken image.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) handleError();
  });

  return (
    <article className="project-card">
      <div className={`project-image ${src ? '' : 'project-image-empty'}`}>
        {src && (
          <img
            ref={imgRef}
            src={src}
            alt={`Teaser for ${project.title}`}
            onError={handleError}
          />
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
        {project.url && (
          <div className="project-links">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={13} />
              Link
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

const ProjectSection = () => {
  if (visibleProjects.length === 0) return null;

  return (
    <section className="project-section">
      <h2 className="project-section-title">Ongoing Work</h2>
      <div className="project-grid">
        {visibleProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
