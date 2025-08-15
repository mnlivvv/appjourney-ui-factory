import { motion } from 'framer-motion';
import Card from './Card';
import styles from './styles/Cases.module.css';

// Import images
import neuralNetworkImage from '../assets/images/neural-network.jpg';
import aiRobotImage from '../assets/images/ai-robot.jpg';
import digitalGlobeImage from '../assets/images/digital-globe.jpg';

const Cases = () => {
  const caseStudies = [
    {
      title: "Predictive Maintenance for Manufacturing",
      content: "Reduced equipment downtime by 47% with our AI-powered predictive maintenance system.",
      image: neuralNetworkImage,
      link: { text: "View Case Study", url: "/cases" },
    },
    {
      title: "Intelligent Customer Service Automation",
      content: "Increased customer satisfaction by 35% while reducing support costs with our NLP-driven chatbots.",
      image: aiRobotImage,
      link: { text: "View Case Study", url: "/cases" },
    },
    {
      title: "Supply Chain Optimization",
      content: "Optimized inventory levels and logistics, resulting in 28% cost reduction and improved delivery times.",
      image: digitalGlobeImage,
      link: { text: "View Case Study", url: "/cases" },
    },
  ];

  return (
    <section className={styles.cases} id="cases">
      <div className={styles.hexagonBg}></div>
      <div className={styles.diagonalLine}></div>
      
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={styles.sectionTitle}>
            Success <span className={`${styles.highlight} glow-text`}>Stories</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Discover how our AI solutions have transformed businesses across industries and delivered measurable results.
          </p>
        </motion.div>
        
        <div className={styles.casesGrid}>
          {caseStudies.map((caseStudy, index) => (
            <Card 
              key={index}
              title={caseStudy.title}
              content={caseStudy.content}
              image={caseStudy.image}
              link={caseStudy.link}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;