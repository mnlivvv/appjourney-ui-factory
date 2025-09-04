import { useState, useEffect } from 'react';
import '../styles/BreathingExercise.css';

const BreathingExercise = () => {
  const [breathingState, setBreathingState] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [timer, setTimer] = useState(4);
  const [isActive, setIsActive] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);
  const maxCycles = 3;

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      // Transition to the next breathing state
      if (breathingState === 'inhale') {
        setBreathingState('hold');
        setTimer(4); // hold for 4 seconds
      } else if (breathingState === 'hold') {
        setBreathingState('exhale');
        setTimer(6); // exhale for 6 seconds
      } else if (breathingState === 'exhale') {
        setBreathingState('rest');
        setTimer(2); // rest for 2 seconds
      } else {
        // After rest, go back to inhale if we haven't reached max cycles
        if (cycleCount < maxCycles - 1) {
          setCycleCount(cycleCount + 1);
          setBreathingState('inhale');
          setTimer(4); // inhale for 4 seconds
        } else {
          // End exercise after completing all cycles
          setIsActive(false);
          setCycleCount(0);
        }
      }
    }

    return () => clearInterval(interval);
  }, [timer, breathingState, isActive, cycleCount]);

  const handleRestart = () => {
    setCycleCount(0);
    setBreathingState('inhale');
    setTimer(4);
    setIsActive(true);
  };

  return (
    <div className="breathing-exercise">
      {isActive ? (
        <>
          <div className="breathing-circle-container">
            <div className={`breathing-circle ${breathingState}`}>
              <div className="breathing-text">
                {breathingState === 'inhale' && 'Breathe In'}
                {breathingState === 'hold' && 'Hold'}
                {breathingState === 'exhale' && 'Breathe Out'}
                {breathingState === 'rest' && 'Rest'}
              </div>
              <div className="breathing-timer">{timer}</div>
            </div>
          </div>
          <p className="breathing-instruction">
            {breathingState === 'inhale' && 'Inhale deeply through your nose...'}
            {breathingState === 'hold' && 'Hold your breath...'}
            {breathingState === 'exhale' && 'Exhale slowly through your mouth...'}
            {breathingState === 'rest' && 'Pause briefly...'}
          </p>
          <p className="cycle-count">
            Cycle {cycleCount + 1} of {maxCycles}
          </p>
        </>
      ) : (
        <div className="exercise-complete">
          <h3>Exercise Complete</h3>
          <p>Great job! You've completed the breathing exercise.</p>
          <button className="restart-btn" onClick={handleRestart}>
            Start Again
          </button>
        </div>
      )}
    </div>
  );
};

export default BreathingExercise;