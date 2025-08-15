import React from 'react';
import Window from './Window';

interface AboutWindowProps {
  id: string;
  isOpen: boolean;
  onClose: (id: string) => void;
  zIndex: number;
  bringToFront: (id: string) => void;
}

const AboutWindow: React.FC<AboutWindowProps> = ({
  id,
  isOpen,
  onClose,
  zIndex,
  bringToFront,
}) => {
  return (
    <Window
      id={id}
      title="ABOUT SYSTEM"
      isOpen={isOpen}
      onClose={onClose}
      initialWidth={450}
      initialHeight={350}
      initialX={Math.round(window.innerWidth / 2 - 225)}
      initialY={Math.round(window.innerHeight / 2 - 175)}
      zIndex={zIndex}
      bringToFront={bringToFront}
    >
      <div className="about-content">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 className="text-glow" style={{ fontFamily: 'var(--pixel-font)', fontSize: '1.2rem', letterSpacing: '1px' }}>
            RETRO AI INTERFACE v1.0.2
          </h2>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '100%' }}></div>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>SYSTEM FULLY OPERATIONAL</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div className="text-glow" style={{ marginBottom: '10px', borderBottom: '1px solid var(--text-color)' }}>
            SYSTEM SPECIFICATIONS:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.9rem' }}>
            <div>NEURAL ENGINE:</div><div>MK-IV</div>
            <div>MEMORY CAPACITY:</div><div>640K (EXTENDED)</div>
            <div>OS VERSION:</div><div>RETROOS 3.14</div>
            <div>UI SUBSYSTEM:</div><div>REACT v19.1.0</div>
            <div>PROCESSOR:</div><div>QUANTUM FLUX 9000</div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div className="text-glow" style={{ marginBottom: '10px', borderBottom: '1px solid var(--text-color)' }}>
            CAPABILITIES:
          </div>
          <ul style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
            <li>NATURAL LANGUAGE INTERFACE</li>
            <li>LOGICAL REASONING PROTOCOLS</li>
            <li>CREATIVE EXPRESSION MATRIX</li>
            <li>KNOWLEDGE RETRIEVAL SYSTEM</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            className="retro-button" 
            onClick={() => onClose(id)}
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </Window>
  );
};

export default AboutWindow;