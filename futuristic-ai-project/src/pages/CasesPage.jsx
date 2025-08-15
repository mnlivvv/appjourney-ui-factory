import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './styles/CasesPage.module.css';

// Import images
import neuralNetworkImage from '../assets/images/neural-network.jpg';
import aiRobotImage from '../assets/images/ai-robot.jpg';
import digitalGlobeImage from '../assets/images/digital-globe.jpg';

const CasesPage = () => {
  // All case studies data
  const allCaseStudies = [
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance for Manufacturing',
      industry: 'Manufacturing',
      solution: 'Machine Learning',
      image: neuralNetworkImage,
      shortDescription: 'Reduced equipment downtime by 47% with our AI-powered predictive maintenance system.',
      fullDescription: `A leading manufacturing company was experiencing significant production losses due to unexpected equipment failures. Traditional scheduled maintenance was inefficient and costly.`,
      challenge: `The client needed a solution that could predict equipment failures before they occurred, minimize downtime, and optimize maintenance scheduling. They had vast amounts of sensor data but lacked the tools to extract actionable insights.`,
      approach: `We developed a comprehensive predictive maintenance solution that:
      
      • Integrated with existing IoT sensors and data collection systems
      • Applied advanced machine learning algorithms to identify patterns preceding equipment failures
      • Created a real-time monitoring dashboard for maintenance teams
      • Established automated alert systems for high-risk situations
      • Implemented a continuous learning system that improved over time`,
      results: [
        'Reduced unplanned downtime by 47%',
        'Decreased maintenance costs by 31%',
        'Extended equipment lifespan by an estimated 23%',
        'Improved overall equipment effectiveness (OEE) by 18%',
        'Achieved ROI within 8 months of implementation'
      ]
    },
    {
      id: 'customer-service',
      title: 'Intelligent Customer Service Automation',
      industry: 'Retail',
      solution: 'Natural Language Processing',
      image: aiRobotImage,
      shortDescription: 'Increased customer satisfaction by 35% while reducing support costs with our NLP-driven chatbots.',
      fullDescription: `A large retail company with millions of customers was struggling to provide timely and effective customer support, leading to long wait times and customer dissatisfaction.`,
      challenge: `The client needed to handle a high volume of customer inquiries efficiently without compromising on quality or personalization. They wanted to automate routine inquiries while ensuring complex issues were properly escalated to human agents.`,
      approach: `We developed an intelligent customer service automation solution that:
      
      • Deployed conversational AI chatbots across multiple channels (website, app, social media)
      • Used advanced NLP to understand customer intent and sentiment
      • Created a knowledge graph to provide accurate and contextual responses
      • Implemented seamless handoff to human agents for complex inquiries
      • Built an analytics dashboard to track performance and identify improvement areas`,
      results: [
        'Increased customer satisfaction ratings by 35%',
        'Reduced average response time from 15 minutes to under 30 seconds',
        'Automated resolution of 78% of routine inquiries',
        'Decreased support costs by 42%',
        'Improved agent productivity by 27% through better routing and context sharing'
      ]
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain Optimization',
      industry: 'Logistics',
      solution: 'Predictive Analytics',
      image: digitalGlobeImage,
      shortDescription: 'Optimized inventory levels and logistics, resulting in 28% cost reduction and improved delivery times.',
      fullDescription: `A global logistics company was facing challenges with inventory management, route optimization, and demand forecasting, leading to excess inventory costs and delivery delays.`,
      challenge: `The client needed to optimize their entire supply chain operation to reduce costs, improve efficiency, and enhance customer satisfaction. They had complex global operations with multiple variables affecting performance.`,
      approach: `We developed a comprehensive supply chain optimization solution that:
      
      • Created an end-to-end digital twin of the supply chain
      • Applied predictive analytics to forecast demand with higher accuracy
      • Implemented dynamic inventory management systems
      • Designed intelligent route optimization algorithms
      • Built real-time monitoring and adjustment capabilities`,
      results: [
        'Reduced inventory costs by 28%',
        'Improved delivery time accuracy by 41%',
        'Decreased transportation costs by 17%',
        'Enhanced demand forecast accuracy by 35%',
        'Achieved 99.2% order fulfillment rate'
      ]
    },
    {
      id: 'fraud-detection',
      title: 'Advanced Fraud Detection System',
      industry: 'Finance',
      solution: 'Deep Learning',
      image: neuralNetworkImage,
      shortDescription: 'Implemented a real-time fraud detection system that reduced fraudulent transactions by 92% while minimizing false positives.',
      fullDescription: `A financial institution was experiencing increasing fraud losses and customer complaints due to unauthorized transactions. Their existing rule-based system was unable to keep up with evolving fraud tactics.`,
      challenge: `The client needed a sophisticated fraud detection solution that could identify suspicious activities in real-time without disrupting legitimate transactions. They required high accuracy with minimal false positives.`,
      approach: `We developed an advanced fraud detection system that:
      
      • Utilized deep learning to analyze transaction patterns
      • Implemented behavior biometrics to verify user identity
      • Created a real-time monitoring and alert system
      • Designed a risk-scoring mechanism with configurable thresholds
      • Built an investigation interface for security teams`,
      results: [
        'Reduced fraudulent transactions by 92%',
        'Decreased false positive rate from 8% to 0.3%',
        'Saved an estimated $15M in fraud losses annually',
        'Improved customer experience by reducing legitimate transaction declines',
        'Enhanced compliance with financial regulations'
      ]
    },
    {
      id: 'healthcare-diagnostics',
      title: 'AI-Powered Medical Diagnostics',
      industry: 'Healthcare',
      solution: 'Computer Vision',
      image: aiRobotImage,
      shortDescription: 'Developed an AI diagnostic tool that increased early detection rates by 62% and reduced diagnosis time by 78%.',
      fullDescription: `A healthcare provider was facing challenges with diagnostic accuracy and efficiency, particularly in radiology where specialist shortages led to delays and potential misdiagnoses.`,
      challenge: `The client needed a solution to assist radiologists in analyzing medical images, improve diagnostic accuracy, reduce waiting times, and enable early detection of critical conditions.`,
      approach: `We developed an AI-powered medical diagnostic tool that:
      
      • Used computer vision and deep learning to analyze various medical images
      • Created a prioritization system to flag urgent cases
      • Implemented explainable AI to provide reasoning behind suggestions
      • Designed an intuitive interface for radiologists
      • Built secure integration with existing hospital systems`,
      results: [
        'Increased early detection rates by 62%',
        'Reduced diagnosis time by 78%',
        'Improved diagnostic accuracy by 37%',
        'Decreased radiologist workload by 41%',
        'Enabled 24/7 preliminary screening without human intervention'
      ]
    },
    {
      id: 'personalized-recommendations',
      title: 'Hyper-Personalized Recommendation Engine',
      industry: 'E-commerce',
      solution: 'Machine Learning',
      image: digitalGlobeImage,
      shortDescription: 'Implemented a recommendation engine that increased average order value by 32% and customer engagement by 47%.',
      fullDescription: `An e-commerce company was struggling with generic product recommendations that failed to capture individual customer preferences and behaviors, resulting in low conversion rates.`,
      challenge: `The client needed a sophisticated recommendation system that could understand individual customer preferences at a granular level and provide highly relevant suggestions across all touchpoints.`,
      approach: `We developed a hyper-personalized recommendation engine that:
      
      • Analyzed customer behavior patterns beyond purchase history
      • Implemented collaborative and content-based filtering techniques
      • Created a real-time personalization system that adapted to browsing behavior
      • Designed contextual recommendations based on time, device, and location
      • Built A/B testing capabilities to continuously optimize algorithms`,
      results: [
        'Increased average order value by 32%',
        'Improved customer engagement by 47%',
        'Enhanced conversion rates by 28%',
        'Reduced cart abandonment by 21%',
        'Boosted customer retention by 18%'
      ]
    }
  ];
  
  // State for filtering
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter case studies based on filter type and search query
  const filteredCaseStudies = allCaseStudies.filter(caseStudy => {
    // Filter by type
    if (filterType !== 'all' && caseStudy.solution.toLowerCase() !== filterType) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        caseStudy.title.toLowerCase().includes(query) ||
        caseStudy.industry.toLowerCase().includes(query) ||
        caseStudy.solution.toLowerCase().includes(query) ||
        caseStudy.shortDescription.toLowerCase().includes(query)
      );
    }
    
    return true;
  });
  
  // Handle filter change
  const handleFilterChange = (type) => {
    setFilterType(type);
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div className={styles.casesPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success <span className="neon-blue glow-text">Stories</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Discover how our AI solutions have transformed businesses across industries
          </motion.p>
        </div>
      </section>
      
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterControls}>
            <div className={styles.filterButtons}>
              <button 
                className={`${styles.filterButton} ${filterType === 'all' ? styles.active : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                All
              </button>
              <button 
                className={`${styles.filterButton} ${filterType === 'machine learning' ? styles.active : ''}`}
                onClick={() => handleFilterChange('machine learning')}
              >
                Machine Learning
              </button>
              <button 
                className={`${styles.filterButton} ${filterType === 'natural language processing' ? styles.active : ''}`}
                onClick={() => handleFilterChange('natural language processing')}
              >
                NLP
              </button>
              <button 
                className={`${styles.filterButton} ${filterType === 'computer vision' ? styles.active : ''}`}
                onClick={() => handleFilterChange('computer vision')}
              >
                Computer Vision
              </button>
              <button 
                className={`${styles.filterButton} ${filterType === 'predictive analytics' ? styles.active : ''}`}
                onClick={() => handleFilterChange('predictive analytics')}
              >
                Predictive Analytics
              </button>
              <button 
                className={`${styles.filterButton} ${filterType === 'deep learning' ? styles.active : ''}`}
                onClick={() => handleFilterChange('deep learning')}
              >
                Deep Learning
              </button>
            </div>
            
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="Search case studies..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.casesSection}>
        <div className="container">
          {filteredCaseStudies.length === 0 ? (
            <div className={styles.noResults}>
              <p>No case studies match your search criteria. Please try different filters or search terms.</p>
            </div>
          ) : (
            <div className={styles.casesGrid}>
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.div 
                  key={caseStudy.id}
                  className={styles.caseCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={styles.caseImageContainer}>
                    <img src={caseStudy.image} alt={caseStudy.title} className={styles.caseImage} />
                    <div className={styles.caseOverlay}></div>
                    <div className={styles.caseTags}>
                      <span className={styles.industryTag}>{caseStudy.industry}</span>
                      <span className={styles.solutionTag}>{caseStudy.solution}</span>
                    </div>
                  </div>
                  
                  <div className={styles.caseContent}>
                    <h2 className={styles.caseTitle}>{caseStudy.title}</h2>
                    <p className={styles.caseDescription}>{caseStudy.shortDescription}</p>
                    
                    <div className={styles.caseDetails}>
                      <div className={styles.caseSection}>
                        <h3>Challenge</h3>
                        <p>{caseStudy.challenge}</p>
                      </div>
                      
                      <div className={styles.caseSection}>
                        <h3>Approach</h3>
                        <p>{caseStudy.approach}</p>
                      </div>
                      
                      <div className={styles.caseSection}>
                        <h3>Results</h3>
                        <ul className={styles.resultsList}>
                          {caseStudy.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={styles.caseFooter}>
                      <a href="/contact" className={styles.contactButton}>
                        Discuss Your Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CasesPage;