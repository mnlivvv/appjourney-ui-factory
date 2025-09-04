import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PomodoroSettings } from '../types';

interface PomodoroContextType {
  isActive: boolean;
  isPaused: boolean;
  currentTime: number;
  currentSession: 'work' | 'break' | 'longBreak';
  sessionsCompleted: number;
  settings: PomodoroSettings;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  updateSettings: (settings: Partial<PomodoroSettings>) => void;
  setCurrentSession: (session: 'work' | 'break' | 'longBreak') => void;
}

const defaultSettings: PomodoroSettings = {
  workDuration: 25,
  breakDuration: 5,
  longBreakDuration: 15,
  sessionsBeforeLongBreak: 4
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export function PomodoroProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<PomodoroSettings>(() => {
    const savedSettings = localStorage.getItem('pomodoroSettings');
    if (savedSettings) {
      try {
        return JSON.parse(savedSettings);
      } catch (e) {
        console.error('Failed to parse pomodoro settings from localStorage', e);
        return defaultSettings;
      }
    }
    return defaultSettings;
  });

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [currentSession, setCurrentSession] = useState<'work' | 'break' | 'longBreak'>('work');
  const [currentTime, setCurrentTime] = useState(settings.workDuration * 60);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
  }, [settings]);

  // Update timer when settings or session type changes
  useEffect(() => {
    let newTime = 0;
    switch (currentSession) {
      case 'work':
        newTime = settings.workDuration * 60;
        break;
      case 'break':
        newTime = settings.breakDuration * 60;
        break;
      case 'longBreak':
        newTime = settings.longBreakDuration * 60;
        break;
    }
    setCurrentTime(newTime);
    
    // Also reset the timer state if it was active
    if (isActive) {
      setIsActive(false);
      setIsPaused(true);
    }
  }, [currentSession, settings]);

  // Timer countdown logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setCurrentTime((time) => {
          if (time <= 1) {
            // Time's up!
            clearInterval(interval!);
            
            // Determine what to do next based on current session
            if (currentSession === 'work') {
              const newSessionsCompleted = sessionsCompleted + 1;
              setSessionsCompleted(newSessionsCompleted);
              
              // Determine if we need a regular break or long break
              if (newSessionsCompleted % settings.sessionsBeforeLongBreak === 0) {
                setCurrentSession('longBreak');
              } else {
                setCurrentSession('break');
              }
            } else {
              // If it was a break, go back to work
              setCurrentSession('work');
            }
            
            setIsActive(false);
            setIsPaused(true);
            
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, currentSession, sessionsCompleted, settings]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resetTimer = () => {
    switch (currentSession) {
      case 'work':
        setCurrentTime(settings.workDuration * 60);
        break;
      case 'break':
        setCurrentTime(settings.breakDuration * 60);
        break;
      case 'longBreak':
        setCurrentTime(settings.longBreakDuration * 60);
        break;
    }
    setIsActive(false);
    setIsPaused(true);
  };

  const updateSettings = (newSettings: Partial<PomodoroSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <PomodoroContext.Provider
      value={{
        isActive,
        isPaused,
        currentTime,
        currentSession,
        sessionsCompleted,
        settings,
        startTimer,
        pauseTimer,
        resetTimer,
        updateSettings,
        setCurrentSession
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error('usePomodoro must be used within a PomodoroProvider');
  }
  return context;
}