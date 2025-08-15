import { useState } from 'react';

export const useWindowManager = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [windowZIndexes, setWindowZIndexes] = useState<Record<string, number>>({});
  const [nextZIndex, setNextZIndex] = useState(1000);

  // Open a window
  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows(prev => [...prev, windowId]);
      // Assign a new z-index to the window
      setWindowZIndexes(prev => ({
        ...prev,
        [windowId]: nextZIndex,
      }));
      setNextZIndex(prev => prev + 1);
    }
    
    // If window was minimized, restore it
    if (minimizedWindows.includes(windowId)) {
      setMinimizedWindows(prev => prev.filter(id => id !== windowId));
    }
    
    // Bring to front
    bringToFront(windowId);
  };

  // Close a window
  const closeWindow = (windowId: string) => {
    setOpenWindows(prev => prev.filter(id => id !== windowId));
    setMinimizedWindows(prev => prev.filter(id => id !== windowId));
  };

  // Minimize a window
  const minimizeWindow = (windowId: string) => {
    if (!minimizedWindows.includes(windowId)) {
      setMinimizedWindows(prev => [...prev, windowId]);
    }
  };

  // Restore a minimized window
  const restoreWindow = (windowId: string) => {
    setMinimizedWindows(prev => prev.filter(id => id !== windowId));
    bringToFront(windowId);
  };

  // Bring a window to the front
  const bringToFront = (windowId: string) => {
    setWindowZIndexes(prev => ({
      ...prev,
      [windowId]: nextZIndex,
    }));
    setNextZIndex(prev => prev + 1);
  };

  // Check if a window is open
  const isWindowOpen = (windowId: string) => {
    return openWindows.includes(windowId) && !minimizedWindows.includes(windowId);
  };

  // Get the z-index for a window
  const getWindowZIndex = (windowId: string) => {
    return windowZIndexes[windowId] || 1000;
  };

  return {
    openWindows,
    minimizedWindows,
    openWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    bringToFront,
    isWindowOpen,
    getWindowZIndex,
  };
};

export default useWindowManager;