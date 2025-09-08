import '../styles/FocusToggle.css';

interface FocusToggleProps {
  focusMode: boolean;
  onToggle: () => void;
}

export const FocusToggle = ({ focusMode, onToggle }: FocusToggleProps) => {
  return (
    <button 
      className={`focus-toggle ${focusMode ? 'active' : ''}`}
      onClick={onToggle}
      aria-label={focusMode ? 'Exit focus mode' : 'Enter focus mode'}
      title={focusMode ? 'Exit focus mode' : 'Enter focus mode'}
    >
      {focusMode ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 13.5L13.5 4.5M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3.75V14.25M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
};