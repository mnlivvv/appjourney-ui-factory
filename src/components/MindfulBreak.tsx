import { useState, useEffect } from 'react';

interface MindfulBreakProps {
  onClose: () => void;
}

const MindfulBreak: React.FC<MindfulBreakProps> = ({ onClose }) => {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  
  const totalCycles = 3; // Number of breathing cycles
  const inhaleTime = 4; // seconds
  const holdTime = 4; // seconds
  const exhaleTime = 6; // seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        
        // Determine the current phase based on timing
        if (phase === 'inhale' && newCount >= inhaleTime) {
          setPhase('hold');
          return 0;
        } else if (phase === 'hold' && newCount >= holdTime) {
          setPhase('exhale');
          return 0;
        } else if (phase === 'exhale' && newCount >= exhaleTime) {
          setPhase('inhale');
          // Increment cycle when we complete one full breath
          setCycle((prevCycle) => {
            const newCycle = prevCycle + 1;
            // Auto close after completing all cycles
            if (newCycle >= totalCycles) {
              setTimeout(onClose, 1000); // Give time for the animation to complete
            }
            return newCycle;
          });
          return 0;
        }
        return newCount;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, onClose]);

  // Calculate the ratio for the progress indicator
  const getProgress = () => {
    const maxTime = phase === 'inhale' ? inhaleTime : phase === 'hold' ? holdTime : exhaleTime;
    return (count / maxTime) * 100;
  };

  // Get instruction text based on the current phase
  const getInstruction = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
    }
  };

  return (
    <div className="mindful-break-container">
      <h2>Take a Mindful Break</h2>
      <p className="cycle-count">
        Cycle {cycle + 1} of {totalCycles}
      </p>
      
      <div className={`breathing-circle ${phase}`}>
        <div className="circle-inner">
          <div className="instruction">{getInstruction()}</div>
          <div className="count">{phase === 'hold' ? count + 1 : ''}</div>
        </div>
      </div>
      
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${getProgress()}%` }}
        ></div>
      </div>
      
      <p className="mindful-quote">
        "Be present in each moment, as it is all we truly have."
      </p>
      
      <button className="skip-btn" onClick={onClose}>
        Skip Break
      </button>
    </div>
  );
};

export default MindfulBreak;
