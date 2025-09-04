import { useState, useEffect } from 'react';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timerID);
    };
  }, []);
  
  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return date.toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="date-time">
      <div className="time">{formatTime(date)}</div>
      <div className="date">{formatDate(date)}</div>
    </div>
  );
};

export default DateTime;