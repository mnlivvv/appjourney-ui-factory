import { AppTheme } from '../types';

export const lightTheme: AppTheme = {
  primary: '#f8f9fa',
  background: '#ffffff',
  surface: '#f8f9fa',
  text: '#333333',
  textSecondary: '#6c757d',
  accent: '#86B2A1', // Soft sage green as accent color
  border: '#e6e6e6',
  error: '#dc3545',
  success: '#86B2A1'
};

export const darkTheme: AppTheme = {
  primary: '#222222',
  background: '#2c2c2c',
  surface: '#333333',
  text: '#e6e6e6',
  textSecondary: '#adb5bd',
  accent: '#86B2A1', // Same sage green accent for consistency
  border: '#444444',
  error: '#dc3545',
  success: '#86B2A1'
};

export const fontSizes = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '1.5rem',
  xxlarge: '2rem'
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem'
};

export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  round: '50%'
};

export const transitions = {
  default: 'all 0.3s ease-in-out',
  quick: 'all 0.15s ease-in-out',
  slow: 'all 0.5s ease-in-out'
};