// This utility detects when a user is navigating with a keyboard vs. mouse
// to show focus styles only when appropriate for accessibility

export const setupKeyboardFocus = (): void => {
  let isUsingKeyboard = false;

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Tab') {
      isUsingKeyboard = true;
      document.body.classList.add('keyboard-user');
    }
  };

  const handleMouseDown = (): void => {
    isUsingKeyboard = false;
    document.body.classList.remove('keyboard-user');
  };

  // Add event listeners
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('mousedown', handleMouseDown);
};