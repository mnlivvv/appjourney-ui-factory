import { Link } from 'react-router-dom';
import styles from './styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.diagonalLine}></div>
      
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <Link to="/" className={styles.footerLogo}>
              Neuro<span className={styles.footerLogoAccent}>AI</span>
            </Link>
            <p className={styles.footerAbout}>
              We develop cutting-edge artificial intelligence solutions to transform
              businesses and drive innovation. Our AI-powered technologies help 
              organizations make smarter decisions and achieve their goals.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21 4.5 20.02 4.69 19 5C17.879 3.735 16 3.665 14.14 4.39C12.28 5.115 11.039 6.829 11 8.71V9.71C7.978 9.795 5.198 8.37 3 6.01C3 6.01 -1.01 13.01 8 17.01C6.08 18.367 3.95 19.025 2 19.01C11.02 24.01 22 19.01 22 8.71C21.9991 8.37262 21.9723 8.03569 21.92 7.71C23.01 6.71 22.94 5.01 22 4.01Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://github.com" className={styles.socialLink} aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15732 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.6 4.09995C14.0351 3.65835 12.3649 3.65835 10.8 4.09995C8.9 2.79995 7.8 3.09995 7.8 3.09995C7.34548 4.11158 7.30953 5.26192 7.7 6.29995C6.86745 7.15732 6.40123 8.30492 6.4 9.49995C6.4 14.1 9.1 15.2 11.9 15.5C11.3 16.1 11.1 16.7 11.1 17.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><Link to="/">Home</Link></li>
              <li className={styles.footerLink}><Link to="/about">About Us</Link></li>
              <li className={styles.footerLink}><Link to="/services">Services</Link></li>
              <li className={styles.footerLink}><Link to="/cases">Case Studies</Link></li>
              <li className={styles.footerLink}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={styles.footerTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><Link to="/services">Machine Learning</Link></li>
              <li className={styles.footerLink}><Link to="/services">Computer Vision</Link></li>
              <li className={styles.footerLink}><Link to="/services">Natural Language Processing</Link></li>
              <li className={styles.footerLink}><Link to="/services">Predictive Analytics</Link></li>
              <li className={styles.footerLink}><Link to="/services">Custom AI Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={styles.footerTitle}>Legal</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><Link to="/privacy">Privacy Policy</Link></li>
              <li className={styles.footerLink}><Link to="/terms">Terms of Service</Link></li>
              <li className={styles.footerLink}><Link to="/cookies">Cookie Policy</Link></li>
              <li className={styles.footerLink}><Link to="/security">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          © {currentYear} Neuro<span className={styles.highlight}>AI</span>. All rights reserved. Built with <span className={styles.highlight}>❤</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;