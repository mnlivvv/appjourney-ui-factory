import { motion } from 'framer-motion';
import styles from './styles/ServicesPage.module.css';
import neuralNetworkImage from '../assets/images/neural-network.jpg';
import digitalGlobeImage from '../assets/images/digital-globe.jpg';

const ServicesPage = () => {
  const services = [
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Our machine learning solutions enable systems to learn from data and improve performance over time without explicit programming.',
      details: [
        'Supervised learning algorithms for classification and regression tasks',
        'Unsupervised learning for pattern recognition and clustering',
        'Semi-supervised and reinforcement learning approaches',
        'Feature engineering and selection techniques',
        'Model validation, testing, and deployment pipelines'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19.0711 19.0711L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Our computer vision systems can interpret, understand, and analyze visual information from the world, enabling machines to "see".',
      details: [
        'Object detection and recognition',
        'Image and video analysis',
        'Facial recognition and emotion detection',
        'Scene understanding and segmentation',
        'Optical character recognition (OCR)'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 12 5.63636 7 12 7C18.3636 7 22 12 22 12C22 12 18.3636 17 12 17C5.63636 17 2 12 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      image: neuralNetworkImage
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      description: 'Our NLP technologies enable machines to understand, interpret, and generate human language in useful and meaningful ways.',
      details: [
        'Text classification and sentiment analysis',
        'Named entity recognition and relationship extraction',
        'Language translation and summarization',
        'Conversational AI and chatbots',
        'Speech recognition and synthesis'
      ],
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
      )
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'We use data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes based on historical data.',
      details: [
        'Time series forecasting',
        'Customer behavior prediction',
        'Risk assessment and management',
        'Demand forecasting and inventory optimization',
        'Anomaly detection and fraud prevention'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 15L11 10L15 15L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      image: digitalGlobeImage
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      description: 'Our deep learning solutions use neural networks with multiple layers to progressively extract higher-level features from data.',
      details: [
        'Convolutional Neural Networks (CNNs) for image processing',
        'Recurrent Neural Networks (RNNs) for sequential data',
        'Generative Adversarial Networks (GANs)',
        'Transfer learning and fine-tuning techniques',
        'Model optimization and hardware acceleration'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'custom-ai',
      title: 'Custom AI Solutions',
      description: 'We develop bespoke AI solutions tailored to your specific business needs and challenges.',
      details: [
        'Comprehensive needs assessment and AI strategy development',
        'End-to-end design, development, and deployment',
        'Integration with existing systems and processes',
        'Continuous monitoring, maintenance, and improvement',
        'Knowledge transfer and team training'
      ],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="neon-blue glow-text">Services</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Cutting-edge AI solutions to transform your business
          </motion.p>
        </div>
      </section>
      
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className={styles.serviceCard}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                {service.image && (
                  <div className={styles.serviceImageWrapper}>
                    <img src={service.image} alt={service.title} className={styles.serviceImage} />
                  </div>
                )}
                
                <h3 className={styles.serviceDetailsTitle}>Key Features</h3>
                <ul className={styles.serviceDetailsList}>
                  {service.details.map((detail, i) => (
                    <li key={i} className={styles.serviceDetailItem}>{detail}</li>
                  ))}
                </ul>
                
                <div className={styles.serviceCta}>
                  <a href="/contact" className={styles.serviceCtaButton}>
                    Get Started
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.processSection}>
        <div className="container">
          <motion.h2 
            className={styles.processTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="neon-pink glow-text">Process</span>
          </motion.h2>
          
          <div className={styles.processSteps}>
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We start by understanding your business challenges, goals, and existing systems to identify opportunities for AI integration.'
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive AI strategy aligned with your business objectives, defining specific use cases and expected outcomes.'
              },
              {
                number: '03',
                title: 'Development',
                description: 'Our team of AI engineers and data scientists design, develop, and test AI solutions tailored to your needs.'
              },
              {
                number: '04',
                title: 'Deployment',
                description: 'We integrate the AI solution into your existing systems and processes, ensuring seamless operation and minimal disruption.'
              },
              {
                number: '05',
                title: 'Evaluation',
                description: 'We continuously monitor the performance of the AI solution, measuring its impact and making adjustments as needed.'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className={styles.processStep}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={styles.processStepNumber}>{step.number}</div>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDescription}>{step.description}</p>
                </div>
                {index < 4 && <div className={styles.processStepConnector}></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;