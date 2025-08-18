import React, { useState, useEffect } from 'react';

const MotivationalQuote: React.FC = () => {
  const [quote, setQuote] = useState('');
  
  // Array of motivational quotes
  const quotes = [
    "Done is better than perfect!",
    "Small steps lead to big achievements.",
    "Every task completed is a win!",
    "You don't have to be perfect to be amazing.",
    "Progress, not perfection.",
    "Today's to-dos are tomorrow's accomplishments.",
    "One task at a time.",
    "The best way to get things done is to begin.",
    "Celebrate small victories!",
    "Your future self will thank you.",
    "Breathe, focus, accomplish.",
    "Tasks are just dreams with deadlines.",
    "Each checkbox checked is progress made.",
    "Start where you are, use what you have.",
    "Do something today that your future self will thank you for."
  ];
  
  // Select a random quote on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);
  
  // Random slight rotation for a hand-drawn feel
  const rotation = Math.floor(Math.random() * 4) - 2;
  
  return (
    <div 
      className="quote-container sketchy-border"
      style={{ 
        padding: '15px',
        margin: '25px 0',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
        transform: `rotate(${rotation}deg)`
      }}
    >
      <p 
        className="handwritten"
        style={{ 
          margin: 0,
          color: '#4a4a4a',
          fontSize: '1.1rem',
          fontStyle: 'italic'
        }}
      >
        ✨ {quote} ✨
      </p>
    </div>
  );
};

export default MotivationalQuote;