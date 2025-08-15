import { motion } from 'framer-motion';

const OrganicCard = ({ 
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
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }
    }
  };

  return (
    <motion.div 
      className={`organic-card ${className}`}
      variants={animate ? cardVariants : {}}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "visible" : false}
      whileHover={animate ? "hover" : false}
      viewport={{ once: true, margin: "-50px" }}
      variants={hoverVariants}
      whileHover="hover"
    >
      <div className="flex flex-col">
        {icon && (
          <div className="w-12 h-12 rounded-blob bg-nature-green-light/20 flex items-center justify-center text-nature-green-dark mb-4">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-xl font-display font-semibold text-nature-green-dark mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default OrganicCard;