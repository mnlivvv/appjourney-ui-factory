import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './styles/Card.module.css';

const Card = ({ 
  title, 
  content, 
  icon, 
  link, 
  featured = false,
  image = null,
  delay = 0
}) => {
  // If it's an image card, render the image variant
  if (image) {
    return (
      <motion.div 
        className={`${styles.card} ${styles.imageCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageCardContent}>
            <h3 className={styles.imageCardTitle}>{title}</h3>
            <p className={styles.imageCardDescription}>{content}</p>
            {link && (
              <Link to={link.url} className={styles.cardLink}>
                {link.text}
                <span className={styles.cardLinkIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard card variant
  return (
    <motion.div 
      className={`${styles.card} ${featured ? styles.featuredCard : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardContent}>{content}</p>
      {link && (
        <Link to={link.url} className={styles.cardLink}>
          {link.text}
          <span className={styles.cardLinkIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      )}
    </motion.div>
  );
};

export default Card;