import React, { useEffect, useRef, useState } from 'react';
import { ConfPublications, WorkPublications } from '../data/publication';
import { People } from '../data/people';
import { FileText, Github, Globe, ExternalLink, Award } from 'lucide-react';
import './PubSection.css';

// Teaser image: pub.image if set, otherwise public/images/teaser-<id>.svg, then .png, then .jpg.
const TEASER_EXTENSIONS = ['svg', 'png', 'jpg'];

const PubCard = ({ pub }) => {
  const [extIndex, setExtIndex] = useState(0);
  const imgRef = useRef(null);
  const candidates = [
    ...(pub.image ? [`/images/${pub.image}`] : []),
    ...TEASER_EXTENSIONS.map((ext) => `/images/teaser-${pub.id}.${ext}`),
  ];
  const src = candidates[extIndex] ?? '/images/teaser-default.png';

  const handleError = () => {
    setExtIndex((i) => Math.min(i + 1, candidates.length));
  };

  // With prerendered HTML the image can fail before React attaches onError,
  // so check once after mount (and after each fallback) for an already-broken image.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) handleError();
  });

  return (
    <article className="pub-card">
      <div className="pub-image">
        <img
          ref={imgRef}
          src={src}
          alt={`Teaser for ${pub.title}`}
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
                {person?.url ? (
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
                    {person?.name ?? author}{isEqual && <sup>*</sup>}
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
            {pub.award && (
              <span className="pub-award">
                <Award size={14} />
                {pub.award}
              </span>
            )}
          </div>
        )}
        {pub.note && <div className="pub-note">{pub.note}</div>}

        {pub.urls && (
          <div className="pub-links">
            {Object.entries(pub.urls).map(([label, url]) => {
              const getIcon = (label) => {
                const lowerLabel = label.toLowerCase();
                if (lowerLabel.includes('paper') || lowerLabel.includes('pdf')) {
                  return <FileText size={13} />;
                } else if (lowerLabel.includes('code') || lowerLabel.includes('github')) {
                  return <Github size={13} />;
                } else if (lowerLabel.includes('demo') || lowerLabel.includes('website') || lowerLabel.includes('site')) {
                  return <Globe size={13} />;
                } else {
                  return <ExternalLink size={13} />;
                }
              };

              const displayLabels = { pdf: 'PDF', acm: 'ACM DL', springer: 'Springer', arxiv: 'arXiv', website: 'Website', paper: 'Paper' };

              return (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  {getIcon(label)}
                  {displayLabels[label] ?? label}
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