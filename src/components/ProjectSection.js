import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Projects } from '../data/projects';
import './ProjectSection.css';

const ProjectCard = ({ project }) => {
  const [src, setSrc] = useState(`/images/project-${project.id}.png`);

  const handleError = () => {
    if (src === `/images/project-${project.id}.png`) {
      setSrc(`/images/project-${project.id}.jpg`);
    } else {
      setSrc('/images/teaser-default.png');
    }
  };

  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={src}
          alt={`teaser of ${project.title}`}
          onError={handleError}
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        {project.year && <div className="project-year">{project.year}</div>}
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
              <ExternalLink size={16} />
              Link
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

const ProjectSection = () => {
  return (
    <section className="project-section">
      <h2 className="project-section-title">Projects</h2>
      <div className="project-grid">
        {Projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
