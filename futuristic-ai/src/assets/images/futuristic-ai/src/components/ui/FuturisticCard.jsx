import { motion } from 'framer-motion';

const FuturisticCard = ({ title, description, icon, glowColor = 'cyan', children }) => {
  // Determine the appropriate glow based on the color prop
  const getGlowStyle = () => {
    switch (glowColor) {
      case 'magenta':
        return 'var(--glow-magenta)';
      case 'blue':
        return 'var(--glow-blue)';
      case 'cyan':
      default:
        return 'var(--glow-cyan)';
    }
  };

  const getTextColor = () => {
    switch (glowColor) {
      case 'magenta':
        return 'var(--neon-magenta)';
      case 'blue':
        return 'var(--electric-blue)';
      case 'cyan':
      default:
        return 'var(--neon-cyan)';
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: getGlowStyle(),
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.2,
        duration: 0.4
      }
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="futuristic-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundColor: 'rgba(9, 20, 40, 0.7)',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${getTextColor()}`,
        padding: 'var(--space-lg)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Glowing Corner Lines */}
      <div
        className="card-corner top-left"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          borderTop: `2px solid ${getTextColor()}`,
          borderLeft: `2px solid ${getTextColor()}`,
        }}
      />
      <div
        className="card-corner top-right"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '20px',
          height: '20px',
          borderTop: `2px solid ${getTextColor()}`,
          borderRight: `2px solid ${getTextColor()}`,
        }}
      />
      <div
        className="card-corner bottom-left"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '20px',
          height: '20px',
          borderBottom: `2px solid ${getTextColor()}`,
          borderLeft: `2px solid ${getTextColor()}`,
        }}
      />
      <div
        className="card-corner bottom-right"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '20px',
          height: '20px',
          borderBottom: `2px solid ${getTextColor()}`,
          borderRight: `2px solid ${getTextColor()}`,
        }}
      />

      {/* Scanline Animation */}
      <div
        className="scanline"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${getTextColor()}, transparent)`,
          animation: 'scanline 4s linear infinite',
          opacity: 0.7
        }}
      />

      {/* Card Content */}
      <div className="card-header" style={{ marginBottom: 'var(--space-md)' }}>
        {icon && (
          <motion.div
            className="card-icon"
            variants={iconVariants}
            style={{ 
              color: getTextColor(), 
              fontSize: '2rem',
              marginBottom: 'var(--space-sm)'
            }}
          >
            {icon}
          </motion.div>
        )}
        <h3 style={{ 
          color: getTextColor(),
          fontFamily: 'var(--font-primary)',
          marginBottom: 'var(--space-sm)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {title}
        </h3>
        {description && (
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            {description}
          </p>
        )}
      </div>

      <div className="card-content" style={{ flex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCard;