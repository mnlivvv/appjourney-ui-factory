import { useState, useEffect } from 'react';
import './ZenQuote.css';

// Array of mindfulness quotes
const quotes = [
  "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
  "Mindfulness isn't difficult. We just need to remember to do it.",
  "Breathe in deeply to bring your mind home to your body.",
  "The best way to capture moments is to pay attention.",
  "Be happy in the moment, that's enough. Each moment is all we need, not more.",
  "Wherever you go, there you are.",
  "The little things? The little moments? They aren't little.",
  "You are the sky. Everything else is just the weather.",
  "Peace comes from within. Do not seek it without.",
  "The only way to live is by accepting each minute as an unrepeatable miracle."
];

const ZenQuote = () => {
  const [quote, setQuote] = useState('');
  const [isBreathing, setIsBreathing] = useState(false);

  // Set a random quote on initial render
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
  };

  // Change quote
  const changeQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex] === quote);
    
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="zen-container">
      <p className="zen-quote">{quote}</p>
      
      <div className="zen-controls">
        <button 
          className="zen-button"
          onClick={changeQuote}
          aria-label="New quote"
        >
          ↻
        </button>
        
        <button 
          className={`zen-button breathing-btn ${isBreathing ? 'active' : ''}`}
          onClick={toggleBreathing}
          aria-label="Breathing exercise"
        >
          <div className={`breathing-circle ${isBreathing ? 'animate' : ''}`}></div>
        </button>
      </div>
      
      {isBreathing && (
        <div className="breathing-guide">
          <p>Breathe in... and out... follow the circle</p>
        </div>
      )}
    </div>
  );
};

export default ZenQuote;