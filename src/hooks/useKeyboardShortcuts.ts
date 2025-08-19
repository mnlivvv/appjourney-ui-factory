import { useEffect } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

interface ShortcutMap {
  [key: string]: KeyHandler;
}

const useKeyboardShortcuts = (shortcuts: ShortcutMap) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Create a key identifier based on modifiers and key
      const modifiers = [
        event.ctrlKey ? 'Ctrl' : '',
        event.altKey ? 'Alt' : '',
        event.shiftKey ? 'Shift' : '',
        event.metaKey ? 'Meta' : ''
      ].filter(Boolean).join('+');
      
      const key = event.key.toLowerCase();
      const keyWithModifiers = modifiers ? `${modifiers}+${key}` : key;
      
      // Check if we have a handler for this key combination
      if (shortcuts[keyWithModifiers]) {
        shortcuts[keyWithModifiers](event);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

export default useKeyboardShortcuts;