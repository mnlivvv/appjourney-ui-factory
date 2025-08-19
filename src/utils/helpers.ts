/**
 * Formats a date in a retro-style format: MM/DD/YY
 */
export const formatDate = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = String(date.getFullYear()).slice(2);
  return `${month}/${day}/${year}`;
};

/**
 * Generates a random score for a todo item
 */
export const generateScore = (): number => {
  return Math.floor(Math.random() * 30) + 10; // Random score between 10-40
};

/**
 * Generates a random level for a todo item
 */
export const generateLevel = (): number => {
  return Math.floor(Math.random() * 5) + 1; // Random level between 1-5
};

/**
 * Checks if a todo is overdue
 */
export const isOverdue = (dueDate?: Date): boolean => {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
};

/**
 * Returns a random integer between min and max (inclusive)
 */
export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};