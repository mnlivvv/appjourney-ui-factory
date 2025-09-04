import { useState, useEffect } from 'react';
import '../styles/DailyQuote.css';

// Array of mindfulness quotes
const mindfulnessQuotes = [
  "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.",
  "You are the sky. Everything else is just the weather.",
  "The present moment is the only time over which we have dominion.",
  "Mindfulness isn't difficult. We just need to remember to do it.",
  "Do one thing at a time, and while doing it, put your whole soul into it.",
  "Drink your tea slowly and reverently, as if it is the axis on which the world revolves.",
  "The little things? The little moments? They aren't little.",
  "Respond; don't react. Listen; don't talk. Think; don't assume.",
  "Be where you are, not where you think you should be.",
  "Look past your thoughts, so you may drink the pure nectar of this moment.",
  "The only way to live is by accepting each minute as an unrepeatable miracle.",
  "Life is available only in the present. That is why we should walk in such a way that every step can bring us to the here and the now.",
  "When you do something, do it with all your might. Put your whole soul into it. Stamp it with your own personality.",
  "Nothing is worth more than this day.",
  "Mindfulness is simply being aware of what is happening right now without wishing it were different.",
];

const DailyQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Get today's date string to use as a seed for consistent daily quote
    const today = new Date().toDateString();
    
    // Simple hash function to get a deterministic number from the date string
    const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Use the hash to select today's quote
    const todayQuoteIndex = hash % mindfulnessQuotes.length;
    setQuote(mindfulnessQuotes[todayQuoteIndex]);
  }, []);

  return (
    <div className="daily-quote">
      <h3>Today's Mindful Thought</h3>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default DailyQuote;