import { useState, useEffect } from 'react';
import { MOTIVATIONAL_QUOTES } from '../utils/constants';

export function useQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Get a random quote
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
      setQuote(MOTIVATIONAL_QUOTES[randomIndex]);
    };
    
    getRandomQuote();
    
    // Change quote daily
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = today + 24 * 60 * 60 * 1000;
    const timeToNextDay = tomorrow - Date.now();
    
    const timer = setTimeout(getRandomQuote, timeToNextDay);
    return () => clearTimeout(timer);
  }, []);

  return quote;
}