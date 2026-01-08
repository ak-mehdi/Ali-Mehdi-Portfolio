import { FaWordpress, FaCode, FaPaintBrush, FaPlug, FaRocket, FaMobileAlt } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaWordpress />,
      title: 'WordPress Development',
      description: 'Custom WordPress websites built from scratch, aligned with your brand identity and business goals.',
    },
    {
      icon: <FaCode />,
      title: 'Front-End Development',
      description: 'Clean, semantic HTML, CSS, and JavaScript code for responsive and interactive user interfaces.',
    },
    {
      icon: <FaPaintBrush />,
      title: 'Theme Customization',
      description: 'Tailored theme modifications to match your unique design requirements and branding.',
    },
    {
      icon: <FaPlug />,
      title: 'Plugin Integration',
      description: 'Seamless integration of essential plugins for enhanced functionality and user experience.',
    },
    {
      icon: <FaRocket />,
      title: 'Website Optimization',
      description: 'Speed optimization, SEO structure, and performance enhancements for better rankings.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Mobile-first designs that look perfect on all devices and screen sizes.',
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">What I Do</span>
          <h2 className="section-title">My Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

