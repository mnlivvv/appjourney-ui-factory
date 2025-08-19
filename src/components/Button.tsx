import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'rounded-full font-medium shadow-md transition-all flex items-center justify-center';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white',
    secondary: 'bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white',
    success: 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white',
  };
  
  // Size styles
  const sizeStyles = {
    small: 'text-xs py-1 px-3',
    medium: 'text-sm py-2 px-4',
    large: 'text-base py-3 px-6',
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;
  
  return (
    <motion.button
      className={buttonStyles}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;