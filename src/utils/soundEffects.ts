import { Howl } from 'howler';
import { SoundEffect } from '../types';

// Sound effect URLs
// Note: In a real app, you would download and include these files in the project
// For this demo, we're using URLs from free sound effect libraries
const SOUND_URLS = {
  [SoundEffect.ADD]: 'https://pixabay.com/sound-effects/download/retro-game-notification-182193/',
  [SoundEffect.COMPLETE]: 'https://pixabay.com/sound-effects/download/success-1-6297/',
  [SoundEffect.DELETE]: 'https://pixabay.com/sound-effects/download/wrong-buzzer-6268/',
  [SoundEffect.LEVELUP]: 'https://pixabay.com/sound-effects/download/level-up-213q-88793/',
  [SoundEffect.GAMEOVER]: 'https://pixabay.com/sound-effects/download/game-over-arcade-6435/',
  [SoundEffect.CLICK]: 'https://pixabay.com/sound-effects/download/click-21156/',
};

class SoundManager {
  private sounds: Record<SoundEffect, Howl> = {} as Record<SoundEffect, Howl>;
  private enabled: boolean = true;

  constructor() {
    // Initialize all sound effects
    Object.entries(SOUND_URLS).forEach(([key, url]) => {
      this.sounds[key as SoundEffect] = new Howl({
        src: [url],
        volume: 0.5,
      });
    });
  }

  play(effect: SoundEffect): void {
    if (this.enabled && this.sounds[effect]) {
      this.sounds[effect].play();
    }
  }

  toggleSound(enabled: boolean): void {
    this.enabled = enabled;
  }

  isSoundEnabled(): boolean {
    return this.enabled;
  }
}

// Create a singleton instance
const soundManager = new SoundManager();
export default soundManager;