import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, icon, color }) => {
  const colorClasses = {
    sage: 'bg-sage text-white',
    'sky-blue': 'bg-sky-blue text-white',
    earth: 'bg-earth text-white',
    'leaf-green': 'bg-leaf-green text-white',
    'water-blue': 'bg-water-blue text-white',
  }
  
  const iconBgClass = colorClasses[color] || 'bg-sage text-white'
  
  return (
    <motion.div 
      className="card h-full flex flex-col"
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-4">
        <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center text-xl`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  )
}

export default FeatureCard