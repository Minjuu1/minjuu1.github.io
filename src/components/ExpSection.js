import { Educations } from '../data/education';
import { Experiences } from '../data/experience';
import React from 'react';
import { People } from '../data/people';
import { MapPin } from 'lucide-react';
import './ExpSection.css';

const ExperienceCard = ({ exp }) => {
  return (
    <article className="experience-card">
      <div className="card-content">
        <div className="card-title">
          {exp.title} @ {exp.organization}
        </div>

        <div className="card-details">
          {Array.isArray(exp.advisor) && exp.advisor.length > 0 && (
            <div className="advisor-section">
              <span className="advisor-label">Advisor:</span>
              {exp.advisor.map((advisor, idx) => {
                const person = People.find((p) => p.id === advisor);
                return (
                  <React.Fragment key={advisor}>
                    {person && person.url ? (
                      <a
                        href={person.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="person-link"
                      >
                        {person.name}
                      </a>
                    ) : (
                      <span className="person-name">{person ? person.name : advisor}</span>
                    )}
                    {idx < exp.advisor.length - 1 && ', '}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          {Array.isArray(exp.mentor) && exp.mentor.length > 0 && (
            <div className="mentor-section">
              <span className="mentor-label">Mentor:</span>
              {exp.mentor.map((mentor, idx) => {
                const person = People.find((p) => p.id === mentor);
                return (
                  <React.Fragment key={mentor}>
                    {person && person.url ? (
                      <a
                        href={person.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="person-link"
                      >
                        {person.name}
                      </a>
                    ) : (
                      <span className="person-name">{person ? person.name : mentor}</span>
                    )}
                    {idx < exp.mentor.length - 1 && ', '}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="card-sidebar">
        {exp.location && (
          <span className="location-info">
            <MapPin size={16} />
            {exp.location}
          </span>
        )}
        {exp.period && (
          <span className="period-info">
            {exp.period}
          </span>
        )}
      </div>
    </article>
  );
};

const EducationCard = ({ edu }) => {
  return (
    <article className="education-card">
      <div className="card-content">
        <div className="card-title">{edu.school}</div>
        <div className="card-details">
            {edu.degree}
        </div>
        <div className="card-details">
            {edu.gpa && <span className="gpa-info">GPA: {edu.gpa}</span>}
        </div>
      </div>

      <div className="card-sidebar">
        {edu.location && (
          <span className="location-info">
            <MapPin size={16} />
            {edu.location}
          </span>
        )}
        {edu.period && (
          <span className="period-info">
            {edu.period}
          </span>
        )}
      </div>
    </article>
  );
};

const ExpSection = () => {
  return (
    <section className="exp-section">
      <div className="section-space">
        <h2 className="section-title">
          Experience
        </h2>
        <div className="grid-container">
          {Experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">
          Education
        </h2>
        <div className="grid-container">
          {Educations.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpSection;