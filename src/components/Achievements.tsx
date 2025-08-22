import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGame } from '../context/GameContext';
import '../styles/Achievements.css';

const Achievements = () => {
  const { state } = useGame();
  const { achievements } = state;
  const [isOpen, setIsOpen] = useState(false);

  // Count unlocked achievements
  const unlockedCount = achievements.filter(a => a.isUnlocked).length;
  const totalCount = achievements.length;
  
  // Animation for opening/closing the panel
  const panelAnimation = useSpring({
    height: isOpen ? 'auto' : '60px',
    opacity: isOpen ? 1 : 0.7,
    config: { tension: 200, friction: 20 },
  });
  
  // Animation for the arrow icon
  const arrowAnimation = useSpring({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div className="achievements-panel" style={panelAnimation}>
      <div 
        className="achievements-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="achievements-title">Achievements</h3>
        <div className="achievements-stats">
          <span className="achievements-count">{unlockedCount}/{totalCount}</span>
          <animated.span className="toggle-arrow" style={arrowAnimation}>
            ▼
          </animated.span>
        </div>
      </div>
      
      <div className="achievements-content">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id} 
            className={`achievement-item ${achievement.isUnlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-info">
              <h4 className="achievement-title">{achievement.title}</h4>
              <p className="achievement-description">{achievement.description}</p>
            </div>
            <div className="achievement-status">
              {achievement.isUnlocked ? (
                <span className="unlocked-badge">✓</span>
              ) : (
                <span className="locked-badge">🔒</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Achievements;