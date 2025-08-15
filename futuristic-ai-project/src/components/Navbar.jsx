import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav 
      className={styles.navbar} 
      style={{
        backgroundColor: scrolled ? 'rgba(1, 2, 18, 0.9)' : 'rgba(1, 2, 18, 0.6)',
        boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.2)' : 'none'
      }}
    >
      <div className={`${styles.navContainer} container`}>
        <Link to="/" className={styles.logo}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Neuro<span className={styles.logoAccent}>AI</span>
          </motion.span>
        </Link>
        
        <ul className={styles.navLinks}>
          {['/', '/about', '/services', '/cases', '/contact'].map((path, index) => {
            const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            
            return (
              <motion.li 
                key={path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link 
                  to={path} 
                  className={`${styles.navLink} ${isActive(path) ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
        
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span>☰</span>
        </button>
        
        <ul className={`${styles.navLinksMobile} ${mobileMenuOpen ? styles.navLinksMobileOpen : ''}`}>
          {['/', '/about', '/services', '/cases', '/contact'].map((path) => {
            const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            
            return (
              <li key={path}>
                <Link 
                  to={path} 
                  className={`${styles.navLink} ${isActive(path) ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;