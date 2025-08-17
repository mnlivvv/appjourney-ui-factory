import { useState } from 'react'
import { motion } from 'framer-motion'
import waterDropletImg from '../assets/images/water-droplet.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    })
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="pt-24 pb-16">
      <motion.section 
        className="mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Get in <span className="text-water-blue">Touch</span></h1>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our nature-inspired AI solutions? Want to schedule a demo or discuss 
                a custom implementation? Reach out to our team using the form or contact information below.
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-water-blue mr-3 text-xl">📍</span>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">123 Nature Way, Tech Valley, CA 94043</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-blue mr-3 text-xl">📧</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hello@natureai.example.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-blue mr-3 text-xl">📱</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              className="bg-white rounded-3xl shadow-md overflow-hidden relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 opacity-20">
                <img 
                  src={waterDropletImg} 
                  alt="Water Droplet" 
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-8 relative z-10">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                {formStatus.submitted ? (
                  <motion.div 
                    className="bg-sage/10 border border-sage rounded-xl p-4 text-sage"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p>{formStatus.message}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-water-blue focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-water-blue focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-water-blue focus:border-transparent transition-all duration-300"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-water-blue focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell us what you need..."
                        ></textarea>
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="w-full btn bg-water-blue text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI solutions and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">How quickly can your AI solutions be implemented?</h3>
            <p className="text-gray-600">
              Implementation timelines vary based on the complexity of your needs. Simple integrations 
              can be ready in a few weeks, while custom solutions may take 2-3 months. We'll provide a 
              detailed timeline during our initial consultation.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">Do you offer trial periods for your AI services?</h3>
            <p className="text-gray-600">
              Yes! We offer 30-day trial periods for most of our standard AI services. During this time, 
              you'll have access to a limited version of our platform and dedicated support to help you 
              evaluate the solution.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">How do you ensure data privacy and security?</h3>
            <p className="text-gray-600">
              We take data security seriously. Our systems are SOC 2 compliant, and we use encryption for 
              data in transit and at rest. We also offer private cloud deployments for organizations with 
              strict data sovereignty requirements.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">What kind of support do you provide?</h3>
            <p className="text-gray-600">
              All our services include technical support via email and chat. Enterprise plans include 
              dedicated account managers, 24/7 phone support, and regular check-ins to ensure your success.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section - Placeholder */}
      <motion.section
        className="bg-white rounded-3xl shadow-md overflow-hidden relative h-80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-blue to-water-blue flex items-center justify-center">
          <p className="text-white text-lg">Interactive map would be displayed here</p>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact