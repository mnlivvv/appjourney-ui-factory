import { useState, useEffect, useCallback } from 'react';
import type { PomodoroTimer } from '../types';
import useLocalStorage from './useLocalStorage';

const DEFAULT_WORK_TIME = 25 * 60; // 25 minutes in seconds
const DEFAULT_BREAK_TIME = 5 * 60; // 5 minutes in seconds

const usePomodoro = () => {
  const [savedTimer, setSavedTimer] = useLocalStorage<PomodoroTimer>('pomodoro-timer', {
    minutes: Math.floor(DEFAULT_WORK_TIME / 60),
    seconds: DEFAULT_WORK_TIME % 60,
    isActive: false,
    mode: 'work'
  });

  const [timer, setTimer] = useState<PomodoroTimer>(savedTimer);
  const [timeLeft, setTimeLeft] = useState<number>(timer.minutes * 60 + timer.seconds);

  const startTimer = useCallback(() => {
    setTimer(prev => ({ ...prev, isActive: true }));
  }, []);

  const pauseTimer = useCallback(() => {
    setTimer(prev => ({ ...prev, isActive: false }));
  }, []);

  const resetTimer = useCallback(() => {
    const newTime = timer.mode === 'work' ? DEFAULT_WORK_TIME : DEFAULT_BREAK_TIME;
    setTimer({
      minutes: Math.floor(newTime / 60),
      seconds: newTime % 60,
      isActive: false,
      mode: timer.mode
    });
    setTimeLeft(newTime);
  }, [timer.mode]);

  const toggleMode = useCallback(() => {
    const newMode = timer.mode === 'work' ? 'break' : 'work';
    const newTime = newMode === 'work' ? DEFAULT_WORK_TIME : DEFAULT_BREAK_TIME;
    
    setTimer({
      minutes: Math.floor(newTime / 60),
      seconds: newTime % 60,
      isActive: false,
      mode: newMode
    });
    
    setTimeLeft(newTime);
  }, [timer.mode]);

  // Main timer logic
  useEffect(() => {
    let interval: number | undefined;

    if (timer.isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
        
        const minutes = Math.floor((timeLeft - 1) / 60);
        const seconds = (timeLeft - 1) % 60;
        
        setTimer(prev => ({
          ...prev,
          minutes,
          seconds
        }));
      }, 1000);
    } else if (timer.isActive && timeLeft === 0) {
      // Time's up - play sound if needed
      const audioFeedback = () => {
        try {
          const audio = new Audio('/notification.mp3');
          void audio.play().catch(err => {
            console.warn('Audio notification failed to play:', err);
          });
        } catch (error) {
          console.warn('Audio notification failed to play:', error);
        }
      };
      
      audioFeedback();
      toggleMode();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer.isActive, timeLeft, toggleMode]);

  // Save timer state to localStorage
  useEffect(() => {
    setSavedTimer(timer);
  }, [timer, setSavedTimer]);

  return {
    timer,
    timeLeft,
    startTimer,
    pauseTimer,
    resetTimer,
    toggleMode
  };
};

export default usePomodoro;