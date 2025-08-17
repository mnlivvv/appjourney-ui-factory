import { createContext, useState, useContext } from 'react';
import useSound from 'use-sound';
import beepSfx from '/assets/sounds/beep.mp3';

const AudioContext = createContext();

export function useAudio() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false);
  
  // Load sound effects
  const [playBeep] = useSound(beepSfx, { volume: 0.5, interrupt: true });
  
  // Function to play UI interaction sound
  const playUISound = () => {
    if (!isMuted) {
      playBeep();
    }
  };
  
  // Toggle mute state
  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };
  
  const value = {
    isMuted,
    toggleMute,
    playUISound
  };
  
  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}