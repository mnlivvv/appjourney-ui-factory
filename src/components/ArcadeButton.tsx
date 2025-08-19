import { ButtonHTMLAttributes } from 'react';
import './ArcadeButton.css';

interface ArcadeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const ArcadeButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}: ArcadeButtonProps) => {
  return (
    <button 
      className={`arcade-button ${variant} ${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ArcadeButton;