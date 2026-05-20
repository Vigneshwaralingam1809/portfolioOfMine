import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    // {
    //   title: 'Student Management System',
    //   description: 'A full-stack web application designed to manage student records with automated CRUD operations. Features a responsive UI and RESTful API integration for seamless database interactions.',
    //   tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'ReactJs'],
    //   github: '#',
    //   live: '#'
    // },
    // // Add more projects here to fill out the portfolio
    // {
    //   title: 'E-Commerce Dashboard',
    //   description: 'An interactive administrative dashboard for an e-commerce platform featuring dynamic data visualization using Chart.js and complex reporting tools.',
    //   tech: ['ReactJs', 'Chart.js', 'Spring Boot', 'Jaspersoft'],
    //   github: '#',
    //   live: '#'
    // },
    {
      title: "Smart Ad Muter Chrome Extension",
      description: "Developed a Chrome extension that automatically mutes loud YouTube ads while allowing them to visually play. Ensures creators receive ad impressions while viewers avoid abrupt audio disruptions by restoring volume seamlessly post-ad.",
      tech: ["JavaScript", "JSON", "HTML", "CSS"],
      githubLink: "https://github.com/vigneshwaralingam",
      liveLink: ""
    },
    {
      title: "Git Automation Script — Email Notifier",
      description: "Created a developer activity tracker that monitors Git repository pushes daily. Uses a script execution schedule to audit active commits and fires automated email reports via secure protocols if zero activity is tracked.",
      tech: ["Java", "Cron Jobs", "SMTP", "Git"],
      githubLink: "https://github.com/vigneshwaralingam",
      liveLink: ""
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card">
              <div className="project-header">
                <Folder size={40} className="folder-icon text-gradient" />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
