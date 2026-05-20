import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science and Engineering',
      institution: 'Surya Engineering College, Erode',
      period: 'Oct 2021 - May 2025',
      details: 'Graduated: 2025 | CGPA: 8 / 10'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'SRI RKC Higher Secondary School, Tuticorin',
      period: 'June 2020 - Apr 2021',
      details: 'Top In Maths | Percentage:90.3%'
    },
    {
      degree: 'Secondary School Leaving Certificate',
      institution: 'TDTA Higher Secondary School, Tuticorin',
      period: 'June 2018 - Apr 2019',
      details: 'School 3rd Rank | Percentage: 82.2%'
    }
  ];

  const certificates = [
    { name: 'Oracle Java Foundations', year: '2023' },
    { name: 'FOSS Conf - Contributor', year: 'Jul 2023' },
    { name: 'CodeOnJVM Meetups - Participant', year: 'Jul 2023' },
    { name: 'Spring REST - Infosys Springboard', year: 'Nov 2024' },
    { name: 'Spring Data JPA with Boot - Infosys Springboard', year: 'Oct 2024' },
    { name: 'Spring 5 Basics with Spring Boot - Infosys Springboard', year: 'Oct 2024' }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-container">
          <div className="education-column">
            <div className="column-header">
              <GraduationCap size={28} className="text-gradient" />
              <h3>Academic Background</h3>
            </div>
            
            <div className="edu-list">
              {education.map((edu, index) => (
                <div key={index} className="glass-card edu-card">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <div className="edu-meta">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-details">{edu.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="education-column">
            <div className="column-header">
              <Award size={28} className="text-gradient" />
              <h3>Certifications & Activities</h3>
            </div>
            
            <div className="glass-card cert-card">
              <ul className="cert-list">
                {certificates.map((cert, index) => (
                  <li key={index}>
                    <CheckCircle size={18} className="cert-icon" />
                    <div className="cert-info">
                      <span className="cert-name">{cert.name}</span>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
