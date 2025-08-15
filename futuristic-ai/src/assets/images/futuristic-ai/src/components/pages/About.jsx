import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaChartLine, FaUsers, FaLightbulb, FaHistory } from 'react-icons/fa';

// Components
import FuturisticCard from '../ui/FuturisticCard';
import FuturisticButton from '../ui/FuturisticButton';
import HolographicDisplay from '../ui/HolographicDisplay';

// Assets
import aiSphereImg from '../../assets/images/ai-sphere.jpg';
import aiFaceImg from '../../assets/images/ai-face.jpg';

const About = () => {
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
  
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Scientist',
      bio: 'Former research lead at MIT\'s AI Lab with over 15 years of experience in neural networks and deep learning architectures.',
      color: 'cyan'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      bio: 'Pioneered distributed AI systems at Google Brain before joining our team to lead engineering innovation.',
      color: 'magenta'
    },
    {
      name: 'Aisha Patel',
      role: 'Head of AI Ethics',
      bio: 'Internationally recognized expert in responsible AI development with a focus on fairness and transparency.',
      color: 'blue'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Data Science Director',
      bio: 'Specialized in predictive analytics and large-scale data processing with previous experience at NASA and SpaceX.',
      color: 'cyan'
    }
  ];
  
  const timelineEvents = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started with a small team of AI researchers dedicated to making artificial intelligence more accessible.'
    },
    {
      year: '2019',
      title: 'First Neural Network',
      description: 'Released our first commercial neural network optimized for natural language processing.'
    },
    {
      year: '2020',
      title: 'Series A Funding',
      description: 'Secured $12 million in Series A funding to expand our AI research and development team.'
    },
    {
      year: '2021',
      title: 'Advanced Prediction Models',
      description: 'Launched our predictive analytics platform with industry-leading accuracy rates.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened research offices in Singapore and Berlin to accelerate AI innovation worldwide.'
    },
    {
      year: '2023',
      title: 'Next-Gen AI Platform',
      description: 'Released our comprehensive AI platform with self-optimizing algorithms and quantum-inspired processing.'
    }
  ];
  
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'var(--space-xl) 0'
            }}
          >
            <h1 className="gradient-text">About NEXUS<span>AI</span></h1>
            <p 
              style={{ 
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                margin: 'var(--space-md) 0 var(--space-xl)'
              }}
            >
              We are a team of AI researchers, engineers, and visionaries dedicated to building the future of artificial intelligence. 
              Our mission is to create intelligent systems that enhance human capabilities and solve complex problems.
            </p>
            
            <div 
              className="about-stats"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-xl)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-xl)'
              }}
            >
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  textAlign: 'center'
                }}
              >
                <div 
                  className="stat-value gradient-text"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  5+ Years
                </div>
                <div 
                  className="stat-label"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Innovation
                </div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  textAlign: 'center'
                }}
              >
                <div 
                  className="stat-value gradient-text"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  48+
                </div>
                <div 
                  className="stat-label"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  AI Researchers
                </div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  textAlign: 'center'
                }}
              >
                <div 
                  className="stat-value gradient-text"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  12M+
                </div>
                <div 
                  className="stat-label"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Data Points
                </div>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  textAlign: 'center'
                }}
              >
                <div 
                  className="stat-value gradient-text"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  24+
                </div>
                <div 
                  className="stat-label"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Countries
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div 
            className="mission-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center'
            }}
          >
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="gradient-text">Our Mission</h2>
              <p style={{ marginBottom: 'var(--space-md)' }}>
                At NEXUS AI, we're on a mission to push the boundaries of what's possible with artificial intelligence. 
                We believe that AI has the potential to solve some of humanity's most pressing challenges.
              </p>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Our team is committed to developing ethical, responsible AI systems that augment human capabilities 
                rather than replace them. We focus on creating technology that's accessible, transparent, and designed 
                with human needs at the center.
              </p>
              
              <div 
                className="mission-points"
                style={{
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <div 
                  className="mission-point"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <div 
                    className="point-icon"
                    style={{
                      color: 'var(--neon-cyan)',
                      marginTop: '4px'
                    }}
                  >
                    <FaBrain />
                  </div>
                  <div className="point-text">
                    <h3 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Advancing AI Research</h3>
                    <p style={{ fontSize: '0.9rem' }}>Pushing the frontiers of machine learning, neural networks, and artificial general intelligence.</p>
                  </div>
                </div>
                
                <div 
                  className="mission-point"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <div 
                    className="point-icon"
                    style={{
                      color: 'var(--neon-magenta)',
                      marginTop: '4px'
                    }}
                  >
                    <FaUsers />
                  </div>
                  <div className="point-text">
                    <h3 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Human-Centered Design</h3>
                    <p style={{ fontSize: '0.9rem' }}>Creating AI systems that complement and enhance human capabilities rather than replace them.</p>
                  </div>
                </div>
                
                <div 
                  className="mission-point"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-sm)'
                  }}
                >
                  <div 
                    className="point-icon"
                    style={{
                      color: 'var(--electric-blue)',
                      marginTop: '4px'
                    }}
                  >
                    <FaLightbulb />
                  </div>
                  <div className="point-text">
                    <h3 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Ethical Innovation</h3>
                    <p style={{ fontSize: '0.9rem' }}>Developing AI with strong ethical principles, transparency, and responsibility at its core.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mission-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HolographicDisplay height="400px" rotateEffect={true}>
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <div 
                    className="hologram-image"
                    style={{
                      position: 'relative',
                      width: '80%',
                      height: '80%',
                      backgroundImage: `url(${aiFaceImg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: 'var(--radius-md)',
                      animation: 'pulse 3s infinite alternate'
                    }}
                  ></div>
                  
                  <div 
                    className="image-overlay"
                    style={{
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      width: '80%',
                      height: '80%',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--neon-cyan)',
                      boxShadow: 'var(--glow-cyan)',
                      pointerEvents: 'none'
                    }}
                  ></div>
                </div>
              </HolographicDisplay>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section section">
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
            <h2 className="gradient-text">Our Leadership Team</h2>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)' 
              }}
            >
              Meet the visionaries and experts behind our cutting-edge AI technology.
            </p>
          </motion.div>
          
          <motion.div 
            className="team-grid"
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
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
              >
                <FuturisticCard 
                  title={member.name} 
                  description={member.role}
                  glowColor={member.color}
                >
                  <p style={{ marginBottom: 'var(--space-md)' }}>{member.bio}</p>
                  
                  <FuturisticButton 
                    variant="text" 
                    size="small"
                    glowColor={member.color}
                  >
                    Full Profile
                  </FuturisticButton>
                </FuturisticCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Company History Section */}
      <section 
        className="history-section section"
        style={{
          background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${aiSphereImg})`,
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
            <h2 className="gradient-text">Our Journey</h2>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)' 
              }}
            >
              From a small research team to a global AI technology leader.
            </p>
          </motion.div>
          
          <div 
            className="timeline"
            style={{
              position: 'relative',
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'var(--space-lg) 0'
            }}
          >
            {/* Timeline center line */}
            <div 
              className="timeline-line"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '2px',
                backgroundColor: 'var(--highlight-blue)',
                transform: 'translateX(-50%)'
              }}
            ></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                  position: 'relative',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                {/* Timeline dot */}
                <div 
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    top: '15px',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--dark-bg)',
                    border: '2px solid var(--neon-cyan)',
                    boxShadow: 'var(--glow-cyan)',
                    transform: 'translateX(-50%)',
                    zIndex: 2
                  }}
                ></div>
                
                <div 
                  className="timeline-content"
                  style={{
                    width: '45%',
                    padding: 'var(--space-md)',
                    backgroundColor: 'rgba(10, 35, 66, 0.4)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--highlight-blue)',
                    position: 'relative'
                  }}
                >
                  <div 
                    className="timeline-year"
                    style={{
                      position: 'absolute',
                      top: '0',
                      [index % 2 === 0 ? 'right' : 'left']: '0',
                      transform: `translate(${index % 2 === 0 ? '50%' : '-50%'}, -50%)`,
                      padding: 'var(--space-xs) var(--space-sm)',
                      backgroundColor: 'var(--dark-bg)',
                      color: 'var(--neon-cyan)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--neon-cyan)',
                      boxShadow: 'var(--glow-cyan)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {event.year}
                  </div>
                  
                  <h3 
                    style={{ 
                      marginBottom: 'var(--space-xs)',
                      color: 'var(--neon-cyan)'
                    }}
                  >
                    {event.title}
                  </h3>
                  
                  <p style={{ fontSize: '0.9rem' }}>
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="values-section section">
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
            <h2 className="gradient-text">Our Core Values</h2>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)' 
              }}
            >
              These principles guide everything we do, from research to product development.
            </p>
          </motion.div>
          
          <div 
            className="values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xxl)'
            }}
          >
            <motion.div 
              className="value-item panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-sm)' }}>Innovation</h3>
              <p>We push boundaries and challenge conventional thinking to create breakthrough AI technologies that transform industries.</p>
            </motion.div>
            
            <motion.div 
              className="value-item panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 style={{ color: 'var(--neon-magenta)', marginBottom: 'var(--space-sm)' }}>Responsibility</h3>
              <p>We develop AI with a strong commitment to ethics, fairness, and transparency, considering the societal impact of our technology.</p>
            </motion.div>
            
            <motion.div 
              className="value-item panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 style={{ color: 'var(--electric-blue)', marginBottom: 'var(--space-sm)' }}>Collaboration</h3>
              <p>We believe in the power of diverse perspectives and interdisciplinary approaches to solve complex AI challenges.</p>
            </motion.div>
            
            <motion.div 
              className="value-item panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-sm)' }}>Excellence</h3>
              <p>We are committed to the highest standards of scientific rigor and technical excellence in everything we create.</p>
            </motion.div>
            
            <motion.div 
              className="value-item panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 style={{ color: 'var(--neon-magenta)', marginBottom: 'var(--space-sm)' }}>Human-Centered</h3>
              <p>We design AI systems that prioritize human needs, augment human capabilities, and create positive experiences.</p>
            </motion.div>
            
            <motion.div 
              className="value-item panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 style={{ color: 'var(--electric-blue)', marginBottom: 'var(--space-sm)' }}>Accessibility</h3>
              <p>We believe in democratizing AI technology, making it accessible and beneficial to people across all sectors and regions.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="about-cta-section section">
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
            <h2 className="gradient-text">Join Our Journey</h2>
            <p 
              style={{ 
                marginBottom: 'var(--space-lg)',
                color: 'var(--text-secondary)' 
              }}
            >
              Whether you're looking to partner with us, join our team, or explore our technology, we'd love to connect with you.
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
                Join Our Team
              </FuturisticButton>
              
              <FuturisticButton 
                variant="outlined" 
                glowColor="magenta"
                size="large"
              >
                Contact Us
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
        
        @media (max-width: 768px) {
          .mission-content {
            grid-template-columns: 1fr !important;
          }
          
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 30px;
          }
          
          .timeline-line {
            left: 15px !important;
          }
          
          .timeline-dot {
            left: 15px !important;
          }
          
          .timeline-content {
            width: 100% !important;
          }
          
          .timeline-year {
            left: 0 !important;
            right: auto !important;
            transform: translate(-50%, -50%) !important;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
          
          .about-stats {
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;