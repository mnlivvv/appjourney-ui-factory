import { useState, useEffect } from 'react';

// Collection of mindfulness and focus quotes
const quotes = [
  "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.",
  "Be where you are, otherwise you will miss your life.",
  "The present moment is the only time over which we have dominion.",
  "You are only here now; you're only alive in this moment.",
  "Few of us ever live in the present. We are forever anticipating what is to come or remembering what has gone.",
  "Mindfulness isn't difficult. We just need to remember to do it.",
  "The little things? The little moments? They aren't little.",
  "Wherever you go, there you are.",
  "When you do something, you should burn yourself completely, like a good bonfire, leaving no trace of yourself.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Peace comes from within. Do not seek it without.",
  "Look past your thoughts, so you may drink the pure nectar of This Moment.",
  "Smile, breathe, and go slowly.",
  "When we get too caught up in the busyness of the world, we lose connection with one another – and ourselves.",
  "Respond; don't react. Listen; don't talk. Think; don't assume.",
  "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
];

const MindfulnessQuote = () => {
  const [quote, setQuote] = useState("");
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  // Select a random quote on initial render
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  // Change quote every 3 hours
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 3 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleBreathingExercise = () => {
    setIsBreathingActive(!isBreathingActive);
  };

  return (
    <div className="mindfulness-container">
      <div className="quote-container">
        <p className="quote">{quote}</p>
      </div>
      
      <div className="breathing-section">
        <button 
          className={`breathing-button ${isBreathingActive ? 'active' : ''}`}
          onClick={toggleBreathingExercise}
        >
          {isBreathingActive ? "Stop" : "Start"} Breathing Exercise
        </button>
        
        {isBreathingActive && (
          <div className="breathing-circle">
            <div className="circle-text">
              <span className="instruction">
                {/* The text changes with the animation */}
                Breathe
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindfulnessQuote;