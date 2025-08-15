import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div className="footer-logo" variants={itemVariants}>
            <Link to="/" className="logo-link">
              <FaRobot className="logo-icon" />
              <span className="logo-text gradient-text">NEXUS<span>AI</span></span>
            </Link>
            <p className="footer-tagline">
              Building the future of AI interaction
            </p>
          </motion.div>
          
          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>
          
          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </motion.div>
          
          <motion.div className="footer-newsletter" variants={itemVariants}>
            <h3>Join Our Newsletter</h3>
            <p>Stay updated on the latest AI advancements</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </motion.div>
        </div>
        
        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link" aria-label="Discord">
              <FaDiscord />
            </a>
          </div>
          
          <div className="footer-copyright">
            <p>© {currentYear} NEXUS AI. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;