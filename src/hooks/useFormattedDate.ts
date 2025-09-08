/**
 * A custom hook that formats a date into a human-readable string.
 * 
 * @param date - The date to format
 * @returns A formatted date string
 */
export const useFormattedDate = (date: Date): string => {
  // Handle invalid dates
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }
  
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  // Less than a minute ago
  if (diff < 60 * 1000) {
    return 'Just now';
  }
  
  // Less than an hour ago
  if (diff < 60 * 60 * 1000) {
    const minutes = Math.floor(diff / (60 * 1000));
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  
  // Less than a day ago
  if (diff < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(diff / (60 * 60 * 1000));
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  
  // Less than a week ago
  if (diff < 7 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
  
  // Format as a date - simple formatting to avoid locale issues
  const year = date.getFullYear();
  const month = date.toLocaleString('en', { month: 'short' });
  const day = date.getDate();
  
  return `${month} ${day}, ${year}`;
};

export default useFormattedDate;