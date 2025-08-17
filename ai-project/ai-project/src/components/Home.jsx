import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FeatureCard from './FeatureCard'
import organicShapesImg from '../assets/images/organic-shapes.png'
import dataPointsImg from '../assets/images/data-points.png'

const Home = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced AI that understands and responds to natural human language with remarkable accuracy.",
      icon: "🔤",
      color: "sage"
    },
    {
      title: "Computer Vision",
      description: "AI systems that can interpret and understand the visual world around us.",
      icon: "👁️",
      color: "sky-blue"
    },
    {
      title: "Predictive Analytics",
      description: "Harness the power of data to predict future trends and make informed decisions.",
      icon: "📊",
      color: "earth"
    },
    {
      title: "Machine Learning",
      description: "Systems that learn and improve from experience without being explicitly programmed.",
      icon: "🧠",
      color: "leaf-green"
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
              <span className="text-sage">Natural</span> Intelligence <br />Meets <span className="text-sky-blue">Artificial</span> Intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Explore our nature-inspired AI solutions that combine the beauty of organic design with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/features" className="btn btn-primary">
                Explore Features
              </Link>
              <Link to="/about" className="btn bg-white border border-sage text-sage hover:bg-sage/10">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            >
              <img 
                src={dataPointsImg} 
                alt="AI Technology" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10"
              animate={{ 
                rotate: [0, 360],
                scale: [0.8, 0.85, 0.8]
              }}
              transition={{ 
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              <img 
                src={organicShapesImg} 
                alt="Organic Shapes" 
                className="w-full h-auto max-w-lg mx-auto opacity-30"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our nature-inspired AI technology can transform your digital experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-sage/20 to-sky-blue/20 rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Natural AI?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us at the intersection of nature and technology, where innovative solutions meet organic design.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get Started Today
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default Home