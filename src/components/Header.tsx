import { useState, useEffect } from 'react';
import '../styles/Header.css';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
}

const Header: React.FC<HeaderProps> = ({ completedCount, totalCount }) => {
  const [message, setMessage] = useState('');
  
  const motivationalMessages = [
    "Great job! You're making progress! 🎉",
    "You're crushing it today! 💪",
    "One task at a time leads to big achievements! ✨",
    "Keep going! You're doing amazing! 🌟",
    "Progress feels good, doesn't it? 🌈",
    "You're on a productivity streak! 🔥",
    "Checking things off feels so good! ✅",
    "You're becoming a task master! 👑",
    "Small steps, big results! 🚀",
    "Look at you being so productive! 🌻"
  ];

  const funFacts = [
    "The most productive day of the week is Tuesday! ⌚",
    "Taking short breaks increases productivity by 16%! 🧠",
    "The average person has 6,000 thoughts per day! 💭",
    "Making a to-do list can improve sleep quality! 💤",
    "The Pomodoro Technique was named after a tomato-shaped timer! 🍅"
  ];
  
  useEffect(() => {
    if (completedCount > 0) {
      const allMessages = [...motivationalMessages, ...funFacts];
      const randomIndex = Math.floor(Math.random() * allMessages.length);
      setMessage(allMessages[randomIndex]);
    } else {
      setMessage('Ready to tackle some tasks today?');
    }
  }, [completedCount]);
  
  return (
    <header className="app-header">
      <h1>TaskJoy</h1>
      <p className="progress-indicator">
        {totalCount > 0 ? (
          <>Completed: {completedCount} / {totalCount}</>
        ) : (
          <>No tasks yet</>
        )}
      </p>
      <div className={`message-container ${completedCount > 0 ? 'show' : ''}`}>
        <p className="message">{message}</p>
      </div>
    </header>
  );
};

export default Header;