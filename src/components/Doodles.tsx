import React from 'react';

interface DoodlesProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Doodles: React.FC<DoodlesProps> = ({ position = 'top-right' }) => {
  // Define positioning based on the position prop
  const getPositionStyle = () => {
    switch (position) {
      case 'top-left':
        return { top: '10px', left: '10px' };
      case 'top-right':
        return { top: '10px', right: '10px' };
      case 'bottom-left':
        return { bottom: '10px', left: '10px' };
      case 'bottom-right':
        return { bottom: '10px', right: '10px' };
      default:
        return { top: '10px', right: '10px' };
    }
  };

  // Helper to get random rotation
  const getRandomRotation = () => {
    return `rotate(${Math.floor(Math.random() * 20) - 10}deg)`;
  };

  return (
    <div 
      style={{ 
        position: 'absolute', 
        ...getPositionStyle(),
        zIndex: 1
      }}
    >
      {/* Star doodle */}
      <div 
        style={{ 
          position: 'absolute',
          transform: getRandomRotation(),
          top: position.includes('top') ? '5px' : 'auto',
          bottom: position.includes('bottom') ? '15px' : 'auto',
          left: position.includes('left') ? '10px' : 'auto',
          right: position.includes('right') ? '30px' : 'auto'
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      
      {/* Spiral doodle */}
      <div 
        style={{ 
          position: 'absolute', 
          transform: getRandomRotation(),
          top: position.includes('top') ? '30px' : 'auto',
          bottom: position.includes('bottom') ? '40px' : 'auto',
          left: position.includes('left') ? '50px' : 'auto',
          right: position.includes('right') ? '5px' : 'auto'
        }}
      >
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12C12 9.5 10.5 8 9 8C7.5 8 6 9 6 11C6 13 7.5 14 9 14C10.5 14 12 13 12 11C12 9 10.5 8 9 8C7.5 8 6 9 6 11C6 13 7.5 14 9 14C10.5 14 12 13 12 11C12 9 10.5 8 9 8C7.5 8 6 9 6 11C6 13 7.5 14 9 14C10.5 14 12 13 12 11C12 9 10.5 8 9 8" />
        </svg>
      </div>
      
      {/* Heart doodle */}
      <div 
        style={{ 
          position: 'absolute', 
          transform: getRandomRotation(),
          top: position.includes('top') ? '35px' : 'auto',
          bottom: position.includes('bottom') ? '5px' : 'auto',
          left: position.includes('left') ? '5px' : 'auto',
          right: position.includes('right') ? '60px' : 'auto'
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
      
      {/* Arrow doodle */}
      <div 
        style={{ 
          position: 'absolute', 
          transform: getRandomRotation(),
          top: position.includes('top') ? '65px' : 'auto',
          bottom: position.includes('bottom') ? '55px' : 'auto',
          left: position.includes('left') ? '40px' : 'auto',
          right: position.includes('right') ? '30px' : 'auto'
        }}
      >
        <svg width="40" height="20" viewBox="0 0 24 12" fill="none" stroke="#4a4a4a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6H4M16 2L20 6L16 10" />
        </svg>
      </div>
    </div>
  );
};

export default Doodles;