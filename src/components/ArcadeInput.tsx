import { InputHTMLAttributes } from 'react';
import './ArcadeInput.css';

interface ArcadeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const ArcadeInput = ({ 
  label,
  className = '',
  ...props 
}: ArcadeInputProps) => {
  return (
    <div className="arcade-input-container">
      {label && <label className="arcade-input-label">{label}</label>}
      <input 
        className={`arcade-input ${className}`}
        {...props} 
      />
    </div>
  );
};

export default ArcadeInput;