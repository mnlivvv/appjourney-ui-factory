import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaChartLine, FaDatabase, FaCog } from 'react-icons/fa';

// Components
import FuturisticCard from '../ui/FuturisticCard';
import HolographicDisplay from '../ui/HolographicDisplay';
import FuturisticButton from '../ui/FuturisticButton';
import ProgressBar from '../ui/ProgressBar';

// Assets
import aiSphereImg from '../../assets/images/ai-sphere.jpg';
import digitalGridImg from '../../assets/images/digital-grid.jpg';
import aiFaceImg from '../../assets/images/ai-face.jpg';

const Home = () => {
  const canvasRef = useRef(null);
  
  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Matrix-like digital rain effect
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(0);
    
    const draw = () => {
      ctx.fillStyle = 'rgba(5, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'var(--neon-cyan)';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 33);
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  const statsItems = [
    { label: 'AI Model Confidence', value: 92, color: 'cyan' },
    { label: 'Neural Network Training', value: 78, color: 'blue' },
    { label: 'System Performance', value: 85, color: 'magenta' },
    { label: 'Data Processing', value: 64, color: 'cyan' }
  ];
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <canvas 
          ref={canvasRef} 
          className="matrix-canvas"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.3
          }}
        ></canvas>
        
        <div className="container">
          <div 
            className="hero-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              padding: 'var(--space-xxl) 0',
              position: 'relative',
              zIndex: 1
            }}
          >
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="hero-title"
                style={{
                  marginBottom: 'var(--space-md)',
                  position: 'relative'
                }}
              >
                <span className="gradient-text">Next Generation</span> AI Technology
              </h1>
              
              <p 
                className="hero-description"
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-lg)',
                  maxWidth: '600px'
                }}
              >
                Experience the future of artificial intelligence with our cutting-edge neural network technology. 
                Harness the power of advanced machine learning algorithms for unprecedented accuracy and efficiency.
              </p>
              
              <div 
                className="hero-buttons"
                style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <FuturisticButton size="large">
                  Get Started
                </FuturisticButton>
                
                <FuturisticButton 
                  size="large" 
                  variant="outlined" 
                  glowColor="magenta"
                >
                  Learn More
                </FuturisticButton>
              </div>
              
              <div 
                className="hero-stats"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--space-md)'
                }}
              >
                {statsItems.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <ProgressBar
                      value={stat.value}
                      label={stat.label}
                      glowColor={stat.color}
                      animated={true}
                      striped={true}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <HolographicDisplay height="400px" rotateEffect={true}>
                <div 
                  className="hologram-image"
                  style={{
                    position: 'relative',
                    width: '80%',
                    height: '80%',
                    backgroundImage: `url(${aiSphereImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    animation: 'pulse 3s infinite alternate'
                  }}
                >
                  <div 
                    className="pulse-ring"
                    style={{
                      position: 'absolute',
                      top: '-10%',
                      left: '-10%',
                      width: '120%',
                      height: '120%',
                      borderRadius: '50%',
                      border: '1px solid var(--neon-cyan)',
                      animation: 'pulseRing 3s infinite'
                    }}
                  ></div>
                </div>
              </HolographicDisplay>
            </motion.div>
          </div>
        </div>
        
        <div 
          className="hero-overlay"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50px',
            background: 'linear-gradient(to bottom, transparent, var(--dark-bg))',
            zIndex: 1
          }}
        ></div>
      </section>
      
      {/* Features Section */}
      <section className="features-section section">
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
            <h2 className="gradient-text">Advanced AI Features</h2>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)' 
              }}
            >
              Our platform offers cutting-edge capabilities powered by state-of-the-art neural networks and deep learning algorithms.
            </p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xxl)'
            }}
          >
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="Neural Networks" 
                icon={<FaBrain />}
                description="Advanced machine learning architecture"
                glowColor="cyan"
              >
                <p>Our deep learning models utilize multilayer perceptrons and convolutional neural networks for unparalleled pattern recognition capabilities.</p>
                <Link to="/features" className="card-link">
                  <FuturisticButton variant="text" size="small">
                    Learn More
                  </FuturisticButton>
                </Link>
              </FuturisticCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="AI Assistants" 
                icon={<FaRobot />}
                description="Intelligent conversational agents"
                glowColor="magenta"
              >
                <p>Natural language processing capabilities enable sophisticated human-like interactions and contextual understanding of complex queries.</p>
                <Link to="/features" className="card-link">
                  <FuturisticButton variant="text" size="small" glowColor="magenta">
                    Learn More
                  </FuturisticButton>
                </Link>
              </FuturisticCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="Predictive Analytics" 
                icon={<FaChartLine />}
                description="Data-driven forecasting tools"
                glowColor="blue"
              >
                <p>Leverage powerful time series analysis and regression models to predict future trends and make data-informed business decisions.</p>
                <Link to="/features" className="card-link">
                  <FuturisticButton variant="text" size="small" glowColor="blue">
                    Learn More
                  </FuturisticButton>
                </Link>
              </FuturisticCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticCard 
                title="Data Processing" 
                icon={<FaDatabase />}
                description="High-performance data handling"
                glowColor="cyan"
              >
                <p>Process massive datasets with our distributed computing architecture optimized for big data applications and real-time analytics.</p>
                <Link to="/features" className="card-link">
                  <FuturisticButton variant="text" size="small">
                    Learn More
                  </FuturisticButton>
                </Link>
              </FuturisticCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* AI Showcase Section */}
      <section 
        className="showcase-section section"
        style={{
          background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${digitalGridImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="container">
          <div 
            className="showcase-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center'
            }}
          >
            <motion.div 
              className="showcase-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="gradient-text">Experience the Power of AI</h2>
              <p 
                style={{ 
                  marginBottom: 'var(--space-lg)',
                  color: 'var(--text-secondary)' 
                }}
              >
                Our AI systems continuously learn and adapt, providing increasingly accurate results as they process more data. With neural networks modeled after the human brain, our technology represents the cutting edge of artificial intelligence research.
              </p>
              
              <div 
                className="showcase-features"
                style={{
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <div 
                  className="feature-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  <div 
                    className="feature-icon"
                    style={{
                      color: 'var(--neon-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <FaCog />
                  </div>
                  <div className="feature-text">
                    <h4>Self-Optimizing Algorithms</h4>
                    <p style={{ fontSize: '0.9rem' }}>Continuously improving performance through adaptive learning</p>
                  </div>
                </div>
                
                <div 
                  className="feature-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  <div 
                    className="feature-icon"
                    style={{
                      color: 'var(--electric-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <FaDatabase />
                  </div>
                  <div className="feature-text">
                    <h4>Real-time Data Processing</h4>
                    <p style={{ fontSize: '0.9rem' }}>Handle millions of data points with millisecond response times</p>
                  </div>
                </div>
              </div>
              
              <FuturisticButton>Try Demo</FuturisticButton>
            </motion.div>
            
            <motion.div 
              className="showcase-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div 
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--glow-blue)'
                }}
              >
                <img 
                  src={aiFaceImg} 
                  alt="AI Technology" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 'var(--radius-md)'
                  }}
                />
                <div 
                  className="image-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(0, 179, 255, 0.3), transparent)',
                    mixBlendMode: 'color-dodge'
                  }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <motion.div 
            className="cta-content panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              padding: 'var(--space-xl)',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <h2 className="gradient-text">Ready to Transform Your Business with AI?</h2>
            <p 
              style={{ 
                marginBottom: 'var(--space-lg)',
                color: 'var(--text-secondary)' 
              }}
            >
              Join the thousands of organizations already leveraging our advanced AI solutions to drive innovation and efficiency.
            </p>
            
            <div 
              className="cta-buttons"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-md)',
                justifyContent: 'center'
              }}
            >
              <FuturisticButton size="large">
                Start Free Trial
              </FuturisticButton>
              
              <FuturisticButton 
                variant="outlined" 
                glowColor="blue"
                size="large"
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: var(--space-xl) 0;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: var(--space-xl) 0;
          }
          
          .hero-content {
            grid-template-columns: 1fr !important;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .hero-stats {
            grid-template-columns: 1fr !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          
          .showcase-content {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;