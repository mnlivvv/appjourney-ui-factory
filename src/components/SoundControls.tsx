import { useSounds, SoundType } from '../hooks/useSounds';
import { useRippleEffect } from '../hooks/useRippleEffect';

export function SoundControls() {
  const { playing, toggleSound } = useSounds();
  const { ripples, addRipple } = useRippleEffect();
  
  return (
    <div className="sound-controls">
      <h3>Ambient Sounds</h3>
      <div className="sound-buttons">
        <button 
          className={`sound-button ${playing.water ? 'active' : ''}`}
          onClick={(e) => {
            addRipple(e);
            toggleSound('water');
          }}
          aria-label={playing.water ? "Stop water sounds" : "Play water sounds"}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {ripples.map(ripple => (
            <span
              key={ripple.id}
              className="ripple"
              style={{
                left: ripple.x - ripple.size / 2,
                top: ripple.y - ripple.size / 2,
                width: ripple.size,
                height: ripple.size
              }}
            />
          ))
          <img src="./src/assets/icons/water-drop.svg" alt="Water" />
          <span>Water Flow</span>
        </button>
        
        <button 
          className={`sound-button ${playing.leaves ? 'active' : ''}`}
          onClick={(e) => {
            addRipple(e);
            toggleSound('leaves');
          }}
          aria-label={playing.leaves ? "Stop leaves sounds" : "Play leaves sounds"}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {ripples.map(ripple => (
            <span
              key={ripple.id}
              className="ripple"
              style={{
                left: ripple.x - ripple.size / 2,
                top: ripple.y - ripple.size / 2,
                width: ripple.size,
                height: ripple.size
              }}
            />
          ))
          <img src="./src/assets/icons/leaf.svg" alt="Leaves" />
          <span>Rustling Leaves</span>
        </button>
      </div>
    </div>
  );
}