import { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { useGame } from '../context/GameContext';
import '../styles/LevelUpModal.css';

const LevelUpModal = () => {
  const { state, dispatch } = useGame();
  const { character, showLevelUpAnimation } = state;
  
  // Fade in/out animation
  const fadeAnimation = useSpring({
    opacity: showLevelUpAnimation ? 1 : 0,
    transform: showLevelUpAnimation 
      ? 'translateY(0) scale(1)' 
      : 'translateY(-50px) scale(0.9)',
    config: { tension: 200, friction: 20 },
  });
  
  // Particle animations for celebratory effects
  const particleProps = useSpring({
    from: { transform: 'translateY(0px)', opacity: 0.8 },
    to: { transform: 'translateY(-100px)', opacity: 0 },
    config: { tension: 100, friction: 10 },
    loop: true,
    reset: true,
    pause: !showLevelUpAnimation,
  });
  
  // Auto-close the modal after 5 seconds
  useEffect(() => {
    if (showLevelUpAnimation) {
      const timer = setTimeout(() => {
        dispatch({ type: 'HIDE_LEVEL_UP_ANIMATION' });
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showLevelUpAnimation, dispatch]);

  if (!showLevelUpAnimation) return null;

  return (
    <div className="level-up-overlay">
      <animated.div className="level-up-modal" style={fadeAnimation}>
        <h2 className="level-up-title">Level Up!</h2>
        <div className="level-badge">
          <span className="level-number">{character.level}</span>
        </div>
        <p className="level-up-message">
          Congratulations, brave adventurer! You've reached level {character.level}!
        </p>
        <button 
          className="close-modal-btn"
          onClick={() => dispatch({ type: 'HIDE_LEVEL_UP_ANIMATION' })}
        >
          Continue Quest
        </button>
        
        {/* Celebratory particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <animated.div 
              key={i}
              className="particle"
              style={{
                ...particleProps,
                left: `${5 + i * 5}%`,
                animationDelay: `${i * 0.1}s`,
                backgroundColor: i % 3 === 0 ? '#ff9800' : i % 3 === 1 ? '#4caf50' : '#6e41d4',
              }}
            />
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default LevelUpModal;