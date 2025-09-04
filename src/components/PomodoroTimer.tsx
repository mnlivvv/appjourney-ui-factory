import { usePomodoro } from '../context/PomodoroContext';

export const PomodoroTimer = () => {
  const { 
    isActive, 
    isPaused, 
    currentTime, 
    currentSession, 
    startTimer, 
    pauseTimer, 
    resetTimer,
    setCurrentSession
  } = usePomodoro();

  // Format time as MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Get session name for display
  const getSessionName = () => {
    switch (currentSession) {
      case 'work':
        return 'Focus';
      case 'break':
        return 'Short Break';
      case 'longBreak':
        return 'Long Break';
      default:
        return 'Focus';
    }
  };

  return (
    <div className="pomodoro-container fade-in">
      <div className="timer-mode-selector">
        <button 
          className={`timer-mode ${currentSession === 'work' ? 'active' : ''}`}
          onClick={() => setCurrentSession('work')}
          aria-label="Focus mode"
        >
          Focus
        </button>
        <button 
          className={`timer-mode ${currentSession === 'break' ? 'active' : ''}`}
          onClick={() => setCurrentSession('break')}
          aria-label="Short break mode"
        >
          Short Break
        </button>
        <button 
          className={`timer-mode ${currentSession === 'longBreak' ? 'active' : ''}`}
          onClick={() => setCurrentSession('longBreak')}
          aria-label="Long break mode"
        >
          Long Break
        </button>
      </div>
      
      <h2 className="session-name">{getSessionName()}</h2>
      <div className="timer-display">{formatTime(currentTime)}</div>
      
      <div className="timer-controls">
        {!isActive || isPaused ? (
          <button 
            className="timer-btn start"
            onClick={startTimer}
            aria-label="Start timer"
          >
            {isPaused ? 'Resume' : 'Start'}
          </button>
        ) : (
          <button 
            className="timer-btn pause"
            onClick={pauseTimer}
            aria-label="Pause timer"
          >
            Pause
          </button>
        )}
        <button 
          className="timer-btn reset"
          onClick={resetTimer}
          aria-label="Reset timer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};