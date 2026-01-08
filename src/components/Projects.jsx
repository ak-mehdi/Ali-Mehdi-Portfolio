import { useState } from 'react'
import { FaExternalLinkAlt, FaLink } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [imageErrors, setImageErrors] = useState({})

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'frontend', name: 'Front-End' },
    { id: 'ecommerce', name: 'E-Commerce' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Pisanos Pizza',
      category: 'wordpress',
      type: 'WordPress Website',
      link: 'https://pisanospizza.com/',
      description: 'Professional website for a pizza restaurant with menu display and online ordering.',
      image: 'images/pisanos-pizza.jpg.webp',
    },
    {
      id: 2,
      title: 'The Startup Line',
      category: 'wordpress',
      type: 'Business Website',
      link: 'https://thestartupline.com',
      description: 'Modern business website designed for growth and professional presentation.',
      image: 'images/the-startup-line.jpg.png',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'frontend',
      type: 'Front-End Development',
      link: 'https://alinazari.infinityfree.me/',
      description: 'Clean and professional portfolio websites for individuals and creatives.',
      image: 'images/profile.jpg',
    },
    {
      id: 4,
      title: 'Onsus Store',
      category: 'ecommerce',
      type: 'WooCommerce',
      link: 'https://alinazari.infinityfree.me/',
      description: 'Full WooCommerce store setup with product management and secure checkout.',
      image: 'images/onsus.jpeg',
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="project-filters" data-aos="fade-up" data-aos-delay="100">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card white-bg" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                {project.image && !imageErrors[project.id] ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                    onError={() => setImageErrors(prev => ({ ...prev, [project.id]: true }))}
                  />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-view">
                  View Project <FaLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
