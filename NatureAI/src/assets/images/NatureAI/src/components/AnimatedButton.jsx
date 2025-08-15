import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedButton = ({ 
  children, 
  to, 
  href, 
  onClick,
  className = '', 
  variant = 'primary',
  size = 'md',
  animate = true,
  icon = null,
  iconPosition = 'right',
  delay = 0
}) => {
  // Define size classes
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };
  
  // Define variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tech: 'btn-tech',
    outline: 'border-2 border-nature-green text-nature-green-dark hover:bg-nature-green-light/20',
    'outline-tech': 'border-2 border-nature-tech text-nature-tech-dark hover:bg-nature-tech-light/20',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800'
  };
  
  // Animation variants
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        delay,
        ease: "easeOut" 
      }
    }
  };
  
  // Motion props
  const motionProps = {
    whileHover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    whileTap: { scale: 0.98 },
    ...(animate ? {
      variants: buttonVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true }
    } : {})
  };
  
  // Base button classes
  const baseClasses = `
    btn
    ${sizeClasses[size]} 
    ${variantClasses[variant]}
    ${className}
    ${icon ? 'flex items-center gap-2' : ''}
  `;
  
  // Render icon
  const renderIcon = () => {
    if (!icon) return null;
    return <span className={`${iconPosition === 'left' ? 'order-first' : 'order-last'}`}>{icon}</span>;
  };

  // Determine which element to render
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={baseClasses}>
          {renderIcon()}
          {children}
          {iconPosition === 'right' && renderIcon()}
        </Link>
      </motion.div>
    );
  } else if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
          {iconPosition === 'left' && renderIcon()}
          {children}
          {iconPosition === 'right' && renderIcon()}
        </a>
      </motion.div>
    );
  } else {
    return (
      <motion.button 
        onClick={onClick} 
        className={baseClasses}
        {...motionProps}
      >
        {iconPosition === 'left' && renderIcon()}
        {children}
        {iconPosition === 'right' && renderIcon()}
      </motion.button>
    );
  }
};

export default AnimatedButton;