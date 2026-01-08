import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'soldierali313313@gmail.com',
      link: 'mailto:soldierali313313@gmail.com'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '0317 1136824',
      link: 'tel:03171136824'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Karachi, Pakistan',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-section" data-aos="fade-right">
            <h3>Let&apos;s talk about everything!</h3>
            <p>
              Looking for a reliable WordPress or front-end developer? 
              Let&apos;s work together to build a fast, modern, and optimized website.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a href={info.link} key={index} className="contact-card">
                  <div className="contact-card-icon">
                    {info.icon}
                  </div>
                  <div className="contact-card-content">
                    <span className="contact-card-title">{info.title}</span>
                    <span className="contact-card-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-social">
              <span>Follow me:</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/ali-mehdi-3502b3379" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:soldierali313313@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="6" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
