import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import OrganicCard from '../components/OrganicCard';
import TechCard from '../components/TechCard';
import FeatureCard from '../components/FeatureCard';
import AnimatedButton from '../components/AnimatedButton';

const HomePage = () => {
  // Sample card data
  const organicFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Biomimetic Security',
      description: 'Adaptive security protocols inspired by nature's defense mechanisms, evolving to respond to threats like an immune system.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Energy Efficiency',
      description: 'Optimized energy consumption based on natural resource management principles, using up to 40% less power than traditional systems.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Self-Healing Systems',
      description: 'AI components that can detect, diagnose, and repair themselves, mimicking the regenerative properties found in living organisms.'
    }
  ];
  
  const techFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Neural Flexibility',
      description: 'Advanced neural network architecture that adapts its structure dynamically like brain plasticity, optimizing for each specific task.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Quantum-Inspired Processing',
      description: 'Algorithm design inspired by quantum principles found in natural systems, providing exponential efficiency gains for complex problems.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Organic Cloud Integration',
      description: 'Distributed computing models that mimic collective natural systems, balancing loads and resources like weather patterns.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Nature-Inspired Innovation</h2>
            <p className="text-gray-600 text-lg">
              Our approach combines biological principles with cutting-edge technology, creating AI systems that are more resilient, efficient, and adaptive.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organicFeatures.map((feature, index) => (
              <OrganicCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.2 * index}
              />
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <TechCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.2 * index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Core Capabilities</h2>
            <p className="text-gray-600 text-lg">
              Discover how our nature-tech fusion creates powerful AI solutions that adapt, learn, and evolve like living systems.
            </p>
          </motion.div>
          
          <FeatureCard 
            title="Adaptive Learning Networks"
            description="Our neural networks mimic the adaptive learning patterns found in nature, allowing systems to evolve and improve with minimal human intervention. By studying how plants optimize for sunlight and how animals learn from their environments, we've created AI that grows smarter organically."
            image="/src/assets/images/green-leaves.jpg"
            alt="Green leaves pattern representing adaptive neural networks"
            linkText="Explore Adaptive Learning"
            linkTo="/features"
          />
          
          <FeatureCard 
            title="Quantum-Inspired Processing"
            description="Taking cues from quantum phenomena observed in photosynthesis and bird migration, our processing architecture achieves breakthrough efficiency. This approach allows for multi-dimensional problem solving that traditional linear computing cannot match, all while using a fraction of the energy."
            image="/src/assets/images/tech-network-blue.jpg"
            alt="Technical neural network visualization representing quantum-inspired processing"
            linkText="Discover Quantum Innovations"
            linkTo="/features"
            reversed={true}
            delay={0.2}
          />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-nature-green-dark to-nature-tech-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Experience the Future of AI?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join organizations already using NatureAI to create more sustainable, adaptive, and intelligent systems inspired by the natural world.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedButton 
                to="/contact" 
                variant="primary" 
                size="lg"
                className="bg-white text-nature-green-dark hover:bg-gray-100"
                animate={false}
              >
                Schedule a Demo
              </AnimatedButton>
              
              <AnimatedButton 
                to="/features" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                animate={false}
              >
                Learn More
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;