import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroOverlay}></div>
      
      <div className="container">
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Future of Intelligence
            <span className={`${styles.heroTitleAccent} glow-text`}>Powered by Advanced AI</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We develop cutting-edge artificial intelligence solutions to solve the most challenging problems in various industries. Our technologies transform data into intelligent actions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact" className={`${styles.heroCta} glow-border`}>
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <div className={styles.heroCircles}>
        <div className={styles.heroCircle + ' ' + styles.heroCircle1}></div>
        <div className={styles.heroCircle + ' ' + styles.heroCircle2}></div>
        <div className={styles.heroCircle + ' ' + styles.heroCircle3}></div>
      </div>
    </section>
  );
};

export default Hero;