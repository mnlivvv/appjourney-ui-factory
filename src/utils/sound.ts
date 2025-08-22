// Sound effects utility

const SOUNDS = {
  COMPLETE_TASK: '/sounds/complete-task.mp3',
  LEVEL_UP: '/sounds/level-up.mp3',
  ADD_TASK: '/sounds/add-task.mp3',
};

// Audio cache to prevent reloading sounds
const audioCache: Record<string, HTMLAudioElement> = {};

// Play a sound if enabled
export const playSound = (sound: keyof typeof SOUNDS, enabled: boolean = true): void => {
  if (!enabled) return;
  
  try {
    // Get from cache or create new audio element
    if (!audioCache[sound]) {
      audioCache[sound] = new Audio(SOUNDS[sound]);
    }
    
    const audio = audioCache[sound];
    audio.currentTime = 0; // Reset to start
    audio.play().catch(err => {
      // Handle autoplay restrictions
      console.warn(`Failed to play sound: ${err.message}`);
    });
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

export default SOUNDS;