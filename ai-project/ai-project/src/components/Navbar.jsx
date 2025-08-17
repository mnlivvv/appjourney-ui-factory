import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
    scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
  }`

  const navLinkClasses = "px-4 py-2 rounded-xl transition-colors duration-300 hover:text-sage"
  const activeNavLinkClasses = "text-sage font-medium"

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'AI Features' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-sage flex items-center">
          <motion.span 
            className="inline-block"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          >
            🌿
          </motion.span>
          <span className="ml-2">NatureAI</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${navLinkClasses} ${location.pathname === item.path ? activeNavLinkClasses : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-sage mb-1.5 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-sage transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-sage mt-1.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile navigation */}
      <motion.div
        className="md:hidden overflow-hidden"
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto py-4 px-4 bg-white/90 backdrop-blur-md rounded-xl mt-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${navLinkClasses} ${location.pathname === item.path ? activeNavLinkClasses : ''} block`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar