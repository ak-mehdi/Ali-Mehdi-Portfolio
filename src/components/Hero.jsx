import { Link } from 'react-scroll'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>
      
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">
          <span className="hero-greeting">Hello, I&apos;m</span>
          <h1 className="hero-name">
            Ali <span className="highlight">Mehdi</span>
          </h1>
          <h2 className="hero-title">
            <span className="typing-text">WordPress Developer</span>
          </h2>
          <p className="hero-description">
            I build responsive, user-friendly, and performance-optimized websites using WordPress and modern front-end technologies.
          </p>
          
          <div className="hero-buttons">
            <Link to="contact" smooth={true} duration={500} offset={-20} className="btn btn-primary">
              Hire Me
            </Link>
            <a href="#" className="btn btn-outline">Download CV</a>
          </div>
        </div>
        
        <div className="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="hero-image-wrapper">
            <div className="hero-img-border"></div>
            <img src="/images/profile.jpg" alt="Ali Mehdi" className="hero-img" />
            <div className="hero-badge">
              <span className="badge-icon">💼</span>
              <div className="badge-text">
                <strong>Available</strong>
                <span>for Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-social" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
        <a href="https://www.linkedin.com/in/ali-mehdi-3502b3379" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:soldierali313313@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <div className="hero-scroll" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <Link to="about" smooth={true} duration={500} offset={-20}>
          <span className="mouse">
            <span className="wheel"></span>
          </span>
          <span className="scroll-text">Scroll Down</span>
        </Link>
      </div>
    </section>
  )
}

export default Hero
