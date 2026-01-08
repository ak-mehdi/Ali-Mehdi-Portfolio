import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

// Wrapper component to properly initialize AOS in React lifecycle
const AppWithAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    
    // Refresh AOS on window resize for responsive behavior
    const handleResize = () => AOS.refresh()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithAOS />
  </React.StrictMode>,
)

