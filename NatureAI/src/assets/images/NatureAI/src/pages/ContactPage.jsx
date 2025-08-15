import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedButton from '../components/AnimatedButton';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    
    // In a real application, you would send the form data to a server here
  };
  
  // FAQs data
  const faqs = [
    {
      question: 'What industries benefit most from your technology?',
      answer: 'Our nature-inspired AI is particularly valuable for industries with complex, adaptive challenges like healthcare, climate science, energy management, finance, and supply chain logistics. However, the core technology is adaptable to virtually any domain that requires intelligent data analysis and decision-making.'
    },
    {
      question: 'How does your approach differ from traditional AI?',
      answer: 'Traditional AI often relies on rigid computational models that require massive amounts of data and energy. Our approach incorporates principles from natural systems—like adaptability, self-organization, and resource efficiency—to create AI that learns more organically, consumes less energy, and demonstrates greater resilience to changing conditions.'
    },
    {
      question: 'Do you offer custom solutions or only standard products?',
      answer: 'We offer both. Our platform provides ready-to-use components for common applications, but we also work closely with organizations to develop custom solutions tailored to specific challenges. Our team of experts collaborates with clients to identify the most effective approach for their unique requirements.'
    },
    {
      question: 'What kind of energy savings can we expect?',
      answer: 'Organizations implementing our technology typically see 40-60% reduction in energy consumption compared to traditional AI approaches. The exact savings depend on the specific application and scale of deployment, but our biomimetic processing architecture is fundamentally more efficient by design.'
    },
    {
      question: 'How difficult is it to integrate with existing systems?',
      answer: 'We\'ve designed our platform with interoperability in mind. We offer comprehensive APIs, standard data connectors, and integration services to help organizations incorporate our technology into their existing infrastructure with minimal disruption. Our team provides technical support throughout the integration process.'
    },
    {
      question: 'Do you provide training and support?',
      answer: 'Yes, we offer comprehensive training programs for technical teams, ongoing support packages, and detailed documentation. Our partnership approach means we're committed to your success beyond the initial implementation, with regular updates and optimization recommendations.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-nature-green-light/30 via-white to-nature-tech-light/20 overflow-hidden">
        {/* Organic background pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <img 
            src="/src/assets/images/leaf-veins.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-nature-green-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Get In Touch
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Have questions about our technology or want to explore how NatureAI can help your organization? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-display font-semibold mb-6 text-nature-green-dark">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <motion.div 
                  className={`p-4 rounded-md mb-6 ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{formStatus.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nature-green-light focus:border-nature-green outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nature-green-light focus:border-nature-green outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
                    <input 
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nature-green-light focus:border-nature-green outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nature-green-light focus:border-nature-green outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nature-green-light focus:border-nature-green outline-none transition-colors duration-300"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <AnimatedButton 
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      animate={false}
                    >
                      Send Message
                    </AnimatedButton>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-display font-semibold mb-6 text-nature-green-dark">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-nature-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm PT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-nature-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@natureai.example.com</p>
                    <p className="text-gray-600">support@natureai.example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-nature-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">123 Nature Way</p>
                    <p className="text-gray-600">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                    <motion.a 
                      key={social}
                      href={`https://${social}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-nature-green hover:text-white transition-colors duration-300"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social === 'twitter' && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {social === 'linkedin' && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        )}
                        {social === 'github' && (
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        )}
                        {social === 'instagram' && (
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        )}
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our nature-inspired AI technology.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className={`border-b border-gray-200 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-gray-800">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg className="w-5 h-5 text-nature-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-700 mb-4">
                Don't see your question here? Reach out to our team directly.
              </p>
              <AnimatedButton 
                to="mailto:support@natureai.example.com"
                variant="outline-tech"
                animate={false}
              >
                Email Support Team
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Visit Our Office</h2>
            <p className="text-gray-600 text-lg">
              We're located in the heart of San Francisco's tech district.
            </p>
          </motion.div>
          
          <motion.div 
            className="h-96 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder for a map - in a real application, you would integrate with Google Maps or similar */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;