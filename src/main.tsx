import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { setupKeyboardFocus } from './utils/keyboardFocus';

// Initialize keyboard focus detection for accessibility
setupKeyboardFocus();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
