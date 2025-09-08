import { useEffect, useState } from 'react';

interface AnimatedCheckmarkProps {
  checked: boolean;
  onChange: () => void;
  size?: number;
}

const AnimatedCheckmark = ({ checked, onChange, size = 18 }: AnimatedCheckmarkProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (checked) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [checked]);
  
  return (
    <div 
      className={`animated-checkmark ${checked ? 'animated-checkmark--checked' : ''} ${isAnimating ? 'animated-checkmark--animating' : ''}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={onChange}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onChange();
        }
      }}
    >
      {checked && (
        <svg 
          className="animated-checkmark__svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            className="animated-checkmark__path" 
            d="M6 12L10 16L18 8" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default AnimatedCheckmark;