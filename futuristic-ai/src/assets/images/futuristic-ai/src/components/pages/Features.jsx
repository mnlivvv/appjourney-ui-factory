import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaRobot, 
  FaDatabase, 
  FaChartLine, 
  FaCog, 
  FaFingerprint,
  FaShieldAlt,
  FaCode
} from 'react-icons/fa';

// Components
import FuturisticCard from '../ui/FuturisticCard';
import HolographicDisplay from '../ui/HolographicDisplay';
import FuturisticButton from '../ui/FuturisticButton';
import DataDisplay from '../ui/DataDisplay';

// Assets
import interfaceOutlineImg from '../../assets/images/interface-outline.jpg';

const Features = () => {
  const [activeTab, setActiveTab] = useState('neural');
  const [demoData, setDemoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Simulate data loading
    setIsLoading(true);
    setDemoData([]);
    
    setTimeout(() => {
      const newData = generateDemoData(tab);
      setDemoData(newData);
      setIsLoading(false);
    }, 1500);
  };
  
  // Generate demo data based on active tab
  const generateDemoData = (tab) => {
    switch (tab) {
      case 'neural':
        return [
          'Initializing neural network...',
          'Loading convolutional layers...',
          'Activation function: ReLU',
          'Hidden layers: 5',
          'Neurons per layer: [128, 256, 512, 256, 128]',
          'Batch normalization: Enabled',
          'Dropout rate: 0.3',
          'Training accuracy: 97.8%',
          'Validation accuracy: 95.2%'
        ];
      case 'assistant':
        return [
          'Initializing NLP engine...',
          'Loading language model...',
          'Context window: 8192 tokens',
          'Sentiment analysis: Enabled',
          'Entity recognition: Active',
          'Response generation initialized',
          'Query understood: "Explain quantum computing"',
          'Generating comprehensive response...',
          'Response ready - Confidence score: 98%'
        ];
      case 'analytics':
        return [
          'Loading time series data...',
          'Data points: 153,842',
          'Applying ARIMA model...',
          'Seasonality detected: Weekly pattern',
          'Trend analysis: Upward (3.2% growth)',
          'Anomaly detection: 2 outliers identified',
          'Confidence interval: 95%',
          'Forecast horizon: 30 days',
          'Prediction accuracy: 91.7%'
        ];
      case 'processing':
        return [
          'Initializing distributed processing...',
          'Nodes connected: 12',
          'Data sharding strategy: Geographic',
          'Processing rate: 1.2M records/sec',
          'Memory allocation: 64GB',
          'Cache hit ratio: 87.3%',
          'Parallel workers: 24',
          'Data throughput: 3.8 GB/sec',
          'Processing complete - 0 errors'
        ];
      default:
        return [];
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Feature tabs data
  const featureTabs = [
    { 
      id: 'neural', 
      name: 'Neural Networks', 
      icon: <FaBrain />, 
      color: 'cyan',
      description: 'Our deep learning architecture delivers state-of-the-art performance across a wide range of tasks.',
      capabilities: [
        'Multi-layer perceptrons',
        'Convolutional neural networks',
        'Recurrent networks with LSTM',
        'Transformer-based models',
        'Graph neural networks'
      ]
    },
    { 
      id: 'assistant', 
      name: 'AI Assistants', 
      icon: <FaRobot />, 
      color: 'magenta',
      description: 'Intelligent conversational agents that understand context and provide helpful responses.',
      capabilities: [
        'Natural language understanding',
        'Context-aware responses',
        'Multi-turn conversations',
        'Domain-specific knowledge',
        'Emotional intelligence'
      ]
    },
    { 
      id: 'analytics', 
      name: 'Predictive Analytics', 
      icon: <FaChartLine />, 
      color: 'blue',
      description: 'Forecast future trends and events with high accuracy using advanced predictive models.',
      capabilities: [
        'Time series forecasting',
        'Regression analysis',
        'Classification models',
        'Anomaly detection',
        'Pattern recognition'
      ]
    },
    { 
      id: 'processing', 
      name: 'Data Processing', 
      icon: <FaDatabase />, 
      color: 'cyan',
      description: 'High-performance data handling for big data applications and real-time analytics.',
      capabilities: [
        'Distributed processing',
        'Stream processing',
        'ETL pipelines',
        'Data transformation',
        'Real-time analytics'
      ]
    }
  ];
  
  // Get active tab data
  const activeTabData = featureTabs.find(tab => tab.id === activeTab);
  
  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <h1 className="gradient-text">Advanced AI Features</h1>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)',
                fontSize: '1.1rem'
              }}
            >
              Explore our comprehensive suite of AI-powered capabilities designed to transform your data into actionable intelligence.
            </p>
          </motion.div>
          
          <motion.div 
            className="features-tabs"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-xl)'
            }}
          >
            {featureTabs.map((tab) => (
              <motion.div 
                key={tab.id}
                variants={itemVariants}
                onClick={() => handleTabChange(tab.id)}
                style={{
                  cursor: 'pointer'
                }}
              >
                <FuturisticCard
                  title={tab.name}
                  icon={tab.icon}
                  glowColor={tab.color}
                  description={activeTab === tab.id ? 'Active' : 'Click to activate'}
                >
                  <p>{tab.description}</p>
                  
                  {activeTab === tab.id && (
                    <div 
                      className="active-indicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '3px',
                        backgroundColor: tab.color === 'cyan' ? 'var(--neon-cyan)' : 
                          tab.color === 'magenta' ? 'var(--neon-magenta)' : 'var(--electric-blue)',
                        boxShadow: tab.color === 'cyan' ? 'var(--glow-cyan)' :
                          tab.color === 'magenta' ? 'var(--glow-magenta)' : 'var(--glow-blue)',
                      }}
                    ></div>
                  )}
                </FuturisticCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Feature Details Section */}
      <section className="feature-details section">
        <div className="container">
          <div 
            className="feature-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center'
            }}
          >
            <div className="feature-info">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 style={{ color: activeTabData.color === 'cyan' ? 'var(--neon-cyan)' : 
                  activeTabData.color === 'magenta' ? 'var(--neon-magenta)' : 'var(--electric-blue)',
                }}>
                  {activeTabData.name}
                </h2>
                
                <p 
                  style={{ 
                    marginBottom: 'var(--space-lg)',
                    fontSize: '1.1rem'
                  }}
                >
                  {activeTabData.description}
                </p>
                
                <div 
                  className="feature-capabilities"
                  style={{
                    marginBottom: 'var(--space-lg)'
                  }}
                >
                  <h3 style={{ marginBottom: 'var(--space-sm)' }}>Key Capabilities</h3>
                  
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {activeTabData.capabilities.map((capability, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-sm)',
                          marginBottom: 'var(--space-sm)',
                          padding: 'var(--space-sm)',
                          borderLeft: `2px solid ${activeTabData.color === 'cyan' ? 'var(--neon-cyan)' : 
                            activeTabData.color === 'magenta' ? 'var(--neon-magenta)' : 'var(--electric-blue)'}`,
                          backgroundColor: 'rgba(10, 35, 66, 0.2)'
                        }}
                      >
                        <div 
                          style={{
                            color: activeTabData.color === 'cyan' ? 'var(--neon-cyan)' : 
                              activeTabData.color === 'magenta' ? 'var(--neon-magenta)' : 'var(--electric-blue)',
                          }}
                        >
                          <FaCog />
                        </div>
                        <span>{capability}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <FuturisticButton glowColor={activeTabData.color}>
                  Try {activeTabData.name}
                </FuturisticButton>
              </motion.div>
            </div>
            
            <div className="feature-demo">
              <motion.div 
                key={`demo-${activeTab}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HolographicDisplay
                  height="400px"
                  glowColor={activeTabData.color}
                  rotateEffect={true}
                >
                  <div 
                    className="demo-content"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                      padding: 'var(--space-md)'
                    }}
                  >
                    <div 
                      className="demo-header"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 'var(--space-md)'
                      }}
                    >
                      <div className="demo-title">
                        <h3 style={{ 
                          color: activeTabData.color === 'cyan' ? 'var(--neon-cyan)' : 
                            activeTabData.color === 'magenta' ? 'var(--neon-magenta)' : 'var(--electric-blue)',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          fontSize: '1rem'
                        }}>
                          {activeTabData.name} Demo
                        </h3>
                      </div>
                      
                      <div 
                        className="demo-status"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-xs)'
                        }}
                      >
                        <div 
                          className="status-indicator"
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: isLoading ? 'var(--neon-magenta)' : 
                              activeTabData.color === 'cyan' ? 'var(--neon-cyan)' : 
                              activeTabData.color === 'magenta' ? 'var(--neon-magenta)' : 'var(--electric-blue)',
                            boxShadow: isLoading ? 'var(--glow-magenta)' : 
                              activeTabData.color === 'cyan' ? 'var(--glow-cyan)' :
                              activeTabData.color === 'magenta' ? 'var(--glow-magenta)' : 'var(--glow-blue)',
                            animation: isLoading ? 'pulse 1s infinite' : 'none'
                          }}
                        />
                        <span style={{ fontSize: '0.7rem' }}>
                          {isLoading ? 'PROCESSING' : 'READY'}
                        </span>
                      </div>
                    </div>
                    
                    <div 
                      className="demo-display"
                      style={{
                        flex: 1
                      }}
                    >
                      <DataDisplay
                        title="System Output"
                        data={demoData}
                        loading={isLoading}
                        glowColor={activeTabData.color}
                      />
                    </div>
                  </div>
                </HolographicDisplay>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features Section */}
      <section className="additional-features section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <h2 className="gradient-text">Additional Capabilities</h2>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)' 
              }}
            >
              Beyond our core AI features, we offer specialized solutions for diverse industry applications.
            </p>
          </motion.div>
          
          <motion.div 
            className="additional-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xxl)'
            }}
          >
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="Computer Vision" 
                icon={<FaFingerprint />}
                description="Advanced image recognition"
                glowColor="blue"
              >
                <p>Object detection, facial recognition, image classification, and scene understanding algorithms for visual data analysis.</p>
              </FuturisticCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="Reinforcement Learning" 
                icon={<FaCog />}
                description="Self-improving AI systems"
                glowColor="magenta"
              >
                <p>AI agents that learn optimal behaviors through interaction with environments and reward-based feedback mechanisms.</p>
              </FuturisticCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="AI Security" 
                icon={<FaShieldAlt />}
                description="Robust protection systems"
                glowColor="cyan"
              >
                <p>Advanced threat detection, anomaly identification, and vulnerability assessment using AI-powered security solutions.</p>
              </FuturisticCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="API Integration" 
                icon={<FaCode />}
                description="Seamless connectivity"
                glowColor="blue"
              >
                <p>Easily integrate our AI capabilities into existing systems with comprehensive API documentation and developer tools.</p>
              </FuturisticCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section 
        className="comparison-section section"
        style={{
          background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${interfaceOutlineImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <h2 className="gradient-text">Why Choose Our AI Platform</h2>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)' 
              }}
            >
              See how our AI technology compares to traditional solutions and competitors.
            </p>
          </motion.div>
          
          <motion.div 
            className="comparison-table-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              overflowX: 'auto',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <table 
              className="comparison-table"
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                color: 'var(--text-primary)',
                textAlign: 'left'
              }}
            >
              <thead>
                <tr>
                  <th style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid var(--highlight-blue)',
                    color: 'var(--neon-cyan)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>Feature</th>
                  <th style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid var(--highlight-blue)',
                    color: 'var(--neon-cyan)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>Our AI Platform</th>
                  <th style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid var(--highlight-blue)',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>Traditional Systems</th>
                  <th style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid var(--highlight-blue)',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>Competitors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)'
                  }}>Processing Speed</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--neon-cyan)'
                  }}>1.2M records/sec</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>50K records/sec</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>300K records/sec</td>
                </tr>
                <tr>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)'
                  }}>Accuracy</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--neon-cyan)'
                  }}>97.8%</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>82.3%</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>91.5%</td>
                </tr>
                <tr>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)'
                  }}>Adaptability</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--neon-cyan)'
                  }}>Self-optimizing</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>Static</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>Limited learning</td>
                </tr>
                <tr>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)'
                  }}>Scalability</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--neon-cyan)'
                  }}>Unlimited</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>Hardware limited</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>Tier-based</td>
                </tr>
                <tr>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)'
                  }}>Integration</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--neon-cyan)'
                  }}>Universal API</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>Custom development</td>
                  <td style={{ 
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(10, 35, 66, 0.5)',
                    color: 'var(--text-secondary)'
                  }}>Limited APIs</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
          
          <div 
            className="cta-buttons"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-md)'
            }}
          >
            <FuturisticButton>Schedule Demo</FuturisticButton>
            <FuturisticButton variant="outlined" glowColor="magenta">
              Download Whitepaper
            </FuturisticButton>
          </div>
        </div>
      </section>
      
      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          .feature-content {
            grid-template-columns: 1fr !important;
          }
          
          .comparison-table {
            min-width: 600px;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;