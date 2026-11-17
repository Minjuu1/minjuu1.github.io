import React from 'react';
import { Mail, FileText, Github, GraduationCap, Linkedin } from 'lucide-react';

import './Hero.css';

// Links under the name. Leave a url empty to hide that link.
const LINKS = [
  { label: 'Email', url: 'mailto:minjuyoo@kaist.ac.kr', Icon: Mail },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=qZyFus8AAAAJ', Icon: GraduationCap, external: true },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/minju-y-a72a79300/', Icon: Linkedin, external: true },
  { label: 'GitHub', url: '', Icon: Github, external: true }, // 'https://github.com/Minjuu1'
  { label: 'CV', url: '/files/cv.pdf', Icon: FileText, external: true },
];

// Left panel: photo, name, and links.
export const Profile = () => {
  return (
    <section className="profile-section">
      <div className="hero-image">
        <img
          src="/images/minju_profile.jpeg"
          alt="Minju Yoo profile"
        />
      </div>
      <h1 className="hero-title">Minju Yoo</h1>
      <p className="hero-subtitle">M.S. Student · Human‑Computer Interaction · Learning Sciences</p>
      <ul className="profile-links">
        {LINKS.filter((link) => link.url).map(({ label, url, Icon, external }) => (
          <li key={label}>
            <a
              href={url}
              className="profile-link"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Top of the right panel: bio.
export const About = () => {
  return (
    <section className="about-section">
      <p className="hero-description">
        I am a second-year master's student at <a href="https://www.kaist.ac.kr/">KAIST School of Computing</a>, co-advised by <a href="https://joseph.seering.org/">Prof. Joseph Seering</a> and <a href="https://juhokim.com/">Prof. Juho Kim</a>. Currently, I'm part of both <a href="https://cstlab.org/">CSTL</a> and <a href="https://www.kixlab.org/">KIXLAB</a>.
      </p>
      <p className="hero-description">
        I design and study conversational AI systems that support learners' reasoning, reflection, and agency, as well as teachers' pedagogical decisions. My research draws on Human-Computer Interaction and Learning Sciences, with an emphasis on learners' critical engagement with AI.
      </p>
      <p className="hero-description">I am applying to PhD programs for Fall 2027.</p>
    </section>
  );
};
