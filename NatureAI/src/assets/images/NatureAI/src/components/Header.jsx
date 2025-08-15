import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isScrolled = scrollY > 50;

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 overflow-hidden">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10C28.5 10 14.5 23.5 10 45C10 65 25 85 50 90C75 85 90 65 90 45C85.5 23.5 71.5 10 50 10Z" fill="#6fb873"/>
                <path d="M50 20C35.5 20 25.5 30 22.5 45C22.5 60 35 75 50 77.5C65 75 77.5 60 77.5 45C74.5 30 64.5 20 50 20Z" fill="#a3d9a5"/>
                <path d="M50 90V10M10 45H90M30 20C30 20 35 40 50 45C65 50 70 70 70 70M70 20C70 20 65 40 50 45C35 50 30 70 30 70" stroke="#4a9b4f" strokeWidth="2"/>
                <circle cx="50" cy="45" r="5" fill="#3c4fd9"/>
              </svg>
            </div>
            <span className={`text-xl font-display font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-nature-green-dark' : 'text-white'
            }`}>
              NatureAI
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/about', '/features', '/contact'].map((path, index) => {
              const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2);
              const isActive = location.pathname === path;
              
              return (
                <Link 
                  key={path} 
                  to={path}
                  className={`relative font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? (isActive ? 'text-nature-tech-dark' : 'text-gray-700 hover:text-nature-tech') 
                      : (isActive ? 'text-nature-tech-accent' : 'text-white hover:text-nature-tech-light')
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current"
                      layoutId="nav-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
            <motion.button 
              className="btn btn-tech"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Demo
            </motion.button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="block md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-5 flex flex-col justify-between relative transition-all duration-300 ${isMenuOpen ? 'transform rotate-180' : ''}`}>
              <span className={`w-full h-0.5 bg-current block transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMenuOpen ? 'absolute top-1/2 -translate-y-1/2 rotate-45' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current block transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current block transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMenuOpen ? 'absolute top-1/2 -translate-y-1/2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden`}
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {['/', '/about', '/features', '/contact'].map((path) => {
              const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2);
              const isActive = location.pathname === path;
              
              return (
                <Link 
                  key={path} 
                  to={path}
                  className={`py-2 px-4 rounded-md transition-colors duration-300 ${
                    isActive 
                      ? 'bg-nature-green-light/20 text-nature-green-dark font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <motion.button 
              className="btn btn-tech w-full mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Demo
            </motion.button>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;