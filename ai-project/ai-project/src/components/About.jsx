import { motion } from 'framer-motion'
import leafIllustration from '../assets/images/leaf-illustration.jpg'

const About = () => {
  const values = [
    {
      title: "Nature-Inspired Innovation",
      description: "We draw inspiration from nature's perfect designs to create AI solutions that are both powerful and harmonious.",
      icon: "🌿"
    },
    {
      title: "Sustainable AI",
      description: "Our algorithms are optimized for energy efficiency, minimizing computational resources while maximizing results.",
      icon: "♻️"
    },
    {
      title: "Human-Centered Design",
      description: "We prioritize intuitive interfaces and seamless experiences that feel natural and organic to users.",
      icon: "👤"
    },
    {
      title: "Ethical Intelligence",
      description: "We develop AI with strong ethical guidelines, ensuring our technology benefits humanity and the environment.",
      icon: "⚖️"
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* About Intro Section */}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About <span className="text-sage">Nature</span>AI</h1>
              <p className="text-lg text-gray-600 mb-6">
                At NatureAI, we believe that the most innovative solutions come from observing the natural world. 
                Our mission is to create artificial intelligence systems that mirror the elegance, efficiency, 
                and sustainability found in nature.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023, our team of researchers, designers, and engineers work together to develop 
                AI solutions that are not only powerful but also respectful of natural principles and ethical boundaries.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to creating technology that enhances human potential while maintaining harmony 
                with our natural environment.
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
                src={leafIllustration} 
                alt="Nature-inspired design" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section 
        className="mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our approach to artificial intelligence and sustainable technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="mr-4 text-3xl">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <motion.section
        className="bg-gradient-to-r from-earth/20 to-sage/20 rounded-3xl p-8 md:p-12 mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Approach to AI</h2>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">Biomimicry in Algorithms</h3>
              <p className="text-gray-600">
                We study natural processes like neural networks in the brain, swarm intelligence in insects, 
                and evolutionary adaptations to create algorithms that are efficient and adaptive.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">Organic User Experience</h3>
              <p className="text-gray-600">
                Our interfaces are designed to feel intuitive and natural, with organic shapes, smooth animations, 
                and responsive feedback that creates a sense of living interaction.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">Sustainable Computing</h3>
              <p className="text-gray-600">
                We optimize our systems for energy efficiency, using lightweight algorithms and cloud resources 
                that scale dynamically based on demand, reducing our carbon footprint.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section - Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A diverse group of researchers, designers, and engineers passionate about the intersection of nature and technology.
          </p>
          
          <div className="bg-soft-white border border-sage/20 rounded-2xl p-8 inline-block">
            <p className="text-gray-600 italic">
              We're currently expanding our team! Visit our contact page to learn about open positions.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default About