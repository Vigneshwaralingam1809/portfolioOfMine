import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Trainee Full Stack Developer',
      company: 'Rytways',
      period: 'Oct 2025 - Present',
      responsibilities: [
        'Developing and maintaining robust backend services using Java and Spring Boot.',
        'Implementing advanced reporting features using Jaspersoft Studio to generate dynamic business reports.',
        'Integrating Chart.js for interactive data visualization and dashboard development.',
        'Handling complex data exporting tasks by implementing PDF and XLSX generation and processing.',
        'Utilizing Spring Security for secure authentication and Spring Data JPA for efficient database operations.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              
              <div className="glass-card timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="timeline-date">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="timeline-list">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
