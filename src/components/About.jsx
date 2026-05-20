import React from 'react';
import { Terminal, Database, Layout, Server } from 'lucide-react';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      title: 'Backend & Frameworks',
      icon: <Server size={24} className="text-gradient" />,
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA']
    },
    {
      title: 'Frontend & Web',
      icon: <Layout size={24} className="text-gradient" />,
      skills: ['JavaScript', 'ReactJs', 'HTML5', 'CSS3']
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="text-gradient" />,
      skills: ['PostgreSQL', 'MySQL']
    },
    {
      title: 'TIDEs & Tools',
      icon: <Terminal size={24} className="text-gradient" />,
      skills: ['Eclipse', 'VsCode', 'Maven', 'Postman', 'Jaspersoft Studio']
    }, {
      title: 'Others',
      icon: <Terminal size={24} className="text-gradient" />,
      skills: ['Git', 'GitHub', 'Chart.js', 'Apache POI']
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="glass-card objective-card">
            <h3>Objective</h3>
            <p>
              Detail-oriented Java Full-Stack Developer with professional experience in building enterprise-grade web applications.
              Proficient in Java, Spring Boot, Spring Security, and Data JPA, with specialized skills in reporting tools and data visualization.
              Seeking to leverage technical expertise to deliver high-quality scalable solutions.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card skill-card">
                <div className="skill-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
