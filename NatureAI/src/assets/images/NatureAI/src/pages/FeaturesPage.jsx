import { motion } from 'framer-motion';
import { useState } from 'react';
import OrganicCard from '../components/OrganicCard';
import AnimatedButton from '../components/AnimatedButton';

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('adaptive');
  
  // Feature categories
  const featureCategories = [
    {
      id: 'adaptive',
      name: 'Adaptive Learning',
      description: 'Our biomimetic neural networks learn and evolve like natural organisms',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'sustainable',
      name: 'Sustainable Computing',
      description: 'Energy-efficient processes modeled after natural resource management',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'resilient',
      name: 'Resilient Systems',
      description: 'Self-healing components that adapt to challenges like living organisms',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 'collaborative',
      name: 'Collaborative Intelligence',
      description: 'Swarm-inspired algorithms that enable collective problem-solving',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];
  
  // Feature details for each category
  const featuresData = {
    adaptive: [
      {
        title: 'Neural Plasticity',
        description: 'Dynamic network restructuring that evolves with each new data input, mimicking brain plasticity for continuous improvement.',
        image: '/src/assets/images/tech-network-blue.jpg'
      },
      {
        title: 'Pattern Recognition',
        description: 'Advanced recognition systems inspired by how animals identify complex patterns in nature, achieving up to 40% better accuracy in noisy environments.',
        image: '/src/assets/images/leaf-veins.jpg'
      },
      {
        title: 'Contextual Understanding',
        description: 'Models that adapt their interpretations based on context, similar to how natural language evolved to be context-dependent.',
        image: '/src/assets/images/tech-network-green.jpg'
      },
      {
        title: 'Multi-modal Learning',
        description: 'Integration of diverse input formats, inspired by how human senses work together to form a unified understanding of the world.',
        image: '/src/assets/images/green-leaves.jpg'
      }
    ],
    sustainable: [
      {
        title: 'Energy Optimization',
        description: 'Dynamic allocation of computational resources based on task priority, reducing energy consumption by up to 60% compared to traditional models.',
        image: '/src/assets/images/green-leaves.jpg'
      },
      {
        title: 'Cyclical Processing',
        description: 'Information processing cycles that follow natural rhythms, allowing for rest periods that optimize long-term performance.',
        image: '/src/assets/images/tech-network-green.jpg'
      },
      {
        title: 'Resource Scaling',
        description: 'Automatic scaling of resources based on actual needs, similar to how plants regulate resource consumption based on available sunlight.',
        image: '/src/assets/images/leaf-veins.jpg'
      },
      {
        title: 'Passive Cooling Architecture',
        description: 'Computational models designed to minimize heat generation, inspired by how desert animals regulate their body temperature.',
        image: '/src/assets/images/tech-network-blue.jpg'
      }
    ],
    resilient: [
      {
        title: 'Self-Healing Code',
        description: 'Systems that can identify and repair their own bugs and inefficiencies, inspired by cellular repair mechanisms.',
        image: '/src/assets/images/tech-network-green.jpg'
      },
      {
        title: 'Fault Tolerance',
        description: 'Distributed processing that maintains functionality even when components fail, mimicking how natural ecosystems adapt to losing species.',
        image: '/src/assets/images/leaf-veins.jpg'
      },
      {
        title: 'Adaptive Security',
        description: 'Security protocols that evolve in response to threats, based on how immune systems develop new defenses against pathogens.',
        image: '/src/assets/images/tech-network-blue.jpg'
      },
      {
        title: 'Environmental Adaptation',
        description: 'Systems that adjust their operation based on external conditions like server load, network connectivity, or data quality.',
        image: '/src/assets/images/green-leaves.jpg'
      }
    ],
    collaborative: [
      {
        title: 'Swarm Intelligence',
        description: 'Distributed problem-solving techniques based on how ant colonies and bee hives efficiently solve complex logistics problems.',
        image: '/src/assets/images/leaf-veins.jpg'
      },
      {
        title: 'Consensus Algorithms',
        description: 'Decision-making processes that incorporate diverse inputs, inspired by how animal groups navigate and make collective decisions.',
        image: '/src/assets/images/tech-network-blue.jpg'
      },
      {
        title: 'Information Sharing',
        description: 'Optimized knowledge transfer between AI agents, modeled after how social animals teach skills to others in their group.',
        image: '/src/assets/images/green-leaves.jpg'
      },
      {
        title: 'Emergent Behaviors',
        description: 'Systems that develop unexpected beneficial behaviors through agent interaction, similar to how complex natural systems evolve.',
        image: '/src/assets/images/tech-network-green.jpg'
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-nature-green-light/30 via-white to-nature-tech-light/20 overflow-hidden">
        {/* Tech pattern background */}
        <div className="absolute inset-0 opacity-5 z-0">
          <img 
            src="/src/assets/images/tech-network-blue.jpg" 
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
              Our Features
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Discover how our nature-inspired technology creates AI systems that are more adaptive, efficient, and sustainable than traditional approaches.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Feature Categories Tabs */}
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
              Our platform offers a range of unique features inspired by nature's most efficient systems.
            </p>
          </motion.div>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {featureCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id 
                    ? 'bg-nature-green text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-nature-green-light'
                }`}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={activeTab === category.id ? 'text-white' : 'text-nature-green'}>{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
          
          {/* Active category description */}
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl text-gray-700">
              {featureCategories.find(c => c.id === activeTab)?.description}
            </p>
          </motion.div>
          
          {/* Feature cards for active category */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            key={`grid-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {featuresData[activeTab].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden rounded-t-md mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-nature-green-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Technical Specifications</h2>
            <p className="text-gray-600 text-lg">
              A closer look at the technology powering our nature-inspired AI platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Processing Architecture',
                specs: [
                  'Biomimetic neural pathways with dynamic node allocation',
                  'Multi-dimensional weight distribution inspired by synaptic plasticity',
                  'Parallel processing units modeled after insect compound eyes',
                  'Heterogeneous computing with specialized task engines'
                ]
              },
              {
                title: 'Learning Framework',
                specs: [
                  'Generational knowledge transfer with 93% retention rate',
                  'Unsupervised pattern discovery based on fungal network models',
                  'Adaptive learning rates that follow circadian-inspired cycles',
                  'Contextual memory allocation with priority-based retrieval'
                ]
              },
              {
                title: 'Energy Management',
                specs: [
                  '40-60% reduced energy consumption compared to traditional models',
                  'Dynamic resource allocation based on task importance and urgency',
                  'Sleep-inspired processing cycles for optimization and maintenance',
                  'Passive cooling architecture requiring minimal external regulation'
                ]
              },
              {
                title: 'Deployment Options',
                specs: [
                  'Cloud-native implementation with distributed processing',
                  'Edge deployment for resource-constrained environments',
                  'Hybrid models with centralized learning and distributed execution',
                  'API access with customizable integration options'
                ]
              }
            ].map((section, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-md shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-200">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-nature-green-dark mr-2">•</span>
                      <span className="text-gray-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Use Cases</h2>
            <p className="text-gray-600 text-lg">
              Explore how organizations are applying our nature-inspired AI to solve complex problems.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Environmental Modeling',
                description: 'Our swarm intelligence algorithms help climate scientists model complex interactions between atmosphere, oceans, and land masses with 35% greater accuracy than traditional models.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Healthcare Diagnostics',
                description: 'Medical researchers use our adaptive learning networks to identify patterns in medical imaging data, helping detect early signs of disease with improved sensitivity.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: 'Supply Chain Optimization',
                description: 'Logistics companies implement our resilient systems approach to create supply chains that can automatically adapt to disruptions, reducing downtime by 47%.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              },
              {
                title: 'Smart Energy Management',
                description: 'Utilities harness our sustainable computing models to balance energy grids with renewable sources, improving efficiency while reducing carbon emissions.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Financial Risk Analysis',
                description: 'Banks utilize our swarm intelligence to identify emerging risk patterns across global markets, providing earlier warning signals than conventional methods.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: 'Urban Planning',
                description: 'City planners apply our collaborative intelligence tools to model traffic flows, public transportation, and resource distribution for more sustainable urban development.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              }
            ].map((useCase, index) => (
              <OrganicCard 
                key={index}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                delay={0.1 * index}
              />
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
              Ready to Harness the Power of Nature?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get in touch to discuss how our nature-inspired AI can transform your organization's approach to complex challenges.
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
                href="https://docs.natureai.example.com" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                animate={false}
              >
                Read Documentation
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;