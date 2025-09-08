import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Array of mindfulness quotes
const QUOTES = [
  "The present moment is the only moment available to us, and it is the door to all moments. — Thich Nhat Hanh",
  "You are the sky. Everything else is just the weather. — Pema Chödrön",
  "Mindfulness isn't difficult. We just need to remember to do it. — Sharon Salzberg",
  "Peace comes from within. Do not seek it without. — Buddha",
  "The best way to capture moments is to pay attention. — Jon Kabat-Zinn",
  "Life is available only in the present moment. — Thich Nhat Hanh",
  "Wherever you go, there you are. — Jon Kabat-Zinn",
  "Breathe and let be. — Jon Kabat-Zinn",
  "The little things? The little moments? They aren't little. — Jon Kabat-Zinn",
  "Much of our suffering comes from reacting to stressful situations with fear or anxiety. — Thich Nhat Hanh",
  "You can't stop the waves, but you can learn to surf. — Jon Kabat-Zinn",
  "Your vision will become clear only when you can look into your own heart. — Carl Jung",
  "The quieter you become, the more you can hear. — Ram Dass",
  "When you realize nothing is lacking, the whole world belongs to you. — Lao Tzu"
];

interface DailyQuoteProps {
  className?: string;
}

const DailyQuote = ({ className = '' }: DailyQuoteProps) => {
  const [savedQuote, setSavedQuote] = useLocalStorage<{
    text: string;
    date: string;
  }>('daily-quote', { text: '', date: '' });

  const [quote, setQuote] = useState(savedQuote.text);

  useEffect(() => {
    const today = new Date().toDateString();
    
    // Check if we need a new quote for today
    if (savedQuote.date !== today) {
      // Select random quote
      const randomIndex = Math.floor(Math.random() * QUOTES.length);
      const newQuote = QUOTES[randomIndex];
      
      // Save the new quote and today's date
      setQuote(newQuote);
      setSavedQuote({ text: newQuote, date: today });
    }
  }, [savedQuote, setSavedQuote]);

  const refreshQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const newQuote = QUOTES[randomIndex];
    setQuote(newQuote);
    setSavedQuote({ text: newQuote, date: new Date().toDateString() });
  };

  return (
    <div className={`daily-quote ${className}`}>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <button onClick={refreshQuote} className="refresh-quote">
        New Quote
      </button>
    </div>
  );
};

export default DailyQuote;