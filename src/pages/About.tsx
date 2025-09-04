import React from 'react';

const About: React.FC = () => {
  return (
    <div className="brutalist-box pixel-bg" style={{ minHeight: '60vh' }}>
      <div className="glitch-container">
        <h1 className="glitch-text">ABOUT BRUTALIST TODOS</h1>
      </div>
      
      <div style={{ 
        fontFamily: 'var(--font-mono)',
        marginBottom: '2rem',
        border: '3px solid var(--color-black)',
        padding: '1rem'
      }}>
        <p style={{ marginBottom: '1rem' }}>
          This todo application embraces brutalist web design principles:
        </p>
        <ul style={{ listStyleType: 'none', padding: '0 1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>- Raw functionality over conventional beauty</li>
          <li style={{ marginBottom: '0.5rem' }}>- Stark black and white with accent color</li>
          <li style={{ marginBottom: '0.5rem' }}>- Bold typography and sharp edges</li>
          <li style={{ marginBottom: '0.5rem' }}>- Monospaced font for task items</li>
          <li style={{ marginBottom: '0.5rem' }}>- Grid-based asymmetrical layout</li>
        </ul>
      </div>
      
      <div className="brutalist-box" style={{ 
        background: '#000', 
        color: '#fff',
        border: '3px solid var(--color-accent)',
        transform: 'rotate(-1deg)',
        marginBottom: '3rem'
      }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>DIGITAL BRUTALISM</h3>
        <p style={{ fontFamily: 'var(--font-mono)', textAlign: 'justify' }}>
          Digital brutalism represents a raw, unfiltered approach to web design that
          emphasizes function, structure, and the inherent beauty of the digital medium.
          It rejects the homogeneity of modern web aesthetics in favor of distinctive,
          memorable experiences.
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <div className="glitch-container">
          <p className="glitch-text" style={{ 
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.2em',
            fontSize: '0.8rem'
          }}>
            DESIGNED WITH BRUTALIST PRINCIPLES IN {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;