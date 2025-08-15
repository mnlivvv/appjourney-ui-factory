import { motion } from 'framer-motion';

const FuturisticButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  glowColor = 'cyan',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  icon = null,
  className = '',
  ...props
}) => {
  // Determine the appropriate color based on variant and glowColor props
  const getColors = () => {
    let baseColor, hoverColor, shadowStyle;
    
    // Determine color based on glowColor
    switch (glowColor) {
      case 'magenta':
        baseColor = 'var(--neon-magenta)';
        shadowStyle = 'var(--glow-magenta)';
        break;
      case 'blue':
        baseColor = 'var(--electric-blue)';
        shadowStyle = 'var(--glow-blue)';
        break;
      case 'cyan':
      default:
        baseColor = 'var(--neon-cyan)';
        shadowStyle = 'var(--glow-cyan)';
        break;
    }
    
    // Adjust based on variant
    switch (variant) {
      case 'outlined':
        return {
          background: 'transparent',
          border: `1px solid ${baseColor}`,
          color: baseColor,
          hoverBackground: `rgba(${baseColor.replace(/[^\d,]/g, '')}, 0.1)`,
          hoverColor: baseColor,
          shadow: 'none',
          hoverShadow: shadowStyle
        };
      case 'text':
        return {
          background: 'transparent',
          border: 'none',
          color: baseColor,
          hoverBackground: 'transparent',
          hoverColor: baseColor,
          shadow: 'none',
          hoverShadow: 'none'
        };
      case 'primary':
      default:
        return {
          background: baseColor,
          border: `1px solid ${baseColor}`,
          color: 'var(--dark-bg)',
          hoverBackground: baseColor,
          hoverColor: 'var(--dark-bg)',
          shadow: shadowStyle,
          hoverShadow: shadowStyle
        };
    }
  };
  
  // Determine size-based styles
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: 'var(--space-xs) var(--space-md)',
          fontSize: '0.8rem'
        };
      case 'large':
        return {
          padding: 'var(--space-md) var(--space-xl)',
          fontSize: '1.1rem'
        };
      case 'medium':
      default:
        return {
          padding: 'var(--space-sm) var(--space-lg)',
          fontSize: '0.9rem'
        };
    }
  };
  
  const colors = getColors();
  const sizeStyles = getSizeStyles();
  
  const buttonVariants = {
    initial: {
      backgroundColor: colors.background,
      color: colors.color,
      border: colors.border,
      boxShadow: disabled ? 'none' : colors.shadow,
    },
    hover: {
      backgroundColor: disabled ? colors.background : colors.hoverBackground,
      color: disabled ? colors.color : colors.hoverColor,
      boxShadow: disabled ? 'none' : colors.hoverShadow,
      scale: disabled ? 1 : 1.02,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: disabled ? 1 : 0.98,
      transition: { duration: 0.1 }
    },
    disabled: {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  };
  
  const glowVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: disabled ? 0 : 0.7,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <motion.button
      type={type}
      onClick={disabled || isLoading ? null : onClick}
      className={`futuristic-button ${variant} ${size} ${className}`}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      disabled={disabled || isLoading}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-xs)',
        ...sizeStyles,
        fontFamily: 'var(--font-primary)',
        fontWeight: 500,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        overflow: 'hidden',
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.6 : 1,
        ...props.style
      }}
      {...props}
    >
      {/* Background glow effect on hover */}
      <motion.div
        className="button-glow"
        variants={glowVariants}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at center, ${colors.color}33 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      {/* Animated border lines for outlined variant */}
      {variant === 'outlined' && (
        <>
          <div 
            className="button-line top"
            style={{
              position: 'absolute',
              top: 0,
              left: '10%',
              width: '80%',
              height: '1px',
              backgroundColor: colors.color,
              opacity: 0.8
            }}
          />
          <div 
            className="button-line bottom"
            style={{
              position: 'absolute',
              bottom: 0,
              left: '10%',
              width: '80%',
              height: '1px',
              backgroundColor: colors.color,
              opacity: 0.8
            }}
          />
        </>
      )}
      
      {/* Loading spinner */}
      {isLoading && (
        <div 
          className="button-spinner"
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            border: `2px solid ${variant === 'primary' ? 'var(--dark-bg)' : colors.color}`,
            borderTopColor: 'transparent',
            animation: 'spin 0.8s linear infinite',
            marginRight: 'var(--space-xs)'
          }}
        />
      )}
      
      {/* Icon */}
      {icon && !isLoading && (
        <span className="button-icon">{icon}</span>
      )}
      
      {/* Button text */}
      <span style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </span>
      
      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.button>
  );
};

export default FuturisticButton;