import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Emily Chen',
      role: 'Founder & Chief Scientist',
      bio: 'PhD in Computational Biology with 15 years of experience in biomimetic systems and neural networks. Previously led research at MIT's Biomimetic Systems Lab.',
      image: 'https://images.unsplash.com/photo-1581582786106-123a69438884?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO',
      bio: 'Former AI Architect at Google DeepMind with expertise in natural computing paradigms. Holds 7 patents in energy-efficient neural processing.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sophia Rodríguez',
      role: 'VP of Engineering',
      bio: 'Specialized in translating biological systems into computational models. Led development of self-organizing networks at Stanford's AI Lab.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Park',
      role: 'Head of Research',
      bio: 'Published author on sustainable AI with background in ecological systems modeling. Pioneer in applying forest ecosystem dynamics to distributed computing.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];
  
  // Timeline data
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'NatureAI founded with a mission to create more sustainable and adaptive AI systems inspired by natural processes.'
    },
    {
      year: '2019',
      title: 'First Research Grant',
      description: 'Secured $2.5M research grant to develop biomimetic neural architecture based on plant communication networks.'
    },
    {
      year: '2020',
      title: 'Core Algorithm Development',
      description: 'Breakthrough in our adaptive learning networks, achieving 40% energy reduction while improving performance metrics.'
    },
    {
      year: '2021',
      title: 'Beta Launch',
      description: 'Released our first beta API to select partners, demonstrating superior results in complex environmental modeling tasks.'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $18M in Series A funding to expand our team and accelerate development of our quantum-inspired processing system.'
    },
    {
      year: '2023',
      title: 'Product Launch',
      description: 'Official launch of NatureAI platform, with early adoption by sustainability-focused organizations and research institutions.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-nature-green-light/30 via-white to-nature-tech-light/20 overflow-hidden">
        {/* Background organic pattern */}
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
              Our Story
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              At NatureAI, we believe the most elegant solutions to complex problems already exist in the natural world. Our mission is to translate these natural patterns into AI systems that are more efficient, adaptive, and sustainable.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Our Philosophy</h2>
              <p className="text-gray-600 mb-6">
                Nature has spent billions of years evolving elegant solutions to complex problems. From the way neural pathways form in the brain to how forest ecosystems distribute resources, natural systems demonstrate incredible efficiency and adaptability.
              </p>
              <p className="text-gray-600 mb-6">
                We believe these natural patterns hold the key to creating AI systems that are not only more powerful but also more sustainable and harmonious with our world. By studying and implementing nature's blueprints, we're building technology that works with rather than against natural principles.
              </p>
              <p className="text-gray-600">
                Our interdisciplinary team brings together experts in AI, biology, ecology, and quantum physics to translate nature's wisdom into computational intelligence that can help solve humanity's most pressing challenges.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-blob overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/images/green-leaves.jpg" 
                  alt="Green leaves representing natural patterns" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-nature-green-light/30 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-leaf bg-nature-tech-light/20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              From a research project to a pioneering AI company, explore the key milestones that have shaped NatureAI.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-nature-green-light/50 transform md:translate-x-px"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/2 p-6"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-nature-green border-4 border-white transform -translate-x-1/2 shadow-md"></div>
                  
                  <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-md p-6 shadow-md">
                      <div className="inline-block px-3 py-1 rounded-full bg-nature-green-light/20 text-nature-green-dark text-sm font-medium mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the interdisciplinary experts combining biology, ecology, and computer science to revolutionize AI.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-md overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-nature-green-dark font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-600 text-lg">
              The core principles that guide our work and shape our approach to technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainability',
                description: 'We design AI systems that minimize resource consumption and environmental impact, inspired by nature's efficiency.',
                icon: (
                  <svg className="w-12 h-12 text-nature-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Adaptability',
                description: 'Like living organisms, our systems continuously learn and adapt to changing environments and requirements.',
                icon: (
                  <svg className="w-12 h-12 text-nature-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              },
              {
                title: 'Harmony',
                description: 'We believe technology should work in harmony with natural systems rather than against them.',
                icon: (
                  <svg className="w-12 h-12 text-nature-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-md shadow-md flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
              Join Our Growing Team
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're always looking for passionate individuals who share our vision of nature-inspired technology. Explore current opportunities to make an impact.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedButton 
                to="/careers" 
                variant="primary" 
                size="lg"
                className="bg-white text-nature-green-dark hover:bg-gray-100"
                animate={false}
              >
                View Open Positions
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;