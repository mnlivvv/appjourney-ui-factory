import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import heroImage from './assets/images/hero-image.jpg'
import neuralForest from './assets/images/neural-forest.jpg'
import techNature from './assets/images/tech-nature.jpg'

// Custom hook for scroll animation
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

// Logo component with organic shape
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-forest-500 to-sky-500 flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-full organic-border"></div>
    </div>
    <span className="text-xl font-display font-bold gradient-text">NatureTech AI</span>
  </div>
)

// Navigation component
const Navigation = () => {
  return (
    <nav className="nav-container">
      <Logo />
      
      <div className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-forest-300 transition-colors">Home</Link>
        <Link to="/features" className="hover:text-forest-300 transition-colors">Features</Link>
        <Link to="/about" className="hover:text-forest-300 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-forest-300 transition-colors">Contact</Link>
      </div>

      <button className="px-4 py-2 rounded-full text-sm">
        Try Demo
      </button>
    </nav>
  )
}

// Hero Section
const Hero = () => {
  const scrollY = useScrollAnimation()
  
  return (
    <section className="hero-container">
      <img 
        src={heroImage} 
        alt="AI and Nature" 
        className="hero-bg"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0.4 - scrollY * 0.001, 0)
        }}
      />
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Where AI Meets <span className="gradient-text">Nature</span></h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">Discover the perfect harmony between cutting-edge artificial intelligence and the organic patterns of the natural world.</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 rounded-full text-lg">Get Started</button>
          <button className="px-8 py-3 rounded-full text-lg bg-transparent border border-forest-500 hover:border-sky-500">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  )
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="feature-card"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="feature-icon">{icon}</div>
    <h3 className="text-xl font-display font-semibold mb-3 gradient-text">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

// Features Section
const Features = () => {
  return (
    <section className="py-16 leaf-pattern" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Unique <span className="gradient-text">Features</span>
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Explore how we blend advanced AI capabilities with natural design principles to create a harmonious experience.</p>
        </div>
        
        <div className="features-container">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>}
            title="Organic Learning"
            description="Our AI adapts and grows naturally like living organisms, learning from each interaction to become more intuitive and helpful."
          />
          
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>}
            title="Eco-Friendly Processing"
            description="Our systems are designed for minimal environmental impact, using energy-efficient algorithms and sustainable cloud infrastructure."
          />
          
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>}
            title="Biomimetic Design"
            description="Our interfaces mimic patterns found in nature, creating intuitive, beautiful, and calming user experiences inspired by natural structures."
          />
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="about-container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our <span className="gradient-text">Vision</span></h2>
            <p className="text-lg text-gray-300 mb-4">
              At NatureTech AI, we believe that the most advanced technology should feel as natural and intuitive as the world around us. Our mission is to bridge the gap between cutting-edge artificial intelligence and the organic patterns found in nature.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              By studying and implementing design principles observed in natural systems, we create AI solutions that are not only powerful and efficient but also harmonious and accessible to everyone.
            </p>
            <button className="px-6 py-3 rounded-full">
              Learn Our Story
            </button>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={neuralForest} alt="Neural Network Forest Visualization" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Showcase Section
const Showcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-forest-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            AI & Nature <span className="gradient-text">in Harmony</span>
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience our technology through these interactive demonstrations that showcase the beauty of AI inspired by natural patterns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="glass-effect rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={techNature} alt="Technology and Nature" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-display font-semibold mb-3">Pattern Recognition</h3>
              <p className="text-gray-300 mb-4">
                Our AI can identify and learn from complex patterns found in nature, from leaf structures to river systems, applying these insights to solve real-world problems.
              </p>
              <button className="px-4 py-2 text-sm rounded-full">
                Try Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={heroImage} alt="AI and Nature Blend" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-display font-semibold mb-3">Adaptive Interfaces</h3>
              <p className="text-gray-300 mb-4">
                Experience UI that responds organically to your needs, adapting like a living organism to provide the most intuitive and helpful experience possible.
              </p>
              <button className="px-4 py-2 text-sm rounded-full">
                Explore
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <Logo />
          <p className="mt-4 text-gray-400">
            Bringing harmony between artificial intelligence and the natural world through innovative design and technology.
          </p>
        </div>
        
        <div className="footer-column">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-forest-300 transition-colors">Home</Link></li>
            <li><Link to="/features" className="text-gray-400 hover:text-forest-300 transition-colors">Features</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-forest-300 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-forest-300 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-forest-300 transition-colors">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-forest-300 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="text-gray-400 hover:text-forest-300 transition-colors">Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-forest-300 transition-colors">GitHub</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Stay updated with our latest innovations and news.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-forest-800 border border-forest-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-sky-500"
            />
            <button className="bg-forest-500 text-white px-4 py-2 rounded-r-lg hover:bg-forest-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NatureTech AI. All rights reserved.</p>
      </div>
    </footer>
  )
}

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Showcase />
    </>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Other routes would go here */}
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
