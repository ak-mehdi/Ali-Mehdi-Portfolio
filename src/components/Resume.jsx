import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import './Resume.css'

const Resume = () => {
  const experience = [
    {
      title: 'WordPress Developer',
      date: 'Present',
      company: 'Freelance — Remote',
      location: 'Karachi, Pakistan',
      description: 'Designed and developed custom WordPress websites aligned with client brand identity. Implemented responsive themes with cross-device compatibility. Integrated plugins, themes, and contact forms. Managed complete project lifecycle from concept to deployment.',
      highlights: [
        'Optimized website performance and loading speed',
        'Implemented SEO best practices',
        'Delivered 10+ successful projects',
      ],
    },
  ]

  const education = [
    {
      title: 'Intermediate (Continuing)',
      date: 'Present',
      company: 'Board of Intermediate Education Karachi (BIEK)',
      location: 'Karachi, Pakistan',
      description: 'Pursuing higher secondary education with focus on science and technology.',
    },
    {
      title: 'Matriculation in Computer Science',
      date: 'Completed',
      company: 'Agha Khan Board',
      location: 'Karachi, Pakistan',
      description: 'Completed secondary education with major in Computer Science, developing foundational programming and technical skills.',
    },
  ]

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">My Resume</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="resume-grid">
          <div className="resume-column" data-aos="fade-right">
            <div className="resume-column-header">
              <div className="column-icon">
                <FaBriefcase />
              </div>
              <h3>Experience</h3>
            </div>
            
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <h5 className="timeline-company">{item.company}</h5>
                    <p className="timeline-desc">{item.description}</p>
                    {item.highlights && (
                      <ul className="timeline-highlights">
                        {item.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-column" data-aos="fade-left">
            <div className="resume-column-header">
              <div className="column-icon">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
            </div>
            
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <h5 className="timeline-company">{item.company}</h5>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
