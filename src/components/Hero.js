import React from 'react';
import { Mail, ExternalLink, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Minju Yoo</h1>
          <p className="hero-subtitle">M.S. Student · Human‑Computer Interaction · Learning Science</p>

          <p className="hero-description">
            I am a first-year master's student at <a href="https://www.kaist.ac.kr/">KAIST School of Computing</a>, co-advised by <a href="https://joseph.seering.org/">Prof. Joseph Seering</a> and <a href="https://juhokim.com/">Prof. Juho Kim</a>. Currently, I'm part of both <a href="https://cstlab.org/">CSTL</a> and <a href="https://www.kixlab.org/">KIXLAB</a>.
          </p>
          <p className="hero-description">
            My research interests lie at the intersection of Human-Computer Interaction (HCI) and Learning. I am particularly interested in learning contexts where AI is integrated, such as AI-enhanced classrooms and collaborative learning environments. I aim to research technologies that support both learners and teachers in these AI-integrated educational settings.
          </p>

          <div className="hero-buttons">
            <a
              href="mailto:minjuyoo@kaist.ac.kr"
              className="hero-btn"
            >
              <Mail size={16} />
              Email
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              <ExternalLink size={16} />
              LinkedIn
            </a>

            <a
              href="https://docs.google.com/document/d/1nGMpXadA9uKIwnFAGikUfL7msZqWVyR0tm1P57-OAZ0/edit?usp=sharing"
              className="hero-btn"
            >
              <FileText size={16} />
              CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/minju_profile.jpeg"
            alt="Minju Yoo profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;