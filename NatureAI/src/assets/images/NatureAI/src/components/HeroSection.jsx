import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nature-green-light/30 via-transparent to-nature-tech-light/20 z-0"></div>
      
      {/* Organic background pattern */}
      <div className="absolute inset-0 opacity-10 bg-repeat z-0">
        <img 
          src="/src/assets/images/leaf-veins.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Tech-inspired overlapping circles - decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 opacity-20 z-0"
        animate={{ 
          rotate: 360,
          transition: { duration: 200, repeat: Infinity, ease: "linear" }
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#6fb873" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#6fb873" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#6fb873" strokeWidth="0.5" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 opacity-20 z-0"
        animate={{ 
          rotate: -360,
          transition: { duration: 250, repeat: Infinity, ease: "linear" }
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#3c4fd9" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#3c4fd9" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#3c4fd9" strokeWidth="0.5" />
        </svg>
      </motion.div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-800">
                Where <span className="gradient-text">Nature</span> Meets <span className="gradient-text">Technology</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Harnessing organic patterns from nature to create more intuitive, adaptive, and sustainable AI solutions for tomorrow's challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton 
                  to="/features" 
                  variant="primary" 
                  size="lg"
                  delay={0.4}
                >
                  Discover Features
                </AnimatedButton>
                
                <AnimatedButton 
                  to="/about" 
                  variant="outline-tech" 
                  size="lg"
                  delay={0.6}
                >
                  Our Approach
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Main image with organic shape */}
            <div className="relative z-10">
              <div className="rounded-blob overflow-hidden shadow-xl">
                <img 
                  src="/src/assets/images/tech-network-green.jpg" 
                  alt="AI network visualization with organic patterns" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Floating accent elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-nature-green-light/30 backdrop-blur-sm z-0"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute -bottom-8 -left-8 w-20 h-20 rounded-leaf bg-nature-tech-dark/20 backdrop-blur-sm z-0"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;