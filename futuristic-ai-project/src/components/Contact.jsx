import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.contactGrid}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Get in <span className="neon-blue glow-text">Touch</span></h2>
            <p>
              Have a project in mind or want to learn more about our AI solutions? 
              We're here to help you transform your business with cutting-edge 
              artificial intelligence.
            </p>
            
            <div className={styles.contactMethod}>
              <div className={styles.contactIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.5 21 5.5 21 5.5 21C5.5 21 3 21 3 18.5C3 17.1458 3.8125 16 5.5 16C7.1875 16 8 17.1458 8 18.5C8 19.8542 7.1875 21 5.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 11.5C11 11.5 12 10.3333 14 11.5C16 12.6667 17 11.5 17 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 16.5C14 16.5 15 15.3333 17 16.5C19 17.6667 20 16.5 20 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.contactText}>support@neuroai.com</div>
            </div>
            
            <div className={styles.contactMethod}>
              <div className={styles.contactIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.5 17.5C20.5 17.5 20.0312 17.7656 19.5 18C18.9688 18.2344 18.5 18 18.5 18C18.5 18 16.5 16.5 16.5 15C16.5 13.5 18.5 12 18.5 12C18.5 12 18.9688 11.7656 19.5 12C20.0312 12.2344 20.5 12.5 20.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 7.5C10 7.5 9.53125 7.76562 9 8C8.46875 8.23438 8 8 8 8C8 8 6 6.5 6 5C6 3.5 8 2 8 2C8 2 8.46875 1.76562 9 2C9.53125 2.23438 10 2.5 10 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.contactText}>+1 (555) 123-4567</div>
            </div>
            
            <div className={styles.contactMethod}>
              <div className={styles.contactIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L16 10M12 12L8 14M12 12V7M12 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.contactText}>123 Tech Ave, San Francisco, CA 94103</div>
            </div>
          </motion.div>
          
          <motion.form 
            className={styles.contactForm}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
          >
            {submitSuccess && (
              <div style={{ 
                padding: '10px', 
                marginBottom: '20px', 
                backgroundColor: 'rgba(0, 242, 255, 0.1)', 
                borderLeft: '3px solid var(--neon-blue)',
                color: 'var(--neon-blue)'
              }}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div style={{ 
                padding: '10px', 
                marginBottom: '20px', 
                backgroundColor: 'rgba(255, 0, 0, 0.1)', 
                borderLeft: '3px solid #ff0055',
                color: '#ff0055'
              }}>
                An error occurred. Please try again later.
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={styles.formInput} 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={styles.formInput} 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className={styles.formInput} 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                className={styles.formTextarea} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`${styles.submitButton} glow-border`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
      
      <div className={`${styles.contactCircle} ${styles.circle1}`}></div>
      <div className={`${styles.contactCircle} ${styles.circle2}`}></div>
    </section>
  );
};

export default Contact;