import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaFileAlt, FaBriefcase, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  const navItems = [
    { id: 'hero', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'services', icon: <FaCog />, label: 'Services' },
    { id: 'skills', icon: <FaFileAlt />, label: 'Skills' },
    { id: 'resume', icon: <FaFileAlt />, label: 'Resume' },
    { id: 'projects', icon: <FaBriefcase />, label: 'Portfolio' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-thumb">
            <span>AM</span>
          </div>
          <h3 className="sidebar-name">Ali Mehdi</h3>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={closeSidebar}
                  onSetActive={() => setActiveSection(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a href="https://www.linkedin.com/in/ali-mehdi-3502b3379" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:soldierali313313@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </aside>

      {/* Overlay */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={closeSidebar}></div>
    </>
  )
}

export default Navbar
