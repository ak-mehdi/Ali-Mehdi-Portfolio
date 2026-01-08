import { useEffect, useState, useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef(null)

  const skills = [
    { name: 'WordPress Development', level: 90 },
    { name: 'Front-End Development', level: 85 },
    { name: 'Theme Customization', level: 88 },
    { name: 'Plugin Integration', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Website Optimization', level: 90 },
    { name: 'Responsive Design', level: 95 },
    { name: 'SEO', level: 75 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="skills-content">
          <div className="skills-text" data-aos="fade-right">
            <span className="section-subtitle">My Skills</span>
            <h2 className="section-title left-align">All the skills that I have in that field of work are mentioned.</h2>
            <p>
              With expertise in WordPress development and front-end technologies, I deliver 
              high-quality websites that are both visually appealing and technically sound. 
              My skill set enables me to handle projects from concept to deployment.
            </p>
          </div>

          <div className="skills-bars" data-aos="fade-left">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
