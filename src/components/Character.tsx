import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGame } from '../context/GameContext';
import { playSound } from '../utils/sound';
import knightImage from '../assets/images/knight.jpg';
import '../styles/Character.css';

const Character = () => {
  const { state } = useGame();
  const { character, settings } = state;
  const [spritePosition, setSpritePosition] = useState(0);

  // Animation for character bouncing
  const bounce = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-10px)' },
    config: { tension: 300, friction: 10 },
    loop: { reverse: true },
    pause: character.avatarState !== 'idle' || !settings.animationsEnabled,
  });

  // Animation for level up
  const levelUp = useSpring({
    from: { transform: 'scale(1)', opacity: 1 },
    to: { transform: 'scale(1.5)', opacity: 0 },
    config: { tension: 200, friction: 20 },
    loop: { reset: true },
    pause: character.avatarState !== 'levelUp' || !settings.animationsEnabled,
  });

  // Animation for attack
  const attack = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(20deg)' },
    config: { tension: 300, friction: 10 },
    loop: { reverse: true },
    pause: character.avatarState !== 'attack' || !settings.animationsEnabled,
  });

  // Animation for victory
  const victory = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-20px)' },
    config: { tension: 300, friction: 10 },
    loop: { reset: true },
    pause: character.avatarState !== 'victory' || !settings.animationsEnabled,
  });

  // Handle level up sound
  useEffect(() => {
    if (character.avatarState === 'levelUp') {
      playSound('LEVEL_UP', settings.soundEnabled);
    } else if (character.avatarState === 'victory') {
      playSound('COMPLETE_TASK', settings.soundEnabled);
    }
  }, [character.avatarState, settings.soundEnabled]);

  // Update sprite position based on avatar state
  useEffect(() => {
    // This would be more sophisticated with real sprite sheets
    // Here we're just simulating different poses
    switch (character.avatarState) {
      case 'idle':
        setSpritePosition(0);
        break;
      case 'attack':
        setSpritePosition(-100);
        break;
      case 'victory':
        setSpritePosition(-200);
        break;
      case 'levelUp':
        setSpritePosition(-300);
        break;
      default:
        setSpritePosition(0);
    }
  }, [character.avatarState]);

  // Choose the right animation based on state
  const getAnimation = () => {
    switch (character.avatarState) {
      case 'idle':
        return bounce;
      case 'attack':
        return attack;
      case 'victory':
        return victory;
      case 'levelUp':
        return levelUp;
      default:
        return {};
    }
  };

  return (
    <div className="character-container">
      <div className="character-stats">
        <div className="character-level">
          <span className="level-text">LVL {character.level}</span>
          {character.avatarState === 'levelUp' && (
            <animated.div className="level-up-effect" style={levelUp}>
              LEVEL UP!
            </animated.div>
          )}
        </div>
        <div className="xp-container">
          <div className="xp-bar-container">
            <div 
              className="xp-bar" 
              style={{ width: `${(character.xp / character.xpToNextLevel) * 100}%` }}
            />
          </div>
          <span className="xp-text">
            {character.xp} / {character.xpToNextLevel} XP
          </span>
        </div>
        <div className="character-stats-detail">
          <span>Quests Completed: {character.completedQuests}</span>
        </div>
      </div>
      
      <animated.div className="character-avatar" style={getAnimation()}>
        <img 
          src={knightImage} 
          alt="Character Avatar" 
          className="avatar-image"
          style={{ objectPosition: `${spritePosition}px 0` }}
        />
      </animated.div>
    </div>
  );
};

export default Character;