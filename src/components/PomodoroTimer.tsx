import { useMemo } from 'react';
import usePomodoro from '../hooks/usePomodoro';

const PomodoroTimer = () => {
  const { timer, timeLeft, startTimer, pauseTimer, resetTimer, toggleMode } = usePomodoro();
  
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [timeLeft]);

  return (
    <div className={`pomodoro-timer ${timer.mode}`}>
      <div className="timer-display">
        <h3>{timer.mode === 'work' ? 'Focus Time' : 'Break Time'}</h3>
        <div className="time">{formattedTime}</div>
      </div>
      
      <div className="timer-controls">
        {!timer.isActive ? (
          <button onClick={startTimer} className="timer-btn start">
            Start
          </button>
        ) : (
          <button onClick={pauseTimer} className="timer-btn pause">
            Pause
          </button>
        )}
        
        <button onClick={resetTimer} className="timer-btn reset">
          Reset
        </button>
        
        <button onClick={toggleMode} className="timer-btn toggle-mode">
          {timer.mode === 'work' ? 'Switch to Break' : 'Switch to Work'}
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;