import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold text-sage flex items-center mb-4">
              <span className="mr-2">🌿</span>
              <span>NatureAI</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Nature-inspired artificial intelligence solutions for the modern world.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage"
                whileHover={{ y: -3, backgroundColor: 'rgb(156, 175, 136)', color: 'white' }}
                transition={{ duration: 0.2 }}
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage"
                whileHover={{ y: -3, backgroundColor: 'rgb(156, 175, 136)', color: 'white' }}
                transition={{ duration: 0.2 }}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage"
                whileHover={{ y: -3, backgroundColor: 'rgb(156, 175, 136)', color: 'white' }}
                transition={{ duration: 0.2 }}
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-sage transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-sage transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-sage transition-colors duration-300">AI Features</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-sage transition-colors duration-300">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage transition-colors duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sage transition-colors duration-300">Natural Language Processing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage transition-colors duration-300">Computer Vision</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage transition-colors duration-300">Predictive Analytics</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage transition-colors duration-300">Machine Learning</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage transition-colors duration-300">AI Integration Services</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest news and product releases.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 w-full"
                />
                <motion.button 
                  type="submit" 
                  className="bg-sage text-white px-4 py-2 rounded-r-xl"
                  whileHover={{ backgroundColor: 'rgb(140, 160, 120)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </motion.button>
              </div>
            </form>
            <p className="text-sm text-gray-500">
              By subscribing, you agree to our privacy policy and consent to receive updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} NatureAI. All rights reserved. Designed with 🌿 and 🤖.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer