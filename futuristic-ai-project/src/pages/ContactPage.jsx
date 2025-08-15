import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/ContactPage.module.css';
import Contact from '../components/Contact';

const ContactPage = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };
  
  const faqs = [
    {
      question: "What industries do you typically work with?",
      answer: "We work with a wide range of industries including healthcare, finance, manufacturing, retail, logistics, and technology. Our AI solutions are versatile and can be tailored to address specific challenges in virtually any sector."
    },
    {
      question: "How long does it typically take to implement an AI solution?",
      answer: "Implementation timelines vary based on the complexity of the solution and your specific requirements. Simple projects may take 4-8 weeks, while more complex enterprise solutions can take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific needs."
    },
    {
      question: "Do I need large amounts of data to implement AI solutions?",
      answer: "While having quality data is important, you don't necessarily need massive datasets to get started. We can work with your existing data, help you identify data collection strategies, or use transfer learning and other techniques to minimize data requirements. Our team can assess your data situation and recommend the best approach during our initial consultation."
    },
    {
      question: "How do you ensure the security and privacy of our data?",
      answer: "Data security and privacy are top priorities for us. We implement industry-standard security protocols, including encryption, secure access controls, and regular security audits. We are GDPR compliant and can sign custom NDAs and data processing agreements. We only use your data for the specific purposes agreed upon and never share it with third parties without explicit permission."
    },
    {
      question: "What kind of ROI can we expect from implementing AI solutions?",
      answer: "ROI varies based on the specific application and your business context. Our clients typically see returns ranging from cost savings through automation, increased revenue through better customer experiences, or improved operational efficiency. In our case studies, we've documented ROI ranging from 3x to 10x the investment within the first year. During our consultation, we can provide more specific estimates based on your use case."
    },
    {
      question: "Do you offer ongoing support and maintenance after implementation?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally. This includes regular updates, performance monitoring, retraining models as needed, and technical support. We also offer training for your team to help them understand and work effectively with the implemented solutions."
    }
  ];
  
  return (
    <div className={styles.contactPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <span className="neon-blue glow-text">Touch</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's discuss how our AI solutions can transform your business
          </motion.p>
        </div>
      </section>
      
      <Contact />
      
      <section className={styles.faqSection}>
        <div className="container">
          <motion.h2 
            className={styles.faqTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="neon-pink glow-text">Questions</span>
          </motion.h2>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`${styles.faqItem} ${selectedFaq === index ? styles.active : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div 
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className={styles.faqToggle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d={selectedFaq === index ? "M5 12H19" : "M12 5V19M5 12H19"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.officeSection}>
        <div className="container">
          <motion.h2 
            className={styles.officeTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="neon-cyan glow-text">Offices</span>
          </motion.h2>
          
          <div className={styles.officeGrid}>
            {[
              {
                city: "San Francisco",
                address: "123 Tech Avenue, San Francisco, CA 94103",
                phone: "+1 (555) 123-4567",
                email: "sf@neuroai.com"
              },
              {
                city: "New York",
                address: "456 Innovation Street, New York, NY 10001",
                phone: "+1 (555) 987-6543",
                email: "nyc@neuroai.com"
              },
              {
                city: "London",
                address: "78 AI Lane, London, UK EC1V 9BP",
                phone: "+44 (0) 20 1234 5678",
                email: "london@neuroai.com"
              }
            ].map((office, index) => (
              <motion.div 
                key={index}
                className={styles.officeCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <h3 className={styles.officeCity}>{office.city}</h3>
                <div className={styles.officeDetails}>
                  <div className={styles.officeDetail}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12L16 10M12 12L8 14M12 12V7M12 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{office.address}</span>
                  </div>
                  <div className={styles.officeDetail}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.5 17.5C20.5 17.5 20.0312 17.7656 19.5 18C18.9688 18.2344 18.5 18 18.5 18C18.5 18 16.5 16.5 16.5 15C16.5 13.5 18.5 12 18.5 12C18.5 12 18.9688 11.7656 19.5 12C20.0312 12.2344 20.5 12.5 20.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 7.5C10 7.5 9.53125 7.76562 9 8C8.46875 8.23438 8 8 8 8C8 8 6 6.5 6 5C6 3.5 8 2 8 2C8 2 8.46875 1.76562 9 2C9.53125 2.23438 10 2.5 10 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{office.phone}</span>
                  </div>
                  <div className={styles.officeDetail}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.5 21 5.5 21 5.5 21C5.5 21 3 21 3 18.5C3 17.1458 3.8125 16 5.5 16C7.1875 16 8 17.1458 8 18.5C8 19.8542 7.1875 21 5.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11 11.5C11 11.5 12 10.3333 14 11.5C16 12.6667 17 11.5 17 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 16.5C14 16.5 15 15.3333 17 16.5C19 17.6667 20 16.5 20 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;