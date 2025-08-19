import { useState, useEffect } from 'react';
import soundManager from '../utils/soundEffects';
import { SoundEffect } from '../types';

export default function SoundToggle() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  
  useEffect(() => {
    // Ensure sound manager state matches component state on mount
    soundManager.toggleSound(isSoundEnabled);
  }, []);
  
  const toggleSound = () => {
    const newState = !isSoundEnabled;
    setIsSoundEnabled(newState);
    soundManager.toggleSound(newState);
    
    // Play a sound if we're enabling sound
    if (newState) {
      soundManager.play(SoundEffect.CLICK);
    }
  };
  
  return (
    <button 
      className={`sound-toggle ${isSoundEnabled ? 'sound-on' : 'sound-off'}`}
      onClick={toggleSound}
      aria-label={`${isSoundEnabled ? 'Disable' : 'Enable'} sound effects`}
    >
      {isSoundEnabled ? 'SOUND: ON' : 'SOUND: OFF'}
    </button>
  );
}