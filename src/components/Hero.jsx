import React from 'react';
import { Mail, ArrowRight, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge delay-100">
            <Code size={16} />
            <span>Available for new opportunities</span>
          </div>

          <h1 className="hero-title delay-200">
            Hi, I'm <br />
            <span className="text-gradient">M.Vigneshwaralingam</span>
          </h1>

          <h2 className="hero-subtitle delay-300">
            Java Full-Stack Developer
          </h2>

          <p className="hero-description delay-300">
            I build enterprise-grade web applications with a focus on scalable backend services and responsive frontends.
            <strong> Proficient in Spring Boot and ReactJs, and an active tech blogger with over 100+ articles written on Java development and my coding journey.</strong>
          </p>

          <div className="hero-cta delay-300">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="mailto:m.vigneshwaralingam@gmail.com" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials delay-300">
            <a href="https://linkedin.com/in/vigneshwaralingam" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/vigneshwaralingam" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="mailto:m.vigneshwaralingam@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
            {/* Leetcode SVG since lucide doesn't have it directly */}
            <a href="https://leetcode.com/vigneshwaralingam-m" target="_blank" rel="noreferrer" className="social-icon leetcode-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.536 5.364 5.364 0 0 0 1.488 2.766 5.253 5.253 0 0 0 2.657 1.407 5.253 5.253 0 0 0 2.723-.197 5.242 5.242 0 0 0 2.21-1.503l4.577-4.896a1.372 1.372 0 0 0 .19-1.399 1.373 1.373 0 0 0-1.127-.852l-5.617-.433a1.374 1.374 0 0 0-1.464 1.144 1.374 1.374 0 0 0 1.135 1.57l3.666.282-3.155 3.376a2.535 2.535 0 0 1-1.636 1.053 2.556 2.556 0 0 1-1.956-.37 2.54 2.54 0 0 1-.951-1.584 2.545 2.545 0 0 1 .453-1.905l3.522-3.768.188-.202 5.204-5.572c.351-.375.454-.925.264-1.408a1.374 1.374 0 0 0-1.077-.83L13.483 0zm4.567 12.355a1.374 1.374 0 0 0-.96.439l-1.002 1.073a1.374 1.374 0 0 0-.308 1.258 1.374 1.374 0 0 0 1.001.996l3.374.922c.57.156 1.171-.168 1.353-.736a1.374 1.374 0 0 0-.735-1.74l-2.036-.557-.687-2.655z" />
              </svg>
            </a>
            <a href="https://dev.to/vigneshwaralingam" target="_blank" rel="noreferrer" className="social-icon devto-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.5 11.5c0 .4-.1.7-.4.9l-.1.1h-2.1v-5h2.1l.1.1c.3.2.4.5.4.9v3zm5.7-.6c0 .4-.1.7-.4.9l-.1.1h-2.1v-1.4h1.2v-1h-1.2v-1.1h2.1l.1.1c.3.2.4.5.4.9v1.5zM6.1 9.5h3v1.3H7.6v1.1h1.5v1.3H7.6v1.1h1.5v1.2h-3v-6zm5.4 3.7c0 .4-.3.8-.8.8h-1.3v-4.1h1.3c.4 0 .8.3.8.8v2.5zm6.2-1.2c0 .4-.3.8-.8.8h-1.3v-1.6h1.3c.4 0 .8.3.8.8v0z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200">
          {/* <div className="tech-stack-ring"> */}
          {/* <div className="center-logo">
              <Code size={48} color="var(--accent-primary)" />
            </div> */}
          {/* These would ideally be real logos, but we'll use stylized text/shapes for the abstract design */}
          {/* <div className="tech-item item-1">Java</div>
            <div className="tech-item item-2">Spring Boot</div>
            <div className="tech-item item-3">ReactJs</div>
            <div className="tech-item item-4">SQL</div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
