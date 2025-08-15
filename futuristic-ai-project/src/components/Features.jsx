import { motion } from 'framer-motion';
import Card from './Card';
import styles from './styles/Features.module.css';

const Features = () => {
  const features = [
    {
      title: "Machine Learning",
      content: "Advanced algorithms that enable systems to learn from data and improve performance over time without explicit programming.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19.0711 19.0711L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      link: { text: "Learn More", url: "/services" },
      featured: true,
    },
    {
      title: "Computer Vision",
      content: "Systems that can interpret, understand and analyze visual information from the world, enabling machines to 'see'.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 12 5.63636 7 12 7C18.3636 7 22 12 22 12C22 12 18.3636 17 12 17C5.63636 17 2 12 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: { text: "Learn More", url: "/services" },
    },
    {
      title: "Natural Language Processing",
      content: "Technologies that enable machines to understand, interpret, and generate human language in useful ways.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5H5V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 16V19H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 16L19 19L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 5H19V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      link: { text: "Learn More", url: "/services" },
    },
    {
      title: "Predictive Analytics",
      content: "Using data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 15L11 10L15 15L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: { text: "Learn More", url: "/services" },
    },
    {
      title: "Deep Learning",
      content: "Neural networks with multiple layers that progressively extract higher-level features from data.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: { text: "Learn More", url: "/services" },
    },
    {
      title: "Reinforcement Learning",
      content: "Training models to make a sequence of decisions by rewarding desired behaviors and punishing undesired ones.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.5 9H21.5L16 14L18 21L12 17.5L6 21L8 14L2.5 9H9.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: { text: "Learn More", url: "/services" },
    },
  ];

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={styles.sectionTitle}>
            Our <span className={`${styles.highlight} glow-text`}>AI Solutions</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Leverage the power of artificial intelligence to transform your business with our cutting-edge technologies.
          </p>
        </motion.div>
        
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <Card 
              key={index}
              title={feature.title}
              content={feature.content}
              icon={feature.icon}
              link={feature.link}
              featured={feature.featured}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
      
      <div className={`${styles.backgroundElement} ${styles.circle1}`}></div>
      <div className={`${styles.backgroundElement} ${styles.circle2}`}></div>
    </section>
  );
};

export default Features;