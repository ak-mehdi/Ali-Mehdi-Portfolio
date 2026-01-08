import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaCheckCircle } from 'react-icons/fa'
import './About.css'

const About = () => {
  const personalInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'soldierali313313@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '0317 1136824' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: <FaGlobe />, label: 'Languages', value: 'English, Urdu' },
  ]

  const highlights = [
    'WordPress Development Expert',
    'Front-End Customization',
    'UI/UX Design Focused',
    'Performance Optimization',
    'SEO Best Practices',
    'Responsive Web Design',
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Know Me More</h2>
        </div>

        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <div className="about-img-wrapper">
              <img src="/images/profile.jpg" alt="Ali Mehdi" className="about-img" />
              <div className="experience-badge">
                <span className="exp-number">2+</span>
                <span className="exp-text">Years Experience</span>
              </div>
              <div className="about-img-decoration"></div>
            </div>
          </div>

          <div className="about-text" data-aos="fade-left">
            <h3>
              Hi There! I&apos;m <span>Ali Mehdi</span>
            </h3>
            <h4>WordPress Developer & Front-End Specialist</h4>
            <p>
              Motivated and detail-oriented professional with strong competency in WordPress development, 
              front-end customization, and digital project execution. I specialize in creating responsive 
              websites with clean UI/UX designs and optimized performance.
            </p>
            <p>
              I am committed to delivering high-quality work and continuously improving my skills. 
              Whether it&apos;s a custom theme, plugin integration, or website optimization, I ensure 
              the best results for my clients.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item" data-aos="fade-up" data-aos-delay={index * 50}>
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="about-info-grid">
              {personalInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
