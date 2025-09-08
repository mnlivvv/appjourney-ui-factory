import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { animated, useSpring } from 'react-spring';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  className = '',
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles = 'rounded-full font-semibold transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 focus:ring-pink-400',
    secondary: 'bg-gradient-to-r from-blue-400 to-teal-400 text-white hover:from-blue-500 hover:to-teal-500 focus:ring-blue-300',
    success: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600 focus:ring-green-400',
    danger: 'bg-gradient-to-r from-red-400 to-pink-500 text-white hover:from-red-500 hover:to-pink-600 focus:ring-red-400'
  };
  
  // Size-specific styles
  const sizeStyles = {
    small: 'text-xs py-1 px-3',
    medium: 'text-sm py-2 px-4',
    large: 'text-base py-3 px-6'
  };

  // Animation spring
  const [springs, api] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 }
  }));

  const handleMouseDown = () => {
    api.start({ scale: 0.95 });
  };

  const handleMouseUp = () => {
    api.start({ scale: 1 });
  };

  return (
    <animated.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={{
        transform: springs.scale.to(s => `scale(${s})`)
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </animated.button>
  );
};

export default Button;