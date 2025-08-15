// Helper functions for the application

/**
 * Generates a unique ID
 * @returns {string} A random string ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

/**
 * Calculates a random position within the viewport
 * @param {number} elementWidth - Width of the element to position
 * @param {number} elementHeight - Height of the element to position
 * @param {number} margin - Margin from the edges of the viewport
 * @returns {Object} An object with x and y coordinates
 */
export const getRandomPosition = (
  elementWidth: number,
  elementHeight: number,
  margin: number = 50
): { x: number; y: number } => {
  const maxX = window.innerWidth - elementWidth - margin;
  const maxY = window.innerHeight - elementHeight - margin;
  
  return {
    x: Math.max(margin, Math.floor(Math.random() * maxX)),
    y: Math.max(margin, Math.floor(Math.random() * maxY)),
  };
};

/**
 * Simulates a loading process
 * @param {number} minDuration - Minimum duration in milliseconds
 * @param {number} maxDuration - Maximum duration in milliseconds
 * @returns {Promise<void>} A promise that resolves after a random duration
 */
export const simulateLoading = (
  minDuration: number = 500,
  maxDuration: number = 2000
): Promise<void> => {
  const duration = minDuration + Math.random() * (maxDuration - minDuration);
  return new Promise(resolve => setTimeout(resolve, duration));
};

/**
 * Formats a date as a retro computer timestamp
 * @param {Date} date - The date to format
 * @returns {string} A formatted timestamp string
 */
export const formatTimestamp = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
};

/**
 * Creates a flickering text effect
 * @param {string} text - The text to apply the effect to
 * @param {number} intensity - The intensity of the effect (0-1)
 * @returns {string} HTML with random span classes for flickering
 */
export const flickerText = (text: string, intensity: number = 0.1): string => {
  return text
    .split('')
    .map(char => {
      if (Math.random() < intensity) {
        return `<span class="flicker">${char}</span>`;
      }
      return char;
    })
    .join('');
};

/**
 * Calculates a staggered delay for elements in a list
 * @param {number} index - The index of the element in the list
 * @param {number} baseDelay - The base delay in milliseconds
 * @returns {number} The calculated delay
 */
export const staggeredDelay = (index: number, baseDelay: number = 100): number => {
  return index * baseDelay;
};