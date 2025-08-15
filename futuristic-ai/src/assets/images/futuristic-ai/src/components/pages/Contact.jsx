import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub,
  FaDiscord,
  FaPaperPlane,
  FaCheck
} from 'react-icons/fa';

// Components
import FuturisticCard from '../ui/FuturisticCard';
import FuturisticButton from '../ui/FuturisticButton';

// Assets
import digitalGridImg from '../../assets/images/digital-grid.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 2000);
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
  
  // Contact methods data
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: 'info@nexusai.tech',
      action: 'Send Email',
      link: 'mailto:info@nexusai.tech',
      color: 'cyan'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'Call Now',
      link: 'tel:+15551234567',
      color: 'magenta'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: '123 AI Boulevard, Tech Hub, CA 94103',
      action: 'Get Directions',
      link: 'https://maps.google.com',
      color: 'blue'
    }
  ];
  
  // Social media links
  const socialLinks = [
    { icon: <FaTwitter />, name: 'Twitter', link: 'https://twitter.com', color: 'var(--electric-blue)' },
    { icon: <FaLinkedin />, name: 'LinkedIn', link: 'https://linkedin.com', color: 'var(--neon-cyan)' },
    { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com', color: 'var(--text-primary)' },
    { icon: <FaDiscord />, name: 'Discord', link: 'https://discord.com', color: 'var(--neon-magenta)' }
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: 'What industries does your AI technology support?',
      answer: 'Our AI solutions are designed to be adaptable across multiple industries including healthcare, finance, manufacturing, retail, and more. The core technology can be customized to address specific industry challenges and requirements.'
    },
    {
      question: 'How do you ensure data privacy and security?',
      answer: 'We implement industry-leading security measures including end-to-end encryption, secure cloud infrastructure, and regular security audits. All data processing complies with regulations like GDPR and CCPA, and we maintain strict data access controls.'
    },
    {
      question: 'What level of technical expertise is required to use your platform?',
      answer: 'Our platform is designed with different user interfaces to accommodate varying levels of technical expertise. For non-technical users, we offer intuitive dashboards and no-code tools. For developers and data scientists, we provide comprehensive APIs and SDK documentation.'
    },
    {
      question: 'Do you offer custom AI solutions?',
      answer: 'Yes, we offer tailored AI solutions to address specific business needs. Our team works closely with clients to understand their unique challenges and develop customized implementations of our technology.'
    },
    {
      question: 'What support options are available?',
      answer: 'We provide multiple tiers of support including standard email support, priority technical assistance, and dedicated account management for enterprise clients. Our documentation portal and knowledge base are accessible to all customers.'
    }
  ];
  
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero section">
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
            <h1 className="gradient-text">Contact Us</h1>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)',
                fontSize: '1.1rem'
              }}
            >
              Have questions about our AI technology or want to schedule a demo? 
              Get in touch with our team and we'll be happy to assist you.
            </p>
          </motion.div>
          
          <motion.div 
            className="contact-methods"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xxl)'
            }}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
              >
                <FuturisticCard
                  title={method.title}
                  icon={method.icon}
                  glowColor={method.color}
                >
                  <p 
                    style={{ 
                      marginBottom: 'var(--space-md)',
                      fontSize: '1.1rem'
                    }}
                  >
                    {method.details}
                  </p>
                  
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    <FuturisticButton 
                      variant="outlined"
                      glowColor={method.color}
                    >
                      {method.action}
                    </FuturisticButton>
                  </a>
                </FuturisticCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section 
        className="contact-form-section section"
        style={{
          background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${digitalGridImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="container">
          <div 
            className="form-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center'
            }}
          >
            <motion.div 
              className="form-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="gradient-text">Send Us a Message</h2>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Fill out the form below and we'll get back to you as soon as possible. 
                Our team is ready to answer any questions about our AI solutions.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div 
                  className="form-group"
                  style={{
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <label 
                    htmlFor="name"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-xs)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-sm) var(--space-md)',
                      backgroundColor: 'rgba(10, 35, 66, 0.3)',
                      border: '1px solid var(--highlight-blue)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      transition: 'all var(--transition-fast)'
                    }}
                  />
                </div>
                
                <div 
                  className="form-group"
                  style={{
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <label 
                    htmlFor="email"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-xs)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}
                  >
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-sm) var(--space-md)',
                      backgroundColor: 'rgba(10, 35, 66, 0.3)',
                      border: '1px solid var(--highlight-blue)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      transition: 'all var(--transition-fast)'
                    }}
                  />
                </div>
                
                <div 
                  className="form-group"
                  style={{
                    marginBottom: 'var(--space-md)'
                  }}
                >
                  <label 
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-xs)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-sm) var(--space-md)',
                      backgroundColor: 'rgba(10, 35, 66, 0.3)',
                      border: '1px solid var(--highlight-blue)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      transition: 'all var(--transition-fast)'
                    }}
                  />
                </div>
                
                <div 
                  className="form-group"
                  style={{
                    marginBottom: 'var(--space-lg)'
                  }}
                >
                  <label 
                    htmlFor="message"
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-xs)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}
                  >
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-sm) var(--space-md)',
                      backgroundColor: 'rgba(10, 35, 66, 0.3)',
                      border: '1px solid var(--highlight-blue)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      resize: 'vertical',
                      minHeight: '120px',
                      fontFamily: 'var(--font-secondary)',
                      transition: 'all var(--transition-fast)'
                    }}
                  ></textarea>
                </div>
                
                <div 
                  className="form-actions"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)'
                  }}
                >
                  <FuturisticButton 
                    type="submit"
                    isLoading={formStatus.isSubmitting}
                    disabled={formStatus.isSubmitting}
                    icon={<FaPaperPlane />}
                  >
                    Send Message
                  </FuturisticButton>
                  
                  {formStatus.isSubmitted && (
                    <motion.div 
                      className="form-success"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        color: 'var(--neon-cyan)'
                      }}
                    >
                      <FaCheck />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="social-media"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="panel">
                <h2 style={{ marginBottom: 'var(--space-md)' }}>Connect With Us</h2>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                  Follow us on social media for the latest updates on our AI research, 
                  product announcements, and industry insights.
                </p>
                
                <div 
                  className="social-links"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-md)',
                    marginBottom: 'var(--space-lg)'
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        padding: 'var(--space-sm) var(--space-md)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(10, 35, 66, 0.4)',
                        border: '1px solid var(--highlight-blue)',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div 
                        className="social-icon"
                        style={{
                          color: social.color,
                          fontSize: '1.2rem'
                        }}
                      >
                        {social.icon}
                      </div>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
                
                <div className="newsletter">
                  <h3 style={{ marginBottom: 'var(--space-sm)' }}>Subscribe to Our Newsletter</h3>
                  <p style={{ marginBottom: 'var(--space-md)', fontSize: '0.9rem' }}>
                    Get the latest AI insights and updates delivered directly to your inbox.
                  </p>
                  
                  <div 
                    className="newsletter-form"
                    style={{
                      display: 'flex',
                      gap: 'var(--space-sm)'
                    }}
                  >
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      style={{
                        flex: 1,
                        padding: 'var(--space-sm) var(--space-md)',
                        backgroundColor: 'rgba(10, 35, 66, 0.3)',
                        border: '1px solid var(--highlight-blue)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                    <FuturisticButton size="small" glowColor="magenta">
                      Subscribe
                    </FuturisticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section section">
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
            <h2 className="gradient-text">Frequently Asked Questions</h2>
            <p 
              style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                color: 'var(--text-secondary)' 
              }}
            >
              Find answers to common questions about our AI technology and services.
            </p>
          </motion.div>
          
          <div 
            className="faq-container"
            style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {faqItems.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  marginBottom: 'var(--space-md)',
                  overflow: 'hidden'
                }}
              >
                <div 
                  className="faq-question"
                  style={{
                    padding: 'var(--space-md)',
                    cursor: 'pointer',
                    borderBottom: '1px solid var(--highlight-blue)',
                    position: 'relative'
                  }}
                >
                  <h3 style={{ color: 'var(--neon-cyan)' }}>{faq.question}</h3>
                </div>
                
                <div 
                  className="faq-answer"
                  style={{
                    padding: 'var(--space-md)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="faq-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginTop: 'var(--space-xl)'
            }}
          >
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Don't see your question here? Reach out to our support team for assistance.
            </p>
            <FuturisticButton>
              Contact Support
            </FuturisticButton>
          </motion.div>
        </div>
      </section>
      
      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--neon-cyan) !important;
          box-shadow: var(--glow-cyan) !important;
        }
        
        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 255, 255, 0.2);
        }
        
        @media (max-width: 768px) {
          .form-container {
            grid-template-columns: 1fr !important;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .contact-methods {
            grid-template-columns: 1fr !important;
          }
          
          .social-links {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;