import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({
  value = 0,
  max = 100,
  label,
  showPercentage = true,
  height = '8px',
  animated = true,
  glowColor = 'cyan',
  striped = false,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress when value changes
    if (animated) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animated]);

  // Calculate percentage
  const percentage = Math.min(Math.max((progress / max) * 100, 0), 100);

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

  const getBarColor = () => {
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

  return (
    <div className="progress-container" style={{ marginBottom: 'var(--space-md)' }}>
      {/* Label and percentage display */}
      {(label || showPercentage) && (
        <div
          className="progress-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {label && (
            <span
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {label}
            </span>
          )}
          {showPercentage && (
            <span
              style={{
                color: getTextColor(),
                fontSize: '0.8rem',
                fontFamily: 'var(--font-primary)',
                fontWeight: 'bold',
              }}
            >
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress bar track */}
      <div
        className="progress-track"
        style={{
          height: height,
          backgroundColor: 'rgba(5, 10, 20, 0.5)',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(10, 35, 66, 0.8)',
        }}
      >
        {/* Progress bar fill */}
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 0.8 : 0, ease: 'easeOut' }}
          style={{
            height: '100%',
            backgroundColor: getBarColor(),
            borderRadius: 'var(--radius-sm)',
            boxShadow: getGlowStyle(),
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Striped effect */}
          {striped && (
            <div
              className="progress-stripes"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `linear-gradient(
                  45deg,
                  rgba(255, 255, 255, 0.15) 25%,
                  transparent 25%,
                  transparent 50%,
                  rgba(255, 255, 255, 0.15) 50%,
                  rgba(255, 255, 255, 0.15) 75%,
                  transparent 75%,
                  transparent
                )`,
                backgroundSize: '20px 20px',
                animation: 'progressStripes 1s linear infinite',
              }}
            />
          )}

          {/* Pulse effect */}
          <div
            className="progress-pulse"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '10px',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              filter: 'blur(3px)',
              animation: 'progressPulse 1.5s ease-in-out infinite',
            }}
          />
        </motion.div>

        {/* Progress dots */}
        <div
          className="progress-dots"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 4px',
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="progress-dot"
              style={{
                width: '2px',
                height: '2px',
                backgroundColor:
                  percentage >= ((index + 1) / 5) * 100
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
              }}
            />
          ))}
        </div>
      </div>

      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        @keyframes progressStripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 0;
          }
        }

        @keyframes progressPulse {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;