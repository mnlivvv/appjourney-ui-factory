import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const FeatureCard = ({ 
  title, 
  description, 
  image, 
  alt = '',
  linkText = 'Learn More',
  linkTo = '#',
  reversed = false,
  delay = 0
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 lg:gap-16 items-center py-8 md:py-16`}>
      {/* Image Section */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.7, 
            delay: delay,
            ease: "easeOut" 
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={`overflow-hidden ${reversed ? 'rounded-blob' : 'rounded-leaf'} shadow-lg`}>
          <img 
            src={image} 
            alt={alt || title} 
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>
      
      {/* Content Section */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: delay + 0.2,
            ease: "easeOut" 
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-nature-green-dark">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <AnimatedButton 
          to={linkTo} 
          variant={reversed ? 'tech' : 'primary'}
          animate={false}
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          }
        >
          {linkText}
        </AnimatedButton>
      </motion.div>
    </div>
  );
};

export default FeatureCard;