import { useState, useEffect, useCallback } from 'react';
import { Howl } from 'howler';

// Define the available sound types
export type SoundType = 'water' | 'leaves';

interface SoundOptions {
  volume?: number;
  loop?: boolean;
}

export const useSounds = () => {
  const [sounds, setSounds] = useState<Record<SoundType, Howl | null>>({
    water: null,
    leaves: null,
  });
  
  const [playing, setPlaying] = useState<Record<SoundType, boolean>>({
    water: false,
    leaves: false,
  });

  // Initialize sound objects
  useEffect(() => {
    const waterSound = new Howl({
      src: ['./src/assets/sounds/water.mp3'],
      loop: true,
      volume: 0.5,
    });
    
    const leavesSound = new Howl({
      src: ['./src/assets/sounds/leaves.mp3'],
      loop: true,
      volume: 0.5,
    });
    
    setSounds({
      water: waterSound,
      leaves: leavesSound,
    });

    // Cleanup on unmount
    return () => {
      waterSound.unload();
      leavesSound.unload();
    };
  }, []);

  // Play a sound
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    const sound = sounds[type];
    if (!sound) return;
    
    if (options?.volume !== undefined) {
      sound.volume(options.volume);
    }
    
    if (options?.loop !== undefined) {
      sound.loop(options.loop);
    }
    
    sound.play();
    setPlaying(prev => ({ ...prev, [type]: true }));
  }, [sounds]);

  // Stop a sound
  const stopSound = useCallback((type: SoundType) => {
    const sound = sounds[type];
    if (!sound) return;
    
    sound.stop();
    setPlaying(prev => ({ ...prev, [type]: false }));
  }, [sounds]);

  // Toggle a sound on/off
  const toggleSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (playing[type]) {
      stopSound(type);
    } else {
      playSound(type, options);
    }
  }, [playing, playSound, stopSound]);

  return {
    sounds,
    playing,
    playSound,
    stopSound,
    toggleSound,
  };
};