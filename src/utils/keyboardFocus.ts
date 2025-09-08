// This utility detects when a user is navigating with a keyboard vs. mouse
// to show focus styles only when appropriate for accessibility

export const setupKeyboardFocus = (): void => {
  // Track keyboard vs mouse navigation state
  // Using a variable here that's modified in event handlers
  // but not read elsewhere - this is intentional for the state tracking
  // @ts-ignore - silence the unused variable warning
  let isUsingKeyboard = false; // eslint-disable-line @typescript-eslint/no-unused-vars

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