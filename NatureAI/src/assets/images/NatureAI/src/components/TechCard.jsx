import { motion } from 'framer-motion';

const TechCard = ({ 
  icon, 
  title, 
  description, 
  className = '', 
  delay = 0,
  animate = true
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      className={`tech-card relative overflow-hidden ${className}`}
      variants={animate ? cardVariants : {}}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "visible" : false}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(100, 120, 255, 0.3)",
        y: -5,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 17 
        }
      }}
    >
      {/* Tech-inspired accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nature-tech-dark to-nature-tech-accent"></div>
      
      <div className="flex flex-col">
        {icon && (
          <div className="w-12 h-12 rounded-md bg-nature-tech-light/10 flex items-center justify-center text-nature-tech-dark mb-4">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-xl font-display font-semibold text-nature-tech-dark mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
      
      {/* Subtle tech pattern in corner */}
      <div className="absolute -bottom-6 -right-6 w-16 h-16 opacity-5">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#6478FF" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="#6478FF" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" stroke="#6478FF" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" stroke="#6478FF" strokeWidth="2" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#6478FF" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#6478FF" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
};

export default TechCard;