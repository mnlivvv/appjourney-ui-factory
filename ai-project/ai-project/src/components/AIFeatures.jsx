import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import aiTechImage from '../assets/images/ai-tech.jpg'
import dataPointsImg from '../assets/images/data-points.png'

const AIFeatures = () => {
  const [activeTab, setActiveTab] = useState('nlp')

  const features = [
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      icon: '🔤',
      color: 'sage',
      description: 'Our NLP algorithms understand context, sentiment, and intent, enabling natural human-computer interactions.',
      capabilities: [
        'Sentiment analysis and emotion detection',
        'Context-aware conversation',
        'Multi-language support',
        'Text summarization and generation',
        'Voice recognition and speech-to-text'
      ],
      useCases: [
        'Virtual assistants for customer service',
        'Content analysis and moderation',
        'Automated documentation',
        'Language translation services'
      ]
    },
    {
      id: 'vision',
      title: 'Computer Vision',
      icon: '👁️',
      color: 'sky-blue',
      description: 'Our vision systems can identify objects, recognize patterns, and interpret visual information like the human eye.',
      capabilities: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'Scene understanding',
        'Image enhancement and restoration',
        'Video analytics and tracking'
      ],
      useCases: [
        'Medical image analysis',
        'Security and surveillance',
        'Augmented reality applications',
        'Quality control in manufacturing'
      ]
    },
    {
      id: 'analytics',
      title: 'Predictive Analytics',
      icon: '📊',
      color: 'earth',
      description: 'Leverage historical data to forecast trends, identify patterns, and make data-driven decisions.',
      capabilities: [
        'Time series analysis and forecasting',
        'Anomaly detection',
        'Risk assessment',
        'Customer behavior prediction',
        'Resource optimization'
      ],
      useCases: [
        'Financial market predictions',
        'Inventory and supply chain management',
        'Healthcare outcome prediction',
        'Customer lifetime value analysis'
      ]
    },
    {
      id: 'learning',
      title: 'Machine Learning',
      icon: '🧠',
      color: 'leaf-green',
      description: 'Our adaptive algorithms learn from experience, improving performance without explicit programming.',
      capabilities: [
        'Supervised and unsupervised learning',
        'Reinforcement learning',
        'Transfer learning',
        'Automated model selection',
        'Continuous learning and adaptation'
      ],
      useCases: [
        'Recommendation systems',
        'Fraud detection',
        'Process automation',
        'Personalized experiences'
      ]
    }
  ]

  const activeFeature = features.find(f => f.id === activeTab)
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <motion.section 
        className="mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our AI <span className="text-sky-blue">Features</span></h1>
              <p className="text-lg text-gray-600 mb-6">
                Explore our suite of nature-inspired AI technologies designed to transform how you interact with data, 
                language, and visual information. Our solutions combine cutting-edge algorithms with intuitive, 
                organic interfaces.
              </p>
              <p className="text-lg text-gray-600">
                Each of our AI features is built with sustainability, accuracy, and ethical considerations at its core.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              className="relative rounded-3xl overflow-hidden organic-border"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src={aiTechImage} 
                alt="AI Technology" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-blue/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Tabs Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a technology to learn more about its capabilities and applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${
                activeTab === feature.id 
                  ? `bg-${feature.color} text-white` 
                  : `bg-white border border-${feature.color} text-gray-700 hover:bg-${feature.color}/10`
              }`}
              onClick={() => setActiveTab(feature.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{feature.icon}</span>
              <span>{feature.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-md overflow-hidden"
          >
            <div className={`bg-${activeFeature.color} text-white py-6 px-8`}>
              <div className="flex items-center">
                <span className="text-4xl mr-4">{activeFeature.icon}</span>
                <h3 className="text-2xl font-semibold">{activeFeature.title}</h3>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8">{activeFeature.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {activeFeature.capabilities.map((capability, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className={`text-${activeFeature.color} mr-2`}>•</span>
                        <span>{capability}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Use Cases</h4>
                  <ul className="space-y-2">
                    {activeFeature.useCases.map((useCase, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className={`text-${activeFeature.color} mr-2`}>•</span>
                        <span>{useCase}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Integration Section */}
      <motion.section
        className="bg-gradient-to-r from-sky-blue/20 to-sage/20 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -right-20 -bottom-20 opacity-10">
          <motion.img
            src={dataPointsImg}
            alt="Data Points"
            className="w-64 h-64"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Integration</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our AI technologies are designed to work together seamlessly, creating a cohesive ecosystem 
            that can be tailored to your specific needs. Integrate our solutions with your existing systems 
            through our comprehensive API and SDK options.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="text-xl font-semibold mb-2">API-First Architecture</h3>
            <p className="text-gray-600">
              Our RESTful APIs and GraphQL endpoints make it easy to incorporate our AI capabilities 
              into your applications, with detailed documentation and developer support.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-gray-600">
              Need something specific? Our team can develop custom AI solutions tailored to your unique 
              challenges, leveraging our core technologies and expertise.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Contact our team to discuss how our nature-inspired AI technologies can transform your business.
        </p>
        <motion.button
          className="btn btn-primary mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Demo
        </motion.button>
      </motion.section>
    </div>
  )
}

export default AIFeatures