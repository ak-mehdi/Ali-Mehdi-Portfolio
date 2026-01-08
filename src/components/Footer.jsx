import { Link } from 'react-scroll'
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="hero" smooth={true} duration={500} className="footer-logo">
              ALI<span>MEHDI</span>
            </Link>
            <p>WordPress Developer & Front-End Specialist based in Karachi, Pakistan.</p>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ali-mehdi-3502b3379" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:soldierali313313@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:03171136824">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {year} Ali Mehdi. Made with <FaHeart className="heart-icon" /> All Rights Reserved.
          </p>
          
          <Link to="hero" smooth={true} duration={500} className="back-to-top">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
