import { useState, useEffect } from 'react';

const DateTimeDisplay: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 60000); // Update every minute

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Format date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(date);

  // Format time
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="datetime-display">
      <div className="date">{formattedDate}</div>
      <div className="time">{formattedTime}</div>
    </div>
  );
};

export default DateTimeDisplay;
