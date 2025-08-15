import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaRobot, FaBrain, FaChartLine, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <motion.div 
            className="logo-icon"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <FaRobot />
            <span className="logo-text gradient-text">NEXUS<span>AI</span></span>
          </motion.div>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <motion.ul 
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          variants={navVariants}
        >
          <motion.li variants={itemVariants}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <FaRobot className="nav-icon" />
              <span>Home</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/features" 
              className={`nav-link ${isActive('/features') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <FaBrain className="nav-icon" />
              <span>Features</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/dashboard" 
              className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <FaChartLine className="nav-icon" />
              <span>Dashboard</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;