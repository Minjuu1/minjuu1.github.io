import React, { useState } from 'react';
import { ConfPublications, WorkPublications } from '../data/publication';
import { People } from '../data/people';
import { FileText, Github, Globe, ExternalLink } from 'lucide-react';
import './PubSection.css';

const PubCard = ({ pub }) => {
  const [src, setSrc] = useState(`/images/teaser-${pub.id}.png`);

  const handleError = () => {
    if (src === `/images/teaser-${pub.id}.png`) {
      setSrc(`/images/teaser-${pub.id}.jpg`);
    } else {
      setSrc('/images/teaser-default.png');
    }
  };

  return (
    <article className="pub-card">
      <div className="pub-image">
        <img
          src={src}
          alt="teaser image of publication"
          onError={handleError}
        />
      </div>

      <div className="pub-content">
        <h3 className="pub-title">{pub.title}</h3>
        <div className="pub-authors">
          {pub.authors.map((author, idx) => {
            const person = People.find((p) => p.id === author);
            const isMe = author === 'minju';
            const isEqual = pub.equalContribution?.includes(author);
            return (
              <React.Fragment key={author}>
                {person ? (
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`author-link ${isMe ? 'author-me' : 'author-other'}`}
                  >
                    {person.name}{isEqual && <sup>*</sup>}
                  </a>
                ) : (
                  <span className="author-name">
                    {author}{isEqual && <sup>*</sup>}
                  </span>
                )}
                {idx < pub.authors.length - 1 && ', '}
              </React.Fragment>
            );
          })}
        </div>
        {pub.venue && (
          <div className="pub-venue">
            {pub.venue} {pub.year ? ` ${pub.year}` : ''}
          </div>
        )}
        {pub.note && <div className="pub-note">{pub.note}</div>}

        {pub.urls && (
          <div className="pub-links">
            {Object.entries(pub.urls).map(([label, url]) => {
              const getIcon = (label) => {
                const lowerLabel = label.toLowerCase();
                if (lowerLabel.includes('paper') || lowerLabel.includes('pdf')) {
                  return <FileText size={16} />;
                } else if (lowerLabel.includes('code') || lowerLabel.includes('github')) {
                  return <Github size={16} />;
                } else if (lowerLabel.includes('demo') || lowerLabel.includes('website') || lowerLabel.includes('site')) {
                  return <Globe size={16} />;
                } else {
                  return <ExternalLink size={16} />;
                }
              };

              return (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  {getIcon(label)}
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

const PubSection = () => {
  return (
    <section className="pub-section">
      <h2 className="pub-section-title">
        Publications
      </h2>
      <div className="section-space">
        <h3 className="pub-subsection-title">
          Conference Papers
        </h3>
        <div className="pub-grid">
          {ConfPublications.map((p) => (
            <PubCard key={p.id} pub={p} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="pub-subsection-title">
          Posters and Workshop Papers
        </h3>
        <div className="pub-grid">
          {WorkPublications.map((p) => (
            <PubCard key={p.id} pub={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PubSection;