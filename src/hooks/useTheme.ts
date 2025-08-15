import { useState, useEffect } from 'react';
import { ThemeColor } from '../types';

export const useTheme = (initialTheme: ThemeColor = 'green') => {
  const [theme, setTheme] = useState<ThemeColor>(initialTheme);

  // Apply theme changes to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Reset all theme variables
    root.style.removeProperty('--text-color');
    
    // Apply new theme
    switch (theme) {
      case 'green':
        root.style.setProperty('--text-color', 'var(--green-phosphor)');
        break;
      case 'amber':
        root.style.setProperty('--text-color', 'var(--amber-phosphor)');
        break;
      case 'blue':
        root.style.setProperty('--text-color', 'var(--blue-phosphor)');
        break;
    }
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export default useTheme;